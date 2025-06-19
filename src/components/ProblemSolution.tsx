import { Book, ShieldAlert, ShieldCheck } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { MagicCard } from "./magicui/magic-card";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-rollback-cream/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            The Problem & Our Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cryptocurrency assets worth billions are lost forever due to
            forgotten keys, death, or technical errors. Rollback provides a
            safety net to ensure your assets always remain accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="rounded-2xl shadow-md transform transition-all lg:hover:scale-105 duration-300 bg-white overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <ShieldAlert className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">
                The Problem
              </h3>
              <ul className="space-y-4">
                {[
                  "Billions of dollars in crypto wallet funds have been lost forever due to lost private keys",
                  "When crypto owners die without sharing access, their assets are lost forever",
                  "Technical errors, forgotten passwords, and hardware failures create permanent losses",
                  "No built-in recovery mechanisms exist in most blockchain systems",
                  "Current solutions are manual, complex, and often unreliable",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-destructive/10 text-destructive h-6 w-6 mr-3 mt-0.5 text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <BorderBeam
              size={400}
              duration={5}
              colorFrom="#E83A3A"
              reverse
              colorTo="#FF6B6B"
            />
          </div>

          <div className="rounded-2xl shadow-md transform transition-all lg:hover:scale-105 duration-300 bg-white overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-rollback-primary/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <ShieldCheck className="h-8 w-8 text-rollback-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">
                Our Solution
              </h3>
              <ul className="space-y-4">
                {[
                  "Our System that automatically monitor wallet activity",
                  "If inactivity is detected, funds are transferred to your designated fallback wallets",
                  "Multiple security parameters ensure your assets are only transferred when necessary",
                  "Complete control over timeframes, conditions, and destination wallets",
                  "Multi-token support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-rollback-primary/10 text-rollback-primary h-6 w-6 mr-3 mt-0.5 text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <BorderBeam
              size={400}
              duration={5}
              colorFrom="#E9A344"
              colorTo="#F5C678"
            />
          </div>
        </div>

        <div className="mt-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <MagicCard
              className="rounded-xl overflow-hidden cursor-pointer"
              gradientColor={"#f7e7c2"}
            >
              <div className="p-6 md:p-8 relative">
                <div className="absolute -top-6 -left-6 bg-white rounded-full p-4 shadow-lg">
                  <Lightbulb className="h-8 w-8 text-rollback-primary" />
                </div>

                <div className="pl-4 pt-4">
                  <h3 className="text-2xl font-bold mb-3 gradient-text">
                    Did you know?
                  </h3>
                  <div className="prose prose-lg dark:prose-invert">
                    <p className="text-muted-foreground mb-4">
                      According to cryptocurrency industry reports, a
                      significant percentage of cryptocurrency has been lost
                      forever due to forgotten keys and inaccessible wallets. At
                      current prices, that's billions of dollars in inaccessible
                      assets.
                    </p>
                    <p className="font-medium text-foreground">
                      Rollback's technology aims to prevent future losses and
                      provide peace of mind for cryptocurrency holders.
                    </p>
                  </div>
                </div>
              </div>
            </MagicCard>
          </motion.div>

          {/* Mobile responsiveness - card scrolls sideways on small screens */}
          <div className="mt-8 md:hidden overflow-x-auto pb-4">
            <div className="flex gap-4 w-max px-4">
              {[
                "Lost crypto value exceeds GDP of many countries",
                "Some lost wallets contain massive amounts of cryptocurrency from early mining",
                "Even crypto founders have lost significant portions of their holdings",
              ].map((fact, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md border border-rollback-light min-w-[280px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-rollback-light rounded-full p-1.5">
                      <Lightbulb className="h-4 w-4 text-rollback-primary" />
                    </div>
                    <p className="text-sm font-medium">
                      Crypto Fact #{index + 1}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
