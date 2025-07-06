import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ModernFilterSidebar from './components/ModernFilterSidebar';
import SearchHeader from './components/SearchHeader';
import ToolCard from './components/ToolCard';
import ToolTable from './components/ToolTable';
import ComparisonModal from './components/ComparisonModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { securityTools } from '../../data/securityTools';
import githubApi from '../../services/githubApi';

const ToolArsenalDiscovery = () => {
  const [filters, setFilters] = useState({
    search: '',
    categories: [],
    languages: [],
    popularity: [],
    features: []
  });
  
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedTools, setSelectedTools] = useState([]);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [tools, setTools] = useState([]);
  const [error, setError] = useState(null);

  const toolsPerPage = 12;

  // Initialize tools from our database
  useEffect(() => {
    const initializeTools = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Get search query from URL if present
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search') || '';
        
        if (searchQuery) {
          setFilters(prev => ({ ...prev, search: searchQuery }));
        }
        
        // Try to fetch from GitHub API first, fallback to our database
        try {
          const fetchedTools = await githubApi.searchSecurityTools(searchQuery);
          if (fetchedTools && fetchedTools.length > 0) {
            setTools(fetchedTools);
          } else {
            setTools(securityTools);
          }
        } catch (apiError) {
          console.warn('GitHub API failed, using local database:', apiError);
          setTools(securityTools);
        }
      } catch (err) {
        console.error('Error initializing tools:', err);
        setError('Failed to load tools. Using local database.');
        setTools(securityTools);
      } finally {
        setIsLoading(false);
      }
    };

    initializeTools();
  }, []);

  // Filter and sort tools
  const filteredAndSortedTools = useMemo(() => {
    let filtered = tools.filter(tool => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          tool.name.toLowerCase().includes(searchLower) ||
          tool.description.toLowerCase().includes(searchLower) ||
          tool.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          tool.author.toLowerCase().includes(searchLower) ||
          tool.category.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        const toolCategoryId = tool.category.toLowerCase().replace(/\s+/g, '-');
        if (!filters.categories.includes(toolCategoryId)) return false;
      }

      // Language filter
      if (filters.languages.length > 0) {
        const hasMatchingLanguage = filters.languages.some(lang => {
          switch (lang) {
            case 'python':
              return tool.language === 'Python';
            case 'go':
              return tool.language === 'Go';
            case 'rust':
              return tool.language === 'Rust';
            case 'javascript':
              return tool.language === 'JavaScript';
            case 'c-cpp':
              return ['C', 'C++'].includes(tool.language);
            case 'java':
              return tool.language === 'Java';
            case 'bash':
              return tool.language === 'Shell' || tool.language === 'Bash';
            default:
              return false;
          }
        });
        if (!hasMatchingLanguage) return false;
      }

      // Popularity filter
      if (filters.popularity.length > 0) {
        const hasMatchingPopularity = filters.popularity.some(pop => {
          switch (pop) {
            case 'trending':
              return tool.trending;
            case 'most-starred':
              return tool.stars > 10000;
            case 'recently-updated':
              const daysSinceUpdate = (Date.now() - new Date(tool.lastUpdated).getTime()) / (1000 * 60 * 60 * 24);
              return daysSinceUpdate < 30;
            case 'verified':
              return tool.securityVerified;
            default:
              return false;
          }
        });
        if (!hasMatchingPopularity) return false;
      }

      // Features filter
      if (filters.features.length > 0) {
        const hasMatchingFeature = filters.features.some(feature => {
          switch (feature) {
            case 'cli-tool':
              return tool.tags.some(tag => tag.toLowerCase().includes('cli') || tag.toLowerCase().includes('command'));
            case 'gui-tool':
              return tool.tags.some(tag => tag.toLowerCase().includes('gui') || tool.platform.includes('Windows'));
            case 'web-based':
              return tool.tags.some(tag => tag.toLowerCase().includes('web'));
            case 'cross-platform':
              return tool.platform.includes('Cross-platform') || tool.platform.includes('/');
            default:
              return false;
          }
        });
        if (!hasMatchingFeature) return false;
      }

      return true;
    });

    // Sort tools
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return b.stars - a.stars;
        case 'recent':
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        case 'name':
          return a.name.localeCompare(b.name);

        case 'trending':
          if (a.trending && !b.trending) return -1;
          if (!a.trending && b.trending) return 1;
          return b.stars - a.stars;
        default:
          // Relevance sort - trending first, then by stars
          if (a.trending && !b.trending) return -1;
          if (!a.trending && b.trending) return 1;
          return b.stars - a.stars;
      }
    });

    return filtered;
  }, [tools, filters, sortBy]);

  // Paginate tools
  const paginatedTools = useMemo(() => {
    const startIndex = (currentPage - 1) * toolsPerPage;
    return filteredAndSortedTools.slice(startIndex, startIndex + toolsPerPage);
  }, [filteredAndSortedTools, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedTools.length / toolsPerPage);

  const handleFilterChange = (category, value, checked) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      
      if (category === 'search') {
        newFilters[category] = value;
      } else {
        if (checked) {
          if (Array.isArray(newFilters[category])) {
            newFilters[category] = [...newFilters[category], value];
          } else {
            newFilters[category] = [value];
          }
        } else {
          if (Array.isArray(newFilters[category])) {
            newFilters[category] = newFilters[category].filter(item => item !== value);
          }
        }
      }
      
      return newFilters;
    });
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      categories: [],
      languages: [],
      popularity: [],
      features: []
    });
    setCurrentPage(1);
  };

  const handleShare = (tool) => {
    if (navigator.share) {
      navigator.share({
        title: tool.name,
        text: tool.description,
        url: tool.githubUrl
      });
    } else {
      navigator.clipboard.writeText(tool.githubUrl);
      // You could show a toast notification here
    }
  };

  const handleSelectTool = (toolId, checked) => {
    setSelectedTools(prev => 
      checked 
        ? [...prev, toolId]
        : prev.filter(id => id !== toolId)
    );
  };

  const handleSelectAll = (checked) => {
    setSelectedTools(checked ? paginatedTools.map(tool => tool.id) : []);
  };

  const handleCompare = (toolIds) => {
    if (Array.isArray(toolIds)) {
      setSelectedTools(toolIds);
    }
    setIsComparisonModalOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Security Tool Discovery - OffSec Radar | Find the Best GitHub Security Tools</title>
        <meta name="description" content="Discover and explore the best open-source security tools from GitHub. Filter by category, language, and features. Find penetration testing frameworks, vulnerability scanners, OSINT tools, malware analysis tools, and more. Professional cybersecurity tool discovery platform." />
        <meta name="keywords" content="security tools discovery, GitHub security tools, penetration testing tools, vulnerability scanners, OSINT tools, malware analysis, red team tools, blue team tools, cybersecurity frameworks, security research tools" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Security Tool Discovery - OffSec Radar" />
        <meta property="og:description" content="Discover and explore the best open-source security tools from GitHub's ecosystem. Filter by category, language, and features. Professional cybersecurity tool discovery platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://offsecradar.com/tool-arsenal-discovery" />
        <meta property="og:image" content="https://offsecradar.com/assets/images/offsec-radar-tools.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="OffSec Radar Tool Discovery Page showing security tools grid" />
        <meta property="og:site_name" content="OffSec Radar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OffsecRadar" />
        <meta name="twitter:creator" content="@OffsecRadar" />
        <meta name="twitter:title" content="Security Tool Discovery - OffSec Radar" />
        <meta name="twitter:description" content="Discover the best open-source security tools from GitHub. Filter by category, language, and features." />
        <meta name="twitter:image" content="https://offsecradar.com/assets/images/offsec-radar-tools.png" />
        <meta name="twitter:image:alt" content="Security tools discovery interface showing filtering options" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://offsecradar.com/tool-arsenal-discovery" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Security Tool Discovery",
              "description": "Discover and explore the best open-source security tools from GitHub",
              "url": "https://offsecradar.com/tool-arsenal-discovery",
              "mainEntity": {
                "@type": "ItemList",
                "name": "Security Tools",
                "description": "Curated list of open-source security tools from GitHub",
                "numberOfItems": "${filteredAndSortedTools.length}"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="pt-16">
          <SearchHeader
            searchQuery={filters.search}
            onSearchChange={(value) => setFilters(prev => ({ ...prev, search: value }))}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalTools={filteredAndSortedTools.length}
            filteredTools={paginatedTools.length}
            selectedTools={selectedTools}
            onCompareSelected={() => handleCompare(selectedTools)}
            onFilterToggle={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filter Sidebar */}
              <div className="lg:w-80 lg:flex-shrink-0">
                <ModernFilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  isOpen={isFilterSidebarOpen}
                  onToggle={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
                />
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                {isLoading ? (
                  <div className="flex justify-center items-center py-20">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading security tools...</p>
                    </div>
                  </div>
                ) : error ? (
                  <div className="flex justify-center items-center py-20">
                    <div className="text-center">
                      <Icon name="AlertTriangle" size={48} className="text-red-500 mx-auto mb-4" />
                      <p className="text-gray-600">{error}</p>
                      <p className="text-gray-500 text-sm mt-2">Showing local database</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Results Summary */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between">
                        <p className="text-gray-600">
                          Showing <span className="font-semibold">{paginatedTools.length}</span> of{' '}
                          <span className="font-semibold">{filteredAndSortedTools.length}</span> tools
                        </p>
                        {selectedTools.length > 0 && (
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleCompare(selectedTools)}
                            iconName="GitCompare"
                            iconSize={16}
                          >
                            Compare {selectedTools.length} tools
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Tool Grid/Table */}
                    {viewMode === 'grid' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {paginatedTools.map((tool) => (
                          <ToolCard
                            key={tool.id}
                            tool={tool}
                            isSelected={selectedTools.includes(tool.id)}
                            onShare={() => handleShare(tool)}
                            onSelect={(checked) => handleSelectTool(tool.id, checked)}
                          />
                        ))}
                      </div>
                    ) : (
                      <ToolTable
                        tools={paginatedTools}
                        selectedTools={selectedTools}
                        onSelectTool={handleSelectTool}
                        onSelectAll={handleSelectAll}
                        onShare={handleShare}
                      />
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center mt-12">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            iconName="ChevronLeft"
                            iconSize={16}
                          >
                            Previous
                          </Button>
                          
                          {[...Array(totalPages)].map((_, index) => {
                            const page = index + 1;
                            const isCurrent = page === currentPage;
                            const isNearCurrent = Math.abs(page - currentPage) <= 2;
                            
                            if (isCurrent || isNearCurrent || page === 1 || page === totalPages) {
                              return (
                                <Button
                                  key={page}
                                  variant={isCurrent ? "primary" : "outline"}
                                  size="sm"
                                  onClick={() => handlePageChange(page)}
                                  className={isCurrent ? "bg-accent text-white" : ""}
                                >
                                  {page}
                                </Button>
                              );
                            } else if (page === currentPage - 3 || page === currentPage + 3) {
                              return <span key={page} className="px-2 text-gray-500">...</span>;
                            }
                            return null;
                          })}
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            iconName="ChevronRight"
                            iconSize={16}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Comparison Modal */}
      {isComparisonModalOpen && (
        <ComparisonModal
          tools={tools.filter(tool => selectedTools.includes(tool.id))}
          onClose={() => setIsComparisonModalOpen(false)}
        />
      )}
    </>
  );
};

export default ToolArsenalDiscovery;