import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, ShieldAlert, Snowflake, Trees, FileCheck, Scale, Anchor } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function HSE() {
  const certifications = [
    { name: "ISO 9001:2015", body: "هيئة التدقيق والمطابقة السويسرية", desc: "نظام إدارة الجودة الكلي لكافة ممارسات ومكاتب المجموعة الاستثمارية." },
    { name: "ISO 22000:2018", body: "هيئة تفتيش سلامة الأغذية", desc: "نظام إدارة الأمن الغذائي والتحصين وسلامة اللحوم حلال طوال سلسلة التبريد المغلقة." },
    { name: "ISO 14001:2015", body: "مجلس حماية البيئة العالمي", desc: "نظام إدارة معايير التحكم البيئي والتخفيض المخطط للانبعاثات الكربونية في مصانعنا." },
    { name: "IMO Compliance Permit", body: "المنظمة البحرية الدولية", desc: "تراخيص عبور وشحن آمن للمواد النفطية والمشتقات البترولية في ممرات الملاحة الاستراتيجية." }
  ];

  const corePillars = [
    {
      title: "إدارة الجودة الكوربوريت (ISO Quality)",
      desc: "نطبق نظماً صارمة لتبسيط التشغيل الإداري والفني، وحفظ البيانات، وتدريب البحارة والكفاءات الإنشائية بصفة دورية لضمان تطابق تام مع شهادات الأيزو العالمية.",
      icon: FileCheck
    },
    {
      title: "السلامة البحرية والأرواح بالبحر (Safety at Sea)",
      desc: "نلتزم ببنود معاهدة سلامة الأرواح في البحار (SOLAS) وتأهيل بحارتنا لمواجهة شتى الظروف الطارئة وصيانة أجهزة الكشف الدورية وأنظمة الإقناع الدفاعي.",
      icon: Anchor
    },
    {
      title: "التطابق التام لمواصفات IMO الملاحية",
      desc: "نهيئ ناقلات البترول بمجالس توازن مائي ووقود بحري منخفض الكبريت تماشياً مع اتفاقية ماربول (MARPOL) لحماية المحيطات من التلوث الهيدروكربوني والأبخرة السامة.",
      icon: ShieldAlert
    },
    {
      title: "سلامة الأطعمة وصلاحية الأمن الغذائي",
      desc: "تقصي لحظي وتتبع لدرجات الحرارة عبر الأقمار الصناعية للحفاظ على اللحوم وتبريدها وصحتها الغذائية منعا للفساد والفاقد ولدعم مخزونات توازن السوق الغذائي.",
      icon: Snowflake
    },
    {
      title: "الاستدامة والحياد الكربوني",
      desc: "ندمج مواد مضافة بمنتجات أسمنت جبل ترفع متانته دون رفع انبعاثات حرق الأفران، مستثمرين في الطاقة البديلة وإشراك مجتمعاتنا المحلية في التنمية.",
      icon: Scale
    },
    {
      title: "حماية البيئة ومكافحة الانسكاب",
      desc: "خطط دفاعية لمكافحة أي تلوث بحري أو بري فوري، وتدريب طواقم السفن على استجابات الاحتواء لحجز التسربات، مما يشكل خط دفاع أول وصارم للطبيعة.",
      icon: Trees
    }
  ];

  return (
    <div id="hse-compliance-view" className="bg-slate-50 min-h-screen text-slate-700 pt-24">
      
      {/* 1. Header Display Section */}
      <div className="relative py-20 bg-white overflow-hidden border-b border-slate-150">
        <div className="absolute inset-0 opacity-4 bg-[radial-gradient(#b89563_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <SectionTitle
            title="الصحة، السلامة، البيئة، والجودة الشاملة HSE"
            subtitle="نلتزم بأعلى معايير التشغيل المسؤول لحماية الأرواح بالبحر والبر وصيانة الطبيعة بكافة قطاعتنا الاستثمارية"
            badge="دليل الأمان والامتثال الدولي"
            center={false}
          />
        </div>
      </div>

      {/* 2. Pillars Grid Section */}
      <section id="hse-pillars" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="الركائز الست في فلسفة السلامة والموثوقية"
          subtitle="ممارسات فنية معززة بأداء بشري فائق الجدارة لضمان سلامة البيئة من ساو باولو إلى سنغافورة"
          badge="ركائز الأبو السعود السادسة"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-right">
          {corePillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-white border border-slate-200/65 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="p-3 bg-slate-50 text-gold-600 rounded-lg w-fit mb-6 border border-slate-100">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Official Certifications Board Display */}
      <section id="official-certifications" className="py-24 bg-slate-100/40 border-y border-slate-200/85 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="شهادات الجودة ونظم الاعتماد الدولية"
            subtitle="شهادات وجداول تدقيق دورية تفخر مكاتبنا وصناعاتنا بالإمساك بها والتحرك وفق تراخيصها القانونية"
            badge="التراخيص والمعايير الكوربوريت"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-right">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-gold-600 block mb-1 font-bold">
                    OFFICIAL REGISTERED ISO
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 font-mono">
                    {cert.name}
                  </h4>
                  <span className="text-xs text-slate-500 font-bold block mb-2">
                    {cert.body}
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed mt-2 border-t border-slate-100 pt-3 font-semibold">
                    {cert.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono font-bold">
                  <span>VALID_2026</span>
                  <span>CERTIFIED STATE</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Support Helpline CTA */}
      <section id="hse-helpline" className="py-20 max-w-4xl mx-auto text-center px-4 space-y-6">
        <ShieldCheck className="h-14 w-14 text-emerald-600 mx-auto animate-bounce" />
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">رؤية خضراء والتزام لا يتزعزع</h3>
        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto font-semibold">
          نتخذ من قواعد الجودة والصحة رداء يحمي عمالنا وبحارتنا وصناعتنا. للاستفسار عن كراسات الشروط والمطابقة، يرجى تزويد إدارة المتابعة الفنية عبر البريد المعتمد.
        </p>
        <div className="p-4 bg-white border border-slate-250 rounded-xl inline-block text-xs font-mono shadow-sm">
          EMAIL: <span className="text-gold-600 font-black">safety@aboelseoud-group.com</span>
        </div>
      </section>
    </div>
  );
}
