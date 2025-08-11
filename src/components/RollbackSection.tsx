import { motion } from "framer-motion";
import { Shield, RefreshCw, Clock } from "lucide-react";

const RollbackSection = () => {
  return (
    <section
      id="rollback"
      className="py-20 bg-white relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 -bottom-10 w-80 h-80 rounded-full bg-gradient-to-r from-rollback-primary/10 to-rollback-brown/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-rollback-light/50 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-rollback-primary/20">
              <Shield className="h-5 w-5 text-rollback-primary mr-2" />
              <span className="text-sm font-medium text-rollback-dark">
                Rollback System
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">
                Never lose access to your crypto
              </span>
            </h2>
            <p className="text-muted-foreground mt-3">
              Rollback monitors your wallets for inactivity and securely moves
              assets to your chosen fallback when thresholds are reached.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-rollback-light p-2 border border-rollback-primary/20">
                  <Clock className="h-4 w-4 text-rollback-primary" />
                </div>
                <div>
                  <p className="font-medium text-rollback-dark">
                    Automated monitoring
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Customizable inactivity thresholds per wallet.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-rollback-light p-2 border border-rollback-primary/20">
                  <RefreshCw className="h-4 w-4 text-rollback-secondary" />
                </div>
                <div>
                  <p className="font-medium text-rollback-dark">
                    Smart rollback
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Priority-based or randomized fallback allocation.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-6 border border-rollback-primary/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-rollback-light to-rollback-cream/60 grid place-items-center">
              <Shield className="h-16 w-16 text-rollback-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RollbackSection;
