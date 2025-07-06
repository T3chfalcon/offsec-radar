import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ComparisonModal = ({ isOpen, onClose, tools, selectedToolIds }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  const selectedTools = tools.filter(tool => selectedToolIds.includes(tool.id));

  const formatNumber = (num) => {
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

  const getMaturityColor = (maturity) => {
    switch (maturity) {
      case 'alpha': return 'text-warning bg-warning/10 border-warning/20';
      case 'beta': return 'text-conversion bg-conversion/10 border-conversion/20';
      case 'production': return 'text-success bg-success/10 border-success/20';
      case 'deprecated': return 'text-error bg-error/10 border-error/20';
      default: return 'text-primary-600 bg-primary/10 border-primary/20';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'features', label: 'Features', icon: 'CheckSquare' },
    { id: 'community', label: 'Community', icon: 'Users' },
    { id: 'technical', label: 'Technical', icon: 'Code' }
  ];

  const ComparisonRow = ({ label, children, className = "" }) => (
    <div className={`py-3 border-b border-primary-100 ${className}`}>
      <div className="text-sm font-medium text-primary-700 mb-2">{label}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );

  const renderOverviewTab = () => (
    <div className="space-y-4">
      <ComparisonRow label="Tool Information">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="bg-primary-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name={tool.icon || "Shield"} size={20} className="text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-primary-900">{tool.name}</h4>
                <p className="text-sm text-primary-600">by {tool.author}</p>
              </div>
            </div>
            <p className="text-sm text-primary-700 mb-3">{tool.description}</p>
            <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${getMaturityColor(tool.maturity)}`}>
              {tool.maturity}
            </div>
          </div>
        ))}
      </ComparisonRow>

      <ComparisonRow label="GitHub Statistics">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary-600">Stars</span>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={14} className="text-conversion" />
                <span className="font-semibold">{formatNumber(tool.stars)}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary-600">Forks</span>
              <div className="flex items-center space-x-1">
                <Icon name="GitFork" size={14} className="text-accent" />
                <span className="font-semibold">{formatNumber(tool.forks)}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary-600">Contributors</span>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={14} className="text-primary-600" />
                <span className="font-semibold">{tool.contributors}</span>
              </div>
            </div>
          </div>
        ))}
      </ComparisonRow>

      <ComparisonRow label="Community Rating">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={i < Math.floor(tool.rating) ? 'text-conversion fill-current' : 'text-primary-300'}
                />
              ))}
            </div>
            <div className="text-lg font-bold text-primary-900">{tool.rating.toFixed(1)}</div>
            <div className="text-sm text-primary-600">({tool.reviews} reviews)</div>
          </div>
        ))}
      </ComparisonRow>

      <ComparisonRow label="Last Updated">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="text-center">
            <div className="text-sm font-medium text-primary-900">{getTimeAgo(tool.lastUpdated)}</div>
            <div className="text-xs text-primary-600">
              {new Date(tool.lastUpdated).toLocaleDateString()}
            </div>
          </div>
        ))}
      </ComparisonRow>
    </div>
  );

  const renderFeaturesTab = () => (
    <div className="space-y-4">
      <ComparisonRow label="Primary Use Cases">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="space-y-2">
            {tool.tags.slice(0, 5).map((tag, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="Check" size={14} className="text-success" />
                <span className="text-sm text-primary-700">{tag}</span>
              </div>
            ))}
          </div>
        ))}
      </ComparisonRow>

      <ComparisonRow label="Platform Support">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="space-y-2">
            <div className="flex items-center space-x-2">
              <Icon name="Monitor" size={14} className="text-primary-600" />
              <span className="text-sm text-primary-700">{tool.platform}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-sm text-primary-700">{tool.language}</span>
            </div>
          </div>
        ))}
      </ComparisonRow>

      <ComparisonRow label="Security Features">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="space-y-2">
            <div className="flex items-center space-x-2">
              <Icon 
                name={tool.securityVerified ? "ShieldCheck" : "Shield"} 
                size={14} 
                className={tool.securityVerified ? "text-success" : "text-primary-400"} 
              />
              <span className="text-sm text-primary-700">
                {tool.securityVerified ? 'Security Verified' : 'Not Verified'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="FileText" size={14} className="text-primary-600" />
              <span className="text-sm text-primary-700">Documentation Available</span>
            </div>
          </div>
        ))}
      </ComparisonRow>
    </div>
  );

  const renderCommunityTab = () => (
    <div className="space-y-4">
      <ComparisonRow label="Community Activity">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary-600">Issues</span>
              <span className="font-semibold text-primary-900">{tool.issues || 'N/A'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary-600">Pull Requests</span>
              <span className="font-semibold text-primary-900">{tool.pullRequests || 'N/A'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary-600">Discussions</span>
              <span className="font-semibold text-primary-900">{tool.discussions || 'N/A'}</span>
            </div>
          </div>
        ))}
      </ComparisonRow>

      <ComparisonRow label="Maintenance Status">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${tool.trending ? 'bg-success' : 'bg-primary-400'}`}></div>
              <span className="text-sm text-primary-700">
                {tool.trending ? 'Actively Maintained' : 'Stable'}
              </span>
            </div>
            <div className="text-xs text-primary-600">
              Last commit: {getTimeAgo(tool.lastUpdated)}
            </div>
          </div>
        ))}
      </ComparisonRow>
    </div>
  );

  const renderTechnicalTab = () => (
    <div className="space-y-4">
      <ComparisonRow label="Technical Specifications">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary-600">Language</span>
              <span className="font-semibold text-primary-900">{tool.language}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary-600">License</span>
              <span className="font-semibold text-primary-900">{tool.license || 'MIT'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary-600">Size</span>
              <span className="font-semibold text-primary-900">{tool.size || 'N/A'}</span>
            </div>
          </div>
        ))}
      </ComparisonRow>

      <ComparisonRow label="Dependencies">
        {selectedTools.map((tool) => (
          <div key={tool.id} className="space-y-2">
            <div className="text-sm text-primary-700">
              {tool.dependencies ? `${tool.dependencies} dependencies` : 'Minimal dependencies'}
            </div>
            <div className="text-xs text-primary-600">
              Last security audit: {tool.lastAudit || 'Not available'}
            </div>
          </div>
        ))}
      </ComparisonRow>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-primary-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary-200">
          <div className="flex items-center space-x-3">
            <Icon name="GitCompare" size={24} className="text-accent" />
            <div>
              <h2 className="text-xl font-bold text-primary-900">Tool Comparison</h2>
              <p className="text-sm text-primary-600">
                Comparing {selectedTools.length} tools side by side
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            iconName="X"
            iconSize={20}
            className="text-primary-600 hover:text-primary-900"
          />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-primary-200 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-accent text-accent' :'border-transparent text-primary-600 hover:text-accent'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'features' && renderFeaturesTab()}
          {activeTab === 'community' && renderCommunityTab()}
          {activeTab === 'technical' && renderTechnicalTab()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-primary-200 bg-primary-50">
          <div className="text-sm text-primary-600">
            Compare up to 4 tools at once for detailed analysis
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="border-primary-300 text-primary-700"
            >
              Close Comparison
            </Button>
            <Button
              variant="primary"
              iconName="Download"
              iconSize={16}
              className="bg-accent text-primary-900"
            >
              Export Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;