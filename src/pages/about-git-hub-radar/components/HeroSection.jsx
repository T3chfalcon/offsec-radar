import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/90"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full quantum-particle"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-conversion rounded-full quantum-particle" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full quantum-particle" style={{animationDelay: '2s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Brand Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 rounded-full px-6 py-2 mb-8">
            <Icon name="Radar" size={20} className="text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider">OPEN SOURCE</span>
            <div className="w-2 h-2 bg-accent rounded-full pulse-indicator"></div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">
              OffSec Radar
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            <span className="text-accent font-semibold">Open Source</span> Security Tool Discovery
          </p>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Discover security tools from GitHub's ecosystem. Built by the community, for the community.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="primary"
              size="lg"
              className="bg-conversion text-conversion-foreground hover:bg-conversion/90 font-semibold px-8 py-4"
              iconName="Search"
              iconSize={20}
            >
              Explore Tools
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent/30 text-accent hover:bg-accent/10 px-8 py-4"
              iconName="GitHub"
              iconSize={20}
            >
              View on GitHub
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-accent/20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">Open</div>
              <div className="text-xs sm:text-sm text-primary-foreground/70 font-mono tracking-wider">SOURCE</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">Community</div>
              <div className="text-xs sm:text-sm text-primary-foreground/70 font-mono tracking-wider">DRIVEN</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">Free</div>
              <div className="text-xs sm:text-sm text-primary-foreground/70 font-mono tracking-wider">FOREVER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;