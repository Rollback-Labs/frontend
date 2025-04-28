
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, ArrowRight, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog - Rollback";
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  
  const posts = [
    {
      id: 1,
      title: "Understanding Inactivity Thresholds: How to Configure Rollback for Your Needs",
      excerpt: "Learn how to set up the optimal inactivity period for different types of wallets based on your usage patterns.",
      date: "June 15, 2023",
      author: "Alex Johnson",
      category: "Guides",
      image: "wallet-security.jpg"
    },
    {
      id: 2,
      title: "The Problem of Lost Cryptocurrency: A Growing $200 Billion Crisis",
      excerpt: "An in-depth look at the scale of inaccessible crypto assets and how Rollback provides a solution.",
      date: "May 22, 2023",
      author: "Maria Rodriguez",
      category: "Research",
      image: "lost-crypto.jpg"
    },
    {
      id: 3,
      title: "Estate Planning for Digital Assets: Using Rollback for Succession",
      excerpt: "How to incorporate cryptocurrency into your estate planning using automated rollback mechanisms.",
      date: "April 10, 2023",
      author: "David Chen",
      category: "Planning",
      image: "estate-planning.jpg"
    },
    {
      id: 4,
      title: "Security Audit Results: Certik's Assessment of Rollback Protocol",
      excerpt: "A detailed breakdown of our latest security audit results and the improvements we've made.",
      date: "March 5, 2023",
      author: "Sarah Williams",
      category: "Security",
      image: "security-audit.jpg"
    },
    {
      id: 5,
      title: "Corporate Treasury Management: Protecting Organizational Assets",
      excerpt: "How businesses can implement Rollback to secure their cryptocurrency holdings against key-person risk.",
      date: "February 18, 2023",
      author: "Michael Lee",
      category: "Business",
      image: "corporate-treasury.jpg"
    },
    {
      id: 6,
      title: "Multi-Chain Support: How Rollback Works Across Different Blockchains",
      excerpt: "Technical explanation of our cross-chain architecture and supported networks.",
      date: "January 9, 2023",
      author: "Priya Patel",
      category: "Technical",
      image: "multi-chain.jpg"
    }
  ];
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const categories = ["All", "Guides", "Research", "Planning", "Security", "Business", "Technical"];
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-rollback-light/30 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Rollback Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, tutorials, and updates about cryptocurrency security and the Rollback protocol.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <h2 className="text-2xl font-bold mb-4 sm:mb-0">Latest Articles</h2>
                <div className="w-full sm:w-64">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-rollback-primary/20 to-rollback-secondary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-rollback-primary">{post.category}</span>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 hover:text-rollback-primary transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <Button asChild variant="ghost" className="text-rollback-primary hover:text-rollback-primary/80 hover:bg-rollback-light p-0 h-auto">
                        <Link to={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="bg-rollback-light/50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse all our categories.
                  </p>
                </div>
              )}
            </div>
            
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`w-full justify-start ${
                        category.toLowerCase() === searchQuery.toLowerCase() 
                          ? "bg-rollback-primary text-white hover:bg-rollback-primary/90 border-rollback-primary" 
                          : "hover:bg-rollback-light hover:text-rollback-primary border-rollback-light"
                      }`}
                      onClick={() => setSearchQuery(category === "All" ? "" : category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-rollback-primary to-rollback-secondary rounded-xl text-white p-6">
                <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
                <p className="mb-4 text-white/90 text-sm">
                  Get the latest updates on Rollback features, security tips, and cryptocurrency safety.
                </p>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/20 text-white placeholder:text-white/70 border-white/30 mb-3 focus-visible:ring-white"
                />
                <Button className="w-full bg-white text-rollback-primary hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
