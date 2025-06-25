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
  const isMobile = useIsMobile();

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

  const navItems = [
    // { to: "/", label: "Home" },
    // { to: "/about", label: "About" },
    // { to: "/media-kit", label: "Media Kit" },
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

          <Button
            onClick={() => {
              setIsClicked(true);
              setTimeout(() => setIsClicked(false), 2000);
            }}
            className={`bg-rollback-primary hover:bg-rollback-primary/90 text-white text-xs sm:text-sm btn-primary shadow-lg hover:shadow-rollback-primary/30 px-4 py-2 sm:px-6 sm:py-2 rounded-full min-w-[100px] max-w-[140px] w-full sm:w-auto relative overflow-hidden ${
              isClicked ? "cursor-wait" : "cursor-pointer"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {!isClicked ? (
                  <motion.span
                    key="launch"
                    initial={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    Launch App
                  </motion.span>
                ) : (
                  <motion.span
                    key="coming-soon"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex items-center gap-2"
                  >
                    Coming Soon
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
