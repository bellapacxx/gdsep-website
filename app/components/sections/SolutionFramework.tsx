"use client";

import { motion } from "framer-motion";
import { CheckCircle, Rocket, Landmark, Sparkles, Coins, Repeat } from "lucide-react";
import { Badge } from "../ui/badge";

const components = [
  {
    icon: <Rocket className="w-6 h-6 text-orange-500" />,
    title: "SVG Token",
    badge: "Asset-Backed",
    description: "1 SVG = 1 sqm of land or 0.1g of gold. A reserve-backed digital asset that grounds trust in real-world value.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    title: "Startup Incubator",
    badge: "Youth-Led",
    description: "Local innovation hubs offering mentorship, training, and SVG-based funding to fuel grassroots entrepreneurship.",
  },
  {
    icon: <Landmark className="w-6 h-6 text-blue-500" />,
    title: "Land DAO",
    badge: "Decentralized",
    description: "Community-driven governance over land, token issuance, and funding decisions—transparent and democratic.",
  },
];

const howItWorks = [
  {
    icon: <Coins className="w-5 h-5 text-orange-500" />,
    title: "Asset Tokenization",
    description: "Communities or governments stake land and mineral wealth into secure SVG vaults to mint asset-backed tokens.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-green-500" />,
    title: "Startup Funding",
    description: "Visionary entrepreneurs pitch ideas and receive SVG seed capital through smart contract-based disbursements.",
  },
  {
    icon: <Repeat className="w-5 h-5 text-blue-500" />,
    title: "Ecosystem Growth",
    description: "Funded ventures generate economic value, repaying in SVG or via revenue-sharing—recycling wealth into the system.",
  },
];

export default function SolutionFramework() {
  return (
    <section
      id="solution-framework"
      className="w-full bg-gradient-to-b from-white to-gray-50 text-text py-24 px-6 sm:px-12"
      aria-labelledby="solution-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          id="solution-heading"
          className="text-4xl font-extrabold mb-14 text-primary tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          The GDSEP Solution Framework
        </motion.h2>

        {/* Core Components */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">
            Core Pillars
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {components.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/80 border border-muted backdrop-blur shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                </div>
                <Badge variant="secondary" className="mb-3">{item.badge}</Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            How It Works
          </h3>
          <div className="space-y-6">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-none mt-1">{step.icon}</div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
