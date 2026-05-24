import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Ship, ChevronLeft, ChevronRight, Award, Globe, Users, ShieldCheck } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { groupStatsData } from "../../models/statsModel";
import { brandThemes, BrandKey } from "../../models/brandModel";

interface SlideData {
  id: string;
  badge: string;
  title: string;
  heading: string;
  desc: string;
  image: string;
  link: string;
  brandKey: BrandKey;
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const slides: SlideData[] = [
    {
      id: "maritime",
      badge: "النقل البحري والخدمات اللوجستية البترولية",
      title: "أبو السعود للنقل البحري وبترو-لوجستيكس",
      heading: "نحرك طاقة العالم بأمان وكفاءة معتمدة",
      desc: "نمتلك ونشط أساطيل ناقلات النفط والمواد البترولية المطابقة لمواصفات IMO الدولية لتأمين خطوط الطاقة وسلاسل الإمداد العالمية بين القارات.",
      image: "https://cdn.pixabay.com/photo/2022/01/24/02/48/ship-6962423_1280.jpg",
      link: "/sectors/maritime",
      brandKey: "maritime"
    },
    {
      id: "meat",
      badge: "استيراد اللحوم وتأمين سلاسل الأمن الغذائي",
      title: "العالمية لاستيراد اللحوم والأغذية",
      heading: "سلسلة تبريد وحفظ مغلقة متوافقة مع الشريعة",
      desc: "نستورد أجود اللحوم من مزارع البرازيل والهند النباتية، خاضعة لرقابة بيطرية مكثفة ومشحونة مجمدة عند -18 درجة مئوية تحت إشراف الحلال المعتمد.",
      link: "/sectors/meat",
      image: "https://cdn.pixabay.com/photo/2015/05/29/17/21/container-789488_1280.jpg",
      brandKey: "meat"
    },
    {
      id: "cement",
      badge: "تصنيع وتصدير الأسمنت ومواد البناء",
      title: "مجموعة جبل للأسمنت وتصدير مواد البناء",
      heading: "الرائد الإقليمي في تصدير الأسمنت البورتلاندي",
      desc: "ننتج أسمنتاً بورتلاندياً فائق المقاومة للظروف القاسية (CEM I 42.5R) بأكياس خماسية الطبقات عازلة للرطوبة لتشغيل عمليات إعمار دولة ليبيا الشريكة.",
      link: "/sectors/cement",
      image: "https://images.unsplash.com/photo-1773394089934-3e29f2a3d6a9?auto=format&fit=crop&w=1200&q=80",
      brandKey: "cement"
    }
  ];
  const activeBrand = brandThemes[slides[currentIndex].brandKey];
  const activeTextColor = activeBrand.key === "cement" ? "#050505" : "#ffffff";

  // Map icons safely for statistics
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="h-6 w-6" style={{ color: activeBrand.primary }} />;
      case "Users":
        return <Users className="h-6 w-6" style={{ color: activeBrand.primary }} />;
      case "Globe":
        return <Globe className="h-6 w-6" style={{ color: activeBrand.primary }} />;
      default:
        return <ShieldCheck className="h-6 w-6" style={{ color: activeBrand.primary }} />;
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Setup autoplay loop
  useEffect(() => {
    if (isPlaying) {
      autoPlayTimer.current = setInterval(() => {
        handleNext();
      }, 6500);
    }
    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [isPlaying, currentIndex]);

  const resetTimer = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
    if (isPlaying) {
      autoPlayTimer.current = setInterval(() => {
        handleNext();
      }, 6500);
    }
  };

