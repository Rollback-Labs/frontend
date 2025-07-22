import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Coins, 
  TrendingUp, 
  Users, 
  Target, 
  Vote, 
  Fuel, 
  Award, 
  Shield, 
  Copy, 
  PieChart,
  Sparkles 
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Contract address - replace with actual address when deployed
const CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890";

const TokenomicsPage = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Tokenomics - Rollback";
  }, []);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy address");
    }
  };

  // Supply allocation data
  const allocations = [
    {
      name: "Marketing and Partnerships",
      percentage: 25,
      amount: "2,500,000",
      color: "bg-blue-500",
      icon: Target,
      description: "Promoting adoption and strategic partnerships"
    },
    {
      name: "Team",
      percentage: 15,
      amount: "1,500,000",
      color: "bg-green-500", 
      icon: Users,
      description: "Core development team and advisors"
    },
    {
      name: "Governance",
      percentage: 5,
      amount: "500,000",
      color: "bg-purple-500",
      icon: Vote,
      description: "Community governance and decision making"
    },
    {
      name: "Public Sale & Liquidity",
      percentage: 55,
      amount: "5,500,000",
      color: "bg-rollback-primary",
      icon: TrendingUp,
      description: "Public distribution and DEX liquidity"
    }
  ];

  // Use cases data
  const useCases = [
    {
      title: "Gas Fee Subsidies",
      icon: Fuel,
      description: "Users can use ROLL tokens to pay for gas fees associated with wallet monitoring and rollback operations.",
      benefits: ["Reduced transaction costs", "Seamless user experience", "Network fee optimization"]
    },
    {
      title: "Staking for Governance", 
      icon: Shield,
      description: "Holders can stake ROLL to gain voting rights in governance decisions, such as threshold changes and emergency procedures.",
      benefits: ["Voting power", "Protocol governance", "Emergency decision rights"]
    },
    {
      title: "Rewards",
      icon: Award,
      description: "Active participants, such as those maintaining linked wallets or initiating successful rollbacks, receive ROLL rewards.",
      benefits: ["Activity incentives", "Network participation", "Loyalty rewards"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-rollback-light/30 hero-pattern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center mb-6"
              >
                <div className="w-16 h-16 bg-rollback-primary rounded-3xl flex items-center justify-center mr-4">
                  <Coins className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  <span className="gradient-text">ROLL Tokenomics</span>
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Complete overview of ROLL token economics, utility, and distribution
              </motion.p>
            </div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { label: "Total Supply", value: "10M", subtitle: "ROLL Tokens", icon: PieChart, color: "bg-blue-100", iconColor: "text-blue-600" },
                { label: "Buy Tax", value: "5%", subtitle: "On purchases", icon: TrendingUp, color: "bg-green-100", iconColor: "text-green-600" },
                { label: "Sell Tax", value: "5%", subtitle: "On sales", icon: TrendingUp, color: "bg-orange-100", iconColor: "text-orange-600" },
                { label: "Network", value: "ETH", subtitle: "ERC-20", icon: Coins, color: "bg-purple-100", iconColor: "text-purple-600" }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-rollback-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-left">
                            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                          </div>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                            <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contract Address */}
        <section className="py-16 bg-rollback-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="max-w-4xl mx-auto border-rollback-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold flex items-center justify-center">
                    <Copy className="h-6 w-6 mr-3 text-rollback-primary" />
                    Contract Address
                  </CardTitle>
                  <CardDescription className="text-base">
                    Official ROLL token smart contract address
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-rollback-light/50 to-rollback-cream/50 rounded-xl p-6 border-2 border-dashed border-rollback-primary/30">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-mono text-gray-900 bg-white px-4 py-3 rounded-lg border break-all text-center sm:text-left">
                          {CONTRACT_ADDRESS}
                        </p>
                      </div>
                      <Button
                        onClick={handleCopyAddress}
                        variant={copied ? "default" : "outline"}
                        size="lg"
                        className={`${
                          copied 
                            ? "bg-green-600 hover:bg-green-700 text-white" 
                            : "border-rollback-primary/30 hover:bg-rollback-light/50"
                        } transition-all duration-200 rounded-xl min-w-[120px]`}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        {copied ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Token Distribution */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">Token Distribution</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transparent allocation breakdown of the 10 million ROLL token supply
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Visual Distribution */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold mb-6 text-center lg:text-left">Distribution Overview</h3>
                {allocations.map((allocation, index) => {
                  const Icon = allocation.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${allocation.color}`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">{allocation.name}</span>
                          <span className="text-sm font-bold text-gray-900">{allocation.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div 
                            className={`h-3 rounded-full ${allocation.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${allocation.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Detailed Breakdown */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold mb-6 text-center lg:text-left">Detailed Allocation</h3>
                {allocations.map((allocation, index) => {
                  const Icon = allocation.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-white to-rollback-light/30 rounded-xl p-4 border border-rollback-primary/10 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${allocation.color}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-semibold text-gray-900">{allocation.name}</h4>
                            <Badge variant="outline" className="text-xs border-rollback-primary/30">
                              {allocation.amount} ROLL
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{allocation.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Token Utility */}
        <section className="py-16 bg-rollback-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">Utility of ROLL Tokens</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                How ROLL tokens power the Rollback ecosystem
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-rollback-primary/20 bg-gradient-to-br from-white to-rollback-light/30">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-14 h-14 bg-rollback-primary rounded-xl flex items-center justify-center mr-4">
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">{useCase.title}</h3>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                          {useCase.description}
                        </p>
                        
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-gray-900 flex items-center">
                            <Sparkles className="h-4 w-4 mr-2 text-rollback-primary" />
                            Key Benefits
                          </h4>
                          <div className="space-y-2">
                            {useCase.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-rollback-primary rounded-full"></div>
                                <span className="text-xs text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tax Structure */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">Tax Structure (5/5)</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transparent fee structure for all ROLL token transactions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Buy Tax */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                        <TrendingUp className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-900">Buy Tax</h3>
                        <p className="text-3xl font-bold text-green-700">5%</p>
                      </div>
                    </div>
                    <p className="text-green-800 text-sm mb-4">
                      Applied to all token purchases to support ecosystem development
                    </p>
                    <div className="space-y-2">
                      {[
                        { label: "Development Fund", percentage: "2%" },
                        { label: "Marketing & Partnerships", percentage: "2%" },
                        { label: "Liquidity Pool", percentage: "1%" }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-green-700">{item.label}</span>
                          <span className="font-semibold text-green-800">{item.percentage}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sell Tax */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                        <TrendingUp className="h-7 w-7 text-white transform rotate-180" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-orange-900">Sell Tax</h3>
                        <p className="text-3xl font-bold text-orange-700">5%</p>
                      </div>
                    </div>
                    <p className="text-orange-800 text-sm mb-4">
                      Applied to all token sales to maintain protocol sustainability
                    </p>
                    <div className="space-y-2">
                      {[
                        { label: "Treasury", percentage: "2%" },
                        { label: "Staking Rewards", percentage: "2%" },
                        { label: "Burn Mechanism", percentage: "1%" }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-orange-700">{item.label}</span>
                          <span className="font-semibold text-orange-800">{item.percentage}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TokenomicsPage; 