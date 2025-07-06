import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import FooterSection from './components/FooterSection';

const AboutGitHubRadar = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About OffSec Radar - Open Source Security Tool Discovery</title>
        <meta 
          name="description" 
          content="Learn about OffSec Radar's mission to discover security tools from GitHub's ecosystem through community-driven insights and open-source collaboration." 
        />
        <meta name="keywords" content="OffSec Radar, cybersecurity, security tools, GitHub, open source, community, security discovery" />
        <meta property="og:title" content="About OffSec Radar - Open Source Security Tool Discovery" />
        <meta property="og:description" content="Discover how OffSec Radar is revolutionizing security tool discovery with community-driven insights and GitHub integration." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About OffSec Radar - Open Source Security Tool Discovery" />
        <meta name="twitter:description" content="Learn about our mission to discover security tools through community collaboration." />
      </Helmet>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Mission Section */}
        <MissionSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default AboutGitHubRadar;