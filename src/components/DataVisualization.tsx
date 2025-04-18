import React from "react";
import { motion } from "framer-motion";

const DataVisualization = () => {
  return (
    <div className="bg-background py-24 px-4 md:px-8 lg:px-16 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
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
            Data <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualizing the impact of data-driven marketing strategies across
            campaigns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Campaign Performance Metrics
            </h3>
            <div className="space-y-6">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">{metric.name}</span>
                    <span className="text-primary font-medium">
                      {metric.value}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                      className="h-full bg-primary rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Growth Over Time
            </h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {growthData.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                    className="w-full bg-primary/70 hover:bg-primary transition-colors duration-300 rounded-t-sm"
                    style={{ maxWidth: "30px" }}
                  ></motion.div>
                  <span className="text-xs text-muted-foreground mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Key Performance Indicators
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiData.map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-background/30 p-6 rounded-lg border border-primary/20 text-center"
                >
                  <div className="text-primary mb-2">{kpi.icon}</div>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {kpi.value}
                  </h4>
                  <p className="text-sm text-muted-foreground">{kpi.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const performanceMetrics = [
  { name: "ROAS (Return on Ad Spend)", value: "5.7x", percentage: 95 },
  { name: "Customer Acquisition Cost Reduction", value: "38%", percentage: 76 },
  { name: "Organic Traffic Growth", value: "4x", percentage: 80 },
  { name: "Customer Retention Improvement", value: "8%", percentage: 64 },
  { name: "Conversion Rate", value: "12.3%", percentage: 82 },
];

const growthData = [
  { label: "Q1", percentage: 30 },
  { label: "Q2", percentage: 45 },
  { label: "Q3", percentage: 60 },
  { label: "Q4", percentage: 75 },
  { label: "Q1", percentage: 85 },
  { label: "Q2", percentage: 95 },
];

const kpiData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    value: "5-7x",
    label: "Average ROAS",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    value: "38%",
    label: "CAC Reduction",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    value: "8%",
    label: "Retention Increase",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    value: "4x",
    label: "Organic Traffic",
  },
];

export default DataVisualization;
