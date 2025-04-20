import React from "react";
import { motion } from "framer-motion";

const CaseStudiesSection = () => {
  return (
    <div
      id="case-studies"
      className="bg-background py-24 px-4 md:px-8 lg:px-16 relative"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
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
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven results across diverse brands, with strategies ready to adapt
            for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {study.company}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-4 py-1.5 rounded-md text-sm font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
                <a
                  href={study.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <motion.button
                    className="text-primary font-semibold hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-md transition-all duration-300 inline-flex items-center justify-center border border-primary/30 group-hover:border-primary w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Case Study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const caseStudies = [
  {
    company: "Asian Paints",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Asian_Paints_Logo.svg",
    description:
      "Led extensive rebranding campaign and implemented AMP to optimize lead generation, increasing monthly appointments from 200 to 1,000. Managed a ₹2 crore monthly digital budget with rigorous A/B testing.",
    metrics: ["5-6x ROAS", "5x Digital Inquiries", "MarTech Award"],
    caseStudyUrl: "/case-studies/asian-paints.html",
  },
  {
    company: "Nykaa",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Nykaa_Logo.png",
    description:
      "Managed ₹1.3 crore monthly paid media budgets across Google, Meta, and programmatic channels. Leveraged CRM segmentation and predictive modeling to improve retention across a 1.5 crore user base.",
    metrics: ["4.5-5x ROAS", "Improved Retention", "1.5 Crore User Base"],
    caseStudyUrl: "/case-studies/nykaa.html",
  },
  {
    company: "KGK Diamonds",
    logoUrl: "https://www.kgkgroup.com/wp-content/uploads/2019/06/logo.png",
    description:
      "Built digital presence from scratch, launching impactful omni-channel campaigns using Klaviyo and HubSpot. Achieved a 4x increase in organic traffic through optimized Google and Facebook campaigns.",
    metrics: ["6-7x ROAS", "4x Organic Traffic", "Omni-channel Strategy"],
    caseStudyUrl: "/case-studies/kgk-diamonds.html",
  },
  {
    company: "Alippo",
    logoUrl: "https://alippo.com/wp-content/uploads/2023/03/alippo-logo.svg",
    description:
      "Reduced Customer Acquisition Cost (CAC) by 38% through innovative digital marketing strategies. Increased customer retention from 20% to 28%, driving significant brand growth.",
    metrics: [
      "38% Lower CAC",
      "8% Retention Increase",
      "Targeted Digital Initiatives",
    ],
    caseStudyUrl: "/case-studies/alippo.html",
  },
  {
    company: "ConsultAdd",
    logoUrl:
      "https://consultadd.com/wp-content/uploads/2022/12/consultadd-logo.svg",
    description:
      "Revitalized YouTube presence, resulting in impressions growth of 5.2x, views growth of 4.9x, and subscribers by 2.6x. Implemented successful organic growth strategies and AI-driven content automation.",
    metrics: ["5.2x Impressions", "4.9x Views", "2.6x Subscribers"],
    caseStudyUrl: "/case-studies/consultadd.html",
  },
];

export default CaseStudiesSection;
