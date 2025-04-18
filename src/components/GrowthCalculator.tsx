import React, { useState } from "react";
import { motion } from "framer-motion";

const GrowthCalculator = () => {
  const [formData, setFormData] = useState({
    currentRevenue: 100000,
    marketingBudget: 10000,
    currentCAC: 50,
    currentROAS: 2,
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value) || 0,
    });
  };

  const calculateGrowth = () => {
    const { currentRevenue, marketingBudget, currentCAC, currentROAS } =
      formData;

    // Estimated improvements based on past performance
    const improvedCAC = currentCAC * 0.62; // 38% reduction
    const improvedROAS = currentROAS * 2.5; // 5-7x improvement from baseline

    // Calculate potential results
    const currentCustomers = marketingBudget / currentCAC;
    const improvedCustomers = marketingBudget / improvedCAC;
    const additionalCustomers = improvedCustomers - currentCustomers;

    const currentRevenueFromMarketing = marketingBudget * currentROAS;
    const improvedRevenueFromMarketing = marketingBudget * improvedROAS;
    const additionalRevenue =
      improvedRevenueFromMarketing - currentRevenueFromMarketing;

    const totalProjectedRevenue = currentRevenue + additionalRevenue;
    const growthPercentage = (additionalRevenue / currentRevenue) * 100;

    setResults({
      improvedCAC,
      improvedROAS,
      additionalCustomers,
      additionalRevenue,
      totalProjectedRevenue,
      growthPercentage,
    });
  };

  return (
    <div className="bg-background py-24 px-4 md:px-8 lg:px-16 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Coffee Brand <span className="text-primary">Growth Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estimate your potential growth based on my proven marketing
            strategies
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
              Enter Your Current Metrics
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-muted-foreground mb-2">
                  Current Annual Revenue (₹)
                </label>
                <input
                  type="number"
                  name="currentRevenue"
                  value={formData.currentRevenue}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-primary/20 rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-muted-foreground mb-2">
                  Monthly Marketing Budget (₹)
                </label>
                <input
                  type="number"
                  name="marketingBudget"
                  value={formData.marketingBudget}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-primary/20 rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-muted-foreground mb-2">
                  Current Customer Acquisition Cost (₹)
                </label>
                <input
                  type="number"
                  name="currentCAC"
                  value={formData.currentCAC}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-primary/20 rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-muted-foreground mb-2">
                  Current ROAS (Return on Ad Spend)
                </label>
                <input
                  type="number"
                  name="currentROAS"
                  value={formData.currentROAS}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-primary/20 rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
              </div>

              <button
                onClick={calculateGrowth}
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-4 rounded-md text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              >
                Calculate Potential Growth
              </button>
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
              Your Growth Potential
            </h3>

            {results ? (
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background/30 p-6 rounded-lg border border-primary/20 text-center">
                    <h4 className="text-xl font-bold text-primary mb-1">
                      {results.improvedCAC.toLocaleString("en-IN", {
                        maximumFractionDigits: 0,
                      })}{" "}
                      ₹
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Optimized CAC
                    </p>
                    <p className="text-xs text-primary/70 mt-2">
                      38% Reduction
                    </p>
                  </div>

                  <div className="bg-background/30 p-6 rounded-lg border border-primary/20 text-center">
                    <h4 className="text-xl font-bold text-primary mb-1">
                      {results.improvedROAS.toFixed(1)}x
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Improved ROAS
                    </p>
                    <p className="text-xs text-primary/70 mt-2">
                      150% Increase
                    </p>
                  </div>
                </div>

                <div className="bg-background/30 p-6 rounded-lg border border-primary/20">
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Projected Growth
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground">
                          Additional Customers
                        </span>
                        <span className="text-primary font-medium">
                          {Math.round(
                            results.additionalCustomers,
                          ).toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{
                            width: `${Math.min(100, (results.additionalCustomers / (formData.marketingBudget / formData.currentCAC)) * 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground">
                          Additional Revenue
                        </span>
                        <span className="text-primary font-medium">
                          {results.additionalRevenue.toLocaleString("en-IN", {
                            maximumFractionDigits: 0,
                          })}{" "}
                          ₹
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{
                            width: `${Math.min(100, (results.additionalRevenue / formData.currentRevenue) * 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground">
                          Growth Percentage
                        </span>
                        <span className="text-primary font-medium">
                          {results.growthPercentage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{
                            width: `${Math.min(100, results.growthPercentage)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 text-center">
                  <h4 className="text-2xl font-bold text-primary mb-2">
                    {results.totalProjectedRevenue.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}{" "}
                    ₹
                  </h4>
                  <p className="text-muted-foreground">
                    Total Projected Annual Revenue
                  </p>
                </div>

                <button className="w-full bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground font-bold py-3 rounded-md transition-all duration-300 border border-primary/30">
                  Schedule a Consultation
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center py-12">
                <div className="text-6xl text-primary/30 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-muted-foreground text-center max-w-md">
                  Enter your current business metrics and click "Calculate
                  Potential Growth" to see how my marketing strategies could
                  impact your coffee brand.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GrowthCalculator;
