import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  FileText,
  BookOpen,
  Bookmark,
  ExternalLink,
  Copy,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DocumentationPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.title = "Documentation - Rollback";
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, would show a toast notification here
  };

  return (
    <Layout>
      <div className="min-h-screen pt-20">
        <section className="py-16 bg-rollback-light/30 hero-pattern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Documentation</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about integrating and using
                Rollback.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="overview" className="w-full">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/4">
                  <div className="sticky top-24">
                    <TabsList className="flex flex-col w-full h-auto bg-transparent space-y-1">
                      <TabsTrigger
                        value="overview"
                        className="w-full justify-start data-[state=active]:bg-rollback-primary/10 data-[state=active]:text-rollback-primary"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="quickstart"
                        className="w-full justify-start data-[state=active]:bg-rollback-primary/10 data-[state=active]:text-rollback-primary"
                      >
                        <ChevronRight className="h-4 w-4 mr-2" />
                        Quick Start
                      </TabsTrigger>
                      <TabsTrigger
                        value="integration"
                        className="w-full justify-start data-[state=active]:bg-rollback-primary/10 data-[state=active]:text-rollback-primary"
                      >
                        <Code className="h-4 w-4 mr-2" />
                        Integration Guide
                      </TabsTrigger>
                      <TabsTrigger
                        value="api"
                        className="w-full justify-start data-[state=active]:bg-rollback-primary/10 data-[state=active]:text-rollback-primary"
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        API Reference
                      </TabsTrigger>
                    </TabsList>

                    <div className="mt-8 p-4 border border-rollback-primary/20 rounded-lg">
                      <h3 className="font-medium flex items-center">
                        <Bookmark className="h-4 w-4 text-rollback-primary mr-2" />
                        Resources
                      </h3>
                      <ul className="mt-4 space-y-2">
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm text-muted-foreground hover:text-rollback-primary"
                          >
                            <ExternalLink className="h-3 w-3 mr-2" />
                            GitHub Repository
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm text-muted-foreground hover:text-rollback-primary"
                          >
                            <ExternalLink className="h-3 w-3 mr-2" />
                            Technical Whitepaper
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm text-muted-foreground hover:text-rollback-primary"
                          >
                            <ExternalLink className="h-3 w-3 mr-2" />
                            Security Audits
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="md:w-3/4">
                  <TabsContent value="overview" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Rollback Protocol Overview</CardTitle>
                        <CardDescription>
                          Understanding the Rollback system and its core
                          functionality
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <h3>What is Rollback?</h3>
                        <p>
                          Rollback is a smart contract protocol that monitors
                          wallet activity and automatically transfers assets to
                          designated fallback wallets after a predetermined
                          period of inactivity.
                        </p>

                        <h3>Core Features</h3>
                        <ul>
                          <li>
                            <strong>Activity Monitoring:</strong> Tracks wallet
                            transactions and interactions.
                          </li>
                          <li>
                            <strong>Configurable Thresholds:</strong> Set custom
                            inactivity periods before rollback is triggered.
                          </li>
                          <li>
                            <strong>Multiple Fallbacks:</strong> Designate
                            multiple recipient wallets with priority ordering.
                          </li>
                          {/* <li><strong>Multi-Chain Support:</strong> Works across multiple blockchain networks.</li> */}
                          <li>
                            <strong>Non-Custodial:</strong> Never takes control
                            of your assets until the rollback condition is met.
                          </li>
                        </ul>

                        <h3>How Rollback Works</h3>
                        <p>
                          Rollback uses a combination of smart contracts and
                          off-chain monitoring to track wallet activity. When a
                          wallet becomes inactive for longer than the specified
                          threshold, the protocol initiates the rollback
                          process, transferring assets to the designated
                          fallback wallets.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="quickstart" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Start Guide</CardTitle>
                        <CardDescription>
                          Get up and running with Rollback in minutes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <h3>Prerequisites</h3>
                        <ul>
                          <li>A Web3 wallet (MetaMask, WalletConnect, etc.)</li>
                          <li>ETH or relevant tokens for gas fees</li>
                        </ul>

                        <h3>Step 1: Connect Your Wallet</h3>
                        <p>
                          Visit the Rollback app and connect your wallet using
                          the "Connect Wallet" button in the top right corner.
                        </p>

                        <h3>Step 2: Create a Rollback Plan</h3>
                        <p>
                          Navigate to the dashboard and click "Create New
                          Rollback Plan". Select the wallet you want to protect
                          and set your inactivity threshold.
                        </p>

                        <h3>Step 3: Add Fallback Wallets</h3>
                        <p>
                          Add one or more fallback wallets that will receive
                          your assets if your primary wallet becomes inactive.
                          Prioritize them in the order you prefer.
                        </p>

                        <h3>Step 4: Confirm and Deploy</h3>
                        <p>
                          Review your settings and deploy the Rollback smart
                          contract. You'll need to approve the transaction in
                          your wallet.
                        </p>

                        <div className="mt-6 p-4 bg-rollback-light/20 rounded-lg">
                          <h4 className="text-sm font-medium mb-2">
                            Example Configuration
                          </h4>
                          <pre className="text-xs p-4 bg-rollback-dark/5 rounded relative">
                            {`{
  "primaryWallet": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  "inactivityThreshold": 180, // days
  "fallbackWallets": [
    "0x123...abc",
    "0x456...def"
  ],
  "networks": ["ethereum", "polygon"]
}`}
                            <button
                              className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-rollback-primary"
                              onClick={() =>
                                copyToClipboard(`{
  "primaryWallet": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  "inactivityThreshold": 180, // days
  "fallbackWallets": [
    "0x123...abc",
    "0x456...def"
  ],
  "networks": ["ethereum", "polygon"]
}`)
                              }
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </pre>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full bg-rollback-primary hover:bg-rollback-primary/90 text-white"
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                        >
                          {/* <a href="https://app.rollbacklabs.com" target="_blank"> */}
                          {isHovered ? "Coming Soon" : "Try It Now"}
                          <ChevronRight className="ml-2 h-4 w-4" />
                          {/* </a> */}
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="integration" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Integration Guide</CardTitle>
                        <CardDescription>
                          Integrate Rollback into your dApp or wallet
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <h3>Integration Options</h3>
                        <p>
                          Rollback can be integrated into your application in
                          several ways:
                        </p>
                        <ul>
                          <li>JavaScript SDK</li>
                          <li>REST API</li>
                          <li>Direct Smart Contract Interaction</li>
                        </ul>

                        <h3>JavaScript SDK</h3>
                        <div className="mt-2 mb-4 p-4 bg-rollback-dark/5 rounded relative">
                          <pre className="text-xs">
                            {`npm install @rollback/sdk`}
                          </pre>
                          <button
                            className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-rollback-primary"
                            onClick={() =>
                              copyToClipboard("npm install @rollback/sdk")
                            }
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-2 mb-4 p-4 bg-rollback-dark/5 rounded relative">
                          <pre className="text-xs">
                            {`import { Rollback } from '@rollback/sdk';

// Initialize Rollback
const rollback = new Rollback({
  apiKey: 'YOUR_API_KEY',
  network: 'ethereum',
});

// Create a new rollback plan
const plan = await rollback.createPlan({
  primaryWallet: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  inactivityThreshold: 180, // days
  fallbackWallets: ['0x123...abc', '0x456...def'],
});

// Get plan status
const status = await rollback.getPlanStatus(plan.id);`}
                          </pre>
                          <button
                            className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-rollback-primary"
                            onClick={() =>
                              copyToClipboard(`import { Rollback } from '@rollback/sdk';

// Initialize Rollback
const rollback = new Rollback({
  apiKey: 'YOUR_API_KEY',
  network: 'ethereum',
});

// Create a new rollback plan
const plan = await rollback.createPlan({
  primaryWallet: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  inactivityThreshold: 180, // days
  fallbackWallets: ['0x123...abc', '0x456...def'],
});

// Get plan status
const status = await rollback.getPlanStatus(plan.id);`)
                            }
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>

                        <h3>Direct Smart Contract Interaction</h3>
                        <p>
                          For advanced users, you can interact directly with our
                          smart contracts.
                        </p>
                        <div className="mt-2 mb-4 p-4 bg-rollback-dark/5 rounded relative">
                          <pre className="text-xs">
                            {`// Rollback Factory Contract Address
const ROLLBACK_FACTORY = "0x1234...";

// Create a new rollback plan
const tx = await rollbackFactory.createPlan(
  primaryWallet,
  inactivityThreshold,
  fallbackWallets
);

// Wait for confirmation
await tx.wait();`}
                          </pre>
                          <button
                            className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-rollback-primary"
                            onClick={() =>
                              copyToClipboard(`// Rollback Factory Contract Address
const ROLLBACK_FACTORY = "0x1234...";

// Create a new rollback plan
const tx = await rollbackFactory.createPlan(
  primaryWallet,
  inactivityThreshold,
  fallbackWallets
);

// Wait for confirmation
await tx.wait();`)
                            }
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button
                          variant="outline"
                          className="border-rollback-primary text-rollback-primary hover:bg-rollback-primary/10"
                        >
                          View Contract Addresses
                        </Button>
                        <Button className="bg-rollback-primary hover:bg-rollback-primary/90 text-white">
                          Get API Key
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="api" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>API Reference</CardTitle>
                        <CardDescription>
                          Comprehensive documentation for Rollback's API
                          endpoints
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium">
                              Authentication
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              All API requests require authentication using an
                              API key.
                            </p>
                            <div className="p-3 bg-rollback-dark/5 rounded text-sm">
                              <code>Authorization: Bearer YOUR_API_KEY</code>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium">
                              Endpoint: Create Plan
                            </h3>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                                POST
                              </span>
                              <code className="text-sm">/api/v1/plans</code>
                            </div>
                            <p className="text-muted-foreground mb-2">
                              Creates a new rollback plan for a wallet.
                            </p>
                            <div className="mt-2 p-4 bg-rollback-dark/5 rounded relative">
                              <pre className="text-xs">
                                {`// Request Body
{
  "primaryWallet": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  "inactivityThreshold": 180,
  "fallbackWallets": [
    "0x123...abc",
    "0x456...def"
  ],
  "networks": ["ethereum", "polygon"]
}

// Response
{
  "id": "plan_1234567890",
  "status": "active",
  "createdAt": "2023-06-15T12:00:00Z",
  "primaryWallet": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  "inactivityThreshold": 180,
  "fallbackWallets": [
    "0x123...abc",
    "0x456...def"
  ],
  "networks": ["ethereum", "polygon"]
}`}
                              </pre>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium">
                              Endpoint: Get Plan
                            </h3>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                                GET
                              </span>
                              <code className="text-sm">/api/v1/plans/:id</code>
                            </div>
                            <p className="text-muted-foreground mb-2">
                              Retrieves a specific rollback plan.
                            </p>
                            <div className="mt-2 p-4 bg-rollback-dark/5 rounded relative">
                              <pre className="text-xs">
                                {`// Response
{
  "id": "plan_1234567890",
  "status": "active",
  "lastActivityDate": "2023-06-15T12:00:00Z",
  "daysUntilRollback": 165,
  "primaryWallet": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  "inactivityThreshold": 180,
  "fallbackWallets": [
    "0x123...abc",
    "0x456...def"
  ],
  "networks": ["ethereum", "polygon"]
}`}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-rollback-primary text-rollback-primary hover:bg-rollback-primary/10"
                        >
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            View Full API Documentation
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Border Beam for the testimonials section */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-rollback-primary/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-6 text-xl font-medium text-rollback-primary">
              Testimonials
            </span>
          </div>
        </div>

        {/* Testimonials section with marquee effect */}
        <section className="py-8 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex animate-marquee space-x-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md min-w-[300px] max-w-[300px]"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-rollback-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-rollback-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium">Developer {i}</h4>
                      <p className="text-xs text-muted-foreground">
                        Protocol Engineer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm">
                    "Integrating Rollback was straightforward and added
                    significant value to our wallet application. Our users love
                    the extra security layer."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocumentationPage;
