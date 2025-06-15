import {
  Check,
  Clock,
  LockKeyhole,
  RefreshCw,
  Settings,
  Wallet,
  Users,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { ShineBorder } from "./ui/shine-border";
import Steps from "./Steps";
import NewSteps from "./NewSteps";
const HowItWorks = () => {
  const steps = [
    {
      icon: <Wallet className="h-5 w-5 text-rollback-primary" />,
      title: "Configure Your Wallets",
      description:
        "Specify wallets you want monitored, your fallback wallet, and configure priority or randomized rollback method",
    },
    {
      icon: <Settings className="h-5 w-5 text-rollback-primary" />,
      title: "Set Protection Parameters",
      description:
        "Define inactivity thresholds, select tokens to monitor (ERC20, ERC721 NFTs), and configure notification preferences",
    },
    {
      icon: <LockKeyhole className="h-5 w-5 text-rollback-primary" />,
      title: "Deploy Smart Contract",
      description:
        "System deploys a secure smart contract with multi-signature voting and unified governance for your wallet network",
    },
    {
      icon: <Clock className="h-5 w-5 text-rollback-primary" />,
      title: "Continuous Monitoring",
      description:
        "Your wallets are monitored 24/7, tracking balance changes and transaction patterns across all your monitored wallets",
    },
    {
      icon: <Mail className="h-5 w-5 text-rollback-primary" />,
      title: "Early Warning System",
      description:
        "Receive email notifications 5 days before rollback threshold, giving you time to show activity if needed",
    },
    {
      icon: <RefreshCw className="h-5 w-5 text-rollback-primary" />,
      title: "Automatic Fund Transfer",
      description:
        "If threshold is reached, funds automatically transfer to next priority wallet or fallback wallet based on your configuration",
    },
  ];

  // Define connections between nodes
  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 3 },
    { from: 0, to: 2 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
  ];

  // Define path animations
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-rollback-cream/30 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How Rollback Works</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive protection system that monitors your crypto wallets
            and automatically transfers funds when needed, ensuring your assets
            are always accessible.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col gap-2"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  className={`border-b-2 border-rollback-primary relative group w-full cursor-pointer transition-all duration-300 hover:bg-rollback-light/20 ${
                    index === steps.length - 1 ? "border-none" : ""
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 flex items-center justify-between w-full gap-4">
                    <div className="w-12 h-12 rounded-full bg-rollback-light flex items-center justify-center group-hover:bg-rollback-primary/20 transition-colors duration-300 flex-shrink-0">
                      {step.icon}
                    </div>

                    <div className="flex flex-col items-start justify-center flex-1 relative h-12 overflow-hidden">
                      {/* Title - slides out to left on hover */}
                      <h3 className="text-lg font-semibold transition-all duration-500 ease-in-out absolute inset-0 flex items-center opacity-100 group-hover:opacity-0 group-hover:text-rollback-primary transform translate-x-0 group-hover:-translate-x-full">
                        {step.title}
                      </h3>

                      {/* Description - slides in from right on hover */}
                      <div className="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100 transform translate-x-full group-hover:translate-x-0">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* <Steps /> */}
          <div className="hidden xl:block">
            <NewSteps />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
