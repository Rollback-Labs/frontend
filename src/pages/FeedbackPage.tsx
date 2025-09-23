import { motion } from "framer-motion";
import { Star, Quote, User, Calendar, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const FeedbackPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex",
      role: "DeFi Trader",
      avatar: "A",
      rating: 5,
      date: "2025-08-15",
      content: "My wallet went inactive for months and I thought I lost everything. Rollback's inactive wallet recovery feature saved my 2.5 ETH! The process was seamless and I got my funds back quickly. This is revolutionary for wallet security!",
      verified: true,
      category: "Recovery"
    },
    {
      id: 2,
      name: "Sarah",
      role: "Crypto Enthusiast",
      avatar: "S",
      rating: 5,
      date: "2025-08-12",
      content: "I forgot about an old wallet with some tokens for over a year. Rollback helped me recover it when I thought it was lost forever. The testnet experience is incredible and gives me confidence in wallet management.",
      verified: true,
      category: "User Experience"
    },
    {
      id: 3,
      name: "Marcus",
      role: "Smart Contract Developer",
      avatar: "M",
      rating: 5,
      date: "2025-08-10",
      content: "As a developer, I'm impressed by how Rollback handles inactive wallet detection and recovery. The architecture is brilliant - it identifies truly abandoned wallets and provides a secure recovery mechanism.",
      verified: true,
      category: "Technical"
    },
    {
      id: 4,
      name: "Emma",
      role: "NFT Collector",
      avatar: "E",
      rating: 4,
      date: "2025-08-08",
      content: "I had valuable NFTs sitting in an old wallet I hadn't touched in 18 months. Rollback's inactive wallet monitoring helped me reclaim them before they were truly lost. Game-changer for long-term holders!",
      verified: true,
      category: "NFT Recovery"
    },
    {
      id: 5,
      name: "David",
      role: "Yield Farmer",
      avatar: "D",
      rating: 5,
      date: "2025-08-05",
      content: "Been testing Rollback's inactive wallet features for weeks. The monitoring system is outstanding - it properly identifies dormant wallets and provides secure recovery options. Perfect for managing multiple farming wallets.",
      verified: true,
      category: "Wallet Management"
    },
    {
      id: 6,
      name: "Luna",
      role: "Crypto Investor",
      avatar: "L",
      rating: 5,
      date: "2025-08-03",
      content: "I have multiple wallets from different investment periods. Some went inactive and I thought those funds were gone. Rollback's recovery system helped me reclaim significant assets from dormant wallets.",
      verified: true,
      category: "Asset Recovery"
    },
    {
      id: 7,
      name: "Ryan",
      role: "DApp Builder",
      avatar: "R",
      rating: 4,
      date: "2025-08-08",
      content: "Integrating Rollback's inactive wallet detection into our DApp was seamless. It helps our users recover abandoned accounts and provides an excellent safety net for wallet management.",
      verified: true,
      category: "Integration"
    },
    {
      id: 8,
      name: "Jessica",
      role: "Institutional Trader",
      avatar: "J",
      rating: 5,
      date: "2023-12-28",
      content: "This changes everything for institutional wallet management. Having a reliable system to recover inactive institutional wallets provides the security framework we need for large-scale operations.",
      verified: true,
      category: "Enterprise"
    }
  ];

  const stats = [
    { label: "Inactive Wallets Monitored", value: "125K+", icon: Shield },
    { label: "Assets Recovered", value: "$2.8M", icon: Zap },
    { label: "Active Testnet Users", value: "15K+", icon: User },
    { label: "Average Rating", value: "4.9/5", icon: Star }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Recovery: "bg-green-100 text-green-800",
      "User Experience": "bg-blue-100 text-blue-800",
      Technical: "bg-purple-100 text-purple-800",
      "NFT Recovery": "bg-orange-100 text-orange-800",
      "Wallet Management": "bg-yellow-100 text-yellow-800",
      "Asset Recovery": "bg-indigo-100 text-indigo-800",
      Integration: "bg-pink-100 text-pink-800",
      Enterprise: "bg-gray-100 text-gray-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-rollback-light via-white to-rollback-light/50">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Community{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rollback-primary to-rollback-secondary">
                  Feedback
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                See what our testnet users are saying about their experience with Rollback's revolutionary inactive wallet recovery technology.
              </p>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-8 w-8 text-rollback-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-rollback-primary to-rollback-secondary rounded-full flex items-center justify-center text-white font-semibold">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 flex items-center">
                              {testimonial.name}
                              {testimonial.verified && (
                                <Shield className="h-4 w-4 text-green-500 ml-1" />
                              )}
                            </h3>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                        <Quote className="h-6 w-6 text-rollback-primary/30" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {testimonial.rating}/5
                        </span>
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <Badge className={getCategoryColor(testimonial.category)}>
                          {testimonial.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(testimonial.date).toLocaleDateString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-rollback-primary to-rollback-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join the Rollback Community
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the future of inactive wallet recovery. Start testing today and see why thousands of users trust Rollback.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-rollback-primary hover:bg-gray-100 font-semibold px-8 py-3"
                >
                  <a
                    href="https://app.rollbacklabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Testnet Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rollback-primary font-semibold px-8 py-3"
                >
                  <a href="/docs">
                    Read Documentation
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FeedbackPage;
