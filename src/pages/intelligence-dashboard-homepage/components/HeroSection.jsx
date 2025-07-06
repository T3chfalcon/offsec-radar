import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const HeroSection = ({ onSearch, searchValue, setSearchValue, stats }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
    }
  };

  return (
    <section className="relative bg-primary min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full quantum-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Hero Content */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                <Icon name="Radar" size={32} color="#0A1628" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-conversion rounded-full animate-pulse-glow flex items-center justify-center">
                <Icon name="Zap" size={12} color="#0A1628" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover the security tools
            <span className="block text-accent terminal-text">that matter</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Open-source cybersecurity tool discovery platform powered by the community and GitHub's ecosystem.
          </p>

          {/* Real-time Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="holographic-card p-4 sm:p-6 rounded-xl">
                <div className="flex items-center justify-center mb-3">
                  <Icon name={stat.icon} size={20} className="sm:text-2xl text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-2 terminal-text">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
                <div className="mt-2 text-xs text-accent">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto mb-8 px-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon name="Search" size={20} className="text-primary-foreground/50" />
              </div>
              <Input
                type="search"
                placeholder="Search security tools..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-primary-800/50 border border-accent/30 rounded-xl text-primary-foreground placeholder-primary-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/20 text-base sm:text-lg"
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="bg-accent text-primary hover:bg-accent/90"
                  iconName="ArrowRight"
                  iconSize={16}
                >
                  Search
                </Button>
              </div>
            </div>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-primary-foreground/60">
              <span className="flex items-center">
                <Icon name="GitHub" size={14} className="mr-1 text-accent" />
                GitHub Powered
              </span>
              <span className="flex items-center">
                <Icon name="Clock" size={14} className="mr-1 text-accent" />
                Real-time
              </span>
              <span className="flex items-center">
                <Icon name="Users" size={14} className="mr-1 text-accent" />
                Community Driven
              </span>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              size="lg"
              className="bg-conversion text-conversion-foreground hover:bg-conversion/90 font-semibold"
              iconName="Search"
              iconSize={20}
            >
              Explore Tools
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent/30 text-accent hover:bg-accent/10"
              iconName="GitHub"
              iconSize={20}
            >
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-primary-foreground/60 text-sm">Explore Tools</span>
            <Icon name="ChevronDown" size={20} className="text-accent" />
          </div>
        </div>
      </div>

      {/* Real-time Activity Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60">
        <div className="h-full bg-accent animate-intelligence-flow"></div>
      </div>
    </section>
  );
};

export default HeroSection;