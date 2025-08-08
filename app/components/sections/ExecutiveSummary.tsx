'use client';
import { Lightbulb, Target, Gem } from 'lucide-react';

export default function ExecutiveSummary() {
  return (
    <section
      id="executive-summary"
      className="w-full bg-background text-text py-20 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Executive Summary
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A strategic initiative to transform remittances and local resources
            into high-impact, youth-driven entrepreneurship in developing nations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 transition hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-accent w-6 h-6" />
              <h3 className="text-xl font-semibold text-primary">Mission</h3>
            </div>
            <p className="text-gray-800 leading-relaxed mb-4">
              The Global Dynamic Startup Entrepreneurship Program (GDSEP) aims
              to combat poverty and illegal immigration by empowering youth
              entrepreneurs in developing nations through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Tokenization</strong> of underutilized land and mineral assets via <span className="font-medium text-accent">Sunvila Gold (SVG)</span>.
              </li>
              <li>
                <strong>Decentralized funding</strong> for local startups through a Web3 model.
              </li>
              <li>
                <strong>Blockchain-based ownership</strong> for transparency and liquidity.
              </li>
            </ul>
          </div>

          {/* Key Objectives Card */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 transition hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-accent w-6 h-6" />
              <h3 className="text-xl font-semibold text-primary">Key Objectives</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Launch <strong>10,000+</strong> youth-led startups by <strong>2030</strong>.
              </li>
              <li>
                Tokenize <strong>$500M+</strong> in land and mineral resources.
              </li>
              <li>
                Reduce illegal emigration by <strong>30%</strong> in pilot regions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
