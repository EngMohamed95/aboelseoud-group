export interface ContactSubmission {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export class ContactController {
  /**
   * Validates contact form submission
   */
  static validate(data: ContactSubmission): { isValid: boolean; errors: Partial<Record<keyof ContactSubmission, string>> } {
    const errors: Partial<Record<keyof ContactSubmission, string>> = {};

    if (!data.name.trim()) {
      errors.name = "يرجى إدخال اسمك الكريم أو اسم جهة الاتصال.";
    }

    if (!data.email.trim()) {
      errors.email = "يرجى تحديد بريد إلكتروني صالح للمراسلة.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "صيغة البريد الإلكتروني غير صحيحة، يرجى مراجعتها.";
    }

    if (!data.phone.trim()) {
      errors.phone = "رقم الهاتف ضروري لتسهيل مكالمة المتابعة.";
    }

    if (!data.serviceType) {
      errors.serviceType = "يرجى تحديد قطاع الاهتمام الرئيسي.";
    }

    if (!data.message.trim() || data.message.length < 10) {
      errors.message = "يرجى كتابة تفاصيل الاستفسار أو طلب عرض الأسعار (10 أحرف على الأقل).";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }

  /**
   * Simulates a secure server-side message intake
   */
  static async submitMessage(data: ContactSubmission): Promise<{ success: boolean; messageId: string; messageAr: string }> {
    return new Promise((resolve) => {
      // Artificially delay to show premium high-end loading animations
      setTimeout(() => {
        const messageId = "ABG-" + Math.floor(100000 + Math.random() * 900000);
        resolve({
          success: true,
          messageId,
          messageAr: `شكراً لتواصلك مع مجموعة أبو السعود جروب، تم تسجيل طلبك بنجاح تحت مرجع رقم ${messageId}. سيقوم المستشار اللوجستي المعين بالرد على مراسلتك خلال 24 ساعة عمل.`
        });
      }, 1200);
    });
  }
}
