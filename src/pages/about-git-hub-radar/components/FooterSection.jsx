import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Tool Discovery', href: '/tool-arsenal-discovery' }
    ],
    community: [
      { name: 'About Us', href: '/about-git-hub-radar' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', href: 'https://github.com/T3chfalcon/offsec-radar' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://x.com/t3chfalcon' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">


      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Radar" size={24} className="text-primary" />
              </div>
              <div>
                <div className="text-xl font-bold">OffSec Radar</div>
                <div className="text-accent text-xs font-mono tracking-wider">OPEN SOURCE</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Open-source security tool discovery platform powered by the community and GitHub's ecosystem.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:bg-accent/10 transition-all duration-200"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} OffSec Radar. Open source project.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full pulse-indicator"></div>
                <span className="text-success text-sm font-mono">Community Active</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-primary-foreground/60 text-sm">
                <Icon name="Heart" size={14} />
                <span>Made with ❤️ by <a href="https://t3chfalcon.vercel.app" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">t3chfalcon</a> for the community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;