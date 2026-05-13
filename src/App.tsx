import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

const queryClient = new QueryClient();

function RouteAnalytics() {
  const location = useLocation();
  useEffect(() => {
    try {
      const win = window as any;
      if (win.__VERCEL_ANALYTICS && typeof win.__VERCEL_ANALYTICS.page === "function") {
        win.__VERCEL_ANALYTICS.page();
      } else if (win.vercel && win.vercel.analytics && typeof win.vercel.analytics.page === "function") {
        win.vercel.analytics.page();
      }
    } catch (e) {
      // ignore
    }
  }, [location.pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
          <Analytics />
          <SpeedInsights />
        <Router>
          <RouteAnalytics />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/resume" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
