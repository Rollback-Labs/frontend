import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import DashboardPreview from "@/components/DashboardPreview";
import Trust from "@/components/Trust";
import KYCVerified from "@/components/KYCVerified";
import FAQ from "@/components/FAQ";
import { useEffect } from "react";
import Roadmap from "@/components/Roadmap";

const HomePage = () => {
  useEffect(() => {
    document.title = "Rollback - Never Lose Access to Your Crypto Again";
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <UseCases />
      <DashboardPreview />
      <KYCVerified />
      <Roadmap />
      {/* <Trust /> */}
      <FAQ />
    </div>
  );
};

export default HomePage;
