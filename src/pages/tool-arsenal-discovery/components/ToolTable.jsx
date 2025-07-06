import React, { useState, useMemo } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ToolTable = ({ tools, onBookmark, onShare, onCompare, bookmarkedTools, selectedTools, onSelectTool, onSelectAll }) => {
  const [sortConfig, setSortConfig] = useState({ key: 'stars', direction: 'desc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedTools = React.useMemo(() => {
    let sortableTools = [...tools];
    if (sortConfig.key) {
      sortableTools.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableTools;
  }, [tools, sortConfig]);

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
    
    if (diffDays === 1) return '1d';
    if (diffDays < 7) return `${diffDays}d`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)}w`;
    return `${Math.ceil(diffDays / 30)}m`;
  };

  const getMaturityColor = (maturity) => {
    switch (maturity) {
      case 'alpha': return 'text-warning bg-warning/10';
      case 'beta': return 'text-conversion bg-conversion/10';
      case 'production': return 'text-success bg-success/10';
      case 'deprecated': return 'text-error bg-error/10';
      default: return 'text-primary-600 bg-primary/10';
    }
  };

  const SortableHeader = ({ label, sortKey, className = "" }) => (
    <th 
      className={`px-6 py-4 text-left text-xs font-semibold text-primary-700 uppercase tracking-wider cursor-pointer hover:bg-primary-50 transition-colors duration-200 ${className}`}
      onClick={() => handleSort(sortKey)}
    >
      <div className="flex items-center space-x-1">
        <span>{label}</span>
        <div className="flex flex-col">
          <Icon 
            name="ChevronUp" 
            size={12} 
            className={`${sortConfig.key === sortKey && sortConfig.direction === 'asc' ? 'text-accent' : 'text-primary-400'}`}
          />
          <Icon 
            name="ChevronDown" 
            size={12} 
            className={`-mt-1 ${sortConfig.key === sortKey && sortConfig.direction === 'desc' ? 'text-accent' : 'text-primary-400'}`}
          />
        </div>
      </div>
    </th>
  );

  const allSelected = selectedTools.length === tools.length;
  const someSelected = selectedTools.length > 0 && selectedTools.length < tools.length;

  return (
    <div className="bg-white rounded-xl border border-primary-200 overflow-hidden">
      {/* Table Header Actions */}
      <div className="px-6 py-4 bg-primary-50 border-b border-primary-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-primary-700">
              {tools.length} tools found
            </span>
            {selectedTools.length > 0 && (
              <span className="text-sm text-accent font-medium">
                {selectedTools.length} selected
              </span>
            )}
          </div>
          {selectedTools.length > 0 && (
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => selectedTools.forEach(id => onBookmark(id))}
                iconName="Bookmark"
                iconSize={16}
              >
                Bookmark Selected
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onCompare(selectedTools)}
                iconName="GitCompare"
                iconSize={16}
                disabled={selectedTools.length < 2 || selectedTools.length > 4}
              >
                Compare ({selectedTools.length})
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-primary-200">
          <thead className="bg-primary-50">
            <tr>
              <th className="px-6 py-4 text-left">
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={input => {
                    if (input) input.indeterminate = someSelected;
                  }}
                  onChange={(e) => onSelectAll(e.target.checked)}
                  className="w-4 h-4 text-accent bg-white border-2 border-primary-300 rounded focus:ring-accent focus:ring-2"
                />
              </th>
              <SortableHeader label="Tool" sortKey="name" className="min-w-[300px]" />
              <SortableHeader label="Stars" sortKey="stars" />
              <SortableHeader label="Forks" sortKey="forks" />
              <SortableHeader label="Rating" sortKey="rating" />
              <SortableHeader label="Language" sortKey="language" />
              <SortableHeader label="Updated" sortKey="lastUpdated" />
              <th className="px-6 py-4 text-left text-xs font-semibold text-primary-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-primary-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-primary-200">
            {sortedTools.map((tool) => (
              <tr 
                key={tool.id} 
                className={`hover:bg-primary-50 transition-colors duration-200 ${
                  selectedTools.includes(tool.id) ? 'bg-accent/5' : ''
                }`}
              >
                {/* Checkbox */}
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedTools.includes(tool.id)}
                    onChange={(e) => onSelectTool(tool.id, e.target.checked)}
                    className="w-4 h-4 text-accent bg-white border-2 border-primary-300 rounded focus:ring-accent focus:ring-2"
                  />
                </td>

                {/* Tool Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={tool.icon || "Shield"} size={20} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-semibold text-primary-900 truncate">
                          {tool.name}
                        </p>
                        {tool.trending && (
                          <Icon name="TrendingUp" size={14} className="text-accent" />
                        )}
                        {tool.securityVerified && (
                          <Icon name="ShieldCheck" size={14} className="text-success" />
                        )}
                      </div>
                      <p className="text-xs text-primary-600 truncate">
                        by {tool.author}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {tool.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-primary-100 text-primary-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Stars */}
                <td className="px-6 py-4 text-sm text-primary-900 font-medium">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-conversion" />
                    <span>{formatNumber(tool.stars)}</span>
                  </div>
                </td>

                {/* Forks */}
                <td className="px-6 py-4 text-sm text-primary-900 font-medium">
                  <div className="flex items-center space-x-1">
                    <Icon name="GitFork" size={14} className="text-accent" />
                    <span>{formatNumber(tool.forks)}</span>
                  </div>
                </td>

                {/* Rating */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={12}
                          className={i < Math.floor(tool.rating) ? 'text-conversion fill-current' : 'text-primary-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-primary-700 ml-1">
                      {tool.rating.toFixed(1)}
                    </span>
                  </div>
                </td>

                {/* Language */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="text-sm text-primary-700">{tool.language}</span>
                  </div>
                </td>

                {/* Updated */}
                <td className="px-6 py-4 text-sm text-primary-600">
                  {getTimeAgo(tool.lastUpdated)}
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMaturityColor(tool.maturity)}`}>
                    {tool.maturity}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onBookmark(tool.id)}
                      iconName={bookmarkedTools.includes(tool.id) ? "BookmarkCheck" : "Bookmark"}
                      iconSize={16}
                      className="px-2"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onShare(tool)}
                      iconName="Share2"
                      iconSize={16}
                      className="px-2"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(tool.githubUrl, '_blank')}
                      iconName="ExternalLink"
                      iconSize={16}
                      className="px-2"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {tools.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-primary-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-primary-900 mb-2">No tools found</h3>
          <p className="text-primary-600">Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  );
};

export default ToolTable;