import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import WorldMap from "../components/WorldMap";
import { branchesData } from "../../models/branchesModel";

export default function Contact() {
  return (
    <div id="contact-us-page" className="bg-slate-50 min-h-screen text-slate-700 pt-24">
      
      {/* 1. Page Header */}
      <div className="relative py-20 bg-white border-b border-slate-150 overflow-hidden">
        <div className="absolute inset-0 opacity-4 bg-[radial-gradient(#b89563_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <SectionTitle
            title="مكاتبنا الرئيسية وفروعنا حول العالم"
            subtitle="نتواجد بصفة مباشرة ومستمرة في 10 مراكز تجارية وبحرية رئيسية لضمان كفاءة التنسيق ومتابعة عقودكم"
            badge="الاتصال الدبلوماسي والصناعي"
            center={false}
          />
        </div>
      </div>

      {/* 2. Interactive Map Container */}
      <section id="interactive-network-map" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-right">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">تتبع جغرافيا الحضور الميداني للأبو السعود</h3>
          <p className="text-sm text-slate-650 font-semibold">انقر فوق أي فرع لوجستي بداخل الخريطة للحصول على تفرعاته وعنوان التراخيص المباشرة</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md">
          <WorldMap />
        </div>
      </section>

      {/* 3. Form and Direct HQ Card details */}
      <section id="contact-form-and-hq" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-100/40 border-t border-slate-200 shadow-inner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side Office Directory list (HQ Focus) */}
          <div className="lg:col-span-5 space-y-8 text-right">
            <div>
              <span className="text-xs font-bold tracking-wider text-gold-600 bg-gold-500/10 px-3 py-1 rounded-full uppercase">
                مقر الرئاسة الرئيسي العام
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-4">
                المكتب التنفيذي المركزي (دبي، الإمارات العربية المتحدة)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2 font-semibold">
                يتولى المقر الرئيسي في دبي إدارة وتنسيق كافة فروع وعقود واتجاهات الشركات التابعة لمجموعة أبو السعود جروب؛ ويشمل ذلك تخطيط شواحن البترول وحصص الأغذية والأسمنت.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4 shadow-sm">
              <div className="flex gap-4 items-start">
                <MapPin className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono font-bold">LOCATION ADDRESS</span>
                  <p className="text-sm text-slate-900 mt-0.5 font-bold animate-fade-in">دبي، الإمارات العربية المتحدة.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-t border-slate-100 pt-4">
                <Phone className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono font-bold">HQ TELEPHONE</span>
                  <p className="text-sm text-slate-900 mt-0.5 font-bold" dir="ltr">+971 4 2400 5500</p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-t border-slate-100 pt-4">
                <Mail className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono font-bold font-semibold">HQ EMAIL</span>
                  <p className="text-sm text-slate-900 mt-0.5 font-bold">dubai@aboelseoud-group.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-t border-slate-100 pt-4">
                <Clock className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono font-bold">GMT WORK HOURS</span>
                  <p className="text-sm text-slate-900 mt-0.5 font-bold">من الأحد إلى الخميس: 08:00 صباحاً - 05:00 مساءً (توقيت دبي)</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <span className="text-xs font-bold text-slate-850 block mb-2">تأمين العقود وتنسيق السلع الفورية</span>
              <p className="text-slate-550 text-xs leading-relaxed font-semibold">
                لكل بلد أو ميناء شحن، نوفر وكيلاً ملاحياً ومستشاراً تجارياً مؤهلاً يتحدث لغة المنطقة ويتابع الإجراءات الجمركية والمرفئية لضمان تفريغ شحناتكم بأعلى كفاءة تشغيلية.
              </p>
            </div>
          </div>

          {/* Right Side form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* 4. Complete List of All 10 Branches in Detail Grid */}
      <section id="branches-full-directory" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <SectionTitle
          title="دليل الاتصال المباشر بكافة فروع المجموعة"
          subtitle="مكاتب وحاملي توكيلات النقل البحري والغذائي والإعمار لضمان دقة التواصل"
          badge="شجيرات الفروع القارية"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-right">
          {branchesData.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 bg-white border border-slate-200 hover:border-gold-500/30 rounded-2xl flex flex-col justify-between transition group shadow-sm hover:shadow-md"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-gold-600 block mb-1 font-bold">
                  {branch.countryAr.toUpperCase()}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{branch.nameAr}</h4>
                <p className="text-xs text-slate-400 leading-normal mb-4 font-mono font-bold uppercase">{branch.nameEn}</p>
                
                <p className="text-xs bg-slate-50 p-3.5 rounded-xl text-slate-600 leading-relaxed mb-4 border border-slate-100 font-semibold shadow-inner">
                  <span className="font-bold text-gold-600 block text-[10px] mb-1">الدور الإقليمي:</span>
                  {branch.roleAr}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-150 text-xs text-slate-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold-600 shrink-0" />
                    <span className="line-clamp-1">{branch.addressAr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold-600 shrink-0" />
                    <span dir="ltr">{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gold-600 shrink-0" />
                    <span className="truncate">{branch.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400 font-semibold">
                <span>EST: 2008+</span>
                <span>GLOBAL OFFICE NODE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
