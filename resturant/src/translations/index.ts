import type { Language } from '../types';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'Story',
    'nav.gallery': 'Gallery',
    'nav.chef': 'The Chef',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.reserve': 'Reserve a Table',

    // Hero
    'hero.badge': 'Michelin Standard Fine Dining',
    'hero.title': 'LUNA RESTAURANT',
    'hero.tagline': 'An unforgettable dining experience.',
    'hero.description': 'Where seasonal artisanal gastronomy meets extraordinary atmosphere in the heart of the city.',
    'hero.cta.primary': 'Reserve a Table',
    'hero.cta.secondary': 'Explore Menu',
    'hero.scroll': 'Scroll to discover',

    // Intro Section
    'intro.subtitle': 'OUR PHILOSOPHY',
    'intro.title': 'Where flavor meets atmosphere',
    'intro.paragraph1': 'At Luna, we believe dining should transcend the meal. Every plate is crafted as an homage to seasonal purity, blending classical techniques with imaginative contemporary artistry.',
    'intro.paragraph2': 'From hand-picked heirloom produce to sustainably sourced prime meats and seafood, our kitchen honors the purity of every ingredient under the gentle warmth of ambient lighting.',
    'intro.stat1.number': '12+',
    'intro.stat1.label': 'Years of Culinary Mastery',
    'intro.stat2.number': '30+',
    'intro.stat2.label': 'Artisanal Signature Dishes',
    'intro.stat3.number': '4.9',
    'intro.stat3.label': 'Guest Rating Excellence',

    // Signature Menu
    'menu.subtitle': 'CULINARY CREATIONS',
    'menu.title': 'Signature Menu',
    'menu.description': 'Curated selections crafted by Chef Adrian Vale, pairing rare ingredients with visionary flavor compositions.',
    'menu.filter.all': 'All Dishes',
    'menu.filter.starters': 'Starters',
    'menu.filter.mains': 'Main Courses',
    'menu.filter.desserts': 'Desserts',
    'menu.filter.drinks': 'Artisanal Beverages',
    'menu.price.currency': '$',

    // Full Menu Section
    'fullmenu.subtitle': 'THE COMPLETE OFFERING',
    'fullmenu.title': 'Full Dining Menu',
    'fullmenu.description': 'Browse our comprehensive seasonal dining and pairings menu.',

    // About Section
    'about.subtitle': 'HERITAGE & VISION',
    'about.title': 'The story behind Luna',
    'about.text1': 'Founded in 2012, Luna was born from a desire to create a sanctuary where time slows down and culinary passion takes center stage.',
    'about.text2': 'Our name pays tribute to the celestial elegance of evening dining—a moment when conversation flows, wine sparkles, and flavors leave a lingering impression.',
    'about.disclaimer': '*Fictional portfolio presentation details.',

    // Chef Section
    'chef.subtitle': 'THE MASTERMIND',
    'chef.title': 'Chef Adrian Vale',
    'chef.role': 'Executive Culinary Director',
    'chef.bio': 'With over 18 years in world-renowned Michelin-starred kitchens across Europe and North America, Chef Adrian Vale brings an unwavering commitment to ingredient purity and culinary invention.',
    'chef.quote': '"True luxury is not complexity; it is the perfect harmony of pure flavors, immaculate texture, and genuine warmth."',

    // Gallery
    'gallery.subtitle': 'VISUAL JOURNEY',
    'gallery.title': 'The Atmosphere & Dishes',
    'gallery.description': 'An editorial glance into our dining hall, kitchen artistry, and private lounges.',
    'gallery.lightbox.close': 'Close Lightbox',
    'gallery.lightbox.prev': 'Previous Image',
    'gallery.lightbox.next': 'Next Image',

    // Testimonials
    'reviews.subtitle': 'GUEST EXPERIENCES',
    'reviews.title': 'Reflections from Our Guests',

    // Reservation Form
    'reservation.subtitle': 'YOUR TABLE AWAITS',
    'reservation.title': 'Make a Reservation',
    'reservation.description': 'Select your preferred date, time, and dining room preference. We look forward to hosting you.',
    'reservation.label.name': 'Full Name',
    'reservation.label.email': 'Email Address',
    'reservation.label.phone': 'Phone Number',
    'reservation.label.date': 'Date',
    'reservation.label.time': 'Time',
    'reservation.label.guests': 'Number of Guests',
    'reservation.label.seating': 'Seating Preference',
    'reservation.label.special': 'Special Requests (Optional)',
    'reservation.seating.main': 'Main Dining Hall',
    'reservation.seating.terrace': 'Moonlight Terrace',
    'reservation.seating.chefs_table': 'Chef’s Counter',
    'reservation.seating.private_dining': 'Private Dining Suite',
    'reservation.button.submit': 'Confirm Reservation',
    'reservation.button.submitting': 'Processing Request...',
    'reservation.success.title': 'Reservation Received',
    'reservation.success.message': 'Thank you! Your table request has been logged successfully. We look forward to welcoming you.',
    'reservation.success.close': 'Close',
    'reservation.error.required': 'This field is required',
    'reservation.error.email': 'Please enter a valid email address',
    'reservation.error.phone': 'Please enter a valid phone number',
    'reservation.error.date': 'Please select a future date',

    // Contact
    'contact.subtitle': 'LOCATION & HOURS',
    'contact.title': 'Visit Luna Restaurant',
    'contact.address.label': 'Location',
    'contact.address.val': '123 Moonlight Avenue, Fine District',
    'contact.hours.label': 'Operating Hours',
    'contact.hours.mon_thu': 'Mon – Thu: 5:00 PM – 11:00 PM',
    'contact.hours.fri_sat': 'Fri – Sat: 5:00 PM – 12:00 AM',
    'contact.hours.sun': 'Sunday: 4:00 PM – 10:00 PM',
    'contact.phone.label': 'Direct Inquiries',
    'contact.email.label': 'Email Desk',
    'contact.map.title': 'Interactive Map',
    'contact.map.directions': 'Get Directions',

    // Footer
    'footer.tagline': 'An unforgettable dining experience.',
    'footer.newsletter.title': 'Privileged Updates',
    'footer.newsletter.desc': 'Subscribe to receive invitations to private tastings and seasonal menu unveilings.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.button': 'Subscribe',
    'footer.newsletter.success': 'Thank you for joining our private circle.',
    'footer.copyright': '© 2026 Luna Restaurant. All rights reserved. Portfolio Demonstration Project.',

    // Common Accessibility
    'a11y.langSwitch': 'Switch Language to Arabic',
    'a11y.menuOpen': 'Open Navigation Menu',
    'a11y.menuClose': 'Close Navigation Menu',
    'a11y.scrollToTop': 'Scroll to top of page',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.menu': 'قائمة الطعام',
    'nav.about': 'قصتنا',
    'nav.gallery': 'المعرض',
    'nav.chef': 'الطاهي التنفيذي',
    'nav.reviews': 'آراء الضيوف',
    'nav.contact': 'التواصل',
    'nav.reserve': 'حجز طاولة',

    // Hero
    'hero.badge': 'تجربة طعام فاخرة بمعايير عالمية',
    'hero.title': 'مطعم لونا',
    'hero.tagline': 'تجربة طعام لا تُنسى.',
    'hero.description': 'حيث يلتقي الشغف بالطهي الفاخر مع الأجواء الساحرة في قلب المدينة.',
    'hero.cta.primary': 'احجز طاولتك الآن',
    'hero.cta.secondary': 'استكشف القائمة',
    'hero.scroll': 'انزل للاكتشاف',

    // Intro Section
    'intro.subtitle': 'فلسفتنا',
    'intro.title': 'حيث يلتقي المذاق بالأجواء الساحرة',
    'intro.paragraph1': 'في مطعم لونا، نؤمن بأن تناول الطعام يتجاوز مجرد وجبة. كل طبق يُصاغ كلوحة فنية تحتفي بالطزاجة الموسمية، ممتزجةً بالتقنيات الكلاسيكية والابتكار العصري.',
    'intro.paragraph2': 'من المحاصيل العضوية المجهزة بدقة إلى أجود أنواع اللحوم والمأكولات البحرية الطازجة، نمنح كل مكوّن اهتماماً فائقاً تحت إضاءة دافئة وأجواء غنية بالرقي.',
    'intro.stat1.number': '+١٢',
    'intro.stat1.label': 'عاماً من التميز في الطهي',
    'intro.stat2.number': '+٣٠',
    'intro.stat2.label': 'طبقاُ حصرياً مبتكراً',
    'intro.stat3.number': '٤.٩',
    'intro.stat3.label': 'تقييم الضيوف المتميز',

    // Signature Menu
    'menu.subtitle': 'ابتكارات الطهي',
    'menu.title': 'الأطباق الخاصة',
    'menu.description': 'تشكيلة مختارة بعناية من إعداد الشيف أدريان فيل، تجمع بين المكونات النادرة والنكهات الفريدة.',
    'menu.filter.all': 'جميع الأطباق',
    'menu.filter.starters': 'المقبلات',
    'menu.filter.mains': 'الأطباق الرئيسية',
    'menu.filter.desserts': 'الحلويات',
    'menu.filter.drinks': 'المشروبات الفاخرة',
    'menu.price.currency': '$',

    // Full Menu Section
    'fullmenu.subtitle': 'العروض الكاملة',
    'fullmenu.title': 'قائمة الطعام الشاملة',
    'fullmenu.description': 'استعرض قائمتنا الموسمية الكاملة مع تشكيلة المشروبات المتناغمة.',

    // About Section
    'about.subtitle': 'التاريخ والرؤية',
    'about.title': 'قصة مطعم لونا',
    'about.text1': 'تأسس مطعم لونا عام ٢٠١٢ برغبة صادقة في ابتكار ملاذ هادئ يتباطأ فيه الزمن ليفسح المجال لشغف الطهي الرفيع.',
    'about.text2': 'يستمد اسمنا الهاماً من أناقة القمر والليالي الساحرة—لحظات تتدفق فيها الأحاديث الدافئة، وتتألق الأجواء بنكهات تترك انطباعاً خالداً.',
    'about.disclaimer': '*بيانات نموذج عرض مخصصة للملف الشخصي.',

    // Chef Section
    'chef.subtitle': 'العقل المبدع',
    'chef.title': 'الشيف أدريان فيل',
    'chef.role': 'المدير التنفيذي لفنون الطهي',
    'chef.bio': 'بخبرة تمتد لأكثر من ١٨ عاماً في أشهر مطاعم ميشلان عبر أوروبا وشمال أمريكا، يمتلك الشيف أدريان فيل التزاماً راسخاً بأصالة المكونات والابتكار الفني.',
    'chef.quote': '"الفخامة الحقيقية ليست في التعقيد؛ بل في التناغم التام بين النكهات الخالصة والتفاصيل الدافئة."',

    // Gallery
    'gallery.subtitle': 'رحلة بصرية',
    'gallery.title': 'الأجواء والأطباق',
    'gallery.description': 'نظرة شائقة على صالات الطعام، فنون المطبخ، والأجواء الخاصة.',
    'gallery.lightbox.close': 'إغلاق المعرض',
    'gallery.lightbox.prev': 'الصورة السابقة',
    'gallery.lightbox.next': 'الصورة التالية',

    // Testimonials
    'reviews.subtitle': 'انطباعات الضيوف',
    'reviews.title': 'ما يقوله زوارنا',

    // Reservation Form
    'reservation.subtitle': 'طاولتك بانتظارك',
    'reservation.title': 'حجز طاولة',
    'reservation.description': 'اختر التاريخ والوقت وتفضيلات الصالة المناسبة لك. نتطلع لاستضافتك في مطعم لونا.',
    'reservation.label.name': 'الاسم الكامل',
    'reservation.label.email': 'البريد الإلكتروني',
    'reservation.label.phone': 'رقم الهاتف',
    'reservation.label.date': 'التاريخ',
    'reservation.label.time': 'الوقت',
    'reservation.label.guests': 'عدد الضيوف',
    'reservation.label.seating': 'تفضيل الصالة',
    'reservation.label.special': 'طلبات خاصة (اختياري)',
    'reservation.seating.main': 'صالة الطعام الرئيسية',
    'reservation.seating.terrace': 'تراس ضوء القمر',
    'reservation.seating.chefs_table': 'طاولة الشيف الخاصة',
    'reservation.seating.private_dining': 'جناح الضيافة الخاص',
    'reservation.button.submit': 'تأكيد طلب الحجز',
    'reservation.button.submitting': 'جاري معالجة الطلب...',
    'reservation.success.title': 'تم استلام طلب الحجز',
    'reservation.success.message': 'شكراً لك! تم تسجيل طلب الحجز بنجاح. يسعدنا استقبالكم قريباً.',
    'reservation.success.close': 'إغلاق',
    'reservation.error.required': 'هذا الحقل مطلوب',
    'reservation.error.email': 'يرجى إدخال بريد إلكتروني صحيح',
    'reservation.error.phone': 'يرجى إدخال رقم هاتف صحيح',
    'reservation.error.date': 'يرجى اختيار تاريخ مستقبلي',

    // Contact
    'contact.subtitle': 'الموقع وساعات العمل',
    'contact.title': 'قم بزيارة مطعم لونا',
    'contact.address.label': 'العنوان',
    'contact.address.val': '١٢٣ شارع جادة القمر، الحي الفاخر',
    'contact.hours.label': 'ساعات العمل',
    'contact.hours.mon_thu': 'الإثنين – الخميس: ٥:٠٠ مساءً – ١١:٠٠ مساءً',
    'contact.hours.fri_sat': 'الجمعة – السبت: ٥:٠٠ مساءً – ١٢:٠0 منتصف الليل',
    'contact.hours.sun': 'الأحد: ٤:٠٠ مساءً – ١٠:٠٠ مساءً',
    'contact.phone.label': 'الاستفسارات المباشرة',
    'contact.email.label': 'مكتب البريد',
    'contact.map.title': 'خريطة التفاعل',
    'contact.map.directions': 'الحصول على الاتجاهات',

    // Footer
    'footer.tagline': 'تجربة طعام لا تُنسى.',
    'footer.newsletter.title': 'تحديثات فاخرة',
    'footer.newsletter.desc': 'اشترك لتلقي دعوات خاصة لتذوق الأطباق الموسمية الجديدة.',
    'footer.newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'footer.newsletter.button': 'اشتراك',
    'footer.newsletter.success': 'شكراً لانضمامك إلى مجتمعنا الخاص.',
    'footer.copyright': '© ٢٠٢٦ مطعم لونا. جميع الحقوق محفوظة. مشروع للعرض والتوضيح.',

    // Common Accessibility
    'a11y.langSwitch': 'التحويل إلى اللغة الإنجليزية',
    'a11y.menuOpen': 'فتح قائمة التصفح',
    'a11y.menuClose': 'إغلاق قائمة التصفح',
    'a11y.scrollToTop': 'الرجوع إلى أعلى الصفحة',
  }
};
