import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Sparkles,
  ExternalLink,
  Zap,
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
      name: "Public & Liquidity",
      percentage: 70,
      amount: "7M",
      color: "from-blue-400 to-blue-600",
      icon: TrendingUp,
      description: "Available for community and trading",
    },
    {
      name: "Marketing",
      percentage: 15,
      amount: "1.5M",
      color: "from-green-400 to-green-600",
      icon: Target,
      description: "Growing our ecosystem",
    },
    {
      name: "Team",
      percentage: 10,
      amount: "1M",
      color: "from-purple-400 to-purple-600",
      icon: Users,
      description: "Core development team",
    },
    {
      name: "Governance",
      percentage: 5,
      amount: "500K",
      color: "from-orange-400 to-orange-600",
      icon: Vote,
      description: "Community decisions",
    },
  ];

  // Use cases data
  const useCases = [
    {
      title: "Pay Gas Fees",
      icon: Fuel,
      description:
        "Use ROLL tokens to pay for all your rollback operations without worrying about network fees.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Governance Power",
      icon: Shield,
      description:
        "Stake your ROLL tokens and have a say in how the protocol evolves and grows.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Earn Rewards",
      icon: Award,
      description:
        "Get rewarded for keeping your wallets active and helping secure the network.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-20">
        {/* Hero Section with Token Image */}
        <section className="py-20 bg-gradient-to-br from-rollback-light/40 via-white to-rollback-cream/30 hero-pattern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center lg:text-left"
                >
                  <div className="inline-flex items-center bg-rollback-primary/10 rounded-full px-6 py-2 mb-6">
                    <Sparkles className="h-5 w-5 text-rollback-primary mr-2" />
                    <span className="text-rollback-primary font-semibold">
                      Meet ROLL Token
                    </span>
                  </div>

                  <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="gradient-text">Power Your</span>
                    <br />
                    <span className="text-rollback-dark">Crypto Journey</span>
                  </h1>

                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    ROLL is the heart of the Rollback ecosystem. Pay fees, earn
                    rewards, and govern the future of decentralized asset
                    recovery.
                  </p>

                  <Button
                    size="lg"
                    className="bg-rollback-primary hover:bg-rollback-primary/90 text-white px-8 py-3 rounded-full text-lg shadow-lg"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    Get ROLL Tokens
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </motion.div>

                {/* Right side - Token Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex justify-center lg:justify-end"
                >
                  <div className="relative">
                    {/* Placeholder for token image */}
                    <div className="w-80 h-80 bg-gradient-to-br from-rollback-primary/20 to-rollback-secondary/20 rounded-3xl flex items-center justify-center shadow-2xl border border-rollback-primary/30">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-rollback-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Coins className="h-16 w-16 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-rollback-dark mb-2">
                          ROLL Token
                        </h3>
                        <p className="text-rollback-primary font-semibold">
                          Coming Soon
                        </p>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-rollback-primary rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-rollback-secondary rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -left-6 w-4 h-4 bg-rollback-brown rounded-full animate-ping"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 -mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-rollback-primary/10"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    label: "Total Supply",
                    value: "10M",
                    icon: PieChart,
                    color: "text-blue-600",
                  },
                  {
                    label: "Network",
                    value: "ETH",
                    icon: Coins,
                    color: "text-purple-600",
                  },
                  {
                    label: "Buy Tax",
                    value: "5%",
                    icon: TrendingUp,
                    color: "text-green-600",
                  },
                  {
                    label: "Sell Tax",
                    value: "5%",
                    icon: TrendingUp,
                    color: "text-orange-600",
                  },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <Icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                      <p className="text-2xl lg:text-3xl font-bold text-rollback-dark mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Token Distribution - More Visual */}
        <section className="py-20 bg-gradient-to-b from-white to-rollback-cream/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">How We Share</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fair and transparent distribution for everyone in the Rollback
                community
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
                <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                  Distribution Overview
                </h3>
                {allocations.map((allocation, index) => {
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div
                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${allocation.color}`}
                      ></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-medium text-gray-900">
                            {allocation.name}
                          </span>
                          <span className="text-lg font-bold text-gray-900">
                            {allocation.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <motion.div
                            className={`h-4 rounded-full bg-gradient-to-r ${allocation.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${allocation.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {allocation.amount} ROLL tokens
                        </p>
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
                <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                  Detailed Allocation
                </h3>
                {allocations.map((allocation, index) => {
                  const Icon = allocation.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-white to-rollback-light/30 rounded-xl p-3 border border-rollback-primary/10 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${allocation.color} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full">
                          <div className="flex items-center justify-between  w-full">
                            <h4 className="text-lg font-semibold text-gray-900">
                              {allocation.name}
                            </h4>
                            <Badge
                              variant="outline"
                              className="text-sm border-rollback-primary/30 bg-rollback-primary/5"
                            >
                              {allocation.amount} ROLL
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {allocation.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">What Can You Do</span>
                <br />
                <span className="text-rollback-dark">With ROLL?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your ROLL tokens unlock powerful features in the Rollback
                ecosystem
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
                    className="group"
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      <div
                        className={`h-2 bg-gradient-to-r ${useCase.color}`}
                      ></div>
                      <CardContent className="p-8">
                        <div
                          className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-rollback-dark mb-4">
                          {useCase.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {useCase.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contract Address - Simplified */}
        <section className="py-20 bg-gradient-to-b from-rollback-cream/30 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-12 border border-rollback-primary/10">
                <div className="w-20 h-20 bg-rollback-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Copy className="h-10 w-10 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-rollback-dark mb-4">
                  Contract Address
                </h2>
                <p className="text-muted-foreground mb-8">
                  Ready to get your ROLL tokens? Here's the official contract
                  address:
                </p>

                <div className="bg-gradient-to-r from-rollback-light/30 to-rollback-cream/30 rounded-2xl p-6 border-2 border-dashed border-rollback-primary/30 mb-6">
                  <p className="font-mono text-rollback-dark bg-white px-6 py-4 rounded-xl border text-lg break-all">
                    {CONTRACT_ADDRESS}
                  </p>
                </div>

                <Button
                  onClick={handleCopyAddress}
                  size="lg"
                  className={`${
                    copied
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-rollback-primary hover:bg-rollback-primary/90 text-white"
                  } px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-200`}
                >
                  <Copy className="h-5 w-5 mr-2" />
                  {copied ? "Copied! ✨" : "Copy Address"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TokenomicsPage;
