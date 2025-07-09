import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSection = () => {
  const certifications = [
    {
      icon: "Shield",
      title: "SOC 2 Type II",
      description: "Comprehensive security, availability, and confidentiality controls",
      status: "Certified",
      color: "success"
    },
    {
      icon: "Lock",
      title: "ISO 27001",
      description: "International standard for information security management",
      status: "Certified",
      color: "success"
    },
    {
      icon: "Eye",
      title: "Privacy Shield",
      description: "EU-US data transfer framework compliance",
      status: "Compliant",
      color: "accent"
    },
    {
      icon: "FileText",
      title: "GDPR Ready",
      description: "Full compliance with European data protection regulations",
      status: "Compliant",
      color: "accent"
    }
  ];

  const securityPractices = [
    {
      icon: "Database",
      title: "Data Encryption",
      description: "End-to-end encryption for all data in transit and at rest using AES-256 encryption standards"
    },
    {
      icon: "UserCheck",
      title: "Access Controls",
      description: "Multi-factor authentication, role-based access controls, and regular access reviews"
    },
    {
      icon: "Activity",
      title: "Continuous Monitoring",
      description: "24/7 security monitoring with automated threat detection and incident response"
    },
    {
      icon: "RefreshCw",
      title: "Regular Audits",
      description: "Quarterly security assessments and annual penetration testing by third-party experts"
    },
    {
      icon: "AlertTriangle",
      title: "Incident Response",
      description: "Comprehensive incident response plan with 15-minute detection and 1-hour response SLA"
    },
    {
      icon: "Archive",
      title: "Data Backup",
      description: "Automated daily backups with 99.99% recovery guarantee and geographic redundancy"
    }
  ];

  const privacyCommitments = [
    {
      icon: "UserX",
      title: "No Personal Data Sale",
      description: "We never sell, rent, or share personal information with third parties for marketing purposes"
    },
    {
      icon: "Eye",
      title: "Transparent Collection",
      description: "Clear disclosure of what data we collect, why we collect it, and how it\'s used"
    },
    {
      icon: "Trash2",
      title: "Data Deletion Rights",
      description: "Users can request complete data deletion at any time with 30-day processing guarantee"
    },
    {
      icon: "Settings",
      title: "Granular Controls",
      description: "Fine-grained privacy controls allowing users to customize their data sharing preferences"
    }
  ];

  const responsibleDisclosure = [
    {
      step: "01",
      title: "Ethical Guidelines",
      description: "All tools are presented with ethical usage guidelines and defensive context"
    },
    {
      step: "02",
      title: "Responsible Timing",
      description: "Coordinated disclosure timelines that allow vendors to patch vulnerabilities"
    },
    {
      step: "03",
      title: "Community Standards",
      description: "Strict community guidelines prohibiting malicious use or illegal activities"
    },
    {
      step: "04",
      title: "Educational Focus",
      description: "Emphasis on educational value and defensive awareness rather than exploitation"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-6 py-2 mb-6">
            <Icon name="Shield" size={18} className="text-success" />
            <span className="text-success font-mono text-sm tracking-wider">TRUST & SECURITY</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Built on Trust & Integrity
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Security professionals trust us with their most critical intelligence needs. 
            We've built our platform with the highest standards of security, privacy, and ethical responsibility.
          </p>
        </div>

        {/* Security Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">Security Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  cert.color === 'success' ? 'bg-success/10' : 'bg-accent/10'
                }`}>
                  <Icon 
                    name={cert.icon} 
                    size={28} 
                    className={cert.color === 'success' ? 'text-success' : 'text-accent'} 
                  />
                </div>
                <h4 className="font-bold text-text-primary mb-2">{cert.title}</h4>
                <p className="text-text-secondary text-sm mb-3">{cert.description}</p>
                <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${
                  cert.color === 'success' ?'bg-success/10 text-success' :'bg-accent/10 text-accent'
                }`}>
                  <Icon name="CheckCircle" size={12} />
                  <span>{cert.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Practices */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">Security Practices</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPractices.map((practice, index) => (
              <div key={index} className="bg-surface rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={practice.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-3">{practice.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Commitments */}
        <div className="bg-gradient-to-r from-accent/5 to-success/5 rounded-2xl p-8 lg:p-12 mb-20">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">Privacy Commitments</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {privacyCommitments.map((commitment, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={commitment.icon} size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">{commitment.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Disclosure */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Responsible Disclosure</h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              We believe in ethical security research and responsible disclosure practices that benefit the entire community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responsibleDisclosure.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="font-semibold text-primary-foreground mb-3">{item.title}</h4>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-accent/20">
            <p className="text-primary-foreground/90 mb-4">
              Have a security concern or vulnerability to report?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="mailto:security@githubradar.com" 
                className="flex items-center space-x-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                <Icon name="Mail" size={18} />
                <span>security@githubradar.com</span>
              </a>
              <a 
                href="https://githubradar.com/security-policy" 
                className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-200"
              >
                <Icon name="FileText" size={18} />
                <span>View Security Policy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;