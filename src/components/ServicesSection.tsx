import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  BarChart3,
  Megaphone,
  Bot,
  RefreshCw,
  Users,
  Layers,
} from "lucide-react";

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="bg-background py-24 px-4 md:px-8 lg:px-16 relative"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive marketing solutions powered by AI and human expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.2)",
              }}
              className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6 text-primary">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>
                <motion.div
                  className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-lg border border-primary/30 font-medium"
          >
            <span className="flex items-center">
              <Bot className="mr-2 h-5 w-5" />
              All services enhanced with Agentic AI capabilities
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Performance Marketing",
    description:
      "Data-driven campaigns across Google, Meta, and programmatic platforms with consistent 5-7x ROAS and advanced audience targeting.",
    icon: <BarChart3 className="h-10 w-10" />,
  },
  {
    title: "Brand Strategy & Positioning",
    description:
      "Develop compelling brand narratives and positioning that resonates with your target audience and differentiates you from competitors.",
    icon: <Layers className="h-10 w-10" />,
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategic content creation and community management across platforms to build engagement and drive meaningful conversions.",
    icon: <Users className="h-10 w-10" />,
  },
  {
    title: "Retention Marketing",
    description:
      "CRM strategies and automation to increase customer lifetime value, reduce churn, and build lasting relationships.",
    icon: <RefreshCw className="h-10 w-10" />,
  },
  {
    title: "AI-Powered Content Creation",
    description:
      "Leverage cutting-edge AI to generate high-converting copy, visuals, and creative assets at scale while maintaining brand voice.",
    icon: <Bot className="h-10 w-10" />,
  },
  {
    title: "Marketing Automation",
    description:
      "Build intelligent workflows that personalize customer journeys across channels, saving time while improving results.",
    icon: <Zap className="h-10 w-10" />,
  },
];

export default ServicesSection;
