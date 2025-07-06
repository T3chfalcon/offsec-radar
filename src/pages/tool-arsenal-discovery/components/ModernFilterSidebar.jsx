import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { toolCategories } from '../../../data/securityTools';

const ModernFilterSidebar = ({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    languages: true,
    popularity: true,
    features: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterChange = (category, value, checked) => {
    onFilterChange(category, value, checked);
  };

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍', count: 45 },
    { id: 'go', name: 'Go', icon: '🔵', count: 32 },
    { id: 'javascript', name: 'JavaScript', icon: '🟨', count: 28 },
    { id: 'c-cpp', name: 'C/C++', icon: '⚡', count: 24 },
    { id: 'rust', name: 'Rust', icon: '🦀', count: 18 },
    { id: 'java', name: 'Java', icon: '☕', count: 16 },
    { id: 'bash', name: 'Bash/Shell', icon: '🐚', count: 22 }
  ];

  const popularityFilters = [
    { id: 'trending', name: 'Trending', icon: 'TrendingUp', count: 12 },
    { id: 'most-starred', name: 'Most Starred', icon: 'Star', count: 25 },
    { id: 'recently-updated', name: 'Recently Updated', icon: 'Clock', count: 18 },
    { id: 'verified', name: 'Security Verified', icon: 'ShieldCheck', count: 35 }
  ];

  const featureFilters = [
    { id: 'cli-tool', name: 'CLI Tool', icon: 'Terminal', count: 28 },
    { id: 'gui-tool', name: 'GUI Tool', icon: 'Monitor', count: 15 },
    { id: 'web-based', name: 'Web-based', icon: 'Globe', count: 12 },
    { id: 'cross-platform', name: 'Cross-platform', icon: 'Layers', count: 32 }
  ];

  const FilterChip = ({ label, count, isActive, onClick, icon, color = 'bg-primary-100' }) => (
    <button
      onClick={onClick}
      className={`
        group flex items-center justify-between w-full p-3 rounded-lg border-2 transition-all duration-200
        ${isActive 
          ? 'border-accent bg-accent/5 text-accent shadow-sm' 
          : 'border-transparent bg-gray-50 hover:bg-gray-100 hover:border-gray-200 text-gray-700'
        }
      `}
    >
      <div className="flex items-center space-x-3">
        {typeof icon === 'string' ? (
          <Icon name={icon} size={18} className={isActive ? 'text-accent' : 'text-gray-500'} />
        ) : (
          <span className="text-lg">{icon}</span>
        )}
        <span className="font-medium text-sm">{label}</span>
      </div>
      <span className={`
        px-2 py-1 text-xs font-medium rounded-full
        ${isActive ? 'bg-accent text-white' : 'bg-gray-200 text-gray-600'}
      `}>
        {count}
      </span>
    </button>
  );

  const CategoryCard = ({ category, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-xl p-4 border-2 transition-all duration-200 text-left w-full
        ${isActive 
          ? 'border-accent bg-accent/5 shadow-md' 
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
        }
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`
            w-10 h-10 rounded-lg flex items-center justify-center
            ${isActive ? 'bg-accent text-white' : `${category.color} text-white`}
          `}>
            <Icon name={category.icon} size={20} />
          </div>
          <div>
            <h3 className={`font-semibold text-sm ${isActive ? 'text-accent' : 'text-gray-800'}`}>
              {category.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{category.count} tools</p>
          </div>
        </div>
        <div className={`
          w-6 h-6 rounded-full border-2 flex items-center justify-center
          ${isActive ? 'border-accent bg-accent' : 'border-gray-300'}
        `}>
          {isActive && <Icon name="Check" size={14} className="text-white" />}
        </div>
      </div>
    </button>
  );

  const CollapsibleSection = ({ title, icon, isExpanded, onToggle, children }) => (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <Icon name={icon} size={20} className="text-gray-600" />
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
        <Icon 
          name={isExpanded ? "ChevronUp" : "ChevronDown"} 
          size={18} 
          className="text-gray-500 transition-transform duration-200"
        />
      </button>
      {isExpanded && (
        <div className="mt-4 space-y-2">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-16 left-0 h-screen lg:h-auto w-80 max-w-full
        bg-white lg:bg-transparent border-r border-gray-200 lg:border-none
        transform transition-transform duration-300 ease-in-out z-50 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto overflow-x-hidden
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Filter" size={20} className="text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Filters</h2>
                <p className="text-sm text-gray-500">Refine your search</p>
              </div>
            </div>
            <button
              onClick={onToggle}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Icon name="X" size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search tools..."
                value={filters.search || ''}
                onChange={(e) => onFilterChange('search', e.target.value)}
                className="pl-10 w-full bg-gray-50 border-gray-200 focus:border-accent focus:bg-white"
              />
            </div>
          </div>

          {/* Categories */}
          <CollapsibleSection
            title="Categories"
            icon="Grid"
            isExpanded={expandedSections.categories}
            onToggle={() => toggleSection('categories')}
          >
            <div className="grid grid-cols-1 gap-2">
              {toolCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  isActive={filters.categories?.includes(category.id)}
                  onClick={() => handleFilterChange('categories', category.id, !filters.categories?.includes(category.id))}
                />
              ))}
            </div>
          </CollapsibleSection>

          {/* Programming Languages */}
          <CollapsibleSection
            title="Programming Languages"
            icon="Code"
            isExpanded={expandedSections.languages}
            onToggle={() => toggleSection('languages')}
          >
            <div className="space-y-2">
              {languages.map((lang) => (
                <FilterChip
                  key={lang.id}
                  label={lang.name}
                  count={lang.count}
                  icon={lang.icon}
                  isActive={filters.languages?.includes(lang.id)}
                  onClick={() => handleFilterChange('languages', lang.id, !filters.languages?.includes(lang.id))}
                />
              ))}
            </div>
          </CollapsibleSection>

          {/* Popularity */}
          <CollapsibleSection
            title="Popularity & Status"
            icon="TrendingUp"
            isExpanded={expandedSections.popularity}
            onToggle={() => toggleSection('popularity')}
          >
            <div className="space-y-2">
              {popularityFilters.map((filter) => (
                <FilterChip
                  key={filter.id}
                  label={filter.name}
                  count={filter.count}
                  icon={filter.icon}
                  isActive={filters.popularity?.includes(filter.id)}
                  onClick={() => handleFilterChange('popularity', filter.id, !filters.popularity?.includes(filter.id))}
                />
              ))}
            </div>
          </CollapsibleSection>

          {/* Features */}
          <CollapsibleSection
            title="Features & Type"
            icon="Settings"
            isExpanded={expandedSections.features}
            onToggle={() => toggleSection('features')}
          >
            <div className="space-y-2">
              {featureFilters.map((filter) => (
                <FilterChip
                  key={filter.id}
                  label={filter.name}
                  count={filter.count}
                  icon={filter.icon}
                  isActive={filters.features?.includes(filter.id)}
                  onClick={() => handleFilterChange('features', filter.id, !filters.features?.includes(filter.id))}
                />
              ))}
            </div>
          </CollapsibleSection>

          {/* Clear Filters */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={onClearFilters}
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
              iconName="RotateCcw"
              iconSize={16}
            >
              Clear All Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernFilterSidebar; 