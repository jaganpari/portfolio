import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type Language = 'en' | 'ar';

const ARABIC: Record<string, string> = {
  'Home':'الرئيسية','About Me':'نبذة عني','Skills':'المهارات','Experience':'الخبرة العملية','Projects':'المشاريع','Certifications':'الشهادات','Contact':'تواصل معي',
  "👋 Hello, I'm":'👋 مرحباً، أنا','12 years of experience as a Front-End Developer specializing in Angular, React and AngularJS. Proven expertise in designing, developing, and maintaining scalable, high-performance web applications across the Travel, Video Ad-Tech, Telecom, and Healthcare domains.':'مطور واجهات أمامية بخبرة 12 عاماً، متخصص في Angular وReact وAngularJS. أمتلك خبرة في تصميم وتطوير وصيانة تطبيقات ويب قابلة للتوسع وعالية الأداء في قطاعات السفر والإعلانات المرئية والاتصالات والرعاية الصحية.',
  'Years Experience':'سنوات الخبرة','Dedication':'الالتزام','About Me':'نبذة عني','Hi, I\'m Parivallal':'مرحباً، أنا باريفالال',
  'Senior Front-End Developer with 12 years of experience specializing in Angular, React, AngularJS, TypeScript, JavaScript and modern UI development.':'مطور واجهات أمامية أول بخبرة 12 عاماً، متخصص في Angular وReact وAngularJS وTypeScript وJavaScript وتطوير واجهات المستخدم الحديثة.',
  'I have delivered enterprise applications across Healthcare, Telecom, Video Ad-Tech and Travel domains with a strong focus on performance, maintainability and user experience.':'قدمت تطبيقات مؤسسية في قطاعات الرعاية الصحية والاتصالات والإعلانات المرئية والسفر، مع التركيز على الأداء وسهولة الصيانة وتجربة المستخدم.',
  'Technical Skills':'المهارات التقنية','Frontend Development':'تطوير الواجهات الأمامية','Technologies':'التقنيات','Search Technologies':'ابحث عن التقنيات',
  'Experience':'الخبرة العملية','Featured Projects':'أبرز المشاريع','Certifications':'الشهادات','Certificate Link':'رابط الشهادة','View Certificate':'عرض الشهادة','Completion Date':'تاريخ الإكمال','Course Completed':'الدورة المكتملة','Offered By':'مقدمة من',
  "Let's Work Together":'لنعمل معاً','Contact Information':'معلومات التواصل','Name':'الاسم','Email':'البريد الإلكتروني','Message':'الرسالة','Send Message':'إرسال الرسالة','LinkedIn':'لينكدإن','GitHub':'جيت هب',
  'Senior Front-End Developer':'مطور واجهات أمامية أول','Senior Technical Specialist':'أخصائي تقني أول','Senior Software Developer':'مطور برمجيات أول','Software Engineer Level 2':'مهندس برمجيات - المستوى الثاني','Senior UI Developer':'مطور واجهات مستخدم أول',
  'Developed a dynamic C-SSRS assessment module using Angular Reactive Forms and React Hook Forms.':'طورت وحدة تقييم تفاعلية C-SSRS باستخدام نماذج Angular التفاعلية وReact Hook Form.',
  'Worked Micro Frontend architecture using Nx and Module Federation to manage multiple applications.':'عملت على بنية الواجهات المصغرة باستخدام Nx وModule Federation لإدارة تطبيقات متعددة.',
  'Upgraded application Angular 7 to Angular 14 version.':'قمت بترقية التطبيق من Angular 7 إلى Angular 14.',
  'Refactored legacy code to modern Angular standards in Angular 7.':'أعدت هيكلة الشيفرة القديمة وفق معايير Angular الحديثة باستخدام Angular 7.',
  'Developed Single Page Applications (SPAs) using AngularJS.':'طورت تطبيقات الصفحة الواحدة (SPA) باستخدام AngularJS.',
  'Developed a dynamic C-SSRS assessment module using Angular Reactive Forms.':'طورت وحدة تقييم تفاعلية C-SSRS باستخدام نماذج Angular التفاعلية.',
  'Developed a participant profile module using React Hook Forms.':'طورت وحدة ملفات المشاركين باستخدام React Hook Form.',
  'Fixed UI bugs, consume RESTful APIs services and optimize performance.':'أصلحت أخطاء واجهة المستخدم، وربطت خدمات REST API، وحسّنت الأداء.',
  'Developed a user management module using React 16 and Ant Design.':'طورت وحدة لإدارة المستخدمين باستخدام React 16 وAnt Design.',
  'Name':'الاسم','Email':'البريد الإلكتروني','Message':'الرسالة'
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  readonly language = signal<Language>(this.readSavedLanguage());
  readonly isArabic = computed(() => this.language() === 'ar');
  readonly direction = computed(() => this.isArabic() ? 'rtl' : 'ltr');

  constructor() { this.applyDocumentLanguage(); }

  setLanguage(language: Language): void {
    this.language.set(language);
    try { localStorage.setItem('portfolio-language', language); } catch {}
    this.applyDocumentLanguage();
  }

  toggleLanguage(): void { this.setLanguage(this.isArabic() ? 'en' : 'ar'); }

  translate(value: string): string {
    return this.isArabic() ? (ARABIC[value] ?? value) : value;
  }

  private readSavedLanguage(): Language {
    try { return localStorage.getItem('portfolio-language') === 'ar' ? 'ar' : 'en'; }
    catch { return 'en'; }
  }

  private applyDocumentLanguage(): void {
    this.document.documentElement.lang = this.language();
    this.document.documentElement.dir = this.direction();
  }
}
