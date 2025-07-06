import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TrendingToolsCarousel from './components/TrendingToolsCarousel';
import Icon from '../../components/AppIcon';
import githubApi from '../../services/githubApi';

const IntelligenceDashboardHomepage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [trendingTools, setTrendingTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Real stats from GitHub API
  const [heroStats, setHeroStats] = useState([
    {
      icon: "Radar",
      value: "Loading...",
      label: "Tools Discovered",
      change: "Connecting to GitHub"
    },
    {
      icon: "Activity",
      value: "Loading...",
      label: "Active Repositories",
      change: "Fetching data"
    },
    {
      icon: "Users",
      value: "Loading...",
      label: "Community Members",
      change: "Building community"
    }
  ]);

  // Fetch trending tools from GitHub API
  useEffect(() => {
    const fetchTrendingTools = async () => {
      try {
        setIsLoading(true);
        const tools = await githubApi.getTrendingTools();
        setTrendingTools(tools.slice(0, 6)); // Show top 6 tools
        
        // Update hero stats with real data
        if (tools.length > 0) {
          setHeroStats([
            {
              icon: "Radar",
              value: tools.length.toString(),
              label: "Tools Discovered",
              change: "From GitHub API"
            },
            {
              icon: "Activity",
              value: tools.reduce((sum, tool) => sum + tool.stars, 0).toLocaleString(),
              label: "Total Stars",
              change: "Community validated"
            },
            {
              icon: "Users",
              value: tools.reduce((sum, tool) => sum + tool.forks, 0).toLocaleString(),
              label: "Total Forks",
              change: "Active development"
            }
          ]);
        }
      } catch (err) {
        console.error('Error fetching trending tools:', err);
        setError('Failed to load tools from GitHub');
        
        // Set meaningful fallback hero stats when API fails
        setHeroStats([
          {
            icon: "Radar",
            value: "500+",
            label: "Tools Discovered",
            change: "Community curated"
          },
          {
            icon: "Activity", 
            value: "2.5M+",
            label: "Total Stars",
            change: "Community validated"
          },
          {
            icon: "Users",
            value: "150K+", 
            label: "Total Forks",
            change: "Active development"
          }
        ]);
        
        // Fallback to mock data if API fails
        setTrendingTools([
          {
            id: 1,
            name: "Nmap",
            author: "nmap",
            description: "Network discovery and security auditing tool.",
            stars: "8.5k",
            forks: "2.3k",
      language: "C++",
            languageColor: "bg-blue-500",
            categoryIcon: "Network",
            categoryColor: "bg-red-500",
      activity: "Very High",
      activityColor: "bg-red-100 text-red-800",
      isNew: false
    },
    {
            id: 2,
            name: "Metasploit Framework",
            author: "rapid7",
            description: "Advanced penetration testing platform.",
            stars: "31.2k",
            forks: "13.6k",
            language: "Ruby",
            languageColor: "bg-red-500",
            categoryIcon: "Zap",
            categoryColor: "bg-purple-500",
            activity: "Very High",
            activityColor: "bg-red-100 text-red-800",
      isNew: false
    }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingTools();
  }, []);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Navigate to tool discovery page with search query
    window.location.href = `/tool-arsenal-discovery?search=${encodeURIComponent(query)}`;
  };

  return (
    <>
      <Helmet>
        <title>OffSec Radar - Open Source Security Tool Discovery Platform</title>
        <meta name="description" content="Discover the best open-source security tools from GitHub's ecosystem. Professional cybersecurity tool discovery platform for penetration testers, red team operators, blue team defenders, and security researchers. Find vulnerability scanners, penetration testing frameworks, OSINT tools, and more." />
        <meta name="keywords" content="cybersecurity tools, penetration testing, red team tools, blue team tools, OSINT, malware analysis, vulnerability assessment, GitHub security, open source security, security research, ethical hacking tools" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="OffSec Radar - Professional Security Tool Discovery Platform" />
        <meta property="og:description" content="Discover the security tools that matter. Professional cybersecurity tool discovery platform powered by GitHub's ecosystem. Find the best penetration testing tools, vulnerability scanners, and security frameworks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://offsecradar.com/" />
        <meta property="og:image" content="https://offsecradar.com/assets/images/offsec-radar-homepage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="OffSec Radar - Security Tool Discovery Platform Dashboard" />
        <meta property="og:site_name" content="OffSec Radar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OffsecRadar" />
        <meta name="twitter:creator" content="@OffsecRadar" />
        <meta name="twitter:title" content="OffSec Radar - Professional Security Tool Discovery" />
        <meta name="twitter:description" content="Discover the best open-source security tools from GitHub. Professional platform for cybersecurity professionals." />
        <meta name="twitter:image" content="https://offsecradar.com/assets/images/offsec-radar-homepage.png" />
        <meta name="twitter:image:alt" content="OffSec Radar Dashboard showing trending security tools" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://offsecradar.com/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "OffSec Radar",
              "description": "Professional cybersecurity tool discovery platform",
              "url": "https://offsecradar.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://offsecradar.com/tool-arsenal-discovery?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection
            onSearch={handleSearch}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            stats={heroStats}
          />
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
                <p className="text-text-secondary">Loading tools from GitHub...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <Icon name="AlertTriangle" size={48} className="text-red-500 mx-auto mb-4" />
                <p className="text-text-secondary">{error}</p>
                <p className="text-text-secondary text-sm mt-2">Using fallback data</p>
              </div>
            </div>
          ) : (
          <TrendingToolsCarousel tools={trendingTools} />
          )}
        </main>
      </div>
    </>
  );
};

export default IntelligenceDashboardHomepage;