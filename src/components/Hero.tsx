import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Zap } from "lucide-react";
import RollbackLogo from "./RollbackLogo";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern pt-16">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-rollback-primary/20 to-rollback-secondary/20 blur-3xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-rollback-secondary/15 to-rollback-primary/15 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <RollbackLogo className="w-[600px] h-[600px] animate-spin-slow" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center bg-rollback-light/30 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-rollback-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4 text-rollback-primary mr-2" />
              <span className="text-sm font-medium text-rollback-dark">
                Revolutionary Crypto Protection
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Never Lose Access</span> to
              <br />
              <span className="text-reveal"> Your Crypto Again</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Rollback automatically transfers your funds to designated wallets
              if yours becomes inactive.{" "}
              <span className="font-semibold text-rollback-primary">
                Smart. Secure. Seamless.
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 w-full mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-rollback-primary hover:bg-rollback-primary/90 text-white text-lg px-8 btn-primary shadow-lg hover:shadow-rollback-primary/30 group w-full sm:w-auto"
              >
                <span
                  className="flex items-center cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-bounce-soft" />
                  {isHovered ? "Coming Soon" : "Protect Your Assets"}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-rollback-primary text-rollback-primary hover:bg-rollback-primary/10 text-lg glass group w-full sm:w-auto"
              >
                <Link
                  to="https://rollback-labs.gitbook.io/rollback-labs"
                  target="_blank"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </motion.div>

            {/* <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center glass-dark rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-rollback-primary mr-2" />
                <span className="text-muted-foreground">
                  Audited by leading security firms
                </span>
              </div>
              <div className="flex items-center glass-dark rounded-full px-4 py-2">
                <Sparkles className="h-4 w-4 text-rollback-primary mr-2" />
                <span className="text-muted-foreground">
                  $10M+ Assets Protected
                </span>
              </div>
            </motion.div> */}
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-rollback-cream to-rollback-light p-1 shadow-2xl">
              <div className="w-full h-full rounded-xl glass flex items-center justify-center relative overflow-hidden">
                {/* Animated particles */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-rollback-primary/30"
                      animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      style={{
                        left: `${15 + i * 12}%`,
                        top: `${20 + i * 10}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="w-3/4 h-3/4 relative">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <RollbackLogo className="w-40 h-40 animate-spin-slow" />
                  </motion.div>

                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <motion.path
                      d="M100,10 A90,90 0 1,1 10,100 A90,90 0 1,1 100,10z"
                      fill="none"
                      stroke="#E9A344"
                      strokeWidth="4"
                      strokeDasharray="565"
                      initial={{ strokeDashoffset: 565 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                  </svg>

                  {/* Enhanced floating elements */}
                  <motion.div
                    className="absolute top-0 right-0 glass rounded-xl p-4 shadow-lg transform translate-x-1/4 -translate-y-1/2"
                    animate={{
                      y: [-5, 5, -5],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-4 h-4 rounded-full bg-rollback-primary mb-2"></div>
                    <div className="w-24 h-2 bg-rollback-light rounded"></div>
                    <div className="w-16 h-1 bg-rollback-secondary rounded mt-1"></div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-0 glass rounded-xl p-4 shadow-lg transform -translate-x-1/4 translate-y-1/2"
                    animate={{
                      y: [5, -5, 5],
                      rotate: [0, -2, 2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <div className="w-4 h-4 rounded-full bg-rollback-brown mb-2"></div>
                    <div className="w-24 h-2 bg-rollback-light rounded"></div>
                    <div className="w-20 h-1 bg-rollback-primary rounded mt-1"></div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 left-full glass rounded-xl p-3 shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      x: [-3, 3, -3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-rollback-secondary mb-1"></div>
                    <div className="w-16 h-1 bg-rollback-light rounded"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-rollback-primary rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-rollback-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
