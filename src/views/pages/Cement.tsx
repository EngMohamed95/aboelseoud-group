import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { HardHat, ShieldCheck, Award, Construction, Compass, ShieldAlert, Zap, Layers, BarChart, FileText } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Cement() {
  const cementStats = [
    { title: "بورتلاندي عالي المقاومة", value: "CEM I 42.5R" },
    { title: "التصدير والخدمة الأساسية", value: "مصر ← ليبيا" },
    { title: "سرعة ومقاومة التعبئة", value: "أكياس خماسية مقاومة للرطوبة" },
    { title: "التشغيل وحركة الدعم", value: "على مدار 24 ساعة" }
  ];

  const coreStrengths = [
    {
      title: "أكياس خماسية الطبقات فائقة التحمل للرطوبة",
      desc: "نعبئ الأسمنت بداخل عبوات متطورة ومحمية بطبقات بلاستيكية داخلية تمنع نفوذ الرطوبة الجوية أو بخار الماء المالح أثناء الرحلة البحرية والبرية الطويلة، مما يضمن كفاءة الخلط الخرساني بنسبة 100%.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "خطوط بحرية وبرية يومية فائقة السرعة",
      desc: "نملك ونشغل خطوط لوجستية مباشرة تربط مصانع التعبئة والإنتاج بمصر مباشرة بأسواق التوزيع والتعقب في دولة ليبيا الشقيقة عبر معابر السلوم والموانئ الساحلية لضمان التسليم اللحظي.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "عمليات تشغيل وصيانة على مدار الساعة 24/7",
      desc: "يعمل الكادر الفني والهندسي في شركة جبل بالتناوب والورديات المستقرة للمحافظة على معدلات طاقة الإنتاج والتحميل دون انقطاع لتلبية المشاريع القومية.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const cementGallery = [
    {
      url: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80",
      caption: "مشاريع البنية التحتية والكباري والخرسانات الجاهزة"
    },
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      caption: "معدات الشحن والتحميل البري للمعابر الدولية"
    },
    {
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      caption: "مختبر الرقابة وضبط نسب المواد الكيميائية بالكلينكر"
    }
  ];

  return (
    <div id="cement-sector-view" className="bg-[#FAF9F6] min-h-screen text-slate-800 pt-24 font-sans selection:bg-amber-500 selection:text-white relative overflow-hidden">
      
      {/* Decorative Blueprint Construction Grid Overlays (Light edition) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d97706_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* 1. Immersive Heavy Industry Hero Section with Orange/Amber Highlights */}
      <div className="relative py-28 overflow-hidden border-b border-amber-200 bg-slate-100/60">
        {/* Unsplash dramatic industrial construction site */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-102 filter brightness-[1.05] opacity-15" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600')` }}
        />
        {/* Gentle background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/30 via-[#FAF9F6]/90 to-[#FAF9F6] z-0" />
        <div className="absolute bottom-[-20px] left-1/3 w-[500px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <SectionTitle
            title="نبني المستقبل وندعم نهضة الإعمار.. الرائد في تصدير الأسمنت بحرياً."
            subtitle="شركة جبل لتصنيع وتصدير الأسمنت ومواد البناء - ريادة إقليمية في إمداد مشاريع البناء والخرسانات فائقة الجودة"
            badge="قطاع تصنيع وتصدير الأسمنت البورتلاندي"
            center={false}
            light={false}
          />
        </div>
      </div>

      {/* 2. Fact and Capacity info */}
      <section id="cement-capacity" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            <span className="text-xs font-bold tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3 py-10 rounded-full uppercase inline-flex items-center gap-1.5 py-1">
              <Construction className="h-3 w-3 text-amber-600 shrink-0" />
              قوة التنمية العمرانية الثقيلة
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              أسمنت بورتلاندي بمواصفات EN-197-1 لمواجهة الظروف البيئية الصعبة والبيئات الساحلية
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
              تأسست شركة جبل كشريك مالي وصناعي مساهم في نهضات الإعمار بالمنطقة الإقليمية. نقوم بإنتاج وتعبئة الأسمنت البورتلاندي العادي والمقاوم للكبريتات في مصانعنا بمحافظات جمهورية مصر العربية، وتوفيره مباشرة لدولة ليبيا وعموم الشرق الأوسط لمقابلة الاحتياجات السكنية والتجارية وممرات الطرق بخرسانات مشهودة الجودة.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              نهتم في مختبرات جبل بضبط النسب الفيزيائية والكيميائية بدقة لضمان زمن شك نموذجي يمنح البنائين المرونة المطلقة ويمنع ظهور شروخ الأساسات تحت درجات الحرارة الاستوائية المرتفعة، مما يجعلنا الخيار الأول والمسند لمشروعات المطارات والجسور.
            </p>

            {/* Quick Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-center">
              {cementStats.map((stat, i) => (
                <div key={i} className="p-4 bg-white border border-slate-100 rounded-xl shadow-md hover:border-amber-550/20 transition">
                  <span className="text-[10px] text-slate-400 block leading-tight font-bold">{stat.title}</span>
                  <span className="text-xs font-extrabold text-amber-600 block mt-1.5 leading-normal">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual representations of Construction blocks and bags */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-5 relative"
          >
            <div className="p-8 bg-white border border-slate-100 rounded-2xl relative text-right shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/10 to-transparent rounded-2xl pointer-events-none" />
              
              {/* Heavy concrete crane plant sunset visual */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 border border-slate-100 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800"
                  alt="Cement plant production silos"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-4 text-[10px] font-mono font-bold text-white">
                  CRUSHING & MIXING ACCEL PORTLAND
                </span>
              </div>

              <h4 className="font-extrabold text-slate-900 text-base mb-6 border-b border-slate-100 pb-3">دواعي الاعتماد على أسمنت جبل</h4>
              
              <div className="space-y-4 text-xs text-slate-600 font-bold">
                <div className="flex gap-3.5 items-start justify-end flex-row-reverse">
                  <HardHat className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-right">
                    <span className="font-bold text-slate-900">إشراف هندسة ومخبري كامل</span>
                    <p className="text-slate-500 text-[11px] mt-1 font-semibold">مختبرات تفتيش لفحص جودة الكلينكر ونعومة الخلطات باستمرار.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start justify-end flex-row-reverse">
                  <Award className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-right">
                    <span className="font-bold text-slate-900">درجة صلابة 42.5R فائقة</span>
                    <p className="text-slate-500 text-[11px] mt-1 font-semibold">تحمل هائل لضغوط الخرسانات الإنشائية في ناطحات السحاب ومصارف الصرف الصحي.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start justify-end flex-row-reverse">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-right">
                    <span className="font-bold text-slate-900">الوفاء بجميع الحمولات والعقود</span>
                    <p className="text-slate-500 text-[11px] mt-1 font-semibold">خطوط معابر برية ممهدة وموانئ بحرية مخصصة للتحميل والتصدير للمؤسسات والحكومات الشريكة.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Deep dive comparative descriptions (Why Waterproof matters) */}
      <section id="industrial-strengths" className="py-20 bg-slate-50 border-y border-slate-100 shadow-inner relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="مواصفات تضمن كفاءة البناء بلا مشاكل"
            subtitle="نطور تقنيات التصنيع والتغليف والترحيل لنحافظ على خصائص الأسمنت من مصانعنا حتى إنجاز الصب الخرساني"
            badge="مفاتيح التميز الصناعي للأسمنت"
            light={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-right">
            {coreStrengths.map((str, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-0 bg-white border border-slate-100 hover:border-amber-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-100/50 transition duration-300 group"
              >
                {/* Strength Specific Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={str.image}
                    alt={str.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="p-3 bg-amber-50 text-amber-600 border border-amber-100 rounded-lg w-fit mb-4">
                    <span className="font-mono text-base font-bold">0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {str.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                    {str.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Cement Gallery / Photo Section */}
      <section id="cement-gallery-rack" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="التطبيق في الميدان وتأمين الجودة"
          subtitle="صور حية توضح استخدام خرسانات الأسمنت البورتلاندي من جبل في ممرات المطارات وصيانة الجسور وسلسلة فحص المعامل الفنية"
          badge="معرض الصناعات والبناء"
          light={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-right">
          {cementGallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-150 rounded-2xl p-2 shadow-md hover:shadow-lg transition duration-300 group"
            >
              <div className="relative h-60 w-full overflow-hidden rounded-xl">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 text-center py-3.5 px-2">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Shipping representation Call to action */}
      <section id="cement-cta-panel" className="py-20 bg-gradient-to-b from-[#FAF9F6] to-slate-50 max-w-4xl mx-auto text-center px-6 border border-slate-200 rounded-3xl my-16 shadow-xl space-y-6 relative z-10">
        <Construction className="h-10 w-10 text-amber-500 mx-auto" />
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">تأمين الاحتياجات والتوريد الإقليمي لليبيا وجنوب المتوسط</h3>
        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto font-semibold">
          نرحب بتجهيز طلبيات مشاريع إعادة الإعمار، وشركات الخلط الخرساني، وتوفير الأسمنت المعبأ أو السائب (bulk) بحسب المواصفات الفنية المطلوبة للخرسانة المعتمدة.
        </p>
        <div className="pt-4">
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-white font-extrabold text-sm rounded-lg shadow-lg hover:shadow-amber-500/10 transition cursor-pointer inline-block"
          >
            طلب تفاصيل المواصفات الفنية وعروض أسعار الأسمنت
          </Link>
        </div>
      </section>
    </div>
  );
}
