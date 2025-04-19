import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="bg-background min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          initial={{ scale: 0.8, opacity: 0.1 }}
          animate={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          initial={{ scale: 1, opacity: 0.1 }}
          animate={{ scale: 1.5, opacity: 0.15 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-primary/15 blur-3xl"
          initial={{ scale: 0.9, opacity: 0.1 }}
          animate={{ scale: 1.3, opacity: 0.2 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto z-10"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-primary">AI-Driven</span> Marketing Duo for
          <span className="block mt-2">Scalable, Performance-Led Growth</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          We help brands unlock measurable impact through intelligent marketing
          strategies, automation, and creative precision—across industries and
          platforms.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-6xl z-10"
      >
        {achievementMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            className="bg-secondary/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 text-center hover:border-primary/50 transition-all duration-300"
          >
            <h3 className="text-primary text-5xl font-bold mb-3">
              {metric.value}
            </h3>
            <p className="text-muted-foreground">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 z-10"
      >
        <a
          href="/marketing-proposal.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <motion.button
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-4 px-10 rounded-md text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover How We Can Grow Your Brand
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

const achievementMetrics = [
  { value: "5-7x", label: "Average ROAS Across Campaigns" },
  { value: "38%", label: "Reduced Customer Acquisition Cost" },
  { value: "8%", label: "Increased Customer Retention" },
  { value: "4x", label: "Organic Traffic Increase" },
];

export default HeroSection;
