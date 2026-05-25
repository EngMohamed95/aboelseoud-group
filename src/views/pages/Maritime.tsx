import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Anchor, Award, ShieldAlert, Star, Compass, ShieldCheck, ArrowLeft, Layers, Radio, Ship, HardHat, Disc } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import WorldMap from "../components/WorldMap";
import { brandThemes } from "../../models/brandModel";

const MARITIME_PAGE_HERO_IMAGE = "/images/maritime-page-hero-harbor.png";
const MARITIME_BRIDGE_RADAR_IMAGE = "/images/maritime-bridge-radar-panel.png";
const MARITIME_DECK_LOADING_IMAGE = "/images/maritime-service-deck-loading.png";
const MARITIME_ENGINE_ROOM_IMAGE = "/images/maritime-service-engine-room.png";
const MARITIME_STRAIT_ESCORT_IMAGE = "/images/maritime-service-strait-escort.png";
const MARITIME_NIGHT_TERMINAL_IMAGE = "/images/maritime-gallery-night-terminal.png";
const MARITIME_SAFETY_BOOM_IMAGE = "/images/maritime-gallery-safety-boom.png";
const MARITIME_CONTROL_CENTER_IMAGE = "/images/maritime-gallery-control-center.png";

export default function Maritime() {
  const brand = brandThemes.maritime;
  const maritimeServices = [
    {
      title: "نقل النفط الخام والمواد البترولية",
      desc: "تحميل ونقل آمن وموثوق للمواد النفطية الخام والمقطرات والمشتقات عبر ناقلات ثنائية الجدار ومجهزة بهياكل حديدية معززة لضمان عدم التسرب.",
      icon: Anchor,
      image: MARITIME_DECK_LOADING_IMAGE
    },
    {
      title: "إدارة الأساطيل الفنية المتكاملة",
      desc: "صيانة ميكانيكية دورية وهندسية وبناء أنظمة مراقبة ملاحة رقمية للسفن للتأكد من انسياب الحركة دون أعطال أو حوادث مفاجئة.",
      icon: Compass,
      image: MARITIME_ENGINE_ROOM_IMAGE
    },
    {
      title: "الخدمات اللوجستية البحرية وتأمين الممرات",
      desc: "التنسيق الدبلوماسي والمطابقة المرفئية مع الموانئ الدولية لتسهيل عبور ناقلات المواد البترولية ممرات هرمز والبوسفور وروتردام وسنغافورة بكفاءة.",
      icon: ShieldCheck,
      image: MARITIME_STRAIT_ESCORT_IMAGE
    }
  ];

  const maritimeOffices = [
    { country: "سنغافورة", desc: "بوابة آسيا وإدارة التذكرة البترولية لشرق القارة" },
    { country: "هولندا (روتردام)", desc: "مركز الملاحة وتفتيش السلامة البحري لبلدان أوروبا الشمالية" },
    { country: "مالطا (فاليتا)", desc: "الميناء الجغرافي والمركز الهندسي لصيانة هياكل سفن البحر المتوسط" },
    { country: "تركيا (إسطنبول)", desc: "لوجستيات وعبور وتمرير الحمولات الثقيلة عبر مضيق البوسفور" },
    { country: "سلطنة عمان (مسقط)", desc: "بوابة الخليج العربي وتأمين اتصالات الإمداد الملاحي بمضيق هرمز" },
    { country: "المكسيك (فيراكروز)", desc: "إمساك باتفاقيات الشحن وممرات تفريغ البترول بالقارة الأمريكية" }
  ];

  const galleryImages = [
    {
      url: MARITIME_NIGHT_TERMINAL_IMAGE,
      caption: "موانئ الشحن والتفريغ اللوجستي التابعة لنا"
    },
    {
      url: MARITIME_SAFETY_BOOM_IMAGE,
      caption: "فحوص الأمان ومكافحة التلوث المائي"
    },
    {
      url: MARITIME_CONTROL_CENTER_IMAGE,
      caption: "غرفة التوجيه والتحكم والمراقبة الفضائية"
    }
  ];

  return (
    <div
      id="maritime-sector-view"
      style={{
        "--brand-primary": brand.primary,
        "--brand-secondary": brand.secondary,
        "--brand-accent": brand.accent,
        "--brand-soft": brand.soft,
      } as React.CSSProperties}
      className="brand-scope bg-[#FAFBFD] min-h-screen text-slate-700 pt-24 relative overflow-hidden selection:bg-cyan-500 selection:text-white font-sans"
    >
      
      {/* Dynamic Radar Sweep Ornament in Background (Light Theme Edition) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full border border-cyan-500/5 pointer-events-none animate-pulse" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full border border-cyan-500/5 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-cyan-500/10 pointer-events-none" />

      {/* 1. Immersive Deep Sea Hero Section */}
      <div className="relative py-28 overflow-hidden border-b border-cyan-100 bg-slate-50">
        {/* Unsplash Maritime Freighter Wallpaper in Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-102 filter brightness-[1.08] contrast-[1.05] opacity-55" 
          style={{ backgroundImage: `url('${MARITIME_PAGE_HERO_IMAGE}')` }}
        />
        {/* Soft layout overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFD]/10 via-[#FAFBFD]/58 to-[#FAFBFD]/92 z-0" />
        <div className="absolute bottom-[-20px] left-1/4 w-[500px] h-[300px] bg-cyan-200/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <SectionTitle
            title="نحرك طاقة العالم.. أسطول بحري متطور يربط ممرات التجارة الدولية."
            subtitle="مجموعة أبو السعود ماريتايم - شريك حيوي موثوق لنقل النفط الخام والمشتقات البترولية المكررة عبر القارات منذ عام 2008"
            badge="قطاع النقل البحري للبترول"
            center={false}
            light={false}
          />
          <div className="flex gap-4 justify-end mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-100 border border-cyan-200 text-xs text-cyan-700 rounded-full font-mono font-bold">
              <Radio className="h-3 w-3 text-cyan-600 animate-pulse shrink-0" />
              SATELLITE POSITIONING ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* 2. Facts and Capacity Section */}
      <section id="maritime-capacity" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            <span className="text-xs font-bold tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200/50 px-3 py-1 rounded-full uppercase">
              القدرة التشغيلية الفائقة
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              أسطول حديث بنواقل جدار مزدوج بسعة 20,000 طن لكل ناقلة
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
              تأسست ذراع النقل البحري للمجموعة في عام 2008 لتلبية الاحتياجات المتزايدة لنقل المنتجات البترولية السائلة بكفاءة وحذر. نملك ونشغل بمقتضى التراخيص الدولية أسطولاً بحرياً حديثاً من الناقلات ثنائية الجدران (Double Hull) والمصممة لمقاومة شتى العوامل الجوية ولحفظ الشحن البترولي ضد التسرب بأقصى ممر مائي.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              تغطي شبكة خطوط النقل البحري التابعة لنا ممرات الحركة الأكثر حيوية في العالم، حيث تربط فروعنا في سنغافورة وهولندا وتركيا ومالطا شبكة خطوط التجارة البترولية ونظام التكرير بالشحنات الثقيلة الموجهة للشركاء العالميين.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-md">
                <span className="text-[10px] text-slate-400 block font-bold">منذ عام لتأمين الملاحة</span>
                <span className="text-xl font-extrabold text-cyan-600 block mt-1">2008 تأسست</span>
              </div>
              <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-md">
                <span className="text-[10px] text-slate-400 block font-bold">السعة الاستيعابية القصوى</span>
                <span className="text-xl font-extrabold text-cyan-600 block mt-1">20,000 طن للناقلة</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Floating Tanker representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-5"
          >
            <div className="p-8 bg-white border border-cyan-100 rounded-2xl relative shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/10 to-transparent rounded-2xl pointer-events-none" />
              
              {/* Technical Ship Radar / Bridge Visual */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 border border-cyan-100 shadow-sm">
                <img
                  src={MARITIME_BRIDGE_RADAR_IMAGE}
                  alt="Marine Navigation Bridge Radar"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-4 text-[10px] font-mono font-bold text-white tracking-wider">
                  ANTENNA SAT FEED: ACTIVE // TRANSIT_08
                </span>
              </div>

              <h4 className="font-extrabold text-slate-900 text-base mb-6 border-b border-cyan-50/10 pb-3 text-right">مزايا أبو السعود ماريتايم</h4>
              
              <div className="space-y-5 text-right">
                <div className="flex w-full items-start gap-4">
                  <div className="p-2.5 bg-cyan-50 text-cyan-600 rounded border border-cyan-100 shrink-0">
                    <Star className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1 text-right">
                    <h5 className="text-sm font-bold text-slate-900">مطابقة المنظمة الملاحة الدولية (IMO)</h5>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed font-semibold">امتلاك شهادات التسجيل والترخيص البحري الأكثر صرامة لنقل المواد الهيدروكربونية والخطرة.</p>
                  </div>
                </div>

                <div className="flex w-full items-start gap-4">
                  <div className="p-2.5 bg-cyan-50 text-cyan-600 rounded border border-cyan-100 shrink-0">
                    <ShieldAlert className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1 text-right">
                    <h5 className="text-sm font-bold text-slate-900">بروتوكولات الأمان البحري الكلي (ISPS)</h5>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed font-semibold">بروتوكولات دفاعية وتأمين للناقات والطواقم في الممرات المائية والموانئ عالية الخطورة.</p>
                  </div>
                </div>

                <div className="flex w-full items-start gap-4">
                  <div className="p-2.5 bg-cyan-50 text-cyan-600 rounded border border-cyan-100 shrink-0">
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1 text-right">
                    <h5 className="text-sm font-bold text-slate-900">معايير حماية البيئة المائية</h5>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed font-semibold">تقنيات معالجة مياه التوازن وتصفير انبعاثات أكاسيد الكبريت كجزء من الملاحة المستدامة الخضراء.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Services List Section with illustrative images */}
      <section id="maritime-services-rack" className="py-20 bg-slate-50 border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="الخدمات اللوجستية والملاحية التي نقدمها"
            subtitle="نؤمن حلول نقل وشحن بحري بترولي سلسة ومثبتة تضمن جودة وحفظ المواد من موانئ التعبئة للمستلم النهائي"
            badge="خدمات القطاع الملاحي"
            light={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-right">
            {maritimeServices.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-0 bg-white border border-slate-100 hover:border-cyan-300 rounded-2xl overflow-hidden relative shadow-lg hover:shadow-cyan-100/50 transition duration-300 group"
                >
                  {/* Service Specific Image */}
                  <div className="relative h-52 w-full overflow-hidden sm:h-44">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="p-3 bg-cyan-50 text-cyan-700 w-fit rounded-lg mb-4 border border-cyan-100">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {srv.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                      {srv.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expressive Photo Gallery Section */}
      <section id="maritime-photo-gallery" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        <SectionTitle
          title="معرض عمليات النقل والمتابعة الحية"
          subtitle="صور واقعية توضح نشاط ناقلاتنا وعمليات الفحص ومتابعة الأطقم في أعالي البحار وعبر المعابر البحرية"
          badge="العمليات في الميدان"
          light={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-100 rounded-2xl p-2 shadow-md hover:shadow-lg transition duration-300 group"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-xl sm:h-60">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 text-center py-3.5 px-2">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Global Interactive Map showing maritime network */}
      <section id="shipping-routes-map-panel" className="py-20 bg-slate-50 border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="الموانئ وفروع النقل البحري التابعة لنا"
            subtitle="مكاتب تنسيق لوجستي وموانئ شحن وتفريغ نشطة في أهم المعاقل والممرات المائية حول العالم"
            badge="خريطة القواعد الملاحية"
            light={false}
          />

          <div className="mt-12 bg-white p-3 rounded-2xl border border-cyan-100 shadow-xl">
            <WorldMap />
          </div>

          {/* List of offices under the map for clearer reading */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12 text-right">
            {maritimeOffices.map((office, idx) => (
              <div key={idx} className="p-5 bg-white border border-slate-100 shadow-md rounded-xl hover:border-cyan-200 transition">
                <span className="text-sm font-bold text-cyan-600 block mb-1">{office.country}</span>
                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">{office.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA banner */}
      <section id="maritime-cta-panel" className="py-20 bg-gradient-to-b from-white to-[#FAFBFD] border-t border-slate-100 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">هل تبحث عن خدمات شحن أو تعاقد ملاحي بترولي طويل الأجل؟</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto font-semibold">
            فريق المستشارين البحريين وممثلي مكاتب روتردام وسنغافورة جاهزون لصياغة عقود تداول وتوريد مرنة تتوافق مع القوانين الوطنية وتقدم عروض أسعار منافسة للغاية.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-sm rounded-lg shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer inline-block"
            >
              تواصل مع مكتب الملاحة الآن
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
