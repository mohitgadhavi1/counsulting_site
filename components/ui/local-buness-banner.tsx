"use client";

import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function LocalBusinessBanner() {
  return (
    <section className="relative w-full overflow-hidden py-20 px-6 md:px-12 mb-12">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-slate-100 to-zinc-100">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.1 
            }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center shadow-lg"
          >
            <TrendingUp className="w-7 h-7 text-zinc-50" strokeWidth={2.5} />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-zinc-900">
              <span className="font-normal">Powering</span> Local Businesses
              <br />
              <span className="font-normal">to Grow</span>{' '}
              <span className="relative inline-block">
                <span className="font-semibold">Faster</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-zinc-900 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-600 max-w-2xl font-light leading-relaxed"
          >
            Transform your local presence with tools designed to accelerate growth,
            streamline operations, and connect with your community.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="/local-business"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 mt-4 bg-zinc-900 text-zinc-50 rounded-full font-medium text-base overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Button Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            
            <span className="relative z-10">Explore Solutions</span>
            <ArrowRight 
              className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" 
              strokeWidth={2}
            />
          </motion.a>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex md:flex-row flex-col items-center gap-6 pt-4 text-sm text-zinc-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Seamless & Smooth Onboarding</span>
            </div>
            <div className=" flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Flexible plans for your needs</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border border-zinc-200 rounded-full opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 border border-zinc-200 rounded-full opacity-40"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}