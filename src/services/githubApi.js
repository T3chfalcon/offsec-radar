// Enhanced GitHub API Service for security tool discovery
// Uses public GitHub API (60 requests per hour limit)

class GitHubApiService {
  constructor() {
    this.baseUrl = 'https://api.github.com';
    this.headers = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'OffSecRadar/1.0',
    };
  }

  // Search for security tools on GitHub with optimized public API usage
  async searchSecurityTools(query = '', filters = {}) {
    const searchQuery = this.buildSearchQuery(query, filters);
    const apiUrl = `${this.baseUrl}/search/repositories?q=${searchQuery}&sort=stars&order=desc&per_page=100`;
    
    try {
      console.log('🔍 Searching GitHub with public API...');
      console.log('📡 API URL:', apiUrl);
      console.log('📋 Headers:', this.headers);
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: this.headers,
        mode: 'cors'
      });

      console.log('📊 Response status:', response.status);
      console.log('📊 Response ok:', response.ok);

      if (!response.ok) {
        if (response.status === 403) {
          console.warn('⚠️ GitHub API rate limit exceeded. Using local database.');
          throw new Error('Rate limit exceeded');
        }
        const errorText = await response.text();
        console.error('❌ API Error Response:', errorText);
        throw new Error(`GitHub API error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const data = await response.json();
      console.log('✅ GitHub API success:', data.total_count, 'total repos,', data.items?.length, 'tools returned');

      if (data.items && data.items.length > 0) {
        console.log('🔧 Transforming tools:', data.items.map(item => item.name).join(', '));
        const transformedTools = this.transformRepositoryData(data.items);
        console.log('✅ Final tools count:', transformedTools.length);
        return transformedTools;
      } else {
        throw new Error('No tools found in response');
      }
    } catch (error) {
      console.error('❌ GitHub API failed:', error.message);
      console.error('❌ Full error:', error);
      throw error;
    }
  }

  // Build broader search query for more diverse results
  buildBroaderSearchQuery(query) {
    const broaderTerms = [
      'security', 'penetration', 'testing', 'cybersecurity', 'hacking', 
      'vulnerability', 'exploit', 'scanner', 'forensics', 'malware', 
      'analysis', 'osint', 'reconnaissance', 'enumeration', 'payload',
      'backdoor', 'reverse-engineering', 'cryptography', 'steganography',
      'wireless', 'network', 'web-security', 'mobile-security', 'iot-security',
      'threat-hunting', 'incident-response', 'digital-forensics', 'memory-analysis',
      'packet-analysis', 'log-analysis', 'social-engineering', 'phishing',
      'red-team', 'blue-team', 'purple-team', 'ctf', 'bug-bounty'
    ];
    
    let searchQuery = query ? `${query} ` : '';
    searchQuery += broaderTerms.slice(0, 10).join('+'); // Use first 10 terms to avoid query length limits
    
    return encodeURIComponent(searchQuery);
  }

  // Calculate popularity score for better sorting
  calculatePopularityScore(repo) {
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;
    const watchers = repo.watchers_count || 0;
    const issues = repo.open_issues_count || 0;
    
    // Recent activity bonus
    const lastUpdate = new Date(repo.updated_at);
    const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
    const recentBonus = Math.max(0, 50 - daysSinceUpdate);
    
    // Diversity bonus for different programming languages
    const languageBonus = this.getLanguageBonus(repo.language);
    
    // Popularity score formula - adjusted to include smaller projects
    return (stars * 2) + (forks * 1.5) + watchers + Math.max(0, 30 - issues) + recentBonus + languageBonus;
  }

  // Give bonus points for diverse programming languages
  getLanguageBonus(language) {
    const languageBonuses = {
      'Python': 15,
      'Go': 12,
      'Rust': 10,
      'C': 8,
      'C++': 8,
      'JavaScript': 6,
      'Shell': 5,
      'PowerShell': 5,
      'Ruby': 4,
      'Java': 4,
      'C#': 3
    };
    return languageBonuses[language] || 2; // Small bonus for any language
  }

  // Build search query with filters
  buildSearchQuery(query, filters = {}) {
    // Simple search that stays within GitHub's 5 operator limit
    let searchQuery = '';
    
    if (query) {
      // User provided search term
      searchQuery = query;
    } else {
      // Use broad terms that capture most security tools without exceeding operator limit
      // Maximum 4 OR operators (5 terms total) to stay within GitHub's limit
      searchQuery = 'security OR pentest OR vulnerability OR scanner OR forensics';
    }

    // Only add additional filters if specifically requested
    if (filters.minStars && filters.minStars > 0) {
      searchQuery += ` stars:>=${filters.minStars}`;
    }

    if (filters.language) {
      searchQuery += ` language:${filters.language}`;
    }

    if (filters.updatedAfter) {
      searchQuery += ` pushed:>=${filters.updatedAfter}`;
    }

    if (filters.topics && filters.topics.length > 0) {
      filters.topics.forEach(topic => {
        searchQuery += ` topic:${topic}`;
      });
    }

    console.log('🔍 GitHub search query:', searchQuery);
    return encodeURIComponent(searchQuery);
  }

  // Transform GitHub repository data to our format
  transformRepositoryData(repositories) {
    return repositories.map(repo => ({
      id: repo.id,
      name: repo.name,
      author: repo.owner.login,
      description: repo.description || 'No description available',
      image: repo.owner.avatar_url,
      icon: this.getIconForRepo(repo),
      category: this.getCategoryForRepo(repo), // Add proper category assignment
      tags: this.extractTags(repo),
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      contributors: 0, // Would need additional API call
      rating: this.calculateRating(repo),
      reviews: 0, // Would need community system
      language: repo.language || 'Unknown',
      platform: 'Cross-platform', // Would need to analyze repo
      maturity: this.determineMaturity(repo),
      lastUpdated: new Date(repo.updated_at),
      githubUrl: repo.html_url,
      documentationUrl: this.findDocumentationUrl(repo),
      trending: this.isTrending(repo),
      securityVerified: this.isSecurityVerified(repo),
      issues: repo.open_issues_count,
      pullRequests: 0, // Would need additional API call
      discussions: 0, // Would need additional API call
      license: repo.license?.name || 'Unknown',
      size: this.formatSize(repo.size),
      dependencies: 0, // Would need to analyze package files
      lastAudit: null // Would need security scanning
    }));
  }

  // Determine category for repository based on name, description, and topics
  getCategoryForRepo(repo) {
    const name = repo.name.toLowerCase();
    const description = (repo.description || '').toLowerCase();
    const topics = (repo.topics || []).join(' ').toLowerCase();
    const content = `${name} ${description} ${topics}`;

    // Network Security
    if (content.includes('nmap') || content.includes('masscan') || content.includes('port scan') || 
        content.includes('network') && (content.includes('scan') || content.includes('discover'))) {
      return 'Network Security';
    }

    // Web Security
    if (content.includes('burp') || content.includes('web') && (content.includes('vulnerab') || content.includes('scan')) ||
        content.includes('sql injection') || content.includes('sqlmap') || content.includes('xss') ||
        content.includes('web application') || content.includes('directory-buster') ||
        content.includes('nikto') || content.includes('wpscan')) {
      return 'Web Security';
    }

    // Penetration Testing
    if (content.includes('metasploit') || content.includes('exploit') || content.includes('penetration') ||
        content.includes('pentest') || content.includes('payload') || content.includes('backdoor') ||
        content.includes('social engineer') || content.includes('red team') || content.includes('post-exploitation')) {
      return 'Penetration Testing';
    }

    // OSINT
    if (content.includes('osint') || content.includes('reconnaissance') || content.includes('recon') ||
        content.includes('theharvester') || content.includes('sherlock') || content.includes('shodan') ||
        content.includes('maltego') || content.includes('gathering') || content.includes('footprint') ||
        content.includes('information gathering') || content.includes('subdomain') && content.includes('find')) {
      return 'OSINT';
    }

    // Malware Analysis
    if (content.includes('malware') || content.includes('forensic') || content.includes('volatility') ||
        content.includes('yara') || content.includes('reverse engineer') || content.includes('binwalk') ||
        content.includes('analysis') && (content.includes('binary') || content.includes('file')) ||
        content.includes('disassemb') || content.includes('autopsy') || content.includes('memory analysis')) {
      return 'Malware Analysis';
    }

    // Password Security
    if (content.includes('hashcat') || content.includes('john') || content.includes('hydra') ||
        content.includes('password') && (content.includes('crack') || content.includes('brute')) ||
        content.includes('hash') && content.includes('crack') || content.includes('wordlist')) {
      return 'Password Security';
    }

    // Wireless Security
    if (content.includes('aircrack') || content.includes('wifi') || content.includes('wireless') ||
        content.includes('wpa') || content.includes('wep') || content.includes('bluetooth')) {
      return 'Wireless Security';
    }

    // Network Analysis
    if (content.includes('wireshark') || content.includes('packet') || content.includes('tcpdump') ||
        content.includes('network analysis') || content.includes('traffic analysis') ||
        content.includes('protocol analy')) {
      return 'Network Analysis';
    }

    // Vulnerability Scanning
    if (content.includes('nuclei') || content.includes('openvas') || content.includes('nessus') ||
        content.includes('vulnerability') && content.includes('scan') || content.includes('vuln scan') ||
        content.includes('security scan')) {
      return 'Vulnerability Scanning';
    }

    // Default fallback
    return 'Network Security'; // Default category for unclassified security tools
  }

  // Get appropriate icon for repository
  getIconForRepo(repo) {
    const name = repo.name.toLowerCase();
    const description = (repo.description || '').toLowerCase();
    
    if (name.includes('nmap') || description.includes('network')) return 'Network';
    if (name.includes('burp') || description.includes('web')) return 'Globe';
    if (name.includes('wireshark') || description.includes('packet')) return 'Activity';
    if (name.includes('metasploit') || description.includes('exploit')) return 'Zap';
    if (name.includes('sqlmap') || description.includes('sql')) return 'Database';
    if (name.includes('hashcat') || description.includes('password')) return 'Key';
    if (name.includes('aircrack') || description.includes('wifi')) return 'Wifi';
    if (name.includes('recon') || description.includes('osint')) return 'Eye';
    
    return 'Shield'; // Default security icon
  }

  // Extract tags from repository
  extractTags(repo) {
    const tags = [];
    const name = repo.name.toLowerCase();
    const description = (repo.description || '').toLowerCase();
    const topics = repo.topics || [];

    // Add topics as tags
    tags.push(...topics);

    // Add language-based tags
    if (repo.language) {
      tags.push(`${repo.language} Language`);
    }

    // Add category-based tags
    if (description.includes('network') || name.includes('network')) {
      tags.push('Network Security');
    }
    if (description.includes('web') || name.includes('web')) {
      tags.push('Web Security');
    }
    if (description.includes('penetration') || description.includes('pentest')) {
      tags.push('Penetration Testing');
    }
    if (description.includes('vulnerability') || description.includes('vuln')) {
      tags.push('Vulnerability Assessment');
    }
    if (description.includes('forensic') || description.includes('forensics')) {
      tags.push('Digital Forensics');
    }

    return tags.slice(0, 5); // Limit to 5 tags
  }

  // Calculate rating based on repository metrics
  calculateRating(repo) {
    let rating = 3.0; // Base rating

    // Add points for stars
    if (repo.stargazers_count > 1000) rating += 1.0;
    else if (repo.stargazers_count > 100) rating += 0.5;

    // Add points for recent activity
    const lastUpdate = new Date(repo.updated_at);
    const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
    if (daysSinceUpdate < 30) rating += 0.5;
    else if (daysSinceUpdate < 90) rating += 0.2;

    // Add points for good documentation
    if (repo.description && repo.description.length > 50) rating += 0.3;

    // Add points for license
    if (repo.license) rating += 0.2;

    return Math.min(5.0, Math.max(1.0, rating));
  }

  // Determine tool maturity
  determineMaturity(repo) {
    const stars = repo.stargazers_count;
    const forks = repo.forks_count;
    const lastUpdate = new Date(repo.updated_at);
    const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);

    if (stars > 5000 && forks > 500 && daysSinceUpdate < 30) return 'production';
    if (stars > 1000 && forks > 100 && daysSinceUpdate < 90) return 'stable';
    if (stars > 100 && forks > 10) return 'beta';
    return 'alpha';
  }

  // Find documentation URL
  findDocumentationUrl(repo) {
    // This would need to analyze the repository for documentation
    // For now, return null
    return null;
  }

  // Check if repository is trending - VERY restrictive for extraordinary tools only
  isTrending(repo) {
    const lastUpdate = new Date(repo.updated_at);
    const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;
    const repoName = repo.name.toLowerCase();
    const repoOwner = repo.owner.login.toLowerCase();
    
    // Extremely restrictive criteria - only for exceptional tools
    const isVeryPopular = stars > 5000; // Must have significant community
    const isActivelyMaintained = daysSinceUpdate < 30; // Very recent activity
    const hasStrongCommunity = forks > 500; // High fork count indicates real adoption
    
    // Additional criteria for exceptional tools
    const isExceptionalTool = [
      'metasploit-framework', 'nuclei', 'burp-extensions', 'sqlmap',
      'nmap', 'aircrack-ng', 'hashcat', 'wireshark', 'volatility',
      'radare2', 'ghidra', 'theharvester', 'sherlock', 'subfinder'
    ].includes(repoName);
    
    const isTopSecurityOrg = [
      'rapid7', 'projectdiscovery', 'nmap', 'sqlmapproject', 
      'portswigger', 'zaproxy', 'owasp'
    ].includes(repoOwner);
    
    // Must meet all criteria AND be exceptional
    return isActivelyMaintained && isVeryPopular && hasStrongCommunity && 
           (isExceptionalTool || isTopSecurityOrg);
  }

  // Check if repository is security verified - EXTREMELY restrictive for trusted tools only
  isSecurityVerified(repo) {
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;
    const repoName = repo.name.toLowerCase();
    const repoOwner = repo.owner.login.toLowerCase();
    
    // List of ONLY the most trusted, established security tools
    const trustedTools = [
      'metasploit-framework', 'nmap', 'sqlmap', 'nuclei', 'wireshark',
      'hashcat', 'john', 'aircrack-ng', 'volatility', 'yara',
      'radare2', 'theharvester', 'sherlock', 'masscan', 'amass',
      'subfinder', 'gobuster', 'ffuf', 'hydra', 'nikto', 'wpscan'
    ];
    
    const trustedOrganizations = [
      'rapid7', 'nmap', 'sqlmapproject', 'projectdiscovery', 
      'wireshark', 'hashcat', 'openwall', 'aircrack-ng',
      'volatilityfoundation', 'virustotal', 'radareorg'
    ];
    
    // EXTREMELY strict criteria - must be well-known AND highly adopted
    const isTrustedTool = trustedTools.includes(repoName);
    const isTrustedOrg = trustedOrganizations.includes(repoOwner);
    const isHighlyAdopted = stars > 5000 && forks > 500; // Very high thresholds
    const hasLicense = repo.license && repo.license.name;
    const hasDescription = repo.description && repo.description.length > 50;
    
    // Must be in trusted list OR be extremely popular AND meet quality criteria
    return hasLicense && hasDescription && (
      isTrustedTool || 
      isTrustedOrg || 
      (isHighlyAdopted && stars > 10000) // Only extremely popular tools outside trusted list
    );
  }

  // Format repository size
  formatSize(sizeInKB) {
    if (sizeInKB > 1024) {
      return `${(sizeInKB / 1024).toFixed(1)} MB`;
    }
    return `${sizeInKB} KB`;
  }

  // Get repository details
  async getRepositoryDetails(owner, repo) {
    try {
      const response = await fetch(`${this.baseUrl}/repos/${owner}/${repo}`, {
        headers: this.headers
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();
      return this.transformRepositoryData([data])[0];
    } catch (error) {
      console.error('Error fetching repository details:', error);
      throw error;
    }
  }

  // Get trending security tools
  async getTrendingTools() {
    try {
      const filters = {
        minStars: 50, // Significantly reduced from 500 to include more tools
        updatedAfter: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // Last 60 days
      };

      const tools = await this.searchSecurityTools('', filters);
      
      // If we get tools, return them sorted by popularity
      if (tools && tools.length > 0) {
        // Further filter for trending tools (recent activity + reasonable popularity)
        const trendingTools = tools.filter(tool => {
          const daysSinceUpdate = (Date.now() - new Date(tool.lastUpdated).getTime()) / (1000 * 60 * 60 * 24);
          return daysSinceUpdate < 60 && tool.stars > 20; // Much lower threshold
        });
        
        return trendingTools.length > 0 ? trendingTools : tools.slice(0, 15);
      }
      
      // If no tools returned, throw error to trigger fallback
      throw new Error('No trending tools found');
    } catch (error) {
      console.error('Error fetching trending tools:', error);
      
      // Return enhanced fallback data with more diverse tools
      return [
        {
          id: 'fallback-1',
          name: 'Metasploit Framework',
          author: 'rapid7',
          description: 'The world\'s most used penetration testing framework. Advanced platform for developing, testing, and executing exploit code.',
          image: '/assets/images/no_image.png',
          icon: 'Zap',
          tags: ['Penetration Testing', 'Exploit Development', 'Vulnerability Assessment', 'Red Team', 'Security Research'],
          stars: 33500,
          forks: 13800,
          contributors: 892,
          rating: 4.8,
          reviews: 2156,
          language: 'Ruby',
          platform: 'Cross-platform',
          maturity: 'production',
          lastUpdated: new Date(Date.now() - 86400000 * 1),
          githubUrl: 'https://github.com/rapid7/metasploit-framework',
          documentationUrl: 'https://docs.metasploit.com/',
          trending: true,
          securityVerified: true,
          issues: 234,
          pullRequests: 67,
          discussions: 445,
          license: 'BSD-3-Clause',
          size: '156.7 MB',
          dependencies: 245,
          lastAudit: '2024-01-20'
        },
        {
          id: 'fallback-2',
          name: 'SQLMap',
          author: 'sqlmapproject',
          description: 'Automatic SQL injection and database takeover tool. Penetration testing tool that automates the process of detecting and exploiting SQL injection flaws.',
          image: '/assets/images/no_image.png',
          icon: 'Database',
          tags: ['SQL Injection', 'Database Security', 'Penetration Testing', 'Web Security', 'Automated Testing'],
          stars: 31900,
          forks: 5800,
          contributors: 178,
          rating: 4.7,
          reviews: 1234,
          language: 'Python',
          platform: 'Cross-platform',
          maturity: 'production',
          lastUpdated: new Date(Date.now() - 86400000 * 2),
          githubUrl: 'https://github.com/sqlmapproject/sqlmap',
          documentationUrl: 'https://sqlmap.org/',
          trending: true,
          securityVerified: true,
          issues: 67,
          pullRequests: 15,
          discussions: 345,
          license: 'GPL-2.0',
          size: '12.3 MB',
          dependencies: 34,
          lastAudit: '2024-01-10'
        },
        {
          id: 'fallback-3',
          name: 'Nuclei',
          author: 'projectdiscovery',
          description: 'Fast and customizable vulnerability scanner based on simple YAML templates. Used for finding security issues across web applications.',
          image: '/assets/images/no_image.png',
          icon: 'Search',
          tags: ['Vulnerability Scanner', 'YAML Templates', 'Fast Scanning', 'Web Security', 'Automation'],
          stars: 18200,
          forks: 2400,
          contributors: 156,
          rating: 4.6,
          reviews: 847,
          language: 'Go',
          platform: 'Cross-platform',
          maturity: 'production',
          lastUpdated: new Date(Date.now() - 86400000 * 1),
          githubUrl: 'https://github.com/projectdiscovery/nuclei',
          documentationUrl: 'https://nuclei.projectdiscovery.io/',
          trending: true,
          securityVerified: true,
          issues: 45,
          pullRequests: 12,
          discussions: 89,
          license: 'MIT',
          size: '25.4 MB',
          dependencies: 8,
          lastAudit: '2024-01-15'
        },
        {
          id: 'fallback-4',
          name: 'Subfinder',
          author: 'projectdiscovery',
          description: 'Fast subdomain discovery tool that discovers valid subdomains for websites by using passive online sources.',
          image: '/assets/images/no_image.png',
          icon: 'Globe',
          tags: ['Subdomain Discovery', 'OSINT', 'Reconnaissance', 'Passive Scanning', 'Bug Bounty'],
          stars: 9200,
          forks: 1200,
          contributors: 45,
          rating: 4.5,
          reviews: 423,
          language: 'Go',
          platform: 'Cross-platform',
          maturity: 'production',
          lastUpdated: new Date(Date.now() - 86400000 * 3),
          githubUrl: 'https://github.com/projectdiscovery/subfinder',
          documentationUrl: 'https://github.com/projectdiscovery/subfinder',
          trending: true,
          securityVerified: true,
          issues: 12,
          pullRequests: 3,
          discussions: 56,
          license: 'MIT',
          size: '15.2 MB',
          dependencies: 23,
          lastAudit: '2024-01-18'
        },
        {
          id: 'fallback-5',
          name: 'Gobuster',
          author: 'OJ',
          description: 'Directory/File, DNS and VHost busting tool written in Go. Fast and efficient brute force tool.',
          image: '/assets/images/no_image.png',
          icon: 'Search',
          tags: ['Directory Busting', 'DNS Enumeration', 'VHost Discovery', 'Brute Force', 'Go'],
          stars: 8900,
          forks: 1100,
          contributors: 67,
          rating: 4.4,
          reviews: 345,
          language: 'Go',
          platform: 'Cross-platform',
          maturity: 'production',
          lastUpdated: new Date(Date.now() - 86400000 * 5),
          githubUrl: 'https://github.com/OJ/gobuster',
          documentationUrl: 'https://github.com/OJ/gobuster',
          trending: false,
          securityVerified: false,
          issues: 23,
          pullRequests: 8,
          discussions: 78,
          license: 'Apache-2.0',
          size: '8.7 MB',
          dependencies: 12,
          lastAudit: '2024-01-12'
        },
        {
          id: 'fallback-6',
          name: 'Amass',
          author: 'caffix',
          description: 'In-depth attack surface mapping and asset discovery. Network mapping for bug bounty and penetration testing.',
          image: '/assets/images/no_image.png',
          icon: 'Network',
          tags: ['Asset Discovery', 'Attack Surface Mapping', 'Network Enumeration', 'OSINT', 'Reconnaissance'],
          stars: 11200,
          forks: 1800,
          contributors: 89,
          rating: 4.3,
          reviews: 234,
          language: 'Go',
          platform: 'Cross-platform',
          maturity: 'production',
          lastUpdated: new Date(Date.now() - 86400000 * 7),
          githubUrl: 'https://github.com/caffix/amass',
          documentationUrl: 'https://github.com/caffix/amass',
          trending: false,
          securityVerified: true,
          issues: 34,
          pullRequests: 15,
          discussions: 123,
          license: 'Apache-2.0',
          size: '22.3 MB',
          dependencies: 34,
          lastAudit: '2024-01-08'
        },
        {
          id: 'fallback-7',
          name: 'FFuF',
          author: 'ffuf',
          description: 'Fast web fuzzer written in Go. High-performance fuzzing tool for web application testing.',
          image: '/assets/images/no_image.png',
          icon: 'Zap',
          tags: ['Web Fuzzing', 'Fast Scanning', 'Directory Discovery', 'Parameter Testing', 'Go'],
          stars: 11800,
          forks: 1300,
          contributors: 45,
          rating: 4.5,
          reviews: 567,
          language: 'Go',
          platform: 'Cross-platform',
          maturity: 'production',
          lastUpdated: new Date(Date.now() - 86400000 * 4),
          githubUrl: 'https://github.com/ffuf/ffuf',
          documentationUrl: 'https://github.com/ffuf/ffuf',
          trending: true,
          securityVerified: false,
          issues: 18,
          pullRequests: 5,
          discussions: 67,
          license: 'MIT',
          size: '12.1 MB',
          dependencies: 8,
          lastAudit: '2024-01-14'
        },
        {
          id: 'fallback-8',
          name: 'Hydra',
          author: 'vanhauser-thc',
          description: 'Very fast network logon cracker which supports many different services. Password brute force tool.',
          image: '/assets/images/no_image.png',
          icon: 'Key',
          tags: ['Password Cracking', 'Brute Force', 'Network Services', 'Login Testing', 'Authentication'],
          stars: 8600,
          forks: 1600,
          contributors: 78,
          rating: 4.2,
          reviews: 423,
          language: 'C',
          platform: 'Linux/Unix',
          maturity: 'production',
          lastUpdated: new Date(Date.now() - 86400000 * 6),
          githubUrl: 'https://github.com/vanhauser-thc/thc-hydra',
          documentationUrl: 'https://github.com/vanhauser-thc/thc-hydra',
          trending: false,
          securityVerified: true,
          issues: 45,
          pullRequests: 12,
          discussions: 89,
          license: 'AGPL-3.0',
          size: '5.8 MB',
          dependencies: 15,
          lastAudit: '2024-01-11'
        }
      ];
    }
  }
}

export default new GitHubApiService(); 