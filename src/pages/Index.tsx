
import Layout from "@/components/Layout";
import HomePage from "./HomePage";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <HomePage />
      </motion.div>
    </Layout>
  );
};

export default Index;