  return (
    <div 
      id="corporate-hero-slider" 
      style={{
        "--brand-primary": activeBrand.primary,
        "--brand-secondary": activeBrand.secondary,
        "--brand-accent": activeBrand.accent,
        "--brand-soft": activeBrand.soft,
      } as React.CSSProperties}
      className="relative min-h-screen bg-slate-950 flex flex-col justify-between overflow-hidden pt-24"
    >
      {/* Absolute Full-Bleed Animated Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover object-center scale-102 filter brightness-[0.9] contrast-[1.04] saturate-[1.08]"
              referrerPolicy="no-referrer"
            />
            
            {/* Balanced overlays keep text readable while revealing more of the photo. */}
            <div className="absolute inset-0 bg-gradient-to-l from-slate-950/72 via-slate-950/42 to-transparent z-10" />
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,transparent_28%,rgba(2,6,23,0.38)_100%)] z-10" />
            
            {/* Sector-colored ambient overlay */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background: `linear-gradient(to top right, ${activeBrand.primary}18, transparent 52%, rgba(15,23,42,0.12))`,
              }}
            />
            
            {/* Bottom transition line to stats flow */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/78 to-transparent z-10" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Symmetrical grid texture line on top of backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] opacity-100 z-10 pointer-events-none" />

      {/* Main Slides Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-10 pb-12 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Hero interactive textual slides */}
          <div className="lg:col-span-8 space-y-6 text-right lg:pr-4">
            
            {/* Slide animated Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex + "-badge"}
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg"
                style={{
                  backgroundColor: activeBrand.soft,
                  border: `1px solid ${activeBrand.primary}55`,
                  color: activeBrand.accent,
                  boxShadow: `0 12px 32px ${activeBrand.primary}20`,
                }}
              >
                <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: activeBrand.accent }} />
                {slides[currentIndex].badge}
              </motion.div>
            </AnimatePresence>

            {/* Corporate Title text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex + "-title"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="font-mono text-xs sm:text-sm tracking-widest font-extrabold uppercase"
                style={{ color: activeBrand.accent }}
              >
                {slides[currentIndex].title}
              </motion.p>
            </AnimatePresence>

            {/* Large high-impact Heading styled for absolute premium visibility */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex + "-heading"}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] lg:leading-[1.15] tracking-tight filter drop-shadow-lg"
              >
                {slides[currentIndex].heading}
              </motion.h1>
            </AnimatePresence>

            {/* Sector description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex + "-desc"}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-medium filter drop-shadow-md"
              >
                {slides[currentIndex].desc}
              </motion.p>
            </AnimatePresence>

            {/* Interactive CTA buttons */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex + "-cta"}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="pt-4 flex flex-wrap gap-4 justify-start text-right"
              >
                <Link
                  id={`cta-sector-${slides[currentIndex].id}`}
                  to={slides[currentIndex].link}
                  className="px-8 py-4 font-extrabold text-sm rounded cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl flex items-center gap-2.5"
                  style={{
                    background: `linear-gradient(90deg, ${activeBrand.primary}, ${activeBrand.accent})`,
                    color: activeTextColor,
                    boxShadow: `0 20px 35px ${activeBrand.primary}24`,
                  }}
                >
                  عرض تفاصيل القطاع ودليل الأعمال
                  <ChevronLeft className="h-5 w-5 shrink-0" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 hover:border-white/20 text-white font-bold text-sm rounded transition-all duration-300 cursor-pointer shadow-md flex items-center gap-2"
                >
                  تواصل معنا
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation & Bullets positioned symmetrically under page description */}
            <div className="pt-8 flex items-center justify-start gap-6">
              <div className="flex items-center gap-1.5 direction-ltr">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      resetTimer();
                    }}
                    className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                      currentIndex === idx ? "w-8" : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                    style={currentIndex === idx ? { backgroundColor: activeBrand.primary } : undefined}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    handlePrev();
                    resetTimer();
                  }}
                  className="p-2.5 border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full transition cursor-pointer backdrop-blur-sm shadow-sm"
                  aria-label="Previous slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    handleNext();
                    resetTimer();
                  }}
                  className="p-2.5 border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full transition cursor-pointer backdrop-blur-sm shadow-sm"
                  aria-label="Next slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Left Column: Premium Floating HUD Panel (Glassmorphism indicator) */}
          <div className="lg:col-span-4 hidden lg:flex justify-end items-center h-full">
            <motion.div
              key={currentIndex + "-hud"}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl shadow-2xl space-y-4 max-w-xs transform hover:scale-102 transition duration-500 text-right"
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-bold">LIVE METRICS ENABLED</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-300 block">مرصد الإمداد اللوجستي</span>
                <span className="text-[10px] text-slate-400 font-mono font-bold block">ACTIVE GLOBAL NODE_0{currentIndex + 1}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                يقترن هذا المسار بشبكة الممرات البحرية للتثبيت وتأمين البضائع والمنتجات، لضمان استقرار الإمدادات على مدار الساعة.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Group Statistics Horizontal Bar - Rendered in rich, luxurious dark-gold look, tying into the Hero block */}
      <div className="w-full bg-slate-950/90 border-t border-white/5 relative z-20 py-8 lg:py-10 shadow-2xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {groupStatsData.map((stat, idx) => (
              <div
                key={stat.id}
                className="p-5 rounded-2xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/50 text-right transition-all duration-300 shadow-xl"
                style={{ ["--tw-border-opacity" as string]: 1 }}
              >
                <div className="flex items-center gap-3 mb-2 justify-start">
                  <div className="p-2 bg-slate-850 rounded-xl border border-white/5 shadow-inner shrink-0">
                    {getStatIcon(stat.iconName)}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-400 leading-tight">
                    {stat.titleAr}
                  </h4>
                </div>
                <AnimatedCounter target={stat.targetNumber} suffix={stat.suffix} />
                <p className="text-[11px] text-slate-400 font-semibold leading-relaxed mt-1">
                  {stat.descAr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
