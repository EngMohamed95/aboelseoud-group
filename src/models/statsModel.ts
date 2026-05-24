export interface GroupStat {
  id: string;
  targetNumber: number;
  suffix: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
}

export const groupStatsData: GroupStat[] = [
  {
    id: "years",
    targetNumber: 18,
    suffix: "+",
    titleAr: "عاماً من الريادة",
    titleEn: "Years of Leadership",
    descAr: "مسيرة انطلقت بجرأة منذ عام 2008 وتوسعت في شتى بقاع الأرض.",
    descEn: "Journey started with absolute dedication since 2008 across sectors.",
    iconName: "Award"
  },
  {
    id: "employees",
    targetNumber: 5000,
    suffix: "+",
    titleAr: "موظف ومتخصص",
    titleEn: "Employees & Experts",
    descAr: "قوة بشرية وكفاءات هندسية وفنية تقود التميز اليومي.",
    descEn: "Invaluable talent driving day-to-day industrial operations worldwide.",
    iconName: "Users"
  },
  {
    id: "continents",
    targetNumber: 4,
    suffix: "",
    titleAr: "قارات نغطيها",
    titleEn: "Continents Coveraged",
    descAr: "فروع وموانئ وخطوط وسلسلة إمداد تمتد للقارات الأربع الكبرى.",
    descEn: "Marine corridors, ports and partners mapping 4 major global centers.",
    iconName: "Globe"
  },
  {
    id: "capacity",
    targetNumber: 12,
    suffix: " مليون طن+",
    titleAr: "مليون طن سنوياً",
    titleEn: "Million Tons Annually",
    descAr: "حجم نقل وشحن وتصدير سنوي من النفط والمواد الغذائية والأسمنت.",
    descEn: "Volume of petroleum, global proteins & heavy cement delivered yearly.",
    iconName: "TrendingUp"
  }
];
