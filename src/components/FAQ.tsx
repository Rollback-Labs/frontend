import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs = [
    {
      question: "How does Rollback actually work?",
      answer:
        "Rollback monitors your wallet's activity through a secure smart contract. If your wallet becomes inactive for a period you define, the contract automatically transfers your assets to your designated fallback wallet addresses. Our technology uses blockchain-native functionality, requiring no centralized services or ongoing maintenance from you.",
    },
    {
      question: "What happens if I lose my private keys?",
      answer:
        "If you lose access to your private keys, Rollback acts as your safety net. Once your predefined inactivity period is reached, your funds will automatically transfer to your designated fallback wallet(s). This ensures your assets remain accessible even if your primary wallet keys are lost.",
    },
    // {
    //   question: "Is Rollback secure? Has it been audited?",
    //   answer:
    //     "Yes, security is our top priority. The Rollback protocol has undergone comprehensive security audits by leading firms including CertiK, Trail of Bits, and OpenZeppelin. Our smart contracts are open-source, allowing for transparent review by the community. We implement multiple security layers and follow industry best practices.",
    // },
    {
      question: "What cryptocurrencies does Rollback support?",
      answer: "Rollback currently only supports Base Network",
      // answer: "Rollback supports a wide range of cryptocurrencies across multiple blockchain networks. This includes Ethereum (and all ERC-20 tokens), Polygon, Binance Smart Chain, Avalanche, Solana, and many others. Our multi-chain approach ensures comprehensive protection regardless of which cryptocurrencies you hold."
    },
    {
      question: "Can I customize the inactivity period?",
      answer:
        "Absolutely. Rollback gives you full control over your inactivity parameters. You can set timeframes ranging from days to years depending on your needs. Different wallets can have different inactivity periods, and you can update these settings at any time through our dashboard.",
    },
    // {
    //   question: "What prevents false triggers if I'm on vacation?",
    //   answer:
    //     "Rollback includes several features to prevent false triggers. You can set custom notification thresholds to alert you before any rollback occurs. Our system also allows for 'heartbeat' transactions that reset the inactivity timer without requiring significant activity. Additionally, you can temporarily pause the monitoring for planned absences.",
    // },
    {
      question: "Can I use Rollback for my business or DAO?",
      answer:
        "Yes, Rollback offers enterprise solutions tailored for businesses, DAOs, and organizations. These include multi-signature requirements, role-based permissions, and customizable governance structures. Our technology ensures treasury funds remain accessible even during key personnel changes or emergencies.",
    },
    // {
    //   question: "How much does Rollback cost to use?",
    //   answer:
    //     "Rollback operates on a tiered subscription model based on the value of assets protected and features needed.",

    //   // answer: "Rollback operates on a tiered subscription model based on the value of assets protected and features needed. We offer a free basic plan for smaller holders, standard plans for individual investors, and enterprise plans for organizations. All plans include our core rollback functionality, with additional features available at higher tiers."
    // },
    {
      question: "What happens if the blockchain network is congested?",
      answer:
        "Rollback includes smart gas optimization to ensure your transactions can proceed even during network congestion.",
    },
    // {
    //   question: "Can I test Rollback before using it with my real assets?",
    //   answer:
    //     "Yes, we offer a testnet environment where you can trial the complete Rollback experience using test tokens. This allows you to familiarize yourself with the platform, test different configurations, and verify the rollback process before implementing it with your actual assets.",
    // },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about Rollback's functionality,
            security, and implementation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-rollback-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-rollback-light/50 rounded-xl p-6 border border-rollback-primary/20 text-center">
            <h3 className="text-xl font-semibold mb-3">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our team is available to help you with any additional questions or
              concerns.
            </p>
            <div className="flex justify-center">
              <Link
                to="/feedback"
                className="inline-flex items-center justify-center bg-rollback-primary hover:bg-rollback-primary/90 text-white rounded-md px-6 py-2 font-medium"
              >
                Leave Feedback
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
