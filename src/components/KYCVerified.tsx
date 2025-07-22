import { motion } from "framer-motion";
import {
  Shield,
  CheckCircle,
  Users,
  Award,
  Verified,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const KYCVerified = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rollback-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-200 shadow-rollback-lg mb-12 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-rollback-cream rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-rollback-secondary/20 to-green-100 rounded-full blur-2xl opacity-60" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-700 font-semibold text-sm">
                      VERIFIED STATUS
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-rollback-dark mb-4">
                    KYC Verified
                  </h3>

                  <p className="text-rollback-dark/60 mb-6 leading-relaxed">
                    Our team has successfully completed comprehensive KYC
                    verification through AssureDeFi, ensuring full regulatory
                    compliance and transparency.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-rollback-primary/10 border border-rollback-primary/20 rounded-full">
                      <Users className="h-4 w-4 text-rollback-primary" />
                      <span className="text-rollback-primary font-medium text-sm">
                        Team Verified
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-green-700 font-medium text-sm">
                        Platform Compliant
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-rollback-secondary/10 border border-rollback-secondary/20 rounded-full">
                      <Award className="h-4 w-4 text-rollback-brown" />
                      <span className="text-rollback-brown font-medium text-sm">
                        AssureDeFi Verified
                      </span>
                    </div>
                    <a
                      href="https://projects.assuredefi.com/project/rollback"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full hover:bg-green-100 text-green-700 hover:text-green-800 transition-all duration-300"
                    >
                      <Verified className="h-4 w-4" />
                      <span className="font-medium text-sm">
                        View KYC Certificate
                      </span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="relative">
                    <a
                      href="https://projects.assuredefi.com/project/rollback"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-48 h-48 bg-gradient-to-br from-green-50 to-rollback-light border-2 border-solid border-green-300 rounded-3xl flex items-center justify-center shadow-inner p-4 hover:border-green-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="text-center w-full">
                          <img
                            src="/assuredefi.png"
                            alt="AssureDeFi Logo"
                            className="w-24 h-24 mx-auto mb-3 object-contain"
                          />
                          <span className="text-green-600 font-semibold text-sm">
                            KYC Verified
                          </span>
                          <p className="text-green-600/70 text-xs mt-1">
                            By AssureDeFi
                          </p>
                          <div className="flex items-center justify-center gap-1 mt-2">
                            <span className="text-green-600/60 text-xs">
                              View Certificate
                            </span>
                            <ExternalLink className="h-3 w-3 text-green-600/60" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg ">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-rollback-dark/50 text-sm mb-4">
              KYC verification completed through AssureDeFi in 2025 •
              Certificates available for regulatory review
            </p>
            <a
              href="https://projects.assuredefi.com/project/rollback"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-rollback-cream border border-rollback-primary/20 rounded-full hover:bg-rollback-light hover:border-rollback-primary/30 transition-all duration-300"
            >
              <Shield className="h-4 w-4 text-rollback-primary" />
              <span className="text-rollback-dark font-medium text-sm">
                Verified by AssureDeFi
              </span>
              <ExternalLink className="h-3 w-3 text-rollback-primary/60" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KYCVerified;
