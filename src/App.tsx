import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import BlogPage from "./pages/BlogPage";
import DocumentationPage from "./pages/DocumentationPage";
import NotFound from "./pages/NotFound";
import MediaKitPage from "./pages/MediaKitPage";
import TokenomicsPage from "./pages/TokenomicsPage";
import FeedbackPage from "./pages/FeedbackPage";
import { Analytics } from "@vercel/analytics/react";

// Add framer-motion
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Analytics />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/docs" element={<DocumentationPage />} />
            <Route path="/media-kit" element={<MediaKitPage />} />
            <Route path="/tokenomics" element={<TokenomicsPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
