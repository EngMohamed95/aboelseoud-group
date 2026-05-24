export interface Branch {
  id: string;
  nameAr: string;
  nameEn: string;
  cityAr: string;
  cityEn: string;
  countryAr: string;
  countryEn: string;
  phone: string;
  email: string;
  addressAr: string;
  addressEn: string;
  latitude: number; // for custom visual world map projection
  longitude: number; // for custom visual world map projection
  roleAr: string;
}

export const branchesData: Branch[] = [
  {
    id: "singapore",
    nameAr: "فرع سنغافورة (شرق آسيا)",
    nameEn: "Singapore Branch",
    cityAr: "سنغافورة",
    cityEn: "Singapore",
    countryAr: "جمهورية سنغافورة",
    countryEn: "Singapore",
    phone: "+65 6789 0122",
    email: "singapore@aboelseoud-group.com",
    addressAr: "برج مارينا باي المالي، سنغافورة 018981",
    addressEn: "Marina Bay Financial Centre, Singapore 018981",
    latitude: 35, // custom canvas relative X%
    longitude: 78, // custom canvas relative Y%
    roleAr: "المكتب الإقليمي لقطاع النقل البحري وإدارة السفن في آسيا"
  },
  {
    id: "netherlands",
    nameAr: "مكتب روتردام (شمال أوروبا)",
    nameEn: "Rotterdam Branch",
    cityAr: "روتردام",
    cityEn: "Rotterdam",
    countryAr: "هولندا",
    countryEn: "Netherlands",
    phone: "+31 10 567 8900",
    email: "rotterdam@aboelseoud-group.com",
    addressAr: "شارع ويلمينا كاي، ميناء روتردام، هولندا",
    addressEn: "Wilhelminakade, Port of Rotterdam, Netherlands",
    latitude: 19,
    longitude: 48,
    roleAr: "إدارة العقود وتفتيش السلامة وتأمين الخطوط البترولية الأوروبية"
  },
  {
    id: "malta",
    nameAr: "مكتب مالطا الرئيسي",
    nameEn: "Malta Branch",
    cityAr: "فاليتا",
    cityEn: "Valetta",
    countryAr: "جمهورية مالطا",
    countryEn: "Malta",
    phone: "+356 2133 4455",
    email: "malta@aboelseoud-group.com",
    addressAr: "طريق الجمهورية، المبنى التجاري الإقليمي، فاليتا",
    addressEn: "Republic Street, Valletta Commercial Complex, Malta",
    latitude: 25,
    longitude: 49,
    roleAr: "مركز الملاحة الإقليمي وصيانة أسطول البحر الأبيض المتوسط"
  },
  {
    id: "turkey",
    nameAr: "مكتب إسطنبول الإقليمي",
    nameEn: "Istanbul Branch",
    cityAr: "إسطنبول",
    cityEn: "Istanbul",
    countryAr: "تركيا",
    countryEn: "Turkey",
    phone: "+90 212 999 8877",
    email: "turkey@aboelseoud-group.com",
    addressAr: "منطقة مسلك، البرج التجاري الأول، إسطنبول",
    addressEn: "Maslak Heights, Tower 1, Istanbul, Turkey",
    latitude: 26,
    longitude: 54,
    roleAr: "التنسيق اللوجستي وعبور ناقلات المواد البترولية عبر مضيق البوسفور"
  },
  {
    id: "oman",
    nameAr: "مكتب سلطنة عمان",
    nameEn: "Oman Branch",
    cityAr: "مسقط",
    cityEn: "Muscat",
    countryAr: "سلطنة عمان",
    countryEn: "Oman",
    phone: "+968 2455 6677",
    email: "oman@aboelseoud-group.com",
    addressAr: "منطقة القرم التجارية، بناية الياسمين، مسقط",
    addressEn: "Al Qurum Business Area, Al Yasmeen Bldg, Muscat",
    latitude: 33,
    longitude: 62,
    roleAr: "تنسيق ممرات الشحن والخدمات البحرية في منطقة الخليج العربي ومضيق هرمز"
  },
  {
    id: "mexico",
    nameAr: "مكتب المكسيك الإقليمي",
    nameEn: "Mexico Branch",
    cityAr: "فيراكروز",
    cityEn: "Veracruz",
    countryAr: "المكسيك",
    countryEn: "Mexico",
    phone: "+52 55 1234 5678",
    email: "mexico@aboelseoud-group.com",
    addressAr: "شارع بوليفارد أدولفو، حي الميناء، فيراكروز",
    addressEn: "Blvd Adolfo Ruiz Cortines, Port Zone, Veracruz, Mexico",
    latitude: 39,
    longitude: 24,
    roleAr: "التنسيق البحري واللوجستيات لأسطول النقل البترولي في أمريكا الشمالية"
  },
  {
    id: "egypt",
    nameAr: "مكتب جمهورية مصر العربية (المكتب الرئيسي)",
    nameEn: "Egypt Headquarters",
    cityAr: "القاهرة والإسكندرية",
    cityEn: "Cairo & Alexandria",
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    phone: "+20 2 2400 5500",
    email: "egypt@aboelseoud-group.com",
    addressAr: "التجمع الخامس، شارع التسعين الشمالي، القطاع الإداري، القاهرة",
    addressEn: "90 North St, Administrative Sector, New Cairo, Egypt",
    latitude: 28,
    longitude: 51,
    roleAr: "المقر العام لإدارة المجموعة، ومراكز إنتاج وتصدير الأسمنت (شركة جبل)"
  },
  {
    id: "libya",
    nameAr: "مكتب دولة ليبيا",
    nameEn: "Libya Branch",
    cityAr: "بنغازي",
    cityEn: "Benghazi",
    countryAr: "دولة ليبيا",
    countryEn: "Libya",
    phone: "+218 61 700 8090",
    email: "libya@aboelseoud-group.com",
    addressAr: "شارع جمال عبد الناصر، عمارة الأمل، بنغازي",
    addressEn: "Gamal Abdel Nasser St, Al-Amal Bldg, Benghazi, Libya",
    latitude: 27,
    longitude: 47,
    roleAr: "استقبال وتوزيع شحنات الأسمنت ومواد البناء الأساسية التابعة لشركة جبل"
  },
  {
    id: "brazil",
    nameAr: "مكتب البرازيل (سلسلة الإمداد)",
    nameEn: "Brazil Branch",
    cityAr: "ساو باولو",
    cityEn: "Sao Paulo",
    countryAr: "جمهورية البرازيل الاتحادية",
    countryEn: "Brazil",
    phone: "+55 11 3000 4000",
    email: "brazil@aboelseoud-group.com",
    addressAr: "شارع باوليستا، حي جاردنز، ساو باولو",
    addressEn: "Avenida Paulista, Jardim District, Sao Paulo, Brazil",
    latitude: 52,
    longitude: 32,
    roleAr: "إدارة العقود الزراعية وتفتيش جودة اللحوم حلال والشحن المبرد"
  },
  {
    id: "india",
    nameAr: "مكتب الهند (سلسلة الأمن الغذائي)",
    nameEn: "India Branch",
    cityAr: "نيودلهي",
    cityEn: "New Delhi",
    countryAr: "جمهورية الهند",
    countryEn: "India",
    phone: "+91 11 4000 5000",
    email: "india@aboelseoud-group.com",
    addressAr: "كونوت بليس، بلوك B، نيودلهي 110001",
    addressEn: "Connaught Place, Block B, New Delhi 110001, India",
    latitude: 31,
    longitude: 69,
    roleAr: "الاستيراد وضبط جودة اللحوم والشحن البحري لمنتجات الأمن الغذائي"
  }
];
