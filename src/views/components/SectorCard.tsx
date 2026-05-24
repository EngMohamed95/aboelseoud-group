import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Ship, Globe, Building2, ArrowLeft, ArrowUpRight, Calendar, Landmark } from "lucide-react";
import { Sector } from "../../models/sectorsModel";

interface SectorCardProps {
  sector: Sector;
  index: number;
  key?: React.Key;
}

export default function SectorCard({ sector, index }: SectorCardProps) {
  // Safe Icon Mapping
  const getIcon = (name: string) => {
    switch (sector.id) {
      case "maritime":
        return <Ship className="h-7 w-7 text-gold-500" />;
      case "meat":
        return <Globe className="h-7 w-7 text-gold-500" />;
      case "cement":
      default:
        return <Building2 className="h-7 w-7 text-gold-500" />;
    }
  };

  const colors = {
    maritime: {
      lightGlow: "rgba(30,58,96,0.3)",
      overlay: "bg-blue-950/40",
      accent: "border-blue-500/20"
    },
    meat: {
      lightGlow: "rgba(16,185,129,0.08)",
      overlay: "bg-emerald-950/40",
      accent: "border-emerald-500/20"
    },
    cement: {
      lightGlow: "rgba(245,158,11,0.08)",
      overlay: "bg-amber-950/40",
      accent: "border-amber-500/20"
    }
  };

  const activeColor = colors[sector.id as keyof typeof colors] || colors.maritime;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="relative rounded-xl overflow-hidden bg-white border border-slate-200/60 hover:border-gold-500/30 group duration-300 shadow-lg shadow-slate-200/50 flex flex-col h-full"
    >
      {/* Absolute Decorative Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent z-0 pointer-events-none" />

      {/* Modern Visual Header Image */}
      <div className="relative h-44 overflow-hidden z-10 border-b border-slate-100 shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent z-10" />
        <img
          src={
            sector.id === "maritime"
              ? "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=600&q=80"
              : sector.id === "meat"
              ? "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80"
              : "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
          }
          alt={sector.titleAr}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Float design badge to highlight sector number */}
        <div className="absolute top-4 right-4 text-white/50 font-mono text-3xl font-black select-none z-20">
          0{index + 1}
        </div>
      </div>

      <div className="p-6 relative z-20 flex flex-col justify-between flex-grow">
        <div>
          {/* Header Block */}
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-gold-600 shadow-sm relative z-10">
              {getIcon(sector.iconName)}
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-gold-600 uppercase tracking-widest px-2.5 py-0.5 bg-gold-500/10 rounded-full border border-gold-500/20">
              <Calendar className="h-3 w-3" />
              تأسس {sector.established}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-gold-600 transition-colors duration-300">
            {sector.companyNameAr}
          </h3>
          <p className="font-mono text-[10px] uppercase tracking-wide text-slate-400 mt-1 font-semibold">
            {sector.companyNameEn}
          </p>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3 line-clamp-3">
            {sector.descriptionAr}
          </p>

          {/* Core Metrics Quick Badges */}
          <div className="grid grid-cols-2 gap-2 mt-5">
            {sector.features.slice(0, 2).map((feat, i) => (
              <div key={i} className="p-2 bg-slate-50/80 border border-slate-100 rounded">
                <span className="text-[9px] text-slate-400 block font-semibold">{feat.title}</span>
                <span className="text-xs font-bold text-gold-600 font-mono mt-0.5 block">{feat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link Button */}
        <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between group-hover:border-gold-500/20">
          <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">SECTOR NODE 0{index + 1}</span>
          <Link
            to={`/sectors/${sector.id}`}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-gold-600 group-hover:text-slate-900 transition-colors cursor-pointer"
          >
            اكتشف القطاع بالكامل
            <ArrowLeft className="h-4 w-4 mr-1 group-hover:translate-x-[-4px] transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
