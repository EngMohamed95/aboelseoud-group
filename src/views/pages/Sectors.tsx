import React from "react";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import SectorCard from "../components/SectorCard";
import { sectorsData } from "../../models/sectorsModel";

export default function Sectors() {
  return (
    <div id="sectors-showcase-view" className="bg-slate-50 min-h-screen text-slate-700 pt-24">
      
      {/* 1. Header Display Banner */}
      <div className="relative py-20 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-4 bg-[radial-gradient(#b89563_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <SectionTitle
            title="قطاعاتنا ومظلة أعمالنا الدولية"
            subtitle="نستثمر ونقود قطاعات واجهة تؤمن طاقة البترول، الموارد الغذائية، والخامات الإنشائية للمدن الذكية المستدامة"
            badge="الأنشطة الاقتصادية للأبو السعود"
            center={false}
          />
        </div>
      </div>

      {/* 2. List of Sectors Cards */}
      <section id="full-sectors-directory" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sectorsData.map((sector, idx) => (
            <SectorCard key={sector.id} sector={sector} index={idx} />
          ))}
        </div>

        {/* 3. Deep dive comparative checklist of capabilities */}
        <div className="p-8 sm:p-12 bg-white border border-slate-200/60 rounded-2xl relative overflow-hidden shadow-lg shadow-slate-200/35">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-5 text-right">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono font-bold bg-gold-500/10 text-gold-600 rounded border border-gold-500/20 uppercase">
                INTEGRATED COMPLIANCE INDEX
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                تطابق تام مع معايير الجودة الدولية
              </h3>
              <p className="text-slate-650 text-sm leading-relaxed font-semibold">
                لا نقف بفروعنا عند حدود تقديم الخدمات؛ بل نرسخ الحوكمة والامتثال ونلزم أنفسنا بشهادات الجودة الأرفع في العالم. تخضع أساطيل النقل البحري البترولي لـ مراجعات IMO الصارمة، فيما تطبق العالمية للمواد الغذائية اشتراطات الحفظ والذبح الحلال الشامل، وتستعين شركة جبل بالخلطات الإنشائية فائقة التحمل لمنع التسرب ومقاومة الضغوط.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
                  <span>شهادات سلامة الأغذية والصيغة حلال (البرازيل والهند)</span>
                </div>
                <div className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>لوائح المنظمة الملاحة الدولية IMO وخاصة لروتردام</span>
                </div>
                <div className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span>أسمنت مقاوم للملوحة والرطوبة (مختبرات مصر)</span>
                </div>
                <div className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>إدارة نظام الجودة وإدارة السلامة والبيئة ISO</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="p-8 bg-slate-50 border border-slate-200/80 rounded-2xl inline-block w-full max-w-sm">
                <Award className="h-10 w-10 text-gold-600 mx-auto mb-4 animate-pulse" />
                <h4 className="text-slate-900 font-extrabold text-sm">مجلس الإشراف الفني الموحد</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed font-semibold">
                  فريق هندسي متخصص يتابع مستويات الجودة والصحة والسلامة والبيئية لحظياً ويشرف على عقود فروعنا الـ 10.
                </p>
                <Link
                  to="/hse"
                  className="mt-6 inline-flex items-center gap-1 px-4 py-2 border border-gold-500/30 text-gold-600 text-xs font-bold rounded hover:bg-gold-500/10 transition cursor-pointer"
                >
                  تصفح شهادات HSE والامتثال ←
                </Link>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
