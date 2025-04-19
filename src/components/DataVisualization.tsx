import React, { useState } from "react";
import { motion } from "framer-motion";

// Interactive Radar Chart Component
const InteractiveRadarChart = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on selection
  const displayProjects = selectedProject
    ? [projectDataPoints.find((p) => p.name === selectedProject)]
    : projectDataPoints;

  return (
    <div className="space-y-4">
      {/* Legend / Company Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {projectDataPoints.map((project, idx) => (
          <button
            key={idx}
            onClick={() =>
              setSelectedProject(
                project.name === selectedProject ? null : project.name,
              )
            }
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              project.name === selectedProject
                ? "bg-primary text-primary-foreground"
                : "bg-primary/10 text-primary hover:bg-primary/20"
            }`}
          >
            {project.name}
          </button>
        ))}
        {selectedProject && (
          <button
            onClick={() => setSelectedProject(null)}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-muted-foreground hover:bg-secondary/80 transition-all duration-300"
          >
            Show All
          </button>
        )}
      </div>

      <div className="relative h-80 w-full">
        {/* Radar Chart Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-md max-h-md">
            {/* Radar Background Circles */}
            {[1, 2, 3, 4, 5].map((level) => (
              <motion.div
                key={level}
                className="absolute top-1/2 left-1/2 rounded-full border border-primary/20"
                style={{
                  width: `${level * 20}%`,
                  height: `${level * 20}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: level * 0.15, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 * level }}
              />
            ))}

            {/* Radar Axes */}
            {skillAxes.map((axis, index) => {
              const angle = index * (360 / skillAxes.length) * (Math.PI / 180);
              const endX = 50 + 45 * Math.cos(angle);
              const endY = 50 + 45 * Math.sin(angle);

              return (
                <React.Fragment key={index}>
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-[1px] bg-primary/30"
                    style={{
                      height: "45%",
                      transformOrigin: "bottom center",
                      transform: `translate(-50%, -100%) rotate(${index * (360 / skillAxes.length)}deg)`,
                    }}
                    initial={{ opacity: 0, height: "0%" }}
                    animate={{ opacity: 1, height: "45%" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + 0.1 * index,
                    }}
                  />
                  <motion.div
                    className="absolute text-xs text-primary font-medium bg-background/80 px-2 py-1 rounded-md"
                    style={{
                      top: `${endY}%`,
                      left: `${endX}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + 0.1 * index,
                    }}
                  >
                    {axis}
                  </motion.div>
                </React.Fragment>
              );
            })}

            {/* Project Data Points */}
            {displayProjects.map((project, index) => {
              // Calculate position based on project values
              const points = skillAxes.map((skill, skillIndex) => {
                const angle =
                  skillIndex * (360 / skillAxes.length) * (Math.PI / 180);
                const value = project.skills[skillIndex] / 10; // Normalize to 0-1
                const distance = value * 45; // 45% is max distance

                return {
                  x: 50 + distance * Math.cos(angle),
                  y: 50 + distance * Math.sin(angle),
                };
              });

              // Create SVG path for the shape
              const pathD =
                points
                  .map(
                    (point, i) => `${i === 0 ? "M" : "L"}${point.x},${point.y}`,
                  )
                  .join(" ") + "Z";

              return (
                <motion.div key={index} className="absolute inset-0">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    className="overflow-visible"
                  >
                    <motion.path
                      d={pathD}
                      fill={`rgba(139, 92, 246, ${selectedProject ? 0.4 : 0.2 + index * 0.1})`}
                      stroke="rgba(139, 92, 246, 0.8)"
                      strokeWidth="1.5"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4 + 0.2 * index,
                      }}
                    />
                  </svg>

                  {/* Center point with label */}
                  <motion.div
                    className="absolute bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + 0.2 * index,
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {project.name}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const DataVisualization = () => {
  return (
    <div
      id="data-insights"
      className="bg-background py-24 px-4 md:px-8 lg:px-16 relative"
    >
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
              Multi-Axis Impact Analysis
            </h3>
            <InteractiveRadarChart />
            <div className="mt-4 text-center text-sm text-muted-foreground">
              <p>
                Visualizing our strategic range and skill application depth
                across projects
              </p>
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

const skillAxes = [
  "Branding",
  "Performance Marketing",
  "Automation",
  "Retention",
  "AI Integration",
];

const projectDataPoints = [
  {
    name: "Asian Paints",
    skills: [9, 10, 7, 6, 8], // Values from 1-10 for each skill axis
  },
  {
    name: "Nykaa",
    skills: [7, 9, 9, 10, 8],
  },
  {
    name: "KGK",
    skills: [10, 8, 9, 7, 6],
  },
  {
    name: "Alippo",
    skills: [6, 8, 7, 10, 9],
  },
  {
    name: "ConsultAdd",
    skills: [7, 6, 8, 7, 10],
  },
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
