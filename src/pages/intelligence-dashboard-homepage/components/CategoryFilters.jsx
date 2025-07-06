import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CategoryFilters = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary-foreground mb-2">
            Quick Access Arsenal
          </h2>
          <p className="text-primary-foreground/70">
            Jump directly to your specialized tool categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'border-accent bg-accent/10 shadow-lg'
                  : 'border-primary-700 bg-primary-800/50 hover:border-accent/50 hover:bg-accent/5'
              }`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-primary scale-110'
                    : `${category.bgColor} group-hover:scale-105`
                }`}>
                  <Icon 
                    name={category.icon} 
                    size={28} 
                    className={activeCategory === category.id ? 'text-primary' : 'text-white'} 
                  />
                </div>
                
                <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'text-accent' :'text-primary-foreground group-hover:text-accent'
                }`}>
                  {category.name}
                </h3>
                
                <p className="text-sm text-primary-foreground/60 mb-3">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <Icon name="Package" size={12} className="text-primary-foreground/50" />
                    <span className="text-primary-foreground/70">{category.toolCount} tools</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="TrendingUp" size={12} className="text-accent" />
                    <span className="text-accent">{category.growth}</span>
                  </div>
                </div>
              </div>

              {/* Active Indicator */}
              {activeCategory === category.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>

        {/* Advanced Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            iconName="Filter"
            iconSize={16}
            className="text-primary-foreground/70 hover:text-accent hover:bg-accent/10"
          >
            Advanced Filters
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="SortDesc"
            iconSize={16}
            className="text-primary-foreground/70 hover:text-accent hover:bg-accent/10"
          >
            Sort by Activity
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Calendar"
            iconSize={16}
            className="text-primary-foreground/70 hover:text-accent hover:bg-accent/10"
          >
            Date Range
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Star"
            iconSize={16}
            className="text-primary-foreground/70 hover:text-accent hover:bg-accent/10"
          >
            Top Rated
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilters;