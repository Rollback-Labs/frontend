import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import RollbackLogo from "./RollbackLogo";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/tokenomics", label: "Tokenomics" },
    { to: "/docs", label: "Docs" },
  ];

  return (
    <motion.nav
      className={`fixed top-4 left-0 right-0 mx-auto w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-full ${
        isScrolled
          ? "glass-dark shadow-2xl shadow-rollback-primary/10 border-rollback-primary/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <RollbackLogo className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 animate-spin-slow" />
              <span className="ml-2 text-sm sm:text-base md:text-lg font-semibold group-hover:text-rollback-primary transition-colors duration-300">
                Rollback
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="text-sm font-medium text-gray-700 hover:text-rollback-primary transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rollback-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 text-gray-700 hover:text-rollback-primary hover:bg-rollback-primary/10"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <Link to="/" className="flex items-center group">
                        <RollbackLogo className="h-8 w-8 animate-spin-slow" />
                        <span className="ml-2 text-xl font-bold group-hover:text-rollback-primary transition-colors duration-300">
                          Rollback
                        </span>
                      </Link>
                    </div>

                    <nav className="flex flex-col space-y-6">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.to}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            to={item.to}
                            className={`text-lg font-medium transition-colors duration-300 p-3 rounded-lg block hover:bg-rollback-light/50 ${
                              location.pathname === item.to
                                ? "text-rollback-primary bg-rollback-light/30"
                                : "text-gray-700 hover:text-rollback-primary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>

                    <div className="mt-auto pt-8">
                      <Button
                        asChild
                        className="w-full bg-rollback-primary hover:bg-rollback-primary/90 text-white rounded-full py-3"
                      >
                        <a
                          href="https://app.rollbacklabs.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AnimatePresence mode="wait">
                            <motion.span
                              key="launch"
                              initial={{ x: 0, opacity: 1 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              Launch App
                            </motion.span>
                          </AnimatePresence>
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Launch Button */}
            <Button
              asChild
              className="hidden md:flex bg-rollback-primary hover:bg-rollback-primary/90 text-white text-xs sm:text-sm btn-primary shadow-lg hover:shadow-rollback-primary/30 px-4 py-2 sm:px-6 sm:py-2 rounded-full min-w-[100px] max-w-[140px] w-full sm:w-auto relative overflow-hidden"
            >
              <a
                href="https://app.rollbacklabs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key="launch"
                      initial={{ x: 0, opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      Launch App
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
