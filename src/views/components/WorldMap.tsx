import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Globe, Ship } from "lucide-react";
import { branchesData, Branch } from "../../models/branchesModel";

export default function WorldMap() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(branchesData.find(b => b.id === "egypt") || null);
  const [hoveredBranch, setHoveredBranch] = useState<Branch | null>(null);

  const branchGeoCoordinates: Record<string, { latitude: number; longitude: number }> = {
    singapore: { latitude: 1.3521, longitude: 103.8198 },
    netherlands: { latitude: 51.9244, longitude: 4.4777 },
    malta: { latitude: 35.8989, longitude: 14.5146 },
    turkey: { latitude: 41.0082, longitude: 28.9784 },
    oman: { latitude: 23.588, longitude: 58.3829 },
    mexico: { latitude: 19.1738, longitude: -96.1342 },
    egypt: { latitude: 30.0444, longitude: 31.2357 },
    libya: { latitude: 32.1167, longitude: 20.0667 },
    brazil: { latitude: -23.5505, longitude: -46.6333 },
    india: { latitude: 28.6139, longitude: 77.209 },
  };

  // Supply lines connecting Egypt (HQ) to international offices/nodes
  const shippingPaths = [
    { from: "egypt", to: "singapore", label: "ممر طاقة آسيا" },
    { from: "egypt", to: "netherlands", label: "خط روتردام البترولي" },
    { from: "egypt", to: "libya", label: "مستكشف الأسمنت" },
    { from: "egypt", to: "brazil", label: "سلسلة الأمن الغذائي" },
    { from: "egypt", to: "india", label: "مورد البروتين الحلال" },
    { from: "egypt", to: "malta", label: "صيانة أسطول المتوسط" },
    { from: "egypt", to: "turkey", label: "خط عبور مضيق البوسفور" },
    { from: "egypt", to: "oman", label: "تأمين مضيق هرمز" }
  ];

  // Project real latitude/longitude onto an equirectangular world map.
  const getCoordinates = (branchId: string) => {
    const geo = branchGeoCoordinates[branchId];
    if (!geo) return { x: 50, y: 50 };

    return {
      x: ((geo.longitude + 180) / 360) * 100,
      y: ((90 - geo.latitude) / 180) * 100,
    };
  };

  return (
    <div id="interactive-world-map-wrapper" className="bg-navy-950 border border-gold-500/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      {/* Decorative High-End Map Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#c5a880_1px,transparent_1px),linear-gradient(to_bottom,#c5a880_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy-950 to-navy-950/90 z-0" />

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* Left Side: Detail panel of selected branch */}
        <div className="lg:col-span-1 flex flex-col justify-between bg-navy-900/60 backdrop-blur border border-gold-500/10 p-6 rounded-xl hover:border-gold-500/20 transition-all duration-300">
          <AnimatePresence mode="wait">
            {selectedBranch ? (
              <motion.div
                key={selectedBranch.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-[10px] uppercase font-mono tracking-widest bg-gold-500/10 text-gold-500 rounded border border-gold-500/20 mb-2">
                    {selectedBranch.countryEn} / {selectedBranch.cityEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {selectedBranch.nameAr}
                  </h3>
                  <p className="text-xs font-mono text-gray-400">
                    {selectedBranch.nameEn}
                  </p>
                </div>

                <div className="p-3.5 bg-navy-950/80 rounded-lg border border-gold-500/5 text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-gold-500 text-xs block mb-1">الدور المهني للفرع:</span>
                  {selectedBranch.roleAr}
                </div>

                <div className="space-y-3 pt-2 border-t border-gold-500/10 text-xs">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-4 w-4 text-gold-500 shrink-0" />
                    <span>{selectedBranch.addressAr}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="h-4 w-4 text-gold-500 shrink-0" />
                    <span dir="ltr">{selectedBranch.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="h-4 w-4 text-gold-500 shrink-0" />
                    <span>{selectedBranch.email}</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                انقر على إحدى النقاط المضيئة بالخريطة لتصفح تفاصيل المكتب الاستراتيجي للمجموعة.
              </div>
            )}
          </AnimatePresence>

          <div className="pt-6 mt-6 border-t border-gold-500/10 text-center">
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest block">
              ممرات النقل البحري واللوجستيات العالمية
            </span>
          </div>
        </div>

        {/* Right Side: Map Canvas */}
        <div className="lg:col-span-2 relative min-h-[360px] sm:min-h-[440px] bg-navy-950/80 rounded-xl border border-gold-500/10 overflow-hidden flex flex-col justify-between">
          
          {/* Legend Banner */}
          <div className="p-3 bg-navy-900/40 border-b border-gold-500/10 z-10 flex items-center justify-between text-xs px-4">
            <span className="text-gray-700 font-semibold">شبكة الاتصال اللوجستية وتأمين الممرات لـ "مجموعة أبو السعود ماريتايم"</span>
            <span className="text-gold-600 font-mono text-[10px] animate-pulse">● LIVE NETWORK STATE</span>
          </div>

          {/* SVG Map Container */}
          <div className="flex-1 w-full relative bg-[#eef2f6]">
            {/* Real Stylized Vector World Map Background */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-xl bg-[#eef2f6]">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                alt="خارطة العالم اللوجستية"
                className="w-full h-full object-fill opacity-80 grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-white/25" />
            </div>

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full select-none"
            >
              {/* Draw Shipping Corridors using Animated Curves or dashed paths */}
              {shippingPaths.map((path, idx) => {
                const start = getCoordinates(path.from);
                const end = getCoordinates(path.to);
                
                // Draw bezier curved paths for high aesthetic premium design
                const midX = (start.x + end.x) / 2;
                const midY = (start.y + end.y) / 2 - 4; // lift the curve

                return (
                  <g key={idx}>
                    {/* Shadow base vector curve */}
                    <path
                      d={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`}
                      fill="none"
                      stroke="rgba(197, 168, 128, 0.25)"
                      strokeWidth="0.5"
                    />
                    
                    {/* Pulsing indicator along paths */}
                    <path
                      d={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`}
                      fill="none"
                      stroke="url(#goldGradient)"
                      strokeWidth="0.8"
                      strokeDasharray="2, 8"
                      className="animate-ship-route"
                    />

                    {/* Shipping tanker token animation (Moving ship visual bullet) */}
                    <circle r="0.7" fill="#b89563">
                      <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        path={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`}
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Define inline gradients */}
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#b89563" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                
                {/* Visual grid background texture */}
                <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(0,0,0,0.015)" strokeWidth="0.1"/>
                </pattern>
              </defs>
            </svg>

            {/* Render Nodes as absolute elements on HTML layer so we can hover and design smoothly */}
            {branchesData.map((branch) => {
              const coords = getCoordinates(branch.id);
              const isSelected = selectedBranch?.id === branch.id;
              const isHQ = branch.id === "egypt";
              const cleanCountryName = branch.countryAr
                .replace("جمهورية ", "")
                .replace(" الاتحادية", "")
                .replace(" العربية", "")
                .replace("دولة ", "")
                .replace("سلطنة ", "");

              return (
                <div
                  key={branch.id}
                  className="absolute"
                  style={{
                    left: `${coords.x}%`,
                    top: `${coords.y}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <button
                    onClick={() => setSelectedBranch(branch)}
                    onMouseEnter={() => setHoveredBranch(branch)}
                    onMouseLeave={() => setHoveredBranch(null)}
                    className="relative cursor-pointer group/node focus:outline-none"
                    aria-label={branch.nameAr}
                  >
                    {/* Glowing outer aura */}
                    <span
                      className={`absolute inset-0 rounded-full scale-[2.5] duration-1000 animate-ping transition-all ${
                        isHQ
                          ? "bg-gold-500/40"
                          : isSelected
                          ? "bg-gold-500/30"
                          : "bg-blue-500/20 group-hover/node:bg-gold-500/30"
                      }`}
                    />

                    {/* Middle Core Dot */}
                    <span
                      className={`absolute inset-[-4px] rounded-full scale-[1.5] transition-all border ${
                        isSelected
                          ? "border-gold-500 scale-[2.2] bg-white"
                          : "border-gold-500/40 bg-white group-hover/node:scale-[1.8] group-hover/node:border-gold-500/80"
                      }`}
                    />

                    {/* Center Core dot */}
                    <span
                      className={`block w-2.5 h-2.5 rounded-full relative z-20 transition-colors ${
                        isHQ
                          ? "bg-gold-600"
                          : isSelected
                          ? "bg-gold-600"
                          : "bg-blue-600 group-hover/node:bg-gold-500"
                      }`}
                    />

                    {/* Always-visible clean country label */}
                    <div className={`absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded text-[10px] font-bold shadow-sm transition-all pointer-events-none ${
                      isSelected
                        ? "bg-gold-600 text-white border border-gold-600 scale-105"
                        : "bg-slate-100/90 hover:bg-gold-500 text-slate-800 border border-slate-200"
                    }`}>
                      {cleanCountryName} {isHQ && "⭐️"}
                    </div>

                    {/* Popover Hover Hint */}
                    {hoveredBranch?.id === branch.id && (
                      <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 w-48 bg-white border border-gold-500/40 p-2.5 rounded shadow-2xl pointer-events-none z-50 text-right">
                        <span className="text-[10px] text-gold-600 font-mono block uppercase">
                          {branch.countryAr}
                        </span>
                        <span className="text-xs font-semibold text-slate-900 block mt-0.5">
                          {branch.nameAr}
                        </span>
                        {isHQ && (
                          <span className="inline-block mt-1 px-1.5 py-0.5 bg-gold-500/20 text-gold-700 text-[8px] rounded font-semibold">
                            مقر الرئاسة الرئيسي
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Quick interactive directions instruction */}
          <div className="p-3 bg-navy-900/20 border-t border-gold-500/10 text-center text-xs text-gray-500">
            انقر فوق أي مكتب لوجستي مضيء لمشاهدة عنوان الاتصال، المهام، ومفتاح المتابعة الإقليمي.
          </div>
        </div>
      </div>

      {/* Embedded Animation Class styles for maritime routes */}
      <style>{`
        @keyframes shipRoute {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -100; }
        }
        .animate-ship-route {
          animation: shipRoute 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
