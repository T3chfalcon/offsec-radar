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
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto ${
                activeCategory === category.id ? category.color : 'bg-primary-700'
              }`}>
                <Icon 
                  name={category.icon} 
                  size={24} 
                  className={activeCategory === category.id ? 'text-white' : 'text-primary-foreground/70'} 
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className={`font-semibold mb-2 ${
                  activeCategory === category.id ? 'text-accent' : 'text-primary-foreground'
                }`}>
                  {category.name}
                </h3>
                <p className={`text-sm ${
                  activeCategory === category.id ? 'text-accent/80' : 'text-primary-foreground/60'
                }`}>
                  {category.count} tools
                </p>
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
      </div>
    </section>
  );
};

export default CategoryFilters;