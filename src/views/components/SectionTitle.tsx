import React from "react";
import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, badge, center = true, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 max-w-3xl ${center ? "text-center mx-auto" : "text-right"}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider rounded-full uppercase mb-4 font-mono border ${
            light 
              ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" 
              : "text-gold-600 bg-gold-500/10 border-gold-500/20"
          }`}
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`text-base sm:text-lg leading-relaxed mt-2 animate-fade-in ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative Golden/Cyan Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1 mt-6 ${center ? "mx-auto" : "mr-0"} bg-gradient-to-r ${
          light ? "from-cyan-500 to-blue-400" : "from-gold-600 to-gold-400"
        }`}
      />
    </div>
  );
}
