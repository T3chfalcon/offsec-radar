import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntelligenceFeed = ({ feeds }) => {
  const [activeTab, setActiveTab] = useState('breaking');

  const tabs = [
    { id: 'breaking', name: 'Breaking Discoveries', icon: 'Zap', color: 'text-accent' },
    { id: 'threats', name: 'Threat Landscape', icon: 'Shield', color: 'text-warning' },
    { id: 'community', name: 'Community Spotlight', icon: 'Users', color: 'text-success' },
    { id: 'personalized', name: 'Your Arsenal', icon: 'Target', color: 'text-conversion' }
  ];

  const currentFeed = feeds[activeTab] || [];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Intelligence Command Center
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real-time intelligence feeds curated by community experts to keep you ahead of the threat landscape.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-surface rounded-xl p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-background shadow-md text-text-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-background/50'
              }`}
            >
              <Icon 
                name={tab.icon} 
                size={16} 
                className={activeTab === tab.id ? tab.color : 'text-current'} 
              />
              <span className="hidden sm:inline">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Feed Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentFeed.map((item, index) => (
            <div
              key={item.id}
              className="bg-surface rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 interactive-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.categoryColor}`}>
                    <Icon name={item.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.timestamp}</p>
                  </div>
                </div>
                {item.priority && (
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${item.priorityColor}`}>
                    {item.priority}
                  </span>
                )}
              </div>

              <p className="text-text-secondary mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  {item.stats?.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center space-x-1">
                      <Icon name={stat.icon} size={14} className="text-text-secondary" />
                      <span className="text-sm text-text-secondary">{stat.value}</span>
                    </div>
                  ))}
                </div>
                {item.trend && (
                  <div className={`flex items-center space-x-1 ${item.trendColor}`}>
                    <Icon name={item.trendIcon} size={14} />
                    <span className="text-sm font-medium">{item.trend}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {item.tags?.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Bookmark"
                    iconSize={14}
                    className="text-text-secondary hover:text-accent"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Share"
                    iconSize={14}
                    className="text-text-secondary hover:text-accent"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ExternalLink"
                    iconSize={14}
                    className="text-accent hover:bg-accent/10"
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="border-accent/30 text-accent hover:bg-accent/10"
            iconName="RefreshCw"
            iconSize={16}
          >
            Load More Intelligence
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceFeed;