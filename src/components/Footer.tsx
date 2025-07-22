import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Github,
  Twitter,
  Linkedin,
  Send,
  FileText,
  Book,
  MessageSquare,
  Mail,
  ArrowUp,
  Sparkles,
  Heart,
} from "lucide-react";
import RollbackLogo from "./RollbackLogo";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const isMobile = useIsMobile();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Rollback-Labs",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: Twitter,
      href: "https://x.com/rollbacklabs",
      label: "X (Twitter)",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:rollbacklabs@gmail.com",
      label: "Email",
      color: "hover:text-green-500",
    },
    {
      icon: MessageSquare,
      href: "#",
      label: "Discord",
      color: "hover:text-purple-500",
    },
  ];

  const resources = [
    {
      icon: FileText,
      label: "Docs",
      href: "https://rollback-labs.gitbook.io/rollback-labs",
    },
    // { icon: Book, label: "Security Audits", href: "#" },
    {
      icon: Github,
      label: "GitHub Repository",
      href: "https://github.com/Rollback-Labs",
    },
    // { icon: MessageSquare, label: "Community", href: "#" },
  ];

  return (
    <footer className="mt-16 mb-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32 relative">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-3 bg-rollback-primary hover:bg-rollback-primary/90 text-white rounded-full shadow-lg hover:shadow-rollback-primary/30 transition-all duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 100,
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      <motion.div
        className="bg-rollback-dark text-white pt-12 sm:pt-16 pb-8 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-rollback-dark via-rollback-dark to-rollback-brown/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rollback-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rollback-secondary/10 to-transparent rounded-full blur-3xl" />

        <div className="container px-4 sm:px-6 lg:px-8 relative">
          {/* Newsletter Section */}
          {/* <motion.div
            className="text-center mb-12 pb-8 border-b border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center mb-4">
              <Sparkles className="h-5 w-5 text-rollback-primary mr-2" />
              <span className="text-rollback-light text-sm font-medium">
                Stay Updated
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
            <p className="text-rollback-light mb-6 max-w-md mx-auto">
              Get the latest updates on Rollback features, security tips, and
              crypto protection insights.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-rollback-primary"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-rollback-primary hover:bg-rollback-primary/90 text-white px-6"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center"
                    >
                      <Heart className="h-4 w-4 mr-1 text-red-400" />
                      Subscribed!
                    </motion.div>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-1" />
                      Subscribe
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div> */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-2 md:col-span-1"
            >
              <div className="flex items-center mb-4 sm:mb-6 justify-center md:justify-start">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <RollbackLogo className="h-7 w-7 sm:h-8 sm:w-8 mr-2 animate-spin-slow" />
                </motion.div>
                <span className="text-lg sm:text-xl font-bold">Rollback</span>
              </div>
              <p className="text-rollback-light mb-6 text-center md:text-left text-sm md:text-base leading-relaxed">
                A revolutionary smart contract system that ensures you never
                lose access to your cryptocurrency assets. Built for security,
                designed for simplicity.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`text-white ${social.color} transition-colors p-2 rounded-full glass-dark hover:scale-110 transition-all duration-300`}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-center md:text-left">
                Quick Links
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/tokenomics", label: "Tokenomics" },
                  { to: "/media-kit", label: "Media Kit" },
                ].map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      className="text-xs sm:text-sm text-rollback-light hover:text-rollback-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-center md:text-left">
                Resources
              </h3>
              <ul className="space-y-3 flex flex-col items-center md:items-start">
                {resources.map((resource, index) => (
                  <motion.li
                    key={resource.label}
                    className="flex items-center group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <resource.icon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-rollback-primary group-hover:animate-bounce-soft" />
                    <a
                      href={resource.href}
                      className="text-xs sm:text-sm text-rollback-light hover:text-rollback-primary transition-colors duration-300"
                    >
                      {resource.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-white/10 pt-6 sm:pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-rollback-light">
                <p className="text-center">
                  © {new Date().getFullYear()} Rollback. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="hover:text-rollback-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-rollback-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>

              <motion.div
                className="flex items-center text-xs text-rollback-light"
                whileHover={{ scale: 1.05 }}
              >
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="mx-1"
                >
                  <Heart className="h-3 w-3 text-red-400" />
                </motion.div>
                <span>for the crypto community</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
