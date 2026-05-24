import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Truck, Snowflake, Globe, Award, ShieldAlert, CheckCircle2, Leaf, Heart } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { brandThemes } from "../../models/brandModel";

export default function MeatImport() {
  const brand = brandThemes.meat;
  const supplyChainSteps = [
    {
      step: "01",
      title: "الاختيار والتربية بالمزارع الطبيعية",
      desc: "نبرم عقوداً مباشرة مع كبرى المراعي النباتية (Grass-Fed) الشاسعة في البرازيل والهند، حيث تخضع المواشي لرعاية طبية تامة وبيئية مع تصفير مطلق لأي منشطات هرمونية.",
      icon: Leaf
    },
    {
      step: "02",
      title: "الذبح الشرعي والتحضير حلال",
      desc: "عمليات ذبح ومعالجة متوافقة 100% مع أحكام الشريعة الإسلامية السمحة وبإشراف مباشر وفردي من الهيئات والبعثات الإسلامية المعتمدة مع توفير الملصقات وبطاقات التتبع حلال.",
      icon: Award
    },
    {
      step: "03",
      title: "التبريد السريع والصدمة الحرارية",
      desc: "نطبق عملية صدم تبريد حراري سريع مفاجئ لتثبيت الحالة التغذوية والمذاق الفاخر للحوم، تتبعها تعبئة وتفريغ هواء مبرم وحفظ كامل.",
      icon: Snowflake
    },
    {
      step: "04",
      title: "الشحن بالحاويات المبردة الفائقة",
      desc: "شحن بحري عبر حاويات تجميد ذكية (Reefer Containers) متصلة بالأقمار الصناعية تراقب وتثبت الحرارة دائماً عند (18- مئوية) طوال الرحلة العابرة للمحيطات.",
      icon: Truck
    },
    {
      step: "05",
      title: "مخازن الاستقبال وثلاجات الحفظ",
      desc: "عند بلوغ موانئ مصر والمنطقة العربية، تتولى أساطيل النقل البري المبرد التابعة لنا تفريغ اللحوم نحو ثلاجات تخزين المجموعة الفائقة بسعة 15 ألف طن.",
      icon: ShieldAlert
    },
    {
      step: "06",
      title: "التوزيع للأسواق ومنافذ البيع",
      desc: "طرح وتوزيع اللحوم على الموزعين، شركات الصناعات الغذائية والمناطق الاستهلاكية بأرقى معايير النقاء وبأسعار متزنة وثابتة تدعم الأمن الغذائي القومي.",
      icon: ShieldCheck
    }
  ];

  return (
    <div
      id="meat-sector-view"
      style={{
        "--brand-primary": brand.primary,
        "--brand-secondary": brand.secondary,
        "--brand-accent": brand.accent,
        "--brand-soft": brand.soft,
      } as React.CSSProperties}
      className="brand-scope bg-[#FAF9F5] min-h-screen text-emerald-950 pt-24 font-sans selection:bg-emerald-500 selection:text-white"
    >
      
      {/* 1. Immersive Farmland Hero Section with Green/Gold Grading */}
      <div className="relative py-28 overflow-hidden border-b border-emerald-900/10">
        {/* Unsplash beautiful premium beef steak */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 filter brightness-[0.7]" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1600')` }}
        />
        {/* Soft warm mist & light green layout overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/20 via-[#FAF9F5]/75 to-[#FAF9F5] z-0" />
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <SectionTitle
            title="من كبرى مزارع العالم إلى الأسواق الدولية.. جودة لا مساومة فيها."
            subtitle="الشركة العالمية لاستيراد اللحوم والأغذية - الذراع الاستراتيجي لتأمين الأمن الغذائي القومي وحفظ البروتين حلال"
            badge="قطاع استيراد اللحوم والأمن الغذائي"
            center={false}
          />
        </div>
      </div>

      {/* 2. Core Narrative Section */}
      <section id="cold-chain-logic" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-7 space-y-6 text-right"
          >
            <span className="text-xs font-bold tracking-wider text-emerald-700 bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5">
              <Leaf className="h-3 w-3 text-emerald-600 animate-bounce" />
              مسؤولية تأمين الغذاء الطبيعي العضوي
            </span>
            <h3 className="text-3xl font-extrabold text-emerald-950 leading-tight">
              سلسلة تبريد مغلقة (Cold Chain) بنسبة 100% تضمن كمال الطعم والصحة
            </h3>
            <p className="text-emerald-900 text-sm sm:text-base leading-relaxed font-semibold">
              تلتزم الشركة العالمية للأغذية بتوفير مخزونات غذائية بروتينية فائقة الجودة للمستهلكين وبأسعار متوازنة تسند ميزانيات الأسر وتحافظ على ديمومة المعروض الغذائي. نستورد اللحوم المجمدة من كبرى مراعي البرازيل (ساو باولو) والهند (نيودلهي) المؤثثة بأرقى الفحوص البيطرية والعلفية الحرة.
            </p>
            <p className="text-emerald-800/80 text-sm leading-relaxed font-medium">
              إن الميزة الكبرى لعملياتنا هي "سلسلة التبريد المتواصلة والمغلقة بنسبة 100%". لا يتوقف تشغيل المبردات للحظة واحدة، بدءاً من مرحلة معالجة الذبح في المزارع، ومروراً بالحاويات الحفظ البحرية، وحفظها بمخازننا الاستراتيجية العملاقة، ثم شحنها برياً حتى موائد التناول.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono font-bold">
              <div className="p-4 bg-white border border-emerald-100 rounded-xl flex items-center justify-between gap-3 shadow-md shadow-emerald-950/5">
                <Snowflake className="h-5 w-5 text-emerald-600 shrink-0 animate-spin" />
                <div className="text-right">
                  <span className="text-[10px] text-emerald-600 block font-bold">دائم حراري</span>
                  <span className="text-sm text-emerald-950 block mt-0.5 font-bold">-18°C مئوية</span>
                </div>
              </div>
              <div className="p-4 bg-white border border-emerald-100 rounded-xl flex items-center justify-between gap-3 shadow-md shadow-emerald-950/5">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                <div className="text-right">
                  <span className="text-[10px] text-emerald-600 block font-bold">معتمد شرعياً</span>
                  <span className="text-sm text-emerald-950 block mt-0.5 font-bold">100% حلال</span>
                </div>
              </div>
              <div className="p-4 bg-white border border-emerald-100 rounded-xl flex items-center justify-between gap-3 shadow-md shadow-emerald-950/5">
                <Truck className="h-5 w-5 text-emerald-600 shrink-0" />
                <div className="text-right">
                  <span className="text-[10px] text-emerald-600 block font-bold">السعة الاستيعابية</span>
                  <span className="text-sm text-emerald-950 block mt-0.5 font-bold">15,000 طن تخزين</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-5"
          >
            {/* Elegant Certifications Seal */}
            <div className="p-8 bg-white border border-emerald-600/10 rounded-2xl relative text-right shadow-xl shadow-emerald-900/5">
              <h4 className="font-extrabold text-emerald-950 text-base mb-4 border-b border-slate-100 pb-3">مطابقة الشريعة والصحة الغذائية</h4>
              
              {/* Natural organic grazing pasture farm visual */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 border border-emerald-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=800"
                  alt="Organic livestock premium pasture"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-4 text-[10px] font-mono font-bold text-emerald-300">
                  HALAL SANITATION & FEED QUALITY CHECKED
                </span>
              </div>
              
              <ul className="space-y-4 text-xs text-emerald-900 font-bold">
                <li className="flex items-start gap-3 flex-row-reverse">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-950">ذبح يدوي غير آلي:</span>
                    <p className="text-emerald-700/80 text-[11px] mt-1 font-semibold">ذبح يدوي من جزارين مسلمين معتمدين وموجهين للقبلة ببلاد المنشأ.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 flex-row-reverse">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-950">خلو تام من المركبات الكيميائية:</span>
                    <p className="text-emerald-700/80 text-[11px] mt-1 font-semibold">حيوانات حرة التغذية العشبية خالية من الهرمونات والمنشطات.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 flex-row-reverse">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-950">تفتيش بيطري دوري مزدوج:</span>
                    <p className="text-emerald-700/80 text-[11px] mt-1 font-semibold">فحوص مخبرية عند موانئ بلاد المنشأ وفحوصات معملية مشددة بميناء الاستقبال بمصر.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Steps of the Supply Chain (Visual cards showing process flow) */}
      <section id="processing-chain" className="py-24 bg-[#FAF9F5]/40 border-y border-emerald-900/10 shadow-inner relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="سلسلة تزويد وحفظ آمنة من المزارع للأسواق العالمية"
            subtitle="نراقب ونتحكم في كل حلقة من رحلة الشحن المبرد لضمان سلامة الأطعمة وصلاحيتها التامة"
            badge="رحلة الغذاء والبروتين"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-right">
            {supplyChainSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-8 bg-white border border-emerald-100 hover:border-emerald-500/35 rounded-2xl relative shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition duration-300 group"
                >
                  <span className="absolute top-4 left-6 text-emerald-500/10 font-mono text-3xl font-extrabold select-none">
                    {step.step}
                  </span>
                  
                  <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-lg w-fit mb-6">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-emerald-800 text-xs sm:text-sm leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Safe transport distributions call-out */}
      <section id="distribution-cta" className="py-20 bg-white max-w-4xl mx-auto text-center px-6 border border-emerald-500/15 rounded-3xl my-16 shadow-xl shadow-emerald-900/5 space-y-6 relative z-10">
        <Heart className="h-10 w-10 text-emerald-600 mx-auto" />
        <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-950">هل تود توريد لحوم مجمدة معتمدة حلال لشركتك الغذائية؟</h3>
        <p className="text-emerald-800 text-sm leading-relaxed max-w-2xl mx-auto font-medium">
          نملك من التسهيلات القانونية والقدرة اللوجستية ما يتيح لنا إمدادكم بحصص تتراوح ما بين الحمولات الجزئية والتعاقدات السنوية الضخمة مع تفتيش الجودة المستمر.
        </p>
      </section>
    </div>
  );
}
