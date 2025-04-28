
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Sparkles } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About - Rollback";
  }, []);

  return (
    <Layout>
      <div className="min-h-screen pt-20">
        <section className="py-16 bg-rollback-light/30 hero-pattern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">
                <span className="gradient-text">About Rollback</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Our mission is to ensure no cryptocurrency is ever permanently lost again.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    Rollback was founded in 2025 by a team of blockchain engineers who witnessed the growing problem of permanently lost cryptocurrency assets.
                  </p>
                  <p className="mb-4">
                    After seeing friends and family members lose access to their crypto through lost private keys, forgotten passwords, and estate planning oversights, we decided to build a solution that could protect digital assets from permanent loss.
                  </p>
                  <p>
                    Our team brings together expertise from blockchain development, cybersecurity, and financial planning to create a protocol that ensures cryptocurrency assets remain accessible to their rightful owners or designated beneficiaries.
                  </p>
                </div>
              </div>
              <div className="relative border border-rollback-primary/20 rounded-2xl p-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rollback-cream to-rollback-light opacity-50"></div>
                <div className="relative p-8 bg-white/80 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Sparkles className="text-rollback-primary mr-2 h-5 w-5" />
                    Our Vision
                  </h3>
                  <p className="mb-6">
                    A world where no digital asset is ever permanently lost, where crypto inheritance is straightforward, and where wallet security has an automatic safety net.
                  </p>
                  <div className="bg-rollback-light/50 p-4 rounded-lg">
                    <p className="font-medium text-center italic">
                      "We're building the safety rails for the future of finance."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Border Beam for the team section */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-rollback-primary/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-6 text-xl font-medium text-rollback-primary">Our Team</span>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-rollback-primary/20 to-rollback-secondary/20"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">Team Member {i}</h3>
                    <p className="text-rollback-primary mb-3">Co-Founder & Developer</p>
                    <p className="text-muted-foreground mb-4">
                      Experienced blockchain developer with expertise in smart contract security and optimization.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Marquee section for partners */}
        <section className="py-16 bg-rollback-light/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
            <div className="border-y border-rollback-primary/20 py-8 overflow-hidden">
              <div className="flex animate-marquee space-x-16">
                {Array(6).fill(null).map((_, i) => (
                  <div key={i} className="flex items-center justify-center min-w-[150px]">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-rollback-primary to-rollback-secondary"></div>
                    <span className="ml-2 font-medium">Partner {i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
