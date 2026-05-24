import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ShieldCheck, HeartHandshake, Scale } from "lucide-react";
import Hero from "../components/Hero";
import SectorCard from "../components/SectorCard";
import SectionTitle from "../components/SectionTitle";
import WorldMap from "../components/WorldMap";
import ContactForm from "../components/ContactForm";
import { sectorsData } from "../../models/sectorsModel";

export default function Home() {
  const companyValues = [
    {
      title: "الضخومة والالتزام المطلق",
      desc: "نلتزم بتأمين شراكات لوجستية طويلة الأجل وتوفير كميات إمداد استراتيجية لشركائنا دون انقطاع.",
      icon: Scale
    },
    {
      title: "معايير السلامة والأمن الدولي",
      desc: "نطبق شروط السلامة البحرية والغذائية والبيئية الأكثر صرامة لحفظ الأرواح والمنتجات.",
      icon: ShieldCheck
    },
    {
      title: "الاستدامة والنزاهة القانونية",
      desc: "نمارس كافة أعمالنا وفق أعلى مستويات الشفافية الكوربوريت وحوكمة التبادل عبر القارات.",
      icon: HeartHandshake
    }
  ];

  return (
    <div id="home-page-container" className="bg-slate-50/50 min-h-screen text-slate-700">
      {/* 1. Hero Module */}
      <Hero />

      {/* 2. Welcome/Introduction Section with Scroll Animations */}
      <section id="executive-introduction" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute top-1/2 right-0 w-[400px] h-[300px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Executive narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            <span className="inline-block text-xs font-bold tracking-wider text-gold-600 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full uppercase">
              قوة إقليمية وسيادة لوجستية
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              كفاءة تشغيلية تصنع الفارق.. هكذا نقود التجارة البينية عبر البحار والقارات
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              منذ ما يقرب من عقدين من الزمان، ومجموعة أبو السعود جروب تمثل شريكاً ترتكز عليه الدول والشركاء الاقتصاديون الكبار. ندير استثمارات متعددة المجالات لنربط بها أقاليم العالم ببعضها؛ من شحن النفط والغاز المسال في شريط الملاحة العالمي، إلى تلبية عجز البروتين في السوق وتصدير الخامات الإنشائية لخدمة خطط التعمير القومي.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
              تتلخص رؤيتنا في الحفاظ على الامتياز المستمر واستدامة التطوير الفني لمركباتنا وأساطيلنا وكوادرنا الفنية، مع الإشراف المباشر واليومي من مجلس الإدارة لكافة العمليات العابرة للحدود لضمان الوفاء بالتعهدات القانونية والزمنية.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-sm font-bold text-gold-600 hover:text-gold-700 transition duration-200"
              >
                اقرأ المزيد عن فكر ورؤية رئيس مجلس الإدارة ←
              </Link>
            </div>
          </motion.div>

          {/* Visual card badge container with real architectural image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Elegant Corporate Office Image */}
            <div className="relative aspect-[16/9] w-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800"
                alt="Abo El-Seoud Corporate Headquarters"
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 text-white text-xs font-bold font-mono">
                مقر الإدارة العامة - القاهرة
              </div>
            </div>

            <div className="p-8 bg-white border border-slate-200/80 rounded-2xl relative shadow-xl shadow-slate-200/50">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6 text-right">حوكمة وإنجازات المجموعة</h3>
              <div className="space-y-4 text-right">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 flex-row-reverse">
                  <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-lg font-bold text-sm shrink-0">2008</div>
                  <div className="flex-grow">
                    <h4 className="text-xs font-bold text-slate-900">تأسيس باكورة الأنشطة</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">انطلاقة أساطيل النقل البترولي البحري بمواصفات IMO الدولية.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 flex-row-reverse">
                  <div className="p-2.5 bg-blue-500/10 text-blue-600 rounded-lg font-bold text-sm shrink-0">10+</div>
                  <div className="flex-grow">
                    <h4 className="text-xs font-bold text-slate-900">مكاتب قارية وحضور مباشر</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">من سنغافورة وهولندا إلى البرازيل والهند ومصر.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 flex-row-reverse">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-600 rounded-lg font-bold text-sm shrink-0">100%</div>
                  <div className="flex-grow">
                    <h4 className="text-xs font-bold text-slate-900">نسبة تبريد وتحصين مغلقة</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">مراقبة لحظية لشحن اللحوم لضمان أعلى جودة حلال.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Sectors Showcase Columns */}
      <section id="business-divisions" className="py-24 bg-slate-100/30 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="القطاعات الاستراتيجية للمجموعة"
            subtitle="ندير محفظة استثمارات ضخمة ومتنوعة توفر ركائز أساسية للحياة والصناعة الحديثة"
            badge="مؤسسات صناعية متكاملة"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {sectorsData.map((sector, idx) => (
              <SectorCard key={sector.id} sector={sector} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Values & Corporate Standards */}
      <section id="corporate-core-principles" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="القيم الحاكمة لتشغيل الأنشطة"
          subtitle="الأمان الجسدي والصناعي وحماية البيئة هي غايات مطلقة لا مساومة فيها في كافة ممارستنا التجارية"
          badge="القيم الأساسية"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-right">
          {companyValues.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 bg-white border border-slate-200/60 hover:border-gold-500/20 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="p-4 bg-slate-50 w-fit rounded-lg border border-slate-100 text-gold-600 mb-6 font-bold">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                  {val.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. World Map Section showing global shipping */}
      <section id="global-maritime-routes" className="py-24 bg-slate-100/20 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="الانتشار الدولي وخريطة سلاسل الإمداد"
            subtitle="روابط اتصال ومكاتب فرعية نشطة في أهم المرافق الملاحية والغذائية للمحافظة على انسياب تجاري آمن"
            badge="خريطة الموانئ والخطوط"
          />

          <div className="mt-12 bg-white p-6 rounded-2xl border border-slate-250/60 shadow-lg shadow-slate-150/40">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* 6. Contact Us Form and direct link */}
      <section id="direct-inquiry" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-6 text-right">
            <span className="inline-block text-xs font-mono font-bold tracking-wider text-gold-600 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
              RECRUITMENT & PROCUREMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              جاهزون لبدء المباحثات التجارية الكبرى
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              تتمتع مكاتب أبو السعود جروب بقدرات عالية على تخصيص عروض الأسعار اللوجستية وتأمين المواد البترولية الفورية أو العقود طويلة الأمد لشحن اللحوم والأسمنت. تواصل مع مكاتبنا الرئيسية للتنسيق القانوني وإرسال عينات الجودة.
            </p>
            <div className="p-5 bg-white border border-slate-200/60 rounded-xl shadow-sm">
              <span className="text-xs text-slate-500 font-bold block mb-1">الرسم المباشر للهاتف الموحد:</span>
              <span id="corporate-hq-phone" className="text-2xl font-bold font-mono text-gold-600 block" dir="ltr">
                +20 2 2400 5500
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
