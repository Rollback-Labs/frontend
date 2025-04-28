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
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-rollback-primary" />,
      title: "Automated Monitoring",
      description:
        "Continuous tracking of wallet activity with customizable inactivity thresholds",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-rollback-primary" />,
      title: "Dual Rollback Mechanisms",
      description:
        "Time-based and condition-based triggers for ultimate flexibility and security",
    },
    {
      icon: <Layers className="h-8 w-8 text-rollback-primary" />,
      title: "Multi-Token Support",
      description:
        "Protect various cryptocurrency assets across multiple blockchain networks",
    },
    {
      icon: <Users className="h-8 w-8 text-rollback-primary" />,
      title: "Governance Features",
      description:
        "Decentralized control with community-driven parameters and improvements",
    },
    {
      icon: <Shield className="h-8 w-8 text-rollback-primary" />,
      title: "Enhanced Security",
      description:
        "Multiple security layers with optional multi-signature requirements",
    },
    // {
    //   icon: <Repeat className="h-8 w-8 text-rollback-primary" />,
    //   title: "Gasless Transfers",
    //   description:
    //     "Efficient fund transfers without requiring gas fees from the inactive wallet",
    // },
    // {
    //   icon: <BrainCircuit className="h-8 w-8 text-rollback-primary" />,
    //   title: "AI-Powered Detection",
    //   description:
    //     "Intelligent analysis of wallet patterns to prevent false rollback triggers",
    // },
    {
      icon: <Wallet className="h-8 w-8 text-rollback-primary" />,
      title: "Multiple Fallbacks",
      description:
        "Configure a prioritized list of fallback wallets with customizable allocation",
    },
    {
      icon: <FileCode className="h-8 w-8 text-rollback-primary" />,
      title: "Audited Code",
      description:
        "Smart contracts verified by leading security firms for maximum protection",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rollback-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rollback combines cutting-edge blockchain technology with
            user-friendly design to provide comprehensive protection for your
            digital assets.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <div className="bg-rollback-light rounded-full p-3 mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
