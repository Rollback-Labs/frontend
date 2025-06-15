import { motion } from "framer-motion";
import {
  Clock,
  RefreshCw,
  Layers,
  Users,
  Shield,
  Repeat,
  BrainCircuit,
  Wallet,
  FileCode,
  ArrowRight,
  Vote,
  AlertTriangle,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-rollback-primary" />,
      title: "Automated Monitoring",
      description:
        "Continuous tracking of wallet activity and balance changes with customizable inactivity thresholds",
      accent: "rollback-primary",
      delay: 0.1,
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-rollback-secondary" />,
      title: "Smart Rollback System",
      description:
        "Automatic fund transfers between your monitored wallets or to fallback wallet when inactivity threshold is reached",
      accent: "rollback-secondary",
      delay: 0.2,
    },
    {
      icon: <Layers className="h-6 w-6 text-rollback-brown" />,
      title: "Multi-Token Support",
      description: "Support for ERC20 tokens and ERC721 NFTs",
      accent: "rollback-brown",
      delay: 0.3,
    },
    {
      icon: <Vote className="h-6 w-6 text-rollback-primary" />,
      title: "Unified Voting System",
      description:
        "Democratic governance with multi-signature voting for agent changes, threshold updates, and wallet management",
      accent: "rollback-primary",
      delay: 0.4,
    },
    {
      icon: <Shield className="h-6 w-6 text-rollback-secondary" />,
      title: "Enhanced Security",
      description:
        "Audited smart contracts with emergency pause functionality, timelock protection, and encrypted key storage",
      accent: "rollback-secondary",
      delay: 0.5,
    },
    {
      icon: <Wallet className="h-6 w-6 text-rollback-brown" />,
      title: "Flexible Wallet Priority",
      description:
        "Configure priority-based or randomized wallet selection with customizable fallback allocation",
      accent: "rollback-brown",
      delay: 0.6,
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-rollback-primary" />,
      title: "Email Notifications",
      description:
        "Proactive email alerts sent 5 days before rollback threshold with real-time system status updates",
      accent: "rollback-primary",
      delay: 0.7,
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-rollback-secondary" />,
      title: "Agent Wallet Checker",
      description:
        "Secure agent wallet system that executes rollbacks with built-in monitoring and validation to ensure safe operations",
      accent: "rollback-secondary",
      delay: 0.8,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rollback-cream/20 relative overflow-hidden">
      {/* Background decoration matching site theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-rollback-primary/5 to-rollback-secondary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-rollback-secondary/5 to-rollback-brown/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-rollback-cream/10 to-rollback-light/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-rollback-light/50 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-rollback-primary/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Shield className="h-5 w-5 text-rollback-primary mr-2" />
            <span className="text-sm font-medium text-rollback-dark">
              Why Choose Rollback
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rollback combines cutting-edge blockchain technology with
            user-friendly design to provide comprehensive protection for your
            digital assets.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative glass backdrop-blur-sm rounded-2xl p-4 sm:p-6 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-rollback-primary/10 group-hover:border-rollback-primary/20">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-rollback-cream/30 to-rollback-light/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated accent dot */}
                <motion.div
                  className={`absolute top-4 right-4 w-3 h-3 bg-${feature.accent} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: feature.delay,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon with Rollback theme styling */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-rollback-light/80 rounded-xl shadow-md mb-4 group-hover:bg-rollback-light transition-colors duration-300 border border-${feature.accent}/20`}
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-rollback-dark mb-3 group-hover:text-rollback-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-rollback-dark/80 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Bottom accent line with Rollback colors */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-${feature.accent}/50 to-${feature.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: feature.delay }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action section matching theme */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-rollback-cream to-rollback-light/50 rounded-2xl p-8 backdrop-blur-sm border border-rollback-primary/20 shadow-lg">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-semibold mb-2 text-rollback-dark">
                Ready to protect your crypto assets?
              </h3>
              <p className="text-muted-foreground">
                Join thousands of users who trust Rollback with their digital
                wealth
              </p>
            </div>
            <motion.button
              className="bg-rollback-primary hover:bg-rollback-primary/90 text-white px-8 py-3 rounded-full font-medium btn-primary shadow-lg hover:shadow-rollback-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 ml-2 inline" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
