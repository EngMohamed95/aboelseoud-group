import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Ship, Globe, HelpCircle, Phone, Award, ShieldAlert } from "lucide-react";
import { getBrandForPath } from "../../models/brandModel";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const location = useLocation();
  const brand = getBrandForPath(location.pathname);
  const useDarkBackgroundLogo = brand.key === "group" && location.pathname === "/" && !isScrolled;
  const navLogo = useDarkBackgroundLogo ? brand.logoOnDark ?? brand.logo : brand.logo;
  const navTextClass = isScrolled ? "text-slate-700 hover:text-slate-950" : "text-white/80 hover:text-white";
  const navActiveClass = isScrolled ? "font-semibold" : "font-semibold text-white";
  const navActiveStyle = isScrolled ? { color: brand.primary } : { color: "#ffffff" };
  const navIndicatorStyle = isScrolled ? { backgroundColor: brand.primary } : { backgroundColor: "#ffffff" };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path transition
  useEffect(() => {
    setIsOpen(false);
    setIsMegaOpen(false);
  }, [location]);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "الجودة والسلامة HSE", path: "/hse" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  const sectorLinks = [
    {
      name: "النقل البحري البترولي",
      desc: "أبو السعود للنقل البحري - أسطول ناقلات متطور لربط ممرات الطاقة",
      path: "/sectors/maritime",
      color: "from-blue-500/10 to-blue-600/5",
      icon: Ship
    },
    {
      name: "استيراد اللحوم والأمن الغذائي",
      desc: "العالمية للأغذية - سلسلة مبردة مغلقة لحفظ الجودة المعتمدة وحلال",
      path: "/sectors/meat",
      color: "from-emerald-500/10 to-emerald-600/5",
      icon: Globe
    },
    {
      name: "تصدير ومعالجة الأسمنت",
      desc: "شركة جبل - تعبئة مقاومة للرطوبة وتصدير إقليمي مستدام لليبيا",
      path: "/sectors/cement",
      color: "from-amber-500/10 to-amber-600/5",
      icon: Award
    }
  ];

  return (
    <nav
      id="main-navigation-bar"
      style={{
        "--brand-primary": brand.primary,
        "--brand-secondary": brand.secondary,
        "--brand-accent": brand.accent,
        "--brand-soft": brand.soft,
      } as React.CSSProperties}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-[0_4px_30px_rgba(15,23,42,0.03)]"
          : "bg-transparent py-5"
      } brand-scope`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link id="logo-anchor" to="/" className="flex items-center">
            <div
              className="relative flex h-20 w-[250px] sm:w-[320px] items-center justify-center overflow-visible transition-all duration-300"
              style={{ filter: `drop-shadow(0 8px 18px ${brand.primary}18)` }}
            >
              <img
                src={navLogo}
                alt="Abo El-Seoud Group"
                className="relative z-10 max-h-20 max-w-[310px] object-contain"
              />
            </div>
            <div className="hidden">
            <div className="relative group flex items-center justify-center p-2.5 bg-gradient-to-br from-slate-100 to-slate-50 border border-gold-500/30 rounded-lg overflow-hidden shrink-0 shadow-sm">
              <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Ship className="h-6 w-6 text-gold-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-wide bg-gradient-to-r from-slate-900 via-gold-600 to-gold-500 bg-clip-text text-transparent leading-none">
                أبو السعود
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.15em] text-slate-500 mt-0.5 uppercase">
                ABO EL-SEOUD GROUP
              </span>
            </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm transition-colors duration-200 py-2 drop-shadow-sm ${
                  location.pathname === link.path ? navActiveClass : `font-medium ${navTextClass}`
                }`}
                style={location.pathname === link.path ? navActiveStyle : undefined}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 right-0 left-0 h-0.5"
                    style={navIndicatorStyle}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Mega Menu Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setIsMegaOpen(!isMegaOpen)}
                onMouseEnter={() => setIsMegaOpen(true)}
                className={`flex items-center gap-1.5 text-sm transition-colors duration-200 py-2 cursor-pointer drop-shadow-sm ${
                  location.pathname.startsWith("/sectors") ? navActiveClass : `font-medium ${navTextClass}`
                }`}
                style={location.pathname.startsWith("/sectors") ? navActiveStyle : undefined}
              >
                قطاعات المجموعة
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMegaOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isMegaOpen && (
                  <motion.div
                    id="mega-menu"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsMegaOpen(false)}
                    className="absolute right-1/2 translate-x-1/2 mt-3 w-[600px] bg-white border border-slate-200/80 rounded-xl shadow-[0_20px_40px_rgba(15,23,42,0.08)] overflow-hidden z-50"
                  >
                    <div className="p-6 bg-slate-50 border-b border-slate-100">
                      <h4 className="font-display font-semibold text-xs tracking-wider text-gold-600 uppercase">
                        المعاقل الاستثمارية والصناعية الكبرى للأبو السعود جروب
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        ندير ونأمن سلاسل التوريد العالمية عبر قارات العالم الأربعة بكفاءة مطلقة.
                      </p>
                    </div>
                    <div className="p-4 grid grid-cols-1 gap-2.5 bg-white">
                      {sectorLinks.map((sec) => {
                        const IconComponent = sec.icon;
                        return (
                          <Link
                            key={sec.path}
                            to={sec.path}
                            onClick={() => setIsMegaOpen(false)}
                            className={`p-3 rounded-lg bg-slate-50/50 hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300 flex items-start gap-4`}
                          >
                            <div className="p-2.5 bg-white rounded-md border border-slate-100 text-gold-600 shrink-0 shadow-sm">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-gold-600">
                                {sec.name}
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                {sec.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="p-4 bg-slate-50 flex items-center justify-between text-xs border-t border-slate-100">
                      <span className="text-slate-400">انطلقت مسيرة المجموعة منذ عام 2008</span>
                      <Link
                        to="/sectors"
                        onClick={() => setIsMegaOpen(false)}
                        className="text-gold-600 hover:text-gold-700 transition-colors flex items-center gap-1 font-medium"
                      >
                        تصفح كل الأنشطة القطاعية ←
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm transition-colors duration-200 py-2 drop-shadow-sm ${
                  location.pathname === link.path ? navActiveClass : `font-medium ${navTextClass}`
                }`}
                style={location.pathname === link.path ? navActiveStyle : undefined}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 right-0 left-0 h-0.5"
                    style={navIndicatorStyle}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                isScrolled ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Slide-in */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                الرئيسية
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                من نحن
              </Link>

              {/* Sub-Header for Mobiles */}
              <div className="pt-2 pb-1 px-3 border-t border-slate-100">
                <span className="text-xs font-mono text-gold-600 uppercase tracking-widest block mb-2 font-bold">
                  قطاعات الاستثمار
                </span>
                <div className="grid grid-cols-1 gap-2 pl-3">
                  {sectorLinks.map((sec) => (
                    <Link
                      key={sec.path}
                      to={sec.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded text-sm text-slate-600 hover:text-gold-600 hover:bg-slate-50"
                    >
                      <Ship className="h-4 w-4 shrink-0 text-gold-600" />
                      {sec.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/hse"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 border-t border-slate-100"
              >
                الجودة والسلامة HSE
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                تواصل معنا
              </Link>

              <div className="pt-4 px-3 flex flex-col gap-3">
                <div className="text-xs text-slate-500 font-mono">
                  GLOBAL PHONE: <span className="text-gold-600 font-semibold">+20 2 2400 5500</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
