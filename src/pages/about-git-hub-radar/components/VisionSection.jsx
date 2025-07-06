import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VisionSection = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2024",
      title: "Community-Driven Tool Discovery",
      description: "Open-source tool discovery platform powered by community contributions and GitHub API integration",
      status: "In Development",
      features: [
        "GitHub API integration for real-time data",
        "Community-driven tool submissions",
        "Open-source contribution guidelines",
        "Community voting and rating system"
      ],
      color: "conversion"
    },
    {
      quarter: "Q2 2024",
      title: "Enhanced Search & Filtering",
      description: "Advanced search capabilities with natural language processing and intelligent filtering",
      status: "Planned",
      features: [
        "Natural language search queries",
        "Advanced filtering by tool type",
        "Community tags and categories",
        "Search result ranking improvements"
      ],
      color: "accent"
    },
    {
      quarter: "Q3 2024",
      title: "Community Collaboration Features",
      description: "Tools for community collaboration, reviews, and knowledge sharing",
      status: "Planned",
      features: [
        "Community reviews and ratings",
        "Tool comparison features",
        "Knowledge base integration",
        "Community discussion forums"
      ],
      color: "success"
    },
    {
      quarter: "Q4 2024",
      title: "Open-Source Ecosystem Integration",
      description: "Integration with other open-source security tools and platforms",
      status: "Research",
      features: [
        "Integration with popular security tools",
        "API for third-party integrations",
        "Plugin system for extensions",
        "Open standards compliance"
      ],
      color: "primary"
    }
  ];

  const impactMetrics = [
    {
      icon: "TrendingUp",
      value: "500K+",
      label: "Security Professionals Empowered",
      description: "By 2025, we aim to serve over half a million security professionals worldwide"
    },
    {
      icon: "Shield",
      value: "10M+",
      label: "Threats Detected Early",
      description: "Early detection of emerging threats before they become widespread"
    },
    {
      icon: "Clock",
      value: "75%",
      label: "Faster Threat Response",
      description: "Reduction in time from threat emergence to defensive implementation"
    },
    {
      icon: "Globe",
      label: "Global Coverage",
      value: "100+",
      description: "Countries with active security professionals using our platform"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development': return 'bg-conversion/10 text-conversion border-conversion/30';
      case 'Planned': return 'bg-accent/10 text-accent border-accent/30';
      case 'Research': return 'bg-primary/10 text-primary border-primary/30';
      default: return 'bg-success/10 text-success border-success/30';
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      conversion: 'border-conversion/30 hover:border-conversion/50',
      accent: 'border-accent/30 hover:border-accent/50',
      success: 'border-success/30 hover:border-success/50',
      primary: 'border-primary/30 hover:border-primary/50'
    };
    return colors[color] || colors.accent;
  };

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Icon name="Telescope" size={18} className="text-primary" />
            <span className="text-primary font-mono text-sm tracking-wider">FUTURE VISION</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            The Future of Security Intelligence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our vision extends beyond tool discovery to create the definitive intelligence platform 
            that shapes the future of cybersecurity defense and threat awareness.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="Eye" size={36} className="text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              "To become the neural network of global cybersecurity intelligence"
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              We envision a world where every security professional has instant access to the collective 
              intelligence of the global security community, where threats are detected before they spread, 
              and where defensive capabilities evolve as rapidly as offensive innovations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2">
                <Icon name="Brain" size={16} className="text-accent" />
                <span className="text-accent font-medium">Predictive Intelligence</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2">
                <Icon name="Network" size={16} className="text-accent" />
                <span className="text-accent font-medium">Global Collaboration</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2">
                <Icon name="Zap" size={16} className="text-accent" />
                <span className="text-accent font-medium">Real-time Defense</span>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">Development Roadmap</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${getColorClasses(item.color)}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="text-text-secondary font-mono text-sm">{item.quarter}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(item.status)}`}>
                      {item.status}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-text-primary mb-3">{item.title}</h4>
                <p className="text-text-secondary mb-6 leading-relaxed">{item.description}</p>
                
                <div className="space-y-3">
                  <h5 className="font-semibold text-text-primary text-sm">Key Features:</h5>
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        item.color === 'conversion' ? 'bg-conversion' :
                        item.color === 'accent' ? 'bg-accent' :
                        item.color === 'success'? 'bg-success' : 'bg-primary'
                      }`}></div>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Goals */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 mb-20">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">2025 Impact Goals</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric.icon} size={28} className="text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{metric.value}</div>
                <div className="font-semibold text-text-primary mb-2">{metric.label}</div>
                <div className="text-text-secondary text-sm leading-relaxed">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Join Our Mission</h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Be part of the future of cybersecurity intelligence. Join thousands of security professionals 
            who are already shaping the next generation of threat detection and defense.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="primary"
              size="lg"
              className="bg-conversion text-conversion-foreground hover:bg-conversion/90 font-semibold px-8 py-4"
              iconName="Rocket"
              iconSize={20}
            >
              Start Your Intelligence Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent/30 text-accent hover:bg-accent/10 px-8 py-4"
              iconName="Users"
              iconSize={20}
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;