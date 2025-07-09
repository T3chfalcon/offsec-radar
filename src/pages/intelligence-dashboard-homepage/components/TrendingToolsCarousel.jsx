import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrendingToolsCarousel = ({ tools }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(tools.length / 3));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, tools.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(tools.length / 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(tools.length / 3)) % Math.ceil(tools.length / 3));
    setIsAutoPlaying(false);
  };

  const getVisibleTools = () => {
    const startIndex = currentIndex * 3;
    return tools.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-2">
              Trending Tools
            </h2>
            <p className="text-text-secondary">
              Most active repositories in the last 24 hours
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              iconName={isAutoPlaying ? "Pause" : "Play"}
              iconSize={16}
              className="text-text-secondary hover:text-accent"
            >
              {isAutoPlaying ? "Pause" : "Play"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              iconName="ChevronLeft"
              iconSize={16}
              className="text-text-secondary hover:text-accent"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              iconName="ChevronRight"
              iconSize={16}
              className="text-text-secondary hover:text-accent"
            />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(tools.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tools.slice(slideIndex * 3, slideIndex * 3 + 3).map((tool, index) => (
                    <div
                      key={tool.id}
                      className="bg-background rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 tool-card-hover"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${tool.categoryColor}`}>
                            <Icon name={tool.categoryIcon} size={20} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-text-primary">{tool.name}</h3>
                            <p className="text-sm text-text-secondary">{tool.author}</p>
                          </div>
                        </div>
                        {tool.isNew && (
                          <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                            NEW
                          </span>
                        )}
                      </div>

                      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                        {tool.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={14} className="text-conversion" />
                            <span className="text-sm font-medium text-text-primary">
                              {tool.stars}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="GitFork" size={14} className="text-text-secondary" />
                            <span className="text-sm text-text-secondary">
                              {tool.forks}
                            </span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${tool.activityColor}`}>
                          {tool.activity}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${tool.languageColor}`}></div>
                          <span className="text-sm text-text-secondary">{tool.language}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          iconName="ExternalLink"
                          iconSize={14}
                          className="text-accent hover:bg-accent/10"
                          onClick={() => window.open(tool.githubUrl || tool.url, '_blank')}
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(tools.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-accent w-6' : 'bg-text-secondary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingToolsCarousel;