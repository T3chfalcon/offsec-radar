import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const founders = [
    {
      name: "Dr. Sarah Chen",
      role: "Co-Founder & CEO",
      specialization: "Offensive Security Research",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      credentials: [
        "Former NSA Red Team Lead",
        "DEF CON Black Badge Winner",
        "PhD Computer Security - MIT",
        "Author of \'Advanced Penetration Testing'"
      ],
      achievements: [
        "15+ CVEs discovered",
        "50+ security conference talks",
        "Founded 3 successful security startups"
      ],
      social: {
        twitter: "@sarahchen_sec",
        linkedin: "sarah-chen-security",
        github: "sarahchen"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO",
      specialization: "Threat Intelligence & AI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      credentials: [
        "Ex-Google Security Engineer",
        "SANS Institute Instructor",
        "MS Machine Learning - Stanford",
        "CISSP, OSCP, GIAC Expert"
      ],
      achievements: [
        "Built threat intel platforms for Fortune 500",
        "30+ open source security tools",
        "AI/ML security research pioneer"
      ],
      social: {
        twitter: "@marcusrodriguez",
        linkedin: "marcus-rodriguez-ai",
        github: "mrodriguez"
      }
    },
    {
      name: "Alex Thompson",
      role: "Head of Community",
      specialization: "Security Community Building",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      credentials: [
        "Former OWASP Chapter Leader",
        "BSides Conference Organizer",
        "Certified Ethical Hacker",
        "Security Awareness Trainer"
      ],
      achievements: [
        "Built 10K+ member security communities",
        "Organized 25+ security conferences",
        "Mentored 200+ security professionals"
      ],
      social: {
        twitter: "@alexthompson_sec",
        linkedin: "alex-thompson-security",
        github: "athompson"
      }
    }
  ];

  const advisors = [
    {
      name: "Dr. Jennifer Walsh",
      role: "Security Research Advisor",
      company: "Former DARPA Program Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Industry Relations Advisor",
      company: "Ex-FireEye VP of Threat Intelligence",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Rachel Martinez",
      role: "Product Strategy Advisor",
      company: "Former Palantir Security Lead",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-6 py-2 mb-6">
            <Icon name="Users" size={18} className="text-success" />
            <span className="text-success font-mono text-sm tracking-wider">LEADERSHIP TEAM</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Meet the Founders
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A team of security veterans with decades of combined experience in offensive security, 
            threat intelligence, and community building.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {founders.map((founder, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-accent/30 h-full">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-colors duration-300">
                    <Image 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>

                {/* Basic Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-text-primary mb-1">{founder.name}</h3>
                  <p className="text-accent font-semibold mb-2">{founder.role}</p>
                  <p className="text-text-secondary text-sm">{founder.specialization}</p>
                </div>

                {/* Credentials */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3 text-sm">Credentials:</h4>
                  <div className="space-y-2">
                    {founder.credentials.map((credential, credIndex) => (
                      <div key={credIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-secondary text-sm">{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3 text-sm">Key Achievements:</h4>
                  <div className="space-y-2">
                    {founder.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-2">
                        <Icon name="Award" size={14} className="text-conversion mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  <a href={`https://twitter.com/${founder.social.twitter.replace('@', '')}`} className="text-text-secondary hover:text-accent transition-colors duration-200">
                    <Icon name="Twitter" size={18} />
                  </a>
                  <a href={`https://linkedin.com/in/${founder.social.linkedin}`} className="text-text-secondary hover:text-accent transition-colors duration-200">
                    <Icon name="Linkedin" size={18} />
                  </a>
                  <a href={`https://github.com/${founder.social.github}`} className="text-text-secondary hover:text-accent transition-colors duration-200">
                    <Icon name="Github" size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Advisory Board</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Industry veterans providing strategic guidance and deep domain expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gray-200 mb-4">
                  <Image 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-text-primary mb-1">{advisor.name}</h4>
                <p className="text-accent text-sm font-medium mb-1">{advisor.role}</p>
                <p className="text-text-secondary text-sm">{advisor.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;