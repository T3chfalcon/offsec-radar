import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Intelligence Dashboard',
      path: '/intelligence-dashboard-homepage',
      icon: 'Activity'
    },
    {
      name: 'Tool Arsenal',
      path: '/tool-arsenal-discovery',
      icon: 'Shield'
    },
    {
      name: 'About',
      path: '/about',
      icon: 'Info'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-lg border-b border-accent/20' 
          : 'bg-primary/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/intelligence-dashboard-homepage" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Icon 
                  name="Radar" 
                  size={20} 
                  color="#0A1628" 
                  className="group-hover:animate-pulse" 
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-conversion rounded-full animate-pulse-glow"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-primary-foreground font-bold text-lg tracking-tight">
                OffSec Radar
              </span>
              <span className="text-accent text-xs font-mono tracking-wider">
                INTEL.SYS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? 'bg-accent/20 text-accent border border-accent/30' :'text-primary-foreground/80 hover:text-accent hover:bg-accent/10'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={16} 
                  className={isActivePath(item.path) ? 'text-accent' : 'text-current'} 
                />
                <span>{item.name}</span>
                {isActivePath(item.path) && (
                  <div className="w-1 h-1 bg-accent rounded-full animate-pulse-glow"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Removed Alerts and Start Monitoring buttons */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-primary-foreground hover:bg-accent/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="transition-transform duration-200" 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 pb-4' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-accent/20">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? 'bg-accent/20 text-accent border border-accent/30' :'text-primary-foreground/80 hover:text-accent hover:bg-accent/10'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={18} 
                  className={isActivePath(item.path) ? 'text-accent' : 'text-current'} 
                />
                <span>{item.name}</span>
                {isActivePath(item.path) && (
                  <div className="ml-auto w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                )}
              </Link>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-accent/20">
              {/* Removed mobile CTA buttons */}
            </div>
          </nav>
        </div>
      </div>

      {/* Real-time Activity Indicator */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60">
        <div className="h-full bg-accent animate-intelligence-flow"></div>
      </div>
    </header>
  );
};

export default Header;