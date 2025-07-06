import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) => {
  const [expandedSections, setExpandedSections] = useState({
    attackVectors: true,
    language: true
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

  const attackVectors = [
    { id: 'web-app', label: 'Web Application', count: 234 },
    { id: 'network', label: 'Network Security', count: 189 },
    { id: 'social-engineering', label: 'Social Engineering', count: 67 },
    { id: 'mobile', label: 'Mobile Security', count: 145 },
    { id: 'wireless', label: 'Wireless Security', count: 89 },
    { id: 'osint', label: 'OSINT', count: 156 },
    { id: 'malware', label: 'Malware Analysis', count: 98 },
    { id: 'exploitation', label: 'Exploitation', count: 134 }
  ];

  const languages = [
    { id: 'python', label: 'Python', count: 312 },
    { id: 'go', label: 'Go', count: 189 },
    { id: 'rust', label: 'Rust', count: 145 },
    { id: 'javascript', label: 'JavaScript', count: 234 },
    { id: 'c-cpp', label: 'C/C++', count: 167 },
    { id: 'bash', label: 'Bash/Shell', count: 298 }
  ];

  const FilterSection = ({ title, items, category, expanded, onToggle, showColors = false }) => (
    <div className="border-b border-primary-200 pb-4 mb-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left text-sm font-semibold text-primary-800 hover:text-accent transition-colors duration-200"
      >
        <span>{title}</span>
        <Icon 
          name={expanded ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="transition-transform duration-200 flex-shrink-0"
        />
      </button>
      
      {expanded && (
        <div className="mt-3 space-y-2">
          {items.map((item) => (
            <label key={item.id} className="flex items-center justify-between group cursor-pointer min-w-0">
              <div className="flex items-center space-x-2 min-w-0 flex-1">
                <input
                  type="checkbox"
                  checked={filters[category]?.includes(item.id) || false}
                  onChange={(e) => handleFilterChange(category, item.id, e.target.checked)}
                  className="w-4 h-4 text-accent bg-white border-2 border-primary-300 rounded focus:ring-accent focus:ring-2 transition-all duration-200 flex-shrink-0"
                />
                <span className={`text-sm ${showColors ? item.color : 'text-primary-700'} group-hover:text-accent transition-colors duration-200 truncate`}>
                  {item.label}
                </span>
              </div>
              <span className="text-xs text-primary-500 bg-primary-100 px-2 py-1 rounded-full flex-shrink-0 ml-2">
                {item.count}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-primary-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-16 left-0 h-screen lg:h-auto w-64 sm:w-72 lg:w-64 xl:w-72 max-w-full
        bg-white lg:bg-transparent border-r border-primary-200 lg:border-none
        transform transition-transform duration-300 ease-in-out z-50 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto overflow-x-hidden
      `}>
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={20} className="text-accent" />
              <h2 className="text-lg font-bold text-primary-800">Filters</h2>
            </div>
            <button
              onClick={onToggle}
              className="lg:hidden p-2 hover:bg-primary-100 rounded-lg transition-colors duration-200"
            >
              <Icon name="X" size={20} className="text-primary-600" />
            </button>
          </div>

          {/* Search Filter */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-medium text-primary-700 mb-2">
              Search Tools
            </label>
            <Input
              type="search"
              placeholder="Search tools..."
              value={filters.search || ''}
              onChange={(e) => onFilterChange('search', e.target.value)}
              className="w-full"
            />
          </div>

          {/* Filter Sections */}
          <FilterSection
            title="Attack Vectors"
            items={attackVectors}
            category="attackVectors"
            expanded={expandedSections.attackVectors}
            onToggle={() => toggleSection('attackVectors')}
          />

          <FilterSection
            title="Programming Language"
            items={languages}
            category="language"
            expanded={expandedSections.language}
            onToggle={() => toggleSection('language')}
          />

          {/* Clear Filters */}
          <Button
            variant="outline"
            onClick={onClearFilters}
            className="w-full border-primary-300 text-primary-700 hover:bg-primary-50"
            iconName="RotateCcw"
            iconSize={16}
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;