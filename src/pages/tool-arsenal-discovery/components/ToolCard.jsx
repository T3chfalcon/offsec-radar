import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import AppImage from '../../../components/AppImage';

const ToolCard = ({ tool, onShare }) => {
  const [imageError, setImageError] = useState(false);



  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
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

  // Get appropriate icon based on tool name, description, or tags
  const getToolIcon = (tool) => {
    const name = tool.name.toLowerCase();
    const description = tool.description.toLowerCase();
    const tags = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
    
    // Specific tool icons
    if (name.includes('metasploit')) return 'Crosshair';
    if (name.includes('sqlmap') || name.includes('sql')) return 'Database';
    if (name.includes('nmap') || name.includes('scan')) return 'Radar';
    if (name.includes('burp') || name.includes('proxy')) return 'Globe';
    if (name.includes('zap') || name.includes('owasp')) return 'Shield';
    if (name.includes('wireshark') || name.includes('packet')) return 'Activity';
    if (name.includes('hydra') || name.includes('crack') || name.includes('brute')) return 'Key';
    if (name.includes('aircrack') || name.includes('wireless') || name.includes('wifi')) return 'Wifi';
    if (name.includes('hashcat') || name.includes('hash')) return 'Hash';
    if (name.includes('john') || name.includes('password')) return 'Lock';
    if (name.includes('gobuster') || name.includes('dirb') || name.includes('directory')) return 'FolderSearch';
    if (name.includes('nuclei') || name.includes('template')) return 'Zap';
    if (name.includes('subfinder') || name.includes('subdomain')) return 'Compass';
    if (name.includes('amass') || name.includes('recon')) return 'Search';
    if (name.includes('ffuf') || name.includes('fuzz')) return 'Target';
    
    // Category-based icons from tags and description
    if (tags.includes('vulnerability') || description.includes('vulnerability')) return 'AlertTriangle';
    if (tags.includes('network') || description.includes('network')) return 'Network';
    if (tags.includes('web') || description.includes('web')) return 'Globe';
    if (tags.includes('forensics') || description.includes('forensics')) return 'FileSearch';
    if (tags.includes('malware') || description.includes('malware')) return 'Bug';
    if (tags.includes('exploitation') || description.includes('exploit')) return 'Crosshair';
    if (tags.includes('reconnaissance') || tags.includes('osint')) return 'Search';
    if (tags.includes('enumeration') || description.includes('enumeration')) return 'List';
    if (tags.includes('scanning') || description.includes('scanner')) return 'Radar';
    if (tags.includes('testing') || description.includes('testing')) return 'TestTube';
    if (tags.includes('monitoring') || description.includes('monitoring')) return 'Eye';
    if (tags.includes('analysis') || description.includes('analysis')) return 'BarChart3';
    if (tags.includes('reverse') || description.includes('reverse')) return 'RotateCcw';
    if (tags.includes('crypto') || description.includes('crypto')) return 'Shield';
    if (tags.includes('mobile') || description.includes('mobile')) return 'Smartphone';
    if (tags.includes('cloud') || description.includes('cloud')) return 'Cloud';
    
    // Default security icon
    return 'Shield';
  };

  const toolIcon = getToolIcon(tool);

  // Generate unique gradient colors based on tool name
  const getGradientColors = (toolName) => {
    const hash = toolName.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    const colors = [
      ['from-blue-500', 'to-blue-600'],
      ['from-green-500', 'to-green-600'],
      ['from-purple-500', 'to-purple-600'],
      ['from-red-500', 'to-red-600'],
      ['from-yellow-500', 'to-yellow-600'],
      ['from-indigo-500', 'to-indigo-600'],
      ['from-pink-500', 'to-pink-600'],
      ['from-cyan-500', 'to-cyan-600'],
      ['from-orange-500', 'to-orange-600'],
      ['from-teal-500', 'to-teal-600']
    ];
    
    return colors[Math.abs(hash) % colors.length];
  };

  const [gradientFrom, gradientTo] = getGradientColors(tool.name);

  return (
    <div className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* Tool Image */}
      <div className="relative h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl">
        <AppImage
          src={tool.image}
          alt={`${tool.name} logo`}
          toolName={tool.name}
          generateOfficialImage={true}
          fallbackIcon={tool.icon || "Shield"}
          className="w-full h-full object-cover rounded-t-2xl"
        />
        
        {/* Trending Badge */}
        {tool.trending && (
          <div className="absolute top-3 right-3">
            <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
              <Icon name="TrendingUp" size={12} />
              <span>Trending</span>
            </div>
          </div>
        )}


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
          {/* Primary Action: Website or GitHub */}
          {tool.websiteUrl ? (
            <Button
              variant="primary"
              size="sm"
              onClick={handleVisitSite}
              iconName="ExternalLink"
              iconSize={16}
              className="flex-1"
              title="Visit website"
            >
              Visit Site
            </Button>
          ) : (
            <Button
              variant="primary"
              size="sm"
              onClick={handleViewGitHub}
              iconName="Github"
              iconSize={16}
              className="flex-1"
              title="View on GitHub"
            >
              View on GitHub
            </Button>
          )}
          
          {/* Secondary Actions */}
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
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onShare(tool)}
            iconName="Share2"
            iconSize={16}
            className="px-3 hover:bg-gray-100"
            title="Share tool"
          />
        </div>
      </div>
    </div>
  );
};

export default ToolCard;