import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MethodologySection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const methodologySteps = [
    {
      icon: "Search",
      title: "Intelligent Discovery",
      description: "AI-powered algorithms continuously scan GitHub repositories, analyzing commit patterns, documentation quality, and community engagement metrics.",
      details: [
        "Natural language processing for repository analysis",
        "Machine learning models trained on security tool patterns",
        "Real-time monitoring of 50,000+ repositories",
        "Automated categorization and tagging systems"
      ],
      metrics: {
        repositories: "50K+",
        accuracy: "94.7%",
        coverage: "Real-time"
      }
    },
    {
      icon: "Users",
      title: "Community Validation",
      description: "Security professionals review, rate, and validate discovered tools through our peer verification system.",
      details: [
        "Verified security professional reviewer network",
        "Multi-stage peer review process",
        "Community-driven quality scoring",
        "Expert annotation and context addition"
      ],
      metrics: {
        reviewers: "2.8K",
        accuracy: "99.2%",
        coverage: "24-48hrs"
      }
    },
    {
      icon: "Shield",
      title: "Quality Assurance",
      description: "Comprehensive security analysis and quality checks ensure only legitimate, safe tools reach our platform.",
      details: [
        "Automated security vulnerability scanning",
        "Code quality and maintainability analysis",
        "License compliance verification",
        "Malware and backdoor detection systems"
      ],
      metrics: {
        scanned: "100%",
        accuracy: "99.8%",
        coverage: "Automated"
      }
    },
    {
      icon: "TrendingUp",
      title: "Intelligence Analysis",
      description: "Advanced analytics provide context, trends, and predictive insights about tool evolution and threat landscape changes.",
      details: [
        "Trend analysis and pattern recognition",
        "Threat landscape correlation",
        "Predictive modeling for emerging tools",
        "Competitive intelligence and gap analysis"
      ],
      metrics: {
        predictions: "87%",
        accuracy: "92.3%",
        coverage: "Weekly"
      }
    }
  ];

  const qualityMetrics = [
    {
      icon: "Target",
      label: "Discovery Accuracy",
      value: "94.7%",
      description: "Tools correctly identified as security-relevant"
    },
    {
      icon: "Clock",
      label: "Detection Speed",
      value: "< 15min",
      description: "Average time from tool release to platform detection"
    },
    {
      icon: "CheckCircle",
      label: "Validation Rate",
      value: "99.2%",
      description: "Community-validated tools meeting quality standards"
    },
    {
      icon: "Shield",
      label: "Security Score",
      value: "99.8%",
      description: "Tools passing comprehensive security analysis"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-conversion/10 border border-conversion/20 rounded-full px-6 py-2 mb-6">
            <Icon name="Cog" size={18} className="text-conversion" />
            <span className="text-conversion font-mono text-sm tracking-wider">METHODOLOGY</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            How We Ensure Quality
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our four-stage methodology combines artificial intelligence, community expertise, 
            and rigorous quality assurance to deliver the most reliable security tool intelligence.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Step Navigation */}
          <div className="space-y-4">
            {methodologySteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-conversion text-conversion-foreground border-conversion shadow-lg transform scale-105'
                    : 'bg-white border-gray-200 hover:border-conversion/30 hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeStep === index ? 'bg-white/20' : 'bg-conversion/10'
                  }`}>
                    <Icon 
                      name={step.icon} 
                      size={24} 
                      className={activeStep === index ? 'text-white' : 'text-conversion'} 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`text-xs font-mono px-2 py-1 rounded ${
                        activeStep === index ? 'bg-white/20 text-white' : 'bg-conversion/10 text-conversion'
                      }`}>
                        STEP {index + 1}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold mb-1 ${
                      activeStep === index ? 'text-white' : 'text-text-primary'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${
                      activeStep === index ? 'text-white/80' : 'text-text-secondary'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-conversion/10 rounded-xl flex items-center justify-center">
                  <Icon name={methodologySteps[activeStep].icon} size={28} className="text-conversion" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">{methodologySteps[activeStep].title}</h3>
                  <p className="text-text-secondary">Step {activeStep + 1} of 4</p>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-8">
                {methodologySteps[activeStep].description}
              </p>
              
              {/* Process Details */}
              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-text-primary mb-4">Process Details:</h4>
                {methodologySteps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-conversion rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                {Object.entries(methodologySteps[activeStep].metrics).map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-conversion mb-1">{value}</div>
                    <div className="text-xs text-text-secondary font-mono tracking-wider uppercase">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Quality Assurance Metrics
            </h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Real-time performance indicators that demonstrate our commitment to accuracy and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric.icon} size={28} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{metric.value}</div>
                <div className="text-primary-foreground font-semibold mb-2">{metric.label}</div>
                <div className="text-primary-foreground/80 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;