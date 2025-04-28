import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, CheckCircle, Users } from "lucide-react";
import { Base } from "./Base";

const Trust = () => {
  return (
    <section className="py-20 bg-rollback-cream/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col items-center gap-6 justify-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-7xl lg:leading-[102px] font-bold">
            Built on
          </h2>
          <Base
            width={400}
            height={200}
            color="#8B5E3C"
            className="md:w-[400px] md:h-[200px] w-1/2 h-1/2"
          />
        </div>
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Trusted & Secure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've built Rollback with the highest security standards, and our technology is backed
            by industry leaders in blockchain security.
          </p>
        </div> */}
        {/*         
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Shield className="h-10 w-10 text-rollback-primary" />,
                title: "Security Audited",
                value: "3 Audits",
                description: "Thoroughly reviewed by leading security firms"
              },
              { 
                icon: <Clock className="h-10 w-10 text-rollback-primary" />,
                title: "Uptime",
                value: "99.99%",
                description: "Reliable infrastructure for continuous monitoring"
              },
              { 
                icon: <CheckCircle className="h-10 w-10 text-rollback-primary" />,
                title: "Successful Rollovers",
                value: "10,000+",
                description: "Assets successfully protected and transferred"
              },
              { 
                icon: <Users className="h-10 w-10 text-rollback-primary" />,
                title: "Active Users",
                value: "50,000+",
                description: "Growing community of protected users"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center p-4 bg-rollback-light rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold text-rollback-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Security Partners</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "CertiK", "Trail of Bits", "OpenZeppelin", "Consensys Diligence", "Quantstamp"
            ].map((partner, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center border border-border"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-rollback-light rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-rollback-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Compatible With</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Ethereum", "Polygon", "Binance Smart Chain", "Avalanche", 
              "Solana", "Arbitrum", "Optimism", "zkSync"
            ].map((chain, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-rollback-light border-rollback-primary text-rollback-dark py-1 px-3"
              >
                {chain}
              </Badge>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Trust;
