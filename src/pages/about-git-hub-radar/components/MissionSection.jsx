import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const challenges = [
    {
      icon: "AlertTriangle",
      title: "Fragmented Discovery",
      description: "Security tools scattered across GitHub with no centralized discovery"
    },
    {
      icon: "Search",
      title: "Quality Assessment",
      description: "Difficulty determining tool credibility and community adoption"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
            <Icon name="Target" size={18} className="text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider">OUR MISSION</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Security tools are scattered across GitHub repositories with no centralized discovery platform.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {challenges.map((challenge, index) => (
            <div key={index} className="group">
              <div className="bg-surface border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-accent/30">
                <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-error/20 transition-colors duration-300">
                  <Icon name={challenge.icon} size={24} className="text-error" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{challenge.title}</h3>
                <p className="text-text-secondary leading-relaxed">{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Statement */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Lightbulb" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Our Solution: Community-Driven Discovery
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              OffSec Radar transforms GitHub repositories into discoverable security tools through 
              community-driven curation and open-source collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2">
                <Icon name="GitHub" size={16} className="text-accent" />
                <span className="text-accent font-medium">GitHub Integration</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2">
                <Icon name="Users" size={16} className="text-accent" />
                <span className="text-accent font-medium">Community Driven</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2">
                <Icon name="Zap" size={16} className="text-accent" />
                <span className="text-accent font-medium">Real-time Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;