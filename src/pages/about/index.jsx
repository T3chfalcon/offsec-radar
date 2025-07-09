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
        <title>About OffSec Radar - Professional Security Tool Discovery Platform</title>
        <meta 
          name="description" 
          content="Learn about OffSec Radar's mission to revolutionize cybersecurity tool discovery. Professional platform for discovering the best open-source security tools from GitHub's ecosystem through community-driven insights, expert curation, and advanced filtering. Trusted by penetration testers, red team operators, blue team defenders, and security researchers worldwide." 
        />
        <meta name="keywords" content="OffSec Radar, cybersecurity platform, security tool discovery, GitHub security tools, penetration testing, red team tools, blue team tools, OSINT, security research, open source security, community-driven security" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="About OffSec Radar - Professional Security Tool Discovery Platform" />
        <meta property="og:description" content="Discover how OffSec Radar is revolutionizing cybersecurity tool discovery with community-driven insights, expert curation, and GitHub integration. Professional platform trusted by security professionals worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://offsecradar.com/about" />
        <meta property="og:image" content="https://offsecradar.com/assets/images/offsec-radar-social.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="OffSec Radar About Page showing platform information" />
        <meta property="og:site_name" content="OffSec Radar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@t3chfalcon" />
        <meta name="twitter:creator" content="@t3chfalcon" />
        <meta name="twitter:title" content="About OffSec Radar - Open Source Security Tool Discovery" />
        <meta name="twitter:description" content="Learn about OffSec Radar, the open-source platform for discovering security tools from GitHub's ecosystem." />
        <meta name="twitter:image" content="https://offsecradar.com/assets/images/offsec-radar-social.png" />
        <meta name="twitter:image:alt" content="OffSec Radar platform showcasing security tool discovery features" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://offsecradar.com/about" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "OffSec Radar",
            description: "Professional security tool discovery platform",
            url: "https://offsecradar.com",
            logo: "https://offsecradar.com/assets/images/logo.png",
            sameAs: [
              "https://x.com/t3chfalcon",
              "https://github.com/T3chfalcon/offsec-radar"
            ],
            founder: {
              "@type": "Person",
              name: "T3chfalcon"
            }
          })}
        </script>
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