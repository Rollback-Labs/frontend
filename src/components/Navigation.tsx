
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Wallet } from "lucide-react";
import RollbackLogo from './RollbackLogo';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const isMobile = useIsMobile();
  
  const handleConnect = () => {
    // Mock wallet connection for demo
    setWalletConnected(true);
    setWalletAddress('0xf3...a291');
  };
  
  const handleDisconnect = () => {
    setWalletConnected(false);
    setWalletAddress('');
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-4 left-0 right-0 mx-auto w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-full ${isScrolled ? 'bg-transparent backdrop-blur-md border border-white/20 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <RollbackLogo className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 animate-spin-slow" />
              <span className="ml-2 text-sm sm:text-base md:text-lg font-semibold">Rollback</span>
            </Link>
            
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link to="/" className="text-foreground hover:text-rollback-primary px-3 py-2 rounded-md text-xs sm:text-sm">Home</Link>
                <Link to="/about" className="text-foreground hover:text-rollback-primary px-3 py-2 rounded-md text-xs sm:text-sm">About</Link>
                <Link to="/media-kit" className="text-foreground hover:text-rollback-primary px-3 py-2 rounded-md text-xs sm:text-sm">Media Kit</Link>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center">
              {walletConnected ? (
                <div className="flex items-center bg-muted rounded-full px-3 py-1 mr-3 sm:px-4 sm:py-1 sm:mr-4">
                  <span className="text-xs sm:text-sm font-medium">{walletAddress}</span>
                  <Button variant="ghost" size="sm" onClick={handleDisconnect} className="ml-1 sm:ml-2 text-xs">
                    Disconnect
                  </Button>
                </div>
              ) : (
                <Button onClick={handleConnect} variant="outline" className="text-xs sm:text-sm border-rollback-primary text-rollback-primary hover:bg-rollback-primary hover:text-white">
                  <Wallet className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Connect Wallet
                </Button>
              )}
              
              <Button asChild className="ml-3 sm:ml-4 text-xs sm:text-sm bg-rollback-primary hover:bg-rollback-primary/90 text-white">
                <Link to="/app">Launch App</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu using Sheet component for better UX */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-rollback-primary focus:outline-none">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] sm:max-w-sm bg-background/95 backdrop-blur-md border-l border-border">
                <div className="py-6 px-2">
                  <Link to="/" className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-foreground hover:text-rollback-primary mb-2">Home</Link>
                  <Link to="/about" className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-foreground hover:text-rollback-primary mb-2">About</Link>
                  <Link to="/media-kit" className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-foreground hover:text-rollback-primary mb-2">Media Kit</Link>
                  <div className="border-t border-border my-4"></div>
                  <div className="px-3">
                    {walletConnected ? (
                      <div className="flex flex-col items-start mb-4">
                        <div className="bg-muted rounded-full px-3 py-1 mb-2 flex items-center">
                          <span className="text-xs sm:text-sm font-medium">{walletAddress}</span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleDisconnect} className="text-xs">
                          Disconnect
                        </Button>
                      </div>
                    ) : (
                      <Button onClick={handleConnect} variant="outline" className="border-rollback-primary text-rollback-primary hover:bg-rollback-primary hover:text-white w-full mb-4 text-xs sm:text-sm">
                        <Wallet className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Connect Wallet
                      </Button>
                    )}
                    <Button asChild className="w-full bg-rollback-primary hover:bg-rollback-primary/90 text-white text-xs sm:text-sm">
                      <Link to="/app">Launch App</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
