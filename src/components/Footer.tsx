
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
} from "lucide-react";
import RollbackLogo from "./RollbackLogo";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="mt-16 mb-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
      <div className="bg-rollback-dark text-white pt-10 sm:pt-16 pb-6 rounded-2xl sm:rounded-3xl shadow-lg">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center mb-4 sm:mb-6 justify-center md:justify-start">
                <RollbackLogo className="h-7 w-7 sm:h-8 sm:w-8 mr-2" />
                <span className="text-lg sm:text-xl font-bold">Rollback</span>
              </div>
              <p className="text-rollback-light mb-6 text-center md:text-left text-sm md:text-base">
                A revolutionary smart contract system that ensures you never
                lose access to your cryptocurrency assets.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="text-white hover:text-rollback-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-rollback-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 col-span-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-5 text-center md:text-left">
                  Quick Links
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-center md:text-left">
                  <li>
                    <Link
                      to="/"
                      className="text-xs sm:text-sm text-rollback-light hover:text-rollback-primary transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-xs sm:text-sm text-rollback-light hover:text-rollback-primary transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/app"
                      className="text-xs sm:text-sm text-rollback-light hover:text-rollback-primary transition-colors"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-5 text-center md:text-left">
                  Resources
                </h3>
                <ul className="space-y-2 sm:space-y-3 flex flex-col items-center md:items-start">
                  <li className="flex items-center">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-rollback-primary" />
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-rollback-light hover:text-rollback-primary transition-colors"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Book className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-rollback-primary" />
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-rollback-light hover:text-rollback-primary transition-colors"
                    >
                      Security Audits
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-rollback-primary" />
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-rollback-light hover:text-rollback-primary transition-colors"
                    >
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 sm:pt-6 mt-6 sm:mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-rollback-light mb-4 md:mb-0 text-center md:text-left">
                © {new Date().getFullYear()} Rollback. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
