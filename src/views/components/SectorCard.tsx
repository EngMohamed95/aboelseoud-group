import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar } from "lucide-react";
import { Sector } from "../../models/sectorsModel";
import { brandThemes, BrandKey } from "../../models/brandModel";

interface SectorCardProps {
  sector: Sector;
  index: number;
}

export default function SectorCard({ sector, index }: SectorCardProps) {
  const brand = brandThemes[sector.id as BrandKey] || brandThemes.group;

  const image =
    sector.id === "maritime"
      ? "https://cdn.pixabay.com/photo/2022/01/24/02/48/ship-6962423_1280.jpg"
      : sector.id === "meat"
        ? "https://cdn.pixabay.com/photo/2015/05/29/17/21/container-789488_1280.jpg"
        : "https://cdn.pixabay.com/photo/2020/05/31/23/29/cement-truck-5240567_1280.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Link
        to={`/sectors/${sector.id}`}
        aria-label={sector.companyNameAr}
        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-lg shadow-slate-200/50 transition duration-300 focus:outline-none focus:ring-2"
        style={{ ["--tw-ring-color" as string]: brand.primary }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at top, ${brand.primary}14, transparent 58%)` }}
        />

        <div className="relative z-10 h-44 shrink-0 overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
          <img
            src={image}
            alt={sector.titleAr}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute right-4 top-4 z-20 select-none font-mono text-3xl font-black text-white/50">
            0{index + 1}
          </div>
        </div>

        <div className="relative z-20 flex flex-grow flex-col justify-between p-6">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="relative z-10 flex h-16 w-24 items-center justify-center rounded-lg bg-white shadow-sm">
                <img src={brand.logo} alt={sector.companyNameAr} className="max-h-14 max-w-20 object-contain" />
              </div>
              <span
                className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest"
                style={{ color: brand.primary, backgroundColor: brand.soft, borderColor: `${brand.primary}33` }}
              >
                <Calendar className="h-3 w-3" />
                تأسس {sector.established}
              </span>
            </div>

            <h3
              className="font-display text-lg font-extrabold text-slate-900 transition-colors duration-300 sm:text-xl"
              style={{ ["--sector-color" as string]: brand.primary }}
            >
              {sector.companyNameAr}
            </h3>
            <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {sector.companyNameEn}
            </p>

            <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              {sector.descriptionAr}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {sector.features.slice(0, 2).map((feat, i) => (
                <div key={i} className="rounded border border-slate-100 bg-slate-50/80 p-2">
                  <span className="block text-[9px] font-semibold text-slate-400">{feat.title}</span>
                  <span className="mt-0.5 block font-mono text-xs font-bold" style={{ color: brand.primary }}>
                    {feat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t pt-4" style={{ borderColor: `${brand.primary}22` }}>
            <span className="font-mono text-[10px] font-bold uppercase text-slate-400">SECTOR NODE 0{index + 1}</span>
            <span className="inline-flex items-center gap-1 text-xs font-bold transition-colors sm:text-sm" style={{ color: brand.primary }}>
              اكتشف القطاع بالكامل
              <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-[-4px]" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
