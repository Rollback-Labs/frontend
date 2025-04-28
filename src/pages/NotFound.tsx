
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    document.title = "Page Not Found - Rollback";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-rollback-light/30 hero-pattern">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-rollback-primary mb-4">404</h1>
        <p className="text-2xl text-rollback-dark mb-8">Oops! Page not found</p>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="border-rollback-primary text-rollback-primary hover:bg-rollback-primary/10">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
          <Button asChild className="bg-rollback-primary hover:bg-rollback-primary/90 text-white">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
