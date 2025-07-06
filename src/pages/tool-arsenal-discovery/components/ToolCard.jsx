import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ToolCard = ({ tool, onBookmark, onShare, onCompare, isBookmarked, isSelected, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  const getMaturityColor = (maturity) => {
    switch (maturity) {
      case 'alpha': return 'text-warning bg-warning/10 border-warning/20';
      case 'beta': return 'text-conversion bg-conversion/10 border-conversion/20';
      case 'production': return 'text-success bg-success/10 border-success/20';
      case 'deprecated': return 'text-error bg-error/10 border-error/20';
      default: return 'text-primary-600 bg-primary/10 border-primary/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const getTimeAgo = (date) => {
    const now = new Date();
    const diffTime = Math.abs(now - new Date(date));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Network Security': 'bg-blue-500',
      'Penetration Testing': 'bg-purple-500',
      'Web Security': 'bg-green-500',
      'OSINT': 'bg-orange-500',
      'Malware Analysis': 'bg-red-500',
      'Password Security': 'bg-yellow-500',
      'Wireless Security': 'bg-indigo-500',
      'Mobile Security': 'bg-pink-500',
      'Vulnerability Scanning': 'bg-teal-500',
      'Social Engineering': 'bg-cyan-500',
      'Network Analysis': 'bg-emerald-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleVisitSite = () => {
    if (tool.websiteUrl) {
      window.open(tool.websiteUrl, '_blank');
    } else if (tool.githubUrl) {
      window.open(tool.githubUrl, '_blank');
    }
  };

  const handleViewGitHub = () => {
    window.open(tool.githubUrl, '_blank');
  };

  const handleViewDocs = () => {
    if (tool.documentationUrl) {
      window.open(tool.documentationUrl, '_blank');
    }
  };

  return (
    <div className={`
      group relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1
      ${isSelected ? 'border-accent shadow-lg ring-4 ring-accent/20' : 'border-gray-200 hover:border-accent/50'}
    `}>
      {/* Selection Checkbox */}
      <div className="absolute top-4 left-4 z-10">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelect(tool.id, e.target.checked)}
          className="w-5 h-5 text-accent bg-white border-2 border-gray-300 rounded-md focus:ring-accent focus:ring-2 transition-all duration-200"
        />
      </div>

      {/* Trending Badge */}
      {tool.trending && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center space-x-1 bg-gradient-to-r from-accent to-accent/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            <Icon name="TrendingUp" size={12} />
            <span>Trending</span>
          </div>
        </div>
      )}

      {/* Tool Image/Icon */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-50 to-gray-100">
        {tool.image && !imageError ? (
          <img
            src={tool.image}
            alt={tool.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className={`w-20 h-20 ${getCategoryColor(tool.category)} rounded-2xl flex items-center justify-center shadow-lg`}>
              <Icon name={tool.icon || "Shield"} size={36} className="text-white" />
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <div className={`flex items-center space-x-2 ${getCategoryColor(tool.category)} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
            <Icon name={tool.icon || "Shield"} size={12} />
            <span>{tool.category}</span>
          </div>
        </div>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <Button
              variant="primary"
              size="sm"
              onClick={handleViewGitHub}
              iconName="Github"
              iconSize={16}
              className="bg-white/90 text-gray-900 hover:bg-white shadow-lg"
            >
              GitHub
            </Button>
            {tool.websiteUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleVisitSite}
                iconName="ExternalLink"
                iconSize={16}
                className="bg-white/90 border-white/90 text-gray-900 hover:bg-white shadow-lg"
              >
                Visit
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Tool Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors duration-200 truncate">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1 flex items-center space-x-2">
              <span>by {tool.author}</span>
              {tool.securityVerified && (
                <div className="flex items-center space-x-1 text-green-600">
                  <Icon name="ShieldCheck" size={14} />
                  <span className="text-xs">Verified</span>
                </div>
              )}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-4 line-clamp-3 leading-relaxed">
          {tool.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-accent/10 hover:text-accent transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
          {tool.tags.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{tool.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-gray-900 font-semibold">
              <Icon name="Star" size={14} className="text-yellow-500" />
              <span className="text-sm">{formatNumber(tool.stars)}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">Stars</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-gray-900 font-semibold">
              <Icon name="GitFork" size={14} className="text-blue-500" />
              <span className="text-sm">{formatNumber(tool.forks)}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">Forks</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-gray-900 font-semibold">
              <Icon name="Users" size={14} className="text-green-500" />
              <span className="text-sm">{tool.contributors}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">Contributors</p>
          </div>
        </div>

        {/* Rating & Last Updated */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={14}
                  className={i < Math.floor(tool.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {tool.rating.toFixed(1)}
            </span>
            <span className="text-xs text-gray-500">
              ({tool.reviews} reviews)
            </span>
          </div>
          <div className="text-xs text-gray-500">
            {getTimeAgo(tool.lastUpdated)}
          </div>
        </div>

        {/* Language & Platform */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="text-gray-700 font-medium">{tool.language}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <Icon name="Monitor" size={14} />
            <span>{tool.platform}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant={isBookmarked ? "primary" : "outline"}
            size="sm"
            onClick={() => onBookmark(tool.id)}
            iconName={isBookmarked ? "Heart" : "HeartHandshake"}
            iconSize={16}
            className="flex-1"
          >
            {isBookmarked ? 'Saved' : 'Save'}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onShare(tool)}
            iconName="Share2"
            iconSize={16}
            className="px-3 hover:bg-gray-100"
            title="Share tool"
          />
          
          {tool.websiteUrl && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleVisitSite}
              iconName="ExternalLink"
              iconSize={16}
              className="px-3 hover:bg-gray-100"
              title="Visit website"
            />
          )}
          
          {tool.documentationUrl && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleViewDocs}
              iconName="FileText"
              iconSize={16}
              className="px-3 hover:bg-gray-100"
              title="View documentation"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolCard;