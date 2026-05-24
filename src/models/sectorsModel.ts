export interface SectorService {
  title: string;
  desc: string;
}

export interface SectorFeature {
  title: string;
  value: string;
}

export interface Sector {
  id: string; // 'maritime' | 'meat' | 'cement'
  titleAr: string;
  titleEn: string;
  companyNameAr: string;
  companyNameEn: string;
  taglineAr: string;
  taglineEn: string;
  established: string;
  iconName: string;
  descriptionAr: string;
  descriptionEn: string;
  detailsAr: string[];
  detailsEn: string[];
  services: SectorService[];
  features: SectorFeature[];
  destinationsAr: string[];
  imagePrompt: string; // Dynamic presentation guide / background styling references
}

export const sectorsData: Sector[] = [
  {
    id: "maritime",
    titleAr: "النقل البحري والخدمات اللوجستية البترولية",
    titleEn: "Maritime Transport & Petroleum Logistics",
    companyNameAr: "أبو السعود للنقل البحري",
    companyNameEn: "Abo El-Seoud Maritime Transport",
    taglineAr: "نحرك طاقة العالم.. أسطول بحري متطور يربط ممرات التجارة الدولية.",
    taglineEn: "Moving Global Energy.. Advanced fleet connecting international trade corridors.",
    established: "2008",
    iconName: "Ship",
    descriptionAr: "منذ تأسيسها عام 2008، تعد شركة أبو السعود للنقل البحري الذراع اللوجستية الحيوية للمجموعة، حيث تتولى نقل النفط الخام والمشتقات البترولية عبر ناقلات نفط حديثة مطابقة لأعلى المعايير البحرية الدولية (IMO). نلتزم بالحفاظ على أمن الطاقة العالمي مع تطبيق بروتوكولات حماية البيئة البحرية الأكثر صرامة.",
    descriptionEn: "Since its establishment in 2008, Abo El-Seoud Maritime Transport is the vital logistical arm of the group, transporting crude oil & petroleum derivatives through advanced tankers compliant with the highest IMO standards. We participate in securing global energy with strict marine eco-protection.",
    detailsAr: [
      "نقل المواد البترولية والنفط الخام والمشتقات المكررة بأعلى مستويات الأمان.",
      "أسطول حديث ومجهز بسعات نقل تصل إلى 20,000 طن لكل ناقلة.",
      "تغطية جغرافية استراتيجية تشمل موانئ سنغافورة، روتردام، مالطا، وتركيا.",
      "امتثال كامل لمعايير السلامة البحرية الدولية والمنظمة البحرية الدولية (IMO)."
    ],
    detailsEn: [
      "Secured transport of petroleum materials, crude oil, and refined products.",
      "Modern and equipped fleet with capacities up to 20,000 DWT per tanker.",
      "Strategic geographic coverage including Singapore, Rotterdam, Malta, and Turkey.",
      "Full compliance with international maritime safety standards and IMO regulations."
    ],
    services: [
      {
        title: "نقل النفط الخام ومشتقاته",
        desc: "عمليات نقل بترولي بحري آمن ومحكم عبر ناقلات ذات جدار مزدوج مخصصة للحمولات الثقيلة والمواد الخطرة."
      },
      {
        title: "إدارة وتشغيل الأساطيل",
        desc: "إدارة فنية متكاملة للسفن تشمل الصيانة الدورية، التزويد بالوقود، وفحوصات السلامة وفق معايير الجودة الدولية."
      },
      {
        title: "الخدمات اللوجستية البحرية المتكاملة",
        desc: "تخطيط مسارات ذكي وتأمين سلاسل التوريد البترولية من موانئ الشحن والتكرير حتى موانئ الاستقبال والتسليم النهائي."
      }
    ],
    features: [
      { title: "سعة الأسطول القصوى", value: "20,000 طن" },
      { title: "سنة التأسيس للقطاع", value: "2008" },
      { title: "الموانئ النشطة حالياً", value: "54 ميناء" },
      { title: "شهادات السلامة", value: "ISO & IMO Compliant" }
    ],
    destinationsAr: ["روتردام (هولندا)", "سنغافورة", "فاليتا (مالطا)", "إسطنبول (تركيا)", "مسقط (عمان)", "ميناء فيراكروز (المكسيك)"],
    imagePrompt: "tanker_ship_ocean"
  },
  {
    id: "meat",
    titleAr: "استيراد اللحوم وتأمين سلاسل الأمن الغذائي",
    titleEn: "Meat Import & Food Security",
    companyNameAr: "الشركة العالمية لاستيراد اللحوم",
    companyNameEn: "Al-Alamiya for Meat Import",
    taglineAr: "من كبرى مزارع العالم إلى الأسواق الدولية.. جودة لا مساومة فيها ورعاية صحية شاملة.",
    taglineEn: "From the world's finest pastures to international markets.. Uncompromised quality and certified global standards.",
    established: "2008",
    iconName: "Beef",
    descriptionAr: "تعد الشركة العالمية لاستيراد اللحوم والأمن الغذائي رائدة في توفير البروتين الحيواني الآمن بأرقى المواصفات الصحية والصناعية. نستورد اللحوم المجمدة والمبردة من كبرى مزارع البرازيل والهند مع تطبيق نظام مراقبة مستدام يشرف على سلسلة التبريد المغلقة بنسبة 100% ومطابقة أحكام الشريعة الإسلامية (حلال).",
    descriptionEn: "Al-Alamiya is a leader in supplying safe animal proteins with stellar food-safety standards. We import frozen and chilled meat from prime farms in Brazil and India, ensuring 100% strictly closed cold chain integrity and verified Halal certification.",
    detailsAr: [
      "استيراد اللحوم الطبيعية عالية المذاق والجودة من مزارع البرازيل والهند النباتية التغذية.",
      "شحن مبرد يضمن الحفاظ التام على القيم الغذائية عبر أحدث حاويات النقل الحراري المبرّد.",
      "فحوصات معملية متعددة المراحل وشهادات حلال معتمدة من الهيئات الإسلامية الرسمية.",
      "شراكة استراتيجية مع كبرى الموزعين والأسواق العربية والدولية لضمان توازن الإمدادات الغذائية."
    ],
    detailsEn: [
      "Importing premium natural meats from strictly grass-fed farms in Brazil and India.",
      "Chilled transport preserving deep nutritional value through smart temperature-stabilized reefer containers.",
      "Multistage laboratory vetting and certified Halal labels verified by regulatory Islamic entities.",
      "Strategic alliances with key Middle Eastern and global distributors to backup food safety budgets."
    ],
    services: [
      {
        title: "استيراد وتوزيع اللحوم بالجملة",
        desc: "توريد حصص ضخمة من اللحوم المجمدة والمبردة لشركات الأغذية، الفنادق، والشركات والموزعين المحليين."
      },
      {
        title: "سلسلة التبريد الذكية (Cold Chain)",
        desc: "أساطيل ومخازن عملاقة مجهزة بمجسات حرارة رقمية لحفظ درجة حرارة اللحوم عند (18- مئوية) طوال رحلة الشحن والتخزين."
      },
      {
        title: "رقابة الجودة وشروط الذبح الشرعي",
        desc: "إشراف بيطري وشرعي كامل في بلدان المنشأ للتأكد من آلية الذبح وتوفر كافة المتطلبات الصحية العالمية."
      }
    ],
    features: [
      { title: "سلسلة التبريد", value: "مغلقة 100%" },
      { title: "الذبح الشرعي", value: "حلال معتمد" },
      { title: "مصادر الشحن الأساسية", value: "البرازيل والهند" },
      { title: "سعة مخازن التجميد", value: "15,000 طن" }
    ],
    destinationsAr: ["البرازيل (ساو باولو)", "الهند (نيودلهي)", "مصر (القاهرة والإسكندرية)", "منطقة الخليج العربي"],
    imagePrompt: "beef_cold_storage"
  },
  {
    id: "cement",
    titleAr: "تصنيع وتصدير الأسمنت ومواد البناء الأساسية",
    titleEn: "Cement Manufacturing & Building Materials Export",
    companyNameAr: "جبل لتصنيع وتصدير الأسمنت",
    companyNameEn: "Gabal for Cement Export",
    taglineAr: "نبني المستقبل وندعم نهضة الإعمار.. الرائد الإقليمي في تصدير الأسمنت بحرياً وبرياً.",
    taglineEn: "Building the future, empowering communities.. The regional leader in marine & overland cement export.",
    established: "2020",
    iconName: "Brick",
    descriptionAr: "تمثل شركة جبل لتصنيع وتصدير الأسمنت قاطرة التنمية في المنطقة، حيث تقوم بإنتاج الأسمنت البورتلاندي عالي المقاومة ومواد البناء الأساسية وتصديرها مباشرة من جمهورية مصر العربية إلى أسواق إعادة الإعمار الشقيقة وخاصة ليبيا. ننتج أسمنتاً بخصائص فيزيائية فائقة الجودة ليتناسب مع البيئة الحارّة والرطبة.",
    descriptionEn: "Gabal Cement is the industrial engine for structural support in the region, manufacturing high-resistance Portland cement and construction supplies. We export directly from Egypt to rebuilding markets such as Libya, custom-blended for tough coastal or hot climates.",
    detailsAr: [
      "تصنيع وتعبئة الأسمنت في أكياس مخصصة ومقاومة للرطوبة وعوامل الطقس الصعبة.",
      "خطوط بحرية سريعة ومباشرة وممرات لوجستية برية مؤمنة للنقل الخالي من الفاقد.",
      "إشراف هندسي وفحوصات معملية تضمن تحقيق أعلى متطلبات مقاومة الضغط والتشقق.",
      "تشغيل على مدار 24 ساعة لضمان الاستجابة السريعة لعقود التوريد الحكومية والخاصة الضخمة."
    ],
    detailsEn: [
      "Manufacturing and bagging cement in weather-proof moisture-resistant heavy-duty sack packaging.",
      "Direct rapid marine routes and safe overland highways ensuring zero supply-loss transport.",
      "Engineering checkups and lab controls ensuring perfect resistance to extreme pressures & cracking.",
      "Round-the-clock 24/7 industrial scaling to timely feed government reconstruction megaprojects."
    ],
    services: [
      {
        title: "تصدير لوجستي متكامل لليبيا",
        desc: "خطوط نقل يومية برية من مصانع الإنتاج في مصر إلى موانئ ومنافذ التوزيع بدولة ليبيا الشقيقة بأعلى موثوقية."
      },
      {
        title: "تصنيع أسمنت فائق المقاومة للملوحة",
        desc: "إنتاج تركيبات أسمنت بورتلاندي مخصص للأساسات والخرسانات الساحلية لمقاومة الكبريتات والرطوبة."
      },
      {
        title: "التعاقدات الإنشائية الضخمة",
        desc: "تلبية الاحتياجات الكبرى للمطورين العقاريين، مشاريع البنية التحتية، وشبكات الجسور وشرايين الطرق القومية."
      }
    ],
    features: [
      { title: "التصدير الأساسي", value: "مصر ← ليبيا" },
      { title: "التشغيل والإنتاج", value: "24/7 متواصل" },
      { title: "التعبئة والحفظ", value: "أكياس خماسية مقاومة للرطوبة" },
      { title: "الطاقة الإنتاجية المعينة", value: "3 مليون طن سنوياً" }
    ],
    destinationsAr: ["مصر (موانئ البحر المتوسط)", "ليبيا (بنغازي، طرابلس، طبرق)", "أفريقيا والشرق الأوسط"],
    imagePrompt: "cement_factory_dock"
  }
];
