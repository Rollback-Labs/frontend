
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Clock, Bell, Settings, Wallet, Shield } from "lucide-react";
import { motion } from "framer-motion";

const DashboardPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Simple, Intuitive Dashboard</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our user-friendly dashboard makes it easy to set up and manage your rollback protection.
              Monitor your wallets, configure fallbacks, and enjoy peace of mind with just a few clicks.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-rollback-light rounded-full p-2 mr-4">
                  <Plus className="h-5 w-5 text-rollback-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Easy Setup</h3>
                  <p className="text-muted-foreground">Configure your rollback parameters in minutes with our guided process</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-rollback-light rounded-full p-2 mr-4">
                  <Clock className="h-5 w-5 text-rollback-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Real-time Monitoring</h3>
                  <p className="text-muted-foreground">View current status and remaining time before rollback activation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-rollback-light rounded-full p-2 mr-4">
                  <Bell className="h-5 w-5 text-rollback-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Smart Notifications</h3>
                  <p className="text-muted-foreground">Receive alerts when your wallets approach inactivity thresholds</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="mt-8 bg-rollback-primary hover:bg-rollback-primary/90 text-white">
              <Link to="/app">
                Launch Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
              <div className="bg-rollback-dark p-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white text-sm font-medium mx-auto">Rollback Dashboard</div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 bg-rollback-light/50 p-4 rounded-lg border border-rollback-primary/20">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Active Wallets</h4>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">3 Monitored</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-2 rounded border border-border flex items-center justify-between">
                        <div className="flex items-center">
                          <Wallet className="h-4 w-4 text-rollback-primary mr-2" />
                          <span className="text-sm font-medium">0x71C...9E3F</span>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Active</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-border flex items-center justify-between">
                        <div className="flex items-center">
                          <Wallet className="h-4 w-4 text-rollback-primary mr-2" />
                          <span className="text-sm font-medium">0x3A8...2C1D</span>
                        </div>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">3 days left</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-rollback-light/50 p-4 rounded-lg border border-rollback-primary/20">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Fallback Wallets</h4>
                      <Settings className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-2 rounded border border-border flex items-center justify-between">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-rollback-primary mr-2" />
                          <span className="text-sm font-medium">Primary: 0x9B2...F47A</span>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded border border-border flex items-center justify-between">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-rollback-secondary mr-2" />
                          <span className="text-sm font-medium">Secondary: 0x6E5...A18C</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-rollback-primary/10 to-rollback-secondary/10 p-4 rounded-lg border border-rollback-primary/20 mb-6">
                  <h4 className="font-semibold mb-2">Activity Timeline</h4>
                  <div className="relative">
                    <div className="absolute top-0 left-4 h-full w-0.5 bg-rollback-primary/20"></div>
                    
                    {[
                      { time: "Today", event: "Wallet 0x71C...9E3F refreshed activity", icon: <Wallet /> },
                      { time: "2 days ago", event: "Updated fallback parameters", icon: <Settings /> },
                      { time: "5 days ago", event: "Added new secondary fallback", icon: <Plus /> },
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex mb-4 last:mb-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-white rounded-full p-1 z-10 mr-4">
                          <div className="bg-rollback-primary rounded-full p-1 text-white">
                            {React.cloneElement(item.icon, { className: "h-3 w-3" })}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                          <p className="text-sm">{item.event}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button size="sm" variant="outline" className="border-rollback-primary text-rollback-primary hover:bg-rollback-primary/10">
                    <Plus className="mr-1 h-3 w-3" />
                    Add New Wallet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
