import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const SearchHeader = ({ 
  searchQuery, 
  onSearchChange, 
  viewMode, 
  onViewModeChange, 
  onFilterToggle, 
  selectedTools, 
  onCompareSelected,
  sortBy,
  onSortChange,
  totalTools,
  filteredTools
}) => {

  const sortOptions = [
    { value: 'relevance', label: 'Relevance', icon: 'Target' },
    { value: 'stars', label: 'Most Stars', icon: 'Star' },
    { value: 'updated', label: 'Recently Updated', icon: 'Clock' },
    { value: 'name', label: 'Name A-Z', icon: 'AlphabeticalOrder' },
    { value: 'rating', label: 'Highest Rated', icon: 'Award' },
    { value: 'trending', label: 'Trending', icon: 'TrendingUp' }
  ];

  return (
    <div className="bg-white border-b border-primary-200 sticky top-16 z-30">
      <div className="px-6 py-4">
        {/* Main Search Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={onFilterToggle}
            iconName="Filter"
            iconSize={16}
            className="lg:hidden border-primary-300 self-start sm:self-auto flex-shrink-0"
          >
            Filters
          </Button>

          {/* Search Input */}
          <div className="flex-1 relative min-w-0">
            <div className="relative">
              <Icon 
                name="Search" 
                size={20} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 z-10" 
              />
              <Input
                type="search"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-12 py-3 text-sm border-primary-300 focus:border-accent focus:ring-accent w-full"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-400 hover:text-primary-600 z-10"
                >
                  <Icon name="X" size={16} />
                </button>
              )}
            </div>
          </div>


        </div>



                {/* Results and Actions Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Results Count */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-sm text-primary-600">
              <span className="font-semibold text-primary-900">{filteredTools}</span> of{' '}
              <span className="font-semibold text-primary-900">{totalTools}</span> tools
            </span>
            {selectedTools.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-accent font-medium">
                  {selectedTools.length} selected
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onCompareSelected}
                  iconName="GitCompare"
                  iconSize={16}
                  disabled={selectedTools.length < 2 || selectedTools.length > 4}
                  className="border-accent/30 text-accent hover:bg-accent/10"
                >
                  Compare
                </Button>
              </div>
            )}
          </div>

          {/* View Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="appearance-none bg-white border border-primary-300 rounded-lg px-3 sm:px-4 py-2 pr-6 sm:pr-8 text-sm focus:ring-accent focus:border-accent min-w-0"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Icon 
                name="ChevronDown" 
                size={16} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-400 pointer-events-none" 
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-primary-100 rounded-lg p-1">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' ?'bg-white text-accent shadow-sm' :'text-primary-600 hover:text-accent'
                }`}
              >
                <Icon name="Grid3x3" size={16} />
              </button>
              <button
                onClick={() => onViewModeChange('table')}
                className={`p-2 rounded-md transition-all duration-200 ${
                 viewMode === 'table' ?'bg-white text-accent shadow-sm' :'text-primary-600 hover:text-accent'
                }`}
              >
                <Icon name="List" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {searchQuery && (
          <div className="mt-4 flex items-center space-x-2">
            <span className="text-sm text-primary-600">Active filters:</span>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                <Icon name="Search" size={14} />
                <span>"{searchQuery}"</span>
                <button
                  onClick={() => onSearchChange('')}
                  className="hover:text-accent/70"
                >
                  <Icon name="X" size={12} />
                </button>
              </span>
            </div>
          </div>
        )}
      </div>


    </div>
  );
};

export default SearchHeader;