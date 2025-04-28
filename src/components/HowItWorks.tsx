import {
  Check,
  Clock,
  LockKeyhole,
  RefreshCw,
  Settings,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import { ShineBorder } from "./ui/shine-border";
import Steps from "./Steps";
import NewSteps from "./NewSteps";
const HowItWorks = () => {
  const steps = [
    {
      icon: <Wallet className="h-8 w-8 text-rollback-primary" />,
      title: "Connect Your Wallet",
      description:
        "Link your existing cryptocurrency wallets to the Rollback system",
    },
    {
      icon: <Settings className="h-8 w-8 text-rollback-primary" />,
      title: "Set Rollback Parameters",
      description:
        "Define inactivity periods and configure your trusted fallback wallets",
    },
    {
      icon: <LockKeyhole className="h-8 w-8 text-rollback-primary" />,
      title: "Deploy Smart Contract",
      description:
        "Our system creates and deploys a secure smart contract to monitor your wallet",
    },
    {
      icon: <Clock className="h-8 w-8 text-rollback-primary" />,
      title: "Automatic Monitoring",
      description:
        "Your wallet activity is continuously tracked for signs of inactivity",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-rollback-primary" />,
      title: "Rollback Activation",
      description:
        "If inactivity threshold is reached, funds transfer to your fallback wallet",
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our simple process ensures your crypto assets are always protected,
            giving you peace of mind without compromising security.
          </p>
        </div>

        <motion.div
          className="flex xl:grid xl:grid-cols-2 gap-6 w-full items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col gap-6"
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
                <div
                  className={`border-b-2 border-rollback-primary overflow-hidden relative group h-full w-full ${
                    index === steps.length - 1 ? "border-none" : ""
                  }`}
                >
                  <div className="p-3 flex items-center justify-between w-full gap-4">
                    <div className="w-20 h-20 rounded-full bg-rollback-light flex items-center justify-center flex-2">
                      {step.icon}
                    </div>

                    <div className="flex flex-col items-start justify-start gap-4 flex-1">
                      <h3 className="text-xl font-semibold mb-2 ">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
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
