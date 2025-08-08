'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0B2240] to-[#09182e] text-white py-32 px-6 md:px-16 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#F26522_1px,transparent_1px)] [background-size:30px_30px] opacity-10 z-0" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Empowering Startups. <br className="hidden md:inline" />
          Building Africa’s Future.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          The <span className="text-orange-400 font-semibold">Global Dynamic Startup Entrepreneurship Program (GDSEP)</span> uses the <span className="text-orange-400 font-semibold">SVG Token</span> to connect capital, innovation, and opportunity across Africa and its diaspora.
        </p>
        <div className="flex justify-center gap-4">
          <Button
  size="lg"
  className="bg-accent hover:bg-orange-600 text-white font-semibold shadow-xl rounded-2xl px-10 py-3 text-lg transition-all duration-300 flex items-center justify-center gap-2"
>
  Join the Movement
  <ArrowRight className="h-5 w-5" />
</Button>

          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0B2240] rounded-xl px-6 py-3 text-lg">
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
