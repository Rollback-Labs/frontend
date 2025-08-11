import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Roadmap = () => {
  // Using provided image from public/roadmap.png

  return (
    <section
      id="roadmap"
      className="py-20 bg-gradient-to-b from-rollback-cream/20 to-white relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-rollback-primary/10 to-rollback-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-rollback-light/50 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-rollback-primary/20">
            <Calendar className="h-5 w-5 text-rollback-primary mr-2" />
            <span className="text-sm font-medium text-rollback-dark">
              Product Roadmap
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Where Rollback is headed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
            A transparent view of what we’ve shipped and what’s coming next.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/roadmap.png"
              alt="Rollback product roadmap"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Button asChild className="rounded-full px-6">
              <a
                href="https://rollback-labs.gitbook.io/rollback-labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View full roadmap on GitBook"
              >
                View full roadmap on GitBook
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
