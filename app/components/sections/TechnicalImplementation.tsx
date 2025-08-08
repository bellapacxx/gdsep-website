"use client";

import { motion } from "framer-motion";
import {
  Layers3,
  FileCode2,
  DatabaseZap,
  CircuitBoard,
  Coins,
  Vault,
  Rocket,
} from "lucide-react";

export default function TechnicalImplementation() {
  return (
    <section
      id="technical-implementation"
      className="w-full bg-primary text-background py-20 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 tracking-tight text-center">
          Technical Implementation
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-20 max-w-7xl mx-auto">
          {/* Blockchain Stack - Left */}
          <div className="md:w-1/2 mb-16 md:mb-0">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Layers3 className="h-6 w-6 text-orange-300" />
              Blockchain Stack
            </h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <CircuitBoard className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Base Layer</h4>
                  <p className="text-sm text-orange-100">
                    Ethereum L2 (Polygon zkEVM) for scalability and EVM compatibility.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Coins className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Asset Tokens</h4>
                  <p className="text-sm text-orange-100">SVG (ERC-20 standard)</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <DatabaseZap className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Governance</h4>
                  <p className="text-sm text-orange-100">DAO using Aragon stack</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Smart Contract Suite - Right */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <FileCode2 className="h-6 w-6 text-orange-300" />
              Smart Contract Suite
            </h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Vault className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">SVG Minting Contract</h4>
                  <p className="text-sm text-orange-100">
                    Reserve-backed minting with real-time Chainlink audits.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Rocket className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Startup Vesting Contract</h4>
                  <p className="text-sm text-orange-100">
                    Time-locked and milestone-based SVG disbursements.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Coins className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Revenue Sharing Contract</h4>
                  <p className="text-sm text-orange-100">
                    Automatically collects and redistributes 20% of profits back
                    to the SVG ecosystem.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
