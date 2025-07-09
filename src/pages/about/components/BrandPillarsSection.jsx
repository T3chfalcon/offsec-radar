import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const BrandPillarsSection = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      icon: "Brain",
      title: "Intelligence-First",
      subtitle: "Automated discovery that\'s smarter than manual curation",
      description: `Our AI-powered algorithms analyze GitHub repositories, commit patterns, and community engagement to identify emerging security tools before they become mainstream. Machine learning models trained on security professional behavior patterns ensure relevance and accuracy in tool recommendations.`,
      features: [
        "Natural language processing for tool categorization",
        "Predictive analytics for emerging threat tools",
        "Automated quality assessment algorithms",
        "Real-time repository health monitoring"
      ],
      color: "accent"
    },
    {
      icon: "Users",
      title: "Community-Driven",
      subtitle: "Built by practitioners, for practitioners",
      description: `Every tool discovery is validated by our community of verified security professionals. Peer reviews, usage statistics, and expert annotations ensure that only battle-tested tools reach your intelligence feed. The collective wisdom of the security community drives our recommendation engine.`,
      features: [
        "Verified security professional reviews",
        "Community-driven tool categorization",
        "Peer validation and rating systems",
        "Expert-curated tool collections"
      ],
      color: "conversion"
    },
    {
      icon: "Zap",
      title: "Speed & Precision",
      subtitle: "Real-time updates with surgical accuracy",
      description: `GitHub webhooks and continuous monitoring ensure you're notified within minutes of critical tool releases. Our precision filtering eliminates noise while ensuring zero false negatives for tools that matter to your security practice.`,
      features: [
        "Sub-minute update notifications",
        "Precision filtering algorithms",
        "Zero false negative guarantee",
        "Customizable alert thresholds"
      ],
      color: "success"
    },
    {
      icon: "Shield",
      title: "Ethical Foundation",
      subtitle: "Supporting defensive capabilities through offensive tool awareness",
      description: `We believe that understanding offensive capabilities strengthens defensive postures. Our platform promotes responsible disclosure, ethical hacking practices, and defensive awareness while maintaining the highest standards of professional integrity.`,
      features: [
        "Responsible disclosure advocacy",
        "Defensive context for offensive tools",
        "Ethical usage guidelines",
        "Professional integrity standards"
      ],
      color: "primary"
    }
  ];

  const getColorClasses = (color, isActive) => {
    const colors = {
      accent: isActive ? 'bg-accent text-primary border-accent' : 'bg-accent/10 text-accent border-accent/30',
      conversion: isActive ? 'bg-conversion text-conversion-foreground border-conversion' : 'bg-conversion/10 text-conversion border-conversion/30',
      success: isActive ? 'bg-success text-success-foreground border-success' : 'bg-success/10 text-success border-success/30',
      primary: isActive ? 'bg-primary text-primary-foreground border-primary' : 'bg-primary/10 text-primary border-primary/30'
    };
    return colors[color] || colors.accent;
  };

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Icon name="Compass" size={18} className="text-primary" />
            <span className="text-primary font-mono text-sm tracking-wider">CORE PRINCIPLES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our Brand Pillars
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Four foundational principles that guide every decision and drive our mission to revolutionize 
            cybersecurity tool discovery.
          </p>
        </div>

        {/* Interactive Pillars */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pillar Navigation */}
          <div className="space-y-4">
            {pillars.map((pillar, index) => (
              <button
                key={index}
                onClick={() => setActivePillar(index)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  activePillar === index 
                    ? getColorClasses(pillar.color, true) + ' shadow-lg transform scale-105'
                    : getColorClasses(pillar.color, false) + ' hover:shadow-md hover:scale-102'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activePillar === index ? 'bg-white/20' : 'bg-current/10'
                  }`}>
                    <Icon name={pillar.icon} size={24} className="text-current" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                    <p className={`text-sm ${activePillar === index ? 'text-current/90' : 'text-current/70'}`}>
                      {pillar.subtitle}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className={`transition-transform duration-300 ${
                      activePillar === index ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Active Pillar Content */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  getColorClasses(pillars[activePillar].color, false)
                }`}>
                  <Icon name={pillars[activePillar].icon} size={28} className="text-current" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">{pillars[activePillar].title}</h3>
                  <p className="text-text-secondary">{pillars[activePillar].subtitle}</p>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-8">
                {pillars[activePillar].description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-text-primary mb-4">Key Capabilities:</h4>
                {pillars[activePillar].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      pillars[activePillar].color === 'accent' ? 'bg-accent' :
                      pillars[activePillar].color === 'conversion' ? 'bg-conversion' :
                      pillars[activePillar].color === 'success'? 'bg-success' : 'bg-primary'
                    }`}></div>
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPillarsSection;