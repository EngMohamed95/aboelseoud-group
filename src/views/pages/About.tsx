import React from "react";
import { motion } from "motion/react";
import { Award, Landmark, ShieldAlert, HeartHandshake, Eye, BookOpen, Quote, Calendar } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  const corporateValues = [
    {
      title: "الضخومة والالتزام الكوربوريت",
      desc: "نحظى بثقة تامة بفضل الملاءة المالية والقدرة التشغيلية الفنية الضخمة لإكمال وتسليم العقود القومية والخاصة بنجاح.",
      icon: Landmark
    },
    {
      title: "السلامة أولاً وقبل كل شيء",
      desc: "سلامة البحارة وعمال الصناعة وسلامة شحن المواد البترولية والأغذية هي مرتكزنا الذي لا نقبل التنازل عنه.",
      icon: ShieldAlert
    },
    {
      title: "الاستدامة والمسؤولية البيئية",
      desc: "نلتزم بمعايير الحد من الانبعاثات الكربونية البحرية وحماية البيئة وصيانة الطبيعة في كافة مكاتبنا الدولية.",
      icon: Award
    },
    {
      title: "النزاهة والشفافية التامة",
      desc: "التعامل التجاري النزيه وقوانين حماية التداول والأمن القانوني هما أساس تراخيصنا العالمية وركائز هويتنا العريقة.",
      icon: HeartHandshake
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "التأسيس والانطلاقة الكبرى",
      desc: "تأسيس شركة أبو السعود للنقل البحري بالتوازي مع انطلاق الشركة العالمية لاستيراد اللحوم لتأمين خطوط ملاحة الطاقة وسلاسل الإمداد والاستقرار الغذائي حلال."
    },
    {
      year: "2010",
      title: "تأسيس مكتب سنغافورة وهولندا",
      desc: "التوسع نحو ممرات التجارة الآسيوية والأوروبية لضمان تزويد الوقود والشحن الآمن لخطوط روتردام الاستراتيجية."
    },
    {
      year: "2012",
      title: "تأمين سلسلة التبريد الفائق",
      desc: "تشييد وتصميم مستودعات الحفظ الحراري المتكامل وثلاجات التوزيع الضخمة بسعة 15 ألف طن لاستيعاب تدفقات اللحوم المجمدة من البرازيل والهند."
    },
    {
      year: "2020",
      title: "ميلاد شركة جبل للأسمنت",
      desc: "إطلاق الذراع الصناعي والإنشائي للمجموعة وتدشين خطوط ملاحية ومناولة لتصدير الأسمنت البورتلاندي من مصر إلى ليبيا الشقيقة لدعم خطط إعادة الإعمار."
    },
    {
      year: "2022",
      title: "الامتثال لمعايير الملاحة الخضراء",
      desc: "تحديث أسطول الناقلات البحرية بالكامل ليتلائم مع قيود الانبعاثات لمنظمة الملاحة الدولية IMO وخاصة لوائح الكبريت."
    },
    {
      year: "2023",
      title: "الأتمتة الشاملة لسلاسل الإمداد",
      desc: "إدراج منصات رصد حراري لحظي لكافة ثلاجات اللحوم المبردة ومسارات الشحن لضمان تصفير نسب الهدر والفاقد."
    },
    {
      year: "2026",
      title: "مجموعة أبو السعود جروب اليوم",
      desc: "نطاق عمل دائم يغطي 4 قارات، يخدم ملايين المستهلكين ويسند مشروعات عظمى للعملاء بـ 10 مكاتب إقليمية."
    }
  ];

  return (
    <div id="about-us-view" className="bg-slate-50 min-h-screen text-slate-700 pt-24">
      {/* 1. Header Banner */}
      <div className="relative py-20 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 opacity-4 bg-[radial-gradient(#b89563_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <SectionTitle
            title="ثقتكم غايتنا وتأمين الإمداد وسيلتنا"
            subtitle="نحن صلة الوصل اللوجستية التي تثق بها الحكومات والمؤسسات الصناعية الكبرى حول قارات العالم منذ عام 2008"
            badge="نبذة عن مجموعة أبو السعود"
            center={false}
          />
        </div>
      </div>

      {/* 2. Word from Chairman */}
      <section id="chairman-address" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            {/* Visual Portrait styled as luxury executive frame */}
            <div className="relative aspect-[4/5] bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden p-1.5 shadow-lg shadow-slate-200/40">
              {/* Actual Image Asset */}
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800"
                alt="م. عبدالرحمن أبو السعود"
                className="absolute inset-0 w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-slate-950/20 z-10" />
              <div className="w-full h-full flex flex-col justify-end p-6 relative z-20 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent text-right">
                <span className="text-white font-extrabold block text-lg shadow-sm">م. عبدالرحمن أبو السعود</span>
                <span className="text-xs text-gold-400 mt-1 block font-bold">رئيس مجلس الإدارة العام ومؤسس المجموعة</span>
              </div>
              
              {/* Decorative design graphic lines representing navy chart */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-gold-500/45 rounded z-20 pointer-events-none" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-gold-500/45 rounded z-20 pointer-events-none" />
            </div>
          </motion.div>

          {/* Letter / Quote details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6 text-right"
          >
            <div className="text-gold-600">
              <Quote className="h-10 w-10 rotate-180 opacity-40" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              رسالة من رئيس مجلس الإدارة للشركاء والموزعين الدوليين
            </h3>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-semibold">
              "إن العالم المتسارع الذي نعيش فيه اليوم يرتكز عميقاً على شرايين وجسور النقل اللوجستي وسلال الغذاء الآمنة والمواد الخام الصالحة للإعمار. عندما أسسنا النواة الأولى لمجموعة أبو السعود جروب في عام 2008، كانت قلوبنا منصبة على توفير حلول شحن بحري بترولي عالية الانضباط لا تشوبها شائبة هدر أو قصور وبأسطول وطني نفخر بجدارته."
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">
              "لقد دفعنا هذا التفوق والانضباط الصارم تدريجياً إلى الدخول بثقة وجسارة في قطاعات حساسة تلامس حياة المجتمعات والشعوب، فكانت العالمية لاستيراد اللحوم لتأمين الأمن الغذائي حلال، وتلتها شركة جبل للأسمنت لإسناد وتغذية مشاريع إعادة البناء والجسور في ليبيا الشقيقة بأجود خامات مصانعنا المصرية."
            </p>

            <p className="text-slate-500 leading-relaxed text-sm font-medium">
              "تعهدنا الدائم لشركائنا بشتى فروعنا من سنغافورة إلى روتردام والمكسيك، هو الأمان التام، والنزاهة القانونية والعملية، والحفاظ المستمر على استقرار سلاسل توريدهم."
            </p>

            <div className="p-4 bg-slate-100 border-l-4 border-gold-500 rounded-lg text-xs text-slate-700 font-bold">
              مستمرون في صياغة الريادة بعناية، حماية للبيئات وثقة في المستقبل الرقمي.
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section id="vision-mission-modules" className="py-24 bg-slate-100/40 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 bg-white border border-slate-200/60 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md duration-300"
            >
              <div>
                <div className="p-3 bg-gold-500/10 text-gold-600 rounded-lg w-fit mb-6">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">رؤيتنا الاستراتيجية 2030</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                  أن نكون الشريك اللوجستي والصناعي المتكامل الأكثر موثوقية في منطقة الشرق الأوسط وتجارة البحار العالمية، مع التحول الكامل لأساطيل نقل بوقود بحري هجين وصديق للبيئة، والربط الرقمي الشامل لعمليات الموانئ والشحن البري لتصفير الانبعاثات الكربونية وتقليص الهدر الغذائي.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-8 text-xs text-slate-400 font-bold font-mono">
                ABO-EL-SEOUD_STRATEGIC-VISION_COB
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 bg-white border border-slate-200/60 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md duration-300"
            >
              <div>
                <div className="p-3 bg-blue-500/10 text-blue-600 rounded-lg w-fit mb-6">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">رسالتنا التشغيلية اليومية</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                  الالتزام بدقة بمتطلبات الجودة الوطنية والدولية، وإيصال الطاقة ومواد البناء والبروتينات بأرقى درجات التحصين والنقاء للأسواق المستهدفة، مستندين لعلاقات استراتيجية متينة مع المزارع العالمية ومصانع الأسمنت البورتلاندي وكوادر الملاحة البحرية الكفؤة.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-8 text-xs text-slate-400 font-bold font-mono">
                ABO-EL-SEOUD_OPERATIONAL-MISSION_COB
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Values */}
      <section id="values-grid" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="القيم المؤسسية الراسخة للمجموعة"
          subtitle="مبادئ عاهدنا أنفسنا عليها لسنوات خلت، لتكون مرشد الكوادر العاملة بفروع المكاتب الـ 10"
          badge="الالتزام الكوربوريت"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-right">
          {corporateValues.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white border border-slate-200/65 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-slate-50 text-gold-600 rounded-lg w-fit mb-4 border border-slate-100">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h4 className="text-slate-900 font-bold text-base mb-2">{val.title}</h4>
                <p className="text-slate-550 text-xs leading-relaxed font-medium">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Timeline Milestones */}
      <section id="corporate-timeline" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <SectionTitle
            title="سجل الفخر والإنجازات منذ 2008"
            subtitle="مراحل أساسية عبرت بها المجموعة لتتحول من أساطيل نقل بحري بترولي محلية إلى مجموعة قابضة دولية"
            badge="خطنا الزمني للتوسع"
          />

          <div className="relative border-r border-slate-300 pr-6 space-y-12 mt-16 mr-4 sm:mr-10">
            {milestones.map((mil, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Dotted Node Point */}
                <span className="absolute right-[-31px] top-1 w-4.5 h-4.5 rounded-full border-2 border-gold-500 bg-white z-10 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                </span>

                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition duration-300">
                  <span className="inline-flex items-center gap-1 font-mono text-gold-600 text-xs font-bold bg-gold-500/10 px-2.5 py-0.5 rounded-full mb-2 border border-gold-500/20">
                    <Calendar className="h-3 w-3" />
                    {mil.year}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{mil.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1 font-semibold">{mil.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
