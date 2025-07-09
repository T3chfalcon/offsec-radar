import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import IntelligenceDashboardHomepage from "pages/intelligence-dashboard-homepage";
import AboutGitHubRadar from "pages/about";
import ToolArsenalDiscovery from "pages/tool-arsenal-discovery";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<IntelligenceDashboardHomepage />} />
        <Route path="/intelligence-dashboard-homepage" element={<IntelligenceDashboardHomepage />} />
        <Route path="/about" element={<AboutGitHubRadar />} />
        <Route path="/tool-arsenal-discovery" element={<ToolArsenalDiscovery />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;