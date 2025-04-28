import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import RollbackLogo from "./RollbackLogo";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern pt-16">
      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
        <RollbackLogo className="w-[400px] h-[400px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Never Lose Access</span> to Your
              Crypto Again
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Rollback automatically transfers your funds to designated wallets
              if yours becomes inactive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-rollback-primary hover:bg-rollback-primary/90 text-white text-lg px-8"
              >
                <Link to="/app">
                  Protect Your Assets
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-rollback-primary text-rollback-primary hover:bg-rollback-primary/10 text-lg"
              >
                <Link
                  to="https://rollback-labs.gitbook.io/rollback-labs"
                  target="_blank"
                >
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start text-sm">
              <Shield className="h-5 w-5 text-rollback-primary mr-2" />
              <span className="text-muted-foreground">
                Audited by leading security firms
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-rollback-cream to-rollback-light p-1">
              <div className="w-full h-full rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center">
                <div className="w-3/4 h-3/4 relative">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <RollbackLogo className="w-40 h-40" />
                  </div>
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                      d="M100,10 A90,90 0 1,1 10,100 A90,90 0 1,1 100,10z"
                      fill="none"
                      stroke="#E9A344"
                      strokeWidth="4"
                      strokeDasharray="565"
                      strokeDashoffset="565"
                      className="animate-dash"
                    />
                  </svg>

                  <div className="absolute top-0 right-0 bg-white p-3 rounded-lg shadow-md transform translate-x-1/4 -translate-y-1/2">
                    <div className="w-3 h-3 rounded-full bg-rollback-primary mb-1"></div>
                    <div className="w-20 h-2 bg-rollback-light rounded"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 bg-white p-3 rounded-lg shadow-md transform -translate-x-1/4 translate-y-1/2">
                    <div className="w-3 h-3 rounded-full bg-rollback-brown mb-1"></div>
                    <div className="w-20 h-2 bg-rollback-light rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-dash {
          animation: dash 3s linear forwards;
        }
        `}
      </style>
    </div>
  );
};

export default Hero;
