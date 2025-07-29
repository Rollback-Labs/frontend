
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Leaf, 
  Building, 
  ShieldAlert, 
  Eraser
} from "lucide-react";

const useCases = [
  {
    id: "individual",
    icon: <User className="h-6 w-6" />,
    title: "Individual Protection",
    description: "Ensure your personal crypto assets remain accessible if you lose access to your wallet.",
    details: "For individuals, Rollback serves as a personal safety net. Whether you're traveling, dealing with health issues, or simply worried about forgotten passwords, your configured rollback ensures your assets can be recovered. Set up multiple fallback wallets including family members' addresses for complete peace of mind.",
    image: "individual-protection.svg"
  },
  {
    id: "legacy",
    icon: <Leaf className="h-6 w-6" />,
    title: "Legacy Planning",
    description: "Pass on your digital assets to loved ones without complex legal arrangements.",
    details: "Estate planning for digital assets is challenging. Rollback provides a simple way to ensure your crypto holdings pass to your heirs without revealing private keys during your lifetime. Set long-term inactivity periods that would only trigger in the event of incapacitation, with your chosen beneficiaries' wallets as fallbacks.",
    image: "legacy-planning.svg"
  },
  {
    id: "corporate",
    icon: <Building className="h-6 w-6" />,
    title: "Corporate Security",
    description: "Protect company funds with advanced treasury management for digital assets.",
    details: "Businesses holding cryptocurrency need robust security measures. Rollback provides corporate treasury protection with multi-signature requirements, tiered fallback systems, and automatic fund recovery if key personnel leave or lose access. Configure complex conditions tailored to your company's governance structure.",
    image: "corporate-security.svg"
  },
  {
    id: "antitheft",
    icon: <ShieldAlert className="h-6 w-6" />,
    title: "Anti-Theft",
    description: "Add an extra layer of protection against unauthorized access to your wallets.",
    details: "If your wallet is compromised, Rollback can serve as an additional security layer. By setting up short-term rollbacks to your secure cold storage wallets, any funds that remain in a compromised wallet for a specified period will automatically transfer to safety, limiting potential losses from theft.",
    image: "anti-theft.svg"
  },
  {
    id: "cleanup",
    icon: <Eraser className="h-6 w-6" />,
    title: "Blockchain Cleaning",
    description: "Recover assets from old or forgotten wallets across your portfolio.",
    details: "Many crypto users accumulate numerous wallets over time. Rollback helps consolidate assets from old or forgotten wallets into your primary addresses. Set up automatic sweeping of dormant wallets to simplify your holdings and ensure no assets are left behind in neglected addresses.",
    image: "blockchain-cleaning.svg"
  }
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  
  const activeCase = useCases.find(useCase => useCase.id === activeTab);
  
  return (
    <section className="py-20 bg-rollback-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Use Cases</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how Rollback can protect your digital assets in various scenarios
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 lg:w-1/4 border-r border-border">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4 px-2">Scenarios</h3>
                <div className="space-y-1">
                  {useCases.map((useCase) => (
                    <Button
                      key={useCase.id}
                      variant={activeTab === useCase.id ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        activeTab === useCase.id 
                          ? "bg-rollback-primary text-white hover:bg-rollback-primary/90" 
                          : "hover:bg-rollback-light hover:text-rollback-primary"
                      }`}
                      onClick={() => setActiveTab(useCase.id)}
                    >
                      <span className="mr-2">{useCase.icon}</span>
                      {useCase.title}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 md:p-8"
                >
                  <h3 className="text-2xl font-bold mb-4 text-rollback-primary">
                    {activeCase?.title}
                  </h3>
                  <p className="text-lg mb-6">
                    {activeCase?.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground mb-6">
                        {activeCase?.details}
                      </p>
                      <div className="bg-rollback-light/50 rounded-lg p-4 border border-rollback-primary/20">
                        <h4 className="font-semibold mb-2">Key Benefits:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Automated protection without constant monitoring</li>
                          <li>Customizable time frames and conditions</li>
                          <li>No third-party involvement or trust required</li>
                          {/* <li>Works across multiple blockchain networks</li> */}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-64 h-64 bg-rollback-cream rounded-full flex items-center justify-center">
                        <div className="w-48 h-48 bg-gradient-to-br from-rollback-primary to-rollback-secondary rounded-full flex items-center justify-center">
                          {activeCase?.icon && (
                            <div className="text-white transform scale-[3]">
                              {activeCase.icon}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
