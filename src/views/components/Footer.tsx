import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Ship, Mail, Phone, MapPin, ShieldCheck, ChevronLeft } from "lucide-react";
import { branchesData } from "../../models/branchesModel";
import { getBrandForPath } from "../../models/brandModel";

export default function Footer() {
  const primaryBranches = branchesData.filter(b => ["egypt", "singapore", "netherlands", "libya"].includes(b.id));
  const location = useLocation();
  const brand = getBrandForPath(location.pathname);

  return (
    <footer
      id="global-footer"
      style={{
        "--brand-primary": brand.primary,
        "--brand-secondary": brand.secondary,
        "--brand-accent": brand.accent,
        "--brand-soft": brand.soft,
      } as React.CSSProperties}
      className="brand-scope bg-slate-50 border-t border-slate-200/80 pt-16 pb-8 relative overflow-hidden"
    >
      {/* Absolute Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Short Introduction */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div
                className="flex h-20 w-[300px] items-center justify-center overflow-visible"
                style={{ filter: `drop-shadow(0 8px 18px ${brand.primary}14)` }}
              >
                <img src={brand.logo} alt="Abo El-Seoud Group" className="max-h-20 max-w-[290px] object-contain" />
              </div>
              <div className="hidden">
              <div className="p-2 bg-white border border-slate-200 rounded-lg">
                <Ship className="h-6 w-6 text-gold-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg text-slate-900">أبو السعود جروب</span>
                <span className="text-[10px] font-mono tracking-wider text-gold-600 font-bold">ABO EL-SEOUD GROUP</span>
              </div>
              </div>
            </div>

            <p className="text-slate-605 text-sm leading-relaxed font-semibold">
              ريادة الاستثمارات الدولية وتأمين سلاسل الإمداد اللوجستية، الأمن الغذائي، ومواد البناء من القارات الاستراتيجية بجودة وكفاءة عالمية منذ عام 2008.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                <Phone className="h-4 w-4 text-gold-600 shrink-0" />
                <span dir="ltr">+20 2 2400 5500</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                <Mail className="h-4 w-4 text-gold-600 shrink-0" />
                <span>info@aboelseoud-group.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-bold">
                <ShieldCheck className="h-4 w-4 text-gold-600 shrink-0" />
                <span>مجموعة معتمدة دولياً (ISO & IMO)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-slate-900 font-extrabold text-base mb-6 pb-2 border-b-2 border-gold-500/30 inline-block">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { label: "الصفحة الرئيسية", to: "/" },
                { label: "من نحن وسياساتنا", to: "/about" },
                { label: "قطاع النقل البحري", to: "/sectors/maritime" },
                { label: "قطاع استيراد اللحوم", to: "/sectors/meat" },
                { label: "قطاع تصدير الأسمنت", to: "/sectors/cement" },
                { label: "إدارة الصحة والسلامة HSE", to: "/hse" },
                { label: "اتصل بمكاتبنا العالمية", to: "/contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-slate-600 hover:text-gold-600 text-sm flex items-center gap-1.5 transition-colors duration-200 group font-semibold"
                  >
                    <ChevronLeft className="h-3.5 w-3.5 text-gold-600 group-hover:translate-x-[-4px] transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Main Industrial Holdings */}
          <div>
            <h3 className="text-slate-900 font-extrabold text-base mb-6 pb-2 border-b-2 border-gold-500/30 inline-block">
              الشركات الشقيقة والقطاعات
            </h3>
            <ul className="space-y-4 text-right">
              <li>
                <div className="text-[10px] text-gold-600 font-mono font-bold">EST. 2008</div>
                <Link to="/sectors/maritime" className="text-sm text-slate-805 hover:text-gold-600 font-extrabold block">
                  Abo El-Seoud Maritime Transport
                </Link>
                <p className="text-xs text-slate-500 mt-0.5 font-semibold">النقل والتموين والملاحة للمواد النفطية.</p>
              </li>
              <li>
                <div className="text-[10px] text-gold-600 font-mono font-bold">EST. 2012</div>
                <Link to="/sectors/meat" className="text-sm text-slate-805 hover:text-gold-600 font-extrabold block">
                  Al-Alamiya for Meat Import
                </Link>
                <p className="text-xs text-slate-500 mt-0.5 font-semibold">تأمين موارد ومخازن الأمن الغذائي حلال.</p>
              </li>
              <li>
                <div className="text-[10px] text-gold-600 font-mono font-bold">EST. 2015</div>
                <Link to="/sectors/cement" className="text-sm text-slate-805 hover:text-gold-600 font-extrabold block">
                  Gabal for Cement Export
                </Link>
                <p className="text-xs text-slate-500 mt-0.5 font-semibold">تطوير وخلط وتصدير المواد الإنشائية لليبيا.</p>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Headquarters & Key Branches */}
          <div>
            <h3 className="text-slate-900 font-extrabold text-base mb-6 pb-2 border-b-2 border-gold-500/30 inline-block">
              المكاتب الإقليمية النشطة
            </h3>
            <div className="space-y-4">
              {primaryBranches.map((branch) => (
                <div key={branch.id} className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <span className="text-xs font-bold text-slate-900 block">{branch.nameAr}</span>
                  <div className="flex gap-1.5 mt-1 items-start text-xs text-slate-500 font-semibold">
                    <MapPin className="h-3.5 w-3.5 text-gold-600 shrink-0 mt-0.5" />
                    <span>{branch.addressAr}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footnotes & Legal compliance bar */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans font-semibold">
          <div className="flex items-center gap-2">
            <span className="text-gold-600 font-bold">© {new Date().getFullYear()}</span>
            <span>مجموعة أبو السعود جروب الاستثمارية. جميع الحقوق محفوظة قانوناً.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/hse" className="hover:text-gold-600">سياسة الخصوصية البيئية</Link>
            <Link to="/about" className="hover:text-gold-600">الرؤية الكوربوريت</Link>
            <span className="text-gold-600 tracking-wider font-mono font-bold">ESTABLISHED IN 2008</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
