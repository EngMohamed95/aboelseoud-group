import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertTriangle, RefreshCw } from "lucide-react";
import { ContactController, ContactSubmission } from "../../controllers/contactController";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "maritime", // default
    message: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactSubmission, string>>>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for that field immediately
    if (errors[name as keyof ContactSubmission]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate submission via MVC Controller
    const { isValid, errors: validationErrors } = ContactController.validate(formData);
    
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await ContactController.submitMessage(formData);
      if (response.success) {
        setSuccessMsg(response.messageAr);
        // Clear Form inputs
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          serviceType: "maritime",
          message: ""
        });
      }
    } catch (err) {
      setErrors({ message: "حدث خطأ غير متوقع أثناء الإرسال. يرجى المحاولة لاحقاً." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form-component" className="bg-white border border-slate-200/80 p-6 sm:p-10 rounded-2xl shadow-xl shadow-slate-200/35 relative">
      {/* Decorative Golden top underline */}
      <div className="absolute top-0 left-10 w-28 h-1 bg-gradient-to-r from-gold-600 to-gold-400" />
      
      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
        طلب استشاري لوجستي وعروض أسعار
      </h3>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed font-semibold">
        يرجى ملء النموذج أدناه بدقة. سيحصل طلبكم مباشرة على الاهتمام من الإدارة العليا ومجلس التوريد المعني لتجهيز عرض السعر الأنسب لمتطلبات شركتكم.
      </p>

      {successMsg ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex flex-col items-center text-center space-y-4"
        >
          <CheckCircle2 className="h-14 w-14 text-emerald-600 animate-bounce" />
          <div>
            <h4 className="text-lg font-bold text-emerald-600">تم تسجيل طلبكم بنجاح</h4>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {successMsg}
            </p>
          </div>
          <button
            onClick={() => setSuccessMsg(null)}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition"
          >
            إرسال استفسار آخر
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Input Name */}
            <div>
              <label htmlFor="name-input" className="block text-xs font-bold text-slate-700 mb-2">
                الاسم الكريم / ممثل الجهة *
              </label>
              <input
                id="name-input"
                name="name"
                type="text"
                placeholder="مثال: م. محمد المكتوم"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full bg-slate-50 border text-slate-950 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:bg-white transition-all shadow-inner ${
                  errors.name ? "border-amber-500" : "border-slate-200"
                }`}
              />
              {errors.name && (
                <span className="text-[11px] text-amber-500 block mt-1.5 flex items-center gap-1">
                  <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> {errors.name}
                </span>
              )}
            </div>

            {/* Input Company */}
            <div>
              <label htmlFor="company-input" className="block text-xs font-bold text-slate-700 mb-2">
                اسم الشركة أو المؤسسة
              </label>
              <input
                id="company-input"
                name="company"
                type="text"
                placeholder="مثال: الشركة المتكاملة للطاقة"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 text-slate-950 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:bg-white transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Input Email */}
            <div>
              <label htmlFor="email-input" className="block text-xs font-bold text-slate-700 mb-2">
                البريد الإلكتروني التجاري *
              </label>
              <input
                id="email-input"
                name="email"
                type="email"
                placeholder="corporate@domain.com"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full bg-slate-50 border text-slate-950 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:bg-white transition-all shadow-inner ${
                  errors.email ? "border-amber-500" : "border-slate-200"
                }`}
              />
              {errors.email && (
                <span className="text-[11px] text-amber-500 block mt-1.5 flex items-center gap-1">
                  <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> {errors.email}
                </span>
              )}
            </div>

            {/* Input Phone */}
            <div>
              <label htmlFor="phone-input" className="block text-xs font-bold text-slate-700 mb-2">
                رقم الهاتف (مع مفتاح البلد) *
              </label>
              <input
                id="phone-input"
                name="phone"
                type="text"
                placeholder="مثال: +20 12345 67890"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full bg-slate-50 border text-slate-950 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:bg-white transition-all shadow-inner ${
                  errors.phone ? "border-amber-500" : "border-slate-200"
                }`}
              />
              {errors.phone && (
                <span className="text-[11px] text-amber-500 block mt-1.5 flex items-center gap-1">
                  <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> {errors.phone}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Sector Category */}
            <div>
              <label htmlFor="sector-type-select" className="block text-xs font-bold text-slate-700 mb-2">
                القطاع المعني بالطلب *
              </label>
              <select
                id="sector-type-select"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 text-slate-950 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:bg-white transition-all shadow-inner"
              >
                <option value="maritime">أبو السعود للنقل البحري للمواد البترولية</option>
                <option value="meat">العالمية لاستيراد اللحوم والغذائيات والأمن الغذائي</option>
                <option value="cement">شركة جبل لتصنيع وتصدير الأسمنت ومواد البناء</option>
                <option value="partnership">طلب شراكة استراتيجية وتأسيس فروع</option>
              </select>
            </div>

            {/* Message Details */}
            <div>
              <label htmlFor="message-area" className="block text-xs font-bold text-slate-700 mb-2">
                تفاصيل الرسالة ومستلزمات الطلب *
              </label>
              <textarea
                id="message-area"
                name="message"
                rows={5}
                placeholder="اكتب هنا مواصفات الشحنة، الحجم المطلوب، الميناء المقصود، أو تفاصيل العقد..."
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full bg-slate-50 border text-slate-950 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:bg-white transition-all shadow-inner ${
                  errors.message ? "border-amber-500" : "border-slate-200"
                }`}
              />
              {errors.message && (
                <span className="text-[11px] text-amber-500 block mt-1.5 flex items-center gap-1">
                  <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> {errors.message}
                </span>
              )}
            </div>
          </div>

          {/* Prompt Notice */}
          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            * بالضغط على إرسال الطلب، توافق على مشاركة البيانات المدخلة مع الإدارة القانونية وهيئة الفروع بمجموعة أبو السعود لربط الاتصال التجاري بصفة رسمية.
          </p>

          {/* Submit btn */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-extrabold text-sm tracking-wide rounded-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin" />
                جاري مراجعة المدخلات وتسجيل الرمز المرجعي...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                إرسال الطلب رسمياً للإدارة العامة
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
