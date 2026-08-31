import type { ServiceCatalog } from './types'

export const HOME_CATALOG: ServiceCatalog = {
  slug: 'home-elevators',
  hero: {
    title: { en: 'Home Elevators', ar: 'مصاعد المنازل' },
    subtitle: {
      en: 'GRV20 — preference for smart home',
      ar: 'GRV20 — الخيار المفضل للمنزل الذكي',
    },
    badge: 'GRV20',
    image: '/assets/images/about-cabin.webp',
    imageAlt: {
      en: 'SRH home elevator cabin for private villas',
      ar: 'مقصورة مصعد منزلي من SRH للفلل الخاصة',
    },
  },
  overview: {
    heading: { en: 'Sicher Elevator', ar: 'شركة سيشر للمصاعد' },
    text: {
      en: 'Sicher Elevator Co., Ltd. is a comprehensive elevator manufacturing service provider engaging in the development, manufacturing, sales, installation, maintenance and modern renewal and transformation of elevators, and holds the national highest-level production license for special equipment (A1). After listing on the growth enterprise market of the Shenzhen Stock Exchange in September 2021 (Stock Code: 301056), Sicher became one of the top 10 Chinese elevator manufacturers. For nearly 20 years it has taken "all for safe reach" as its core philosophy, and its products have been exported to over 80 countries and regions.',
      ar: 'شركة سيشر للمصاعد مزود خدمة تصنيع متكامل يشمل التطوير والتصنيع والبيع والتركيب والصيانة والتحديث المصاعدي، وتحمل أعلى رخصة إنتاج وطنية للمعدات الخاصة (A1). بعد إدراجها في سوق النمو ببورصة شنتشن في سبتمبر 2021 (رمز السهم: 301056)، أصبحت سيشر ضمن أفضل 10 شركات مصاعد صينية. منذ قرابة 20 عاماً وتبنّت "الوصول الآمن" فلسفة أساسية لها، وصُدِّرت منتجاتها إلى أكثر من 80 دولة ومنطقة.',
    },
    highlightsHeading: {
      en: 'Science and technology leading advance with glory',
      ar: 'ريادة العلم والتقنية بامتياز',
    },
    highlights: [
      {
        en: 'Top 10 Chinese elevator manufacturers for three consecutive years',
        ar: 'ضمن أفضل 10 شركات مصاعد صينية لثلاث سنوات متتالية',
      },
      {
        en: 'Products exported to over 80 countries and regions',
        ar: 'منتجات مُصدَّرة إلى أكثر من 80 دولة ومنطقة',
      },
      {
        en: 'Top 10 elevator supplier in national government purchases for eight consecutive years',
        ar: 'من أفضل 10 موردي مصاعد في المشتريات الحكومية لثماني سنوات متتالية',
      },
      {
        en: 'Core technology won the Science and Technology Advancement Award of Zhejiang Province',
        ar: 'حصلت التقنية الأساسية على جائزة التقدم العلمي والتقني لمقاطعة تشجيانغ',
      },
      {
        en: 'Drafted over 40 national and industrial elevator standards',
        ar: 'شاركت في إعداد أكثر من 40 معياراً وطنياً وصناعياً للمصاعد',
      },
      {
        en: 'Won the Engineering Award of Elevator World; listed in Shanghai China Records',
        ar: 'فازت بجائزة هندسة مجلة Elevator World ومدرجة في أرقام شنغهاي القياسية',
      },
      {
        en: 'Owns a modern German elevator manufacturing factory',
        ar: 'تمتلك مصنعاً ألمانياً حديثاً لتصنيع المصاعد',
      },
      {
        en: 'A five-star enterprise undertaking social responsibility in China',
        ar: 'مؤسسة خمس نجوم تتبنى المسؤولية الاجتماعية في الصين',
      },
    ],
  },
  safety: {
    heading: { en: 'Safety System', ar: 'نظام السلامة' },
    intro: {
      en: 'Standard safety functions protect every family member on each ride — comfort and security at home.',
      ar: 'وظائف السلامة القياسية تحمي كل أفراد الأسرة في كل رحلة — راحة وأمان داخل المنزل.',
    },
    features: [
      {
        title: { en: 'Photocell protection', ar: 'الحماية الضوئية' },
        text: {
          en: 'During door opening and closing, infrared light covering the whole door height detects passengers and objects.',
          ar: 'أثناء فتح الباب وإغلاقه، يرصد الضوء تحت الأحمر المغطي لكامل ارتفاع الباب الركاب والأجسام.',
        },
      },
      {
        title: { en: 'Overload holding stop', ar: 'التوقف عند الحمل الزائد' },
        text: {
          en: 'When the car is overloaded the buzzer rings and the elevator stays stopped on the same floor.',
          ar: 'عند زيادة الحمل عن الحد المسموح يرن جرس التنبيه ويبقى المصعد متوقفاً في نفس الطابق.',
        },
      },
      {
        title: { en: 'Upward overspeed protection', ar: 'حماية السرعة الزائدة الصاعدة' },
        text: {
          en: 'Slows down or stops the elevator automatically when upward speed exceeds 1.2 times the rated speed.',
          ar: 'يبطئ أو يوقف المصعد تلقائياً عندما تتجاوز سرعة الصعود 1.2 مرة من السرعة المقننة.',
        },
      },
      {
        title: { en: 'Downside overspeed protection', ar: 'حماية السرعة الزائدة الهابطة' },
        text: {
          en: 'At 1.2 times rated speed control power is cut off; at 1.4 times the safety gear forces the elevator to stop.',
          ar: 'عند 1.2 مرة من السرعة المقننة يُقطع التيار التحكمي؛ وعند 1.4 مرة تعمل مكابح الأمان لإيقاف المصعد قسراً.',
        },
      },
      {
        title: { en: 'Emergency car lighting', ar: 'إضاءة طوارئ المقصورة' },
        text: {
          en: 'Emergency lighting inside the car activates automatically once power failure occurs.',
          ar: 'تعمل إضاءة الطوارئ داخل المقصورة تلقائياً عند حدوث انقطاع التيار.',
        },
      },
      {
        title: { en: 'Emergency bell', ar: 'جرس الطوارئ' },
        text: {
          en: 'In emergency conditions, continuously pressing the bell button rings an electric bell on top of the car.',
          ar: 'في حالات الطوارئ، يؤدي الضغط المستمر على زر الجرس إلى رن جرس كهربائي أعلى المقصورة.',
        },
      },
    ],
  },
  products: {
    heading: { en: 'Driving Modes', ar: 'أنظمة القيادة' },
    image: '/assets/images/future-1-800.webp',
    imageAlt: {
      en: 'GRV20 home elevator driving technology',
      ar: 'تقنية قيادة المصعد المنزلي GRV20',
    },
    models: [
      {
        id: 'grv20-ii',
        name: { en: 'Classical Traction Type (GRV20-II)', ar: 'نوع الجرّ الكلاسيكي (GRV20-II)' },
        tagline: { en: 'Unbiased loading design · smooth and comfortable ride', ar: 'تصميم تحميل متوازن · رحلة سلسة ومريحة' },
        footnote: {
          en: '* Details should be based on the drawings confirmed by both parties',
          ar: '* التفاصيل تخضع للرسومات المعتمدة من الطرفين',
        },
        specs: [
          { label: { en: 'Rated speed (m/s)', ar: 'السرعة المقننة (م/ث)' }, value: '0.4' },
          { label: { en: 'Traveling height (m)', ar: 'ارتفاع الانتقال (م)' }, value: '≤ 12' },
          { label: { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' }, value: '260 – 400' },
          { label: { en: 'Persons', ar: 'الأشخاص' }, value: '3 – 5' },
          { label: { en: 'Car size W×D (mm)', ar: 'المقصورة ع×ع (مم)' }, value: '800×1200 – 1000×1200' },
          { label: { en: 'Car height (mm)', ar: 'ارتفاع المقصورة (مم)' }, value: '2200' },
          { label: { en: 'Hoistway size (mm)', ar: 'مقاس البئر (مم)' }, value: '1500×1600 – 1700×1600' },
          { label: { en: 'Overhead (mm)', ar: 'الارتفاع العلوي (مم)' }, value: '3000' },
          { label: { en: 'Pit depth (mm)', ar: 'عمق الحفرة (مم)' }, value: '400' },
          { label: { en: 'Door opening (mm)', ar: 'فتحة الباب (مم)' }, value: '700×2000 – 800×2000' },
          {
            label: { en: 'Door opening mode', ar: 'وضع فتح الباب' },
            value: 'Auto center opening (auto side opening alternative)',
          },
          {
            label: { en: 'Power supply', ar: 'التغذية الكهربائية' },
            value: 'Single-phase 220V / three-phase 380V',
          },
          {
            label: { en: 'Structure', ar: 'الهيكل' },
            value: 'Bolt-connected site structure for convenient installation and maintenance',
          },
        ],
      },
      {
        id: 'grv20-v',
        name: { en: 'Steel Belt Traction Type (GRV20-V)', ar: 'نوع الجرّ بالحزام الفولاذي (GRV20-V)' },
        tagline: { en: 'Lower pit depth & overhead requirements · flexible layout', ar: 'متطلبات أقل للحفرة والارتفاع العلوي · تخطيط مرن' },
        footnote: {
          en: '* Details should be based on the drawings confirmed by both parties',
          ar: '* التفاصيل تخضع للرسومات المعتمدة من الطرفين',
        },
        specs: [
          { label: { en: 'Rated speed (m/s)', ar: 'السرعة المقننة (م/ث)' }, value: '0.4' },
          { label: { en: 'Traveling height (m)', ar: 'ارتفاع الانتقال (م)' }, value: '≤ 12' },
          { label: { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' }, value: '260 – 400' },
          { label: { en: 'Persons', ar: 'الأشخاص' }, value: '3 – 5' },
          { label: { en: 'Car size W×D (mm)', ar: 'المقصورة ع×ع (مم)' }, value: '850×1200 – 1050×1200' },
          { label: { en: 'Car height (mm)', ar: 'ارتفاع المقصورة (مم)' }, value: '2200' },
          { label: { en: 'Hoistway size (mm)', ar: 'مقاس البئر (مم)' }, value: '1500×1600 – 1700×1600' },
          { label: { en: 'Overhead (mm)', ar: 'الارتفاع العلوي (مم)' }, value: '2900' },
          { label: { en: 'Pit depth (mm)', ar: 'عمق الحفرة (مم)' }, value: '300' },
          { label: { en: 'Door opening (mm)', ar: 'فتحة الباب (مم)' }, value: '700×2000 – 800×2000' },
          {
            label: { en: 'Door opening mode', ar: 'وضع فتح الباب' },
            value: 'Auto center opening (auto side opening alternative)',
          },
          {
            label: { en: 'Power supply', ar: 'التغذية الكهربائية' },
            value: 'Single-phase 220V / three-phase 380V',
          },
          {
            label: { en: 'Steel belt', ar: 'الحزام الفولاذي' },
            value: 'Polyurethane flat composite steel belt — soft, wear-resistant, silent',
          },
          {
            label: { en: 'Space utilization', ar: 'استغلال المساحة' },
            value: 'Higher utilization achieves a larger car space within the same hoistway',
          },
        ],
      },
    ],
  },
  optionalSpecs: {
    heading: { en: 'Car Decoration Options', ar: 'خيارات تكسية المقصورة' },
    appliesTo: 'RHX16 · RHX18-1 · RHX10 · RHX24 · RHX25 · RHX26 · RHX27 · RHX21',
    rows: [
      {
        label: { en: 'RHX16 (standard)', ar: 'RHX16 (قياسي)' },
        value:
          'Hairline stainless steel walls & ceiling with downlight, anti-fingerprint COP, PVC floor',
      },
      {
        label: { en: 'RHX18-1 (optional)', ar: 'RHX18-1 (اختياري)' },
        value:
          'Aluminum profile frame ceiling + LED, mirror stainless rear wall with inlaid LED light',
      },
      {
        label: { en: 'RHX10 (optional)', ar: 'RHX10 (اختياري)' },
        value: 'Safety laminated glass walls + hairline stainless steel, RHT08 ceiling, RF100 handrail',
      },
      {
        label: { en: 'RHX24 (optional)', ar: 'RHX24 (اختياري)' },
        value: 'Mirror etching stainless steel + wood grain film (walnut) walls',
      },
      {
        label: { en: 'RHX25 (optional)', ar: 'RHX25 (اختياري)' },
        value: 'Cosmetic steel plate + wood grain film (oak) walls, aluminum strip accents',
      },
      {
        label: { en: 'RHX26 (optional)', ar: 'RHX26 (اختياري)' },
        value: 'Rose gold mirror & hairline stainless steel walls with LED lighting',
      },
      {
        label: { en: 'RHX27 (optional)', ar: 'RHX27 (اختياري)' },
        value: 'Bronze mirror etching + wood veneers inlaid with bronze strips',
      },
      {
        label: { en: 'RHX21 (optional)', ar: 'RHX21 (اختياري)' },
        value: 'Champagne gold mirror + hairline stainless steel walls',
      },
      {
        label: { en: 'Wall finishes', ar: 'تشطيبات الجدران' },
        value: 'Wood grain film: safflower pear · oak · walnut',
      },
      {
        label: { en: 'COP & landing call', ar: 'لوحة التحكم ونداء البهو' },
        value: 'RHK09 / RHL09 anti-fingerprint (standard) · RHK12 wall mounted · RHK10/RHL10 toughened glass touch panel (optional)',
      },
      {
        label: { en: 'Ceilings', ar: 'الأسقف' },
        value: 'RHT08 mirror stainless steel + LED · RHT09 spray-paint steel with wood trim + lamp belt',
      },
      { label: { en: 'PVC floors', ar: 'أرضيات PVC' }, value: 'RHD05 · RHD15 · RHD23' },
      {
        label: { en: 'Handrail', ar: 'مسند اليد' },
        value: 'FS01 copper alloy luxury handrail (optional)',
      },
      {
        label: { en: 'Landing doors', ar: 'أبواب البهو' },
        value: 'RHM025 hairline · RHM026 black titanium · RHM027 champagne gold · RHM028 Ti-gold · RHM029 rose gold · RHM030 bronze etched · RHM031 walnut wood grain',
      },
    ],
    footnote: {
      en: 'Two-dimensional code panoramic preview is available for car interior design selection.',
      ar: 'المعاينة البانورامية برمز الاستجابة السريعة متاحة لاختيار التصميم الداخلي للمقصورة.',
    },
  },
  safetyDevices: {
    heading: { en: 'Function Specifications', ar: 'مواصفات الوظائف' },
    columns: [
      { en: 'Function', ar: 'الوظيفة' },
      { en: 'Description', ar: 'الوصف' },
      { en: 'Type', ar: 'النوع' },
    ],
    rows: [
      {
        device: { en: 'VVVF drive', ar: 'قيادة VVVF' },
        description: {
          en: 'Motor rotating speed precisely adjusted for a smooth speed curve at start, travel and stop.',
          ar: 'ضبط دقيق لسرعة دوران المحرك لمنحنى سرعة سلس عند البدء والحركة والتوقف.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'VVVF door operator', ar: 'مشغل باب VVVF' },
        description: {
          en: 'More gentle and sensitive door machine start and stop.',
          ar: 'بدء وإيقاف أكثر سلاسة وحساسية لآلة الباب.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Car ventilation, light auto shut off', ar: 'إيقاف التهوية والإضاءة آلياً' },
        description: {
          en: 'Fan and lighting close automatically if no call or command within the stipulated time to save energy.',
          ar: 'تُغلق المروحة والإضاءة تلقائياً عند غياب أي نداء أو أمر خلال الوقت المحدد لتوفير الطاقة.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'One-key call', ar: 'النداء بمفتاح واحد' },
        description: {
          en: 'Automatically calls the preset number through the emergency call system for the fastest rescue and overhaul.',
          ar: 'يتصل آلياً بالرقم المحدد مسبقاً عبر نظام النداء الطارئ لأسرع عملية إنقاذ وصيانة.',
        },
        kind: 'optional',
      },
      {
        device: { en: 'Car monitoring function', ar: 'وظيفة مراقبة المقصورة' },
        description: {
          en: 'A camera added in the car lets family members monitor the situation inside the car.',
          ar: 'كاميرا داخل المقصورة تتيح لأفراد الأسرة مراقبة أحوال المقصورة.',
        },
        kind: 'optional',
      },
      {
        device: { en: 'Emergency leveling for power failure', ar: 'الاستواء الطارئ عند انقطاع الكهرباء' },
        description: {
          en: 'On sudden power loss the elevator self-rescues, runs slowly to the nearest floor and opens the door automatically.',
          ar: 'عند انقطاع التيار المفاجئ ينقذ المصعد نفسه، ويتحرك ببطء إلى أقرب طابق ويفتح الباب تلقائياً.',
        },
        kind: 'optional',
      },
    ],
    footnote: {
      en: 'Availability depends on the selected configuration and project requirements.',
      ar: 'يعتمد التوفر على التهيئة المختارة ومتطلبات المشروع.',
    },
  },
  install: {
    heading: { en: 'Smart Home Experience', ar: 'تجربة المنزل الذكي' },
    items: [
      {
        title: { en: 'Compact installation', ar: 'تركيب مدمج' },
        text: {
          en: 'Steel belt traction requires only a 300mm pit depth and 2900mm overhead, fitting into existing homes with minimal civil works.',
          ar: 'يتطلب الجرّ بالحزام الفولاذي حفرة بعمق 300 مم فقط وارتفاعاً علوياً 2900 مم، ليتلاءم مع المنازل القائمة بأقل أعمال مدنية.',
        },
      },
      {
        title: { en: 'Flexible layout', ar: 'تخطيط مرن' },
        text: {
          en: 'Higher space utilization achieves a larger car space within the same hoistway footprint.',
          ar: 'استغلال أعلى للمساحة يحقق مقصورة أكبر ضمن نفس مساحة البئر.',
        },
      },
      {
        title: { en: 'Silent and comfortable', ar: 'هدوء وراحة' },
        text: {
          en: 'Polyurethane flat composite steel belt is soft and wear-resistant, delivering comfortable and silent operation at home.',
          ar: 'الحزام الفولاذي المركب المطلي بالبوليوريثان ناعم ومقاوم للتآكل، ما يوفر تشغيلاً هادئاً ومريحاً داخل المنزل.',
        },
      },
      {
        title: { en: 'Panoramic preview', ar: 'معاينة بانورامية' },
        text: {
          en: 'Interactive QR-code panoramic preview helps you select the car interior design before production.',
          ar: 'المعاينة البانورامية التفاعلية برمز الاستجابة تساعدك على اختيار التصميم الداخلي للمقصورة قبل التصنيع.',
        },
      },
    ],
  },
  sketches: {
    heading: { en: 'Construction Sketches & Parameters', ar: 'المخططات الإنشائية والمعلمات' },
    intro: {
      en: 'Hoistway elevation, pit depth, traveling height and overhead per drive type — all dimensions in mm.',
      ar: 'المسقط الرأسي للبئر وعمق الحفرة وارتفاع الانتقال والارتفاع العلوي لكل نوع قيادة — جميع الأبعاد بالمليمتر.',
    },
    fullWidth: true,
    tables: [
      {
        id: 'grv20-ii-dimensions',
        title: { en: 'Classical traction type (GRV20-II)', ar: 'نوع الجرّ الكلاسيكي (GRV20-II)' },
        columns: [
          { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' },
          { en: 'Persons', ar: 'الأشخاص' },
          { en: 'Car W×D (mm)', ar: 'المقصورة ع×ع (مم)' },
          { en: 'Car height (mm)', ar: 'ارتفاع المقصورة (مم)' },
          { en: 'Hoistway W×D (mm)', ar: 'البئر ع×ع (مم)' },
          { en: 'Overhead (mm)', ar: 'الارتفاع العلوي (مم)' },
          { en: 'Pit depth (mm)', ar: 'عمق الحفرة (مم)' },
          { en: 'Door opening (mm)', ar: 'فتحة الباب (مم)' },
        ],
        rows: [
          ['260', '3', '800×1200', '2200', '1500×1600', '3000', '400', '700×2000'],
          ['320', '4', '900×1200', '2200', '1600×1600', '3000', '400', '750×2000'],
          ['400', '5', '1000×1200', '2200', '1700×1600', '3000', '400', '800×2000'],
        ],
        remark: {
          en: 'Remark: rated speed 0.4 m/s · traveling height ≤ 12m · single-phase 220V / three-phase 380V',
          ar: 'ملاحظة: السرعة المقننة 0.4 م/ث · ارتفاع الانتقال ≤ 12م · تغذية أحادية الطور 220 فولت / ثلاثية الطور 380 فولت',
        },
      },
      {
        id: 'grv20-v-dimensions',
        title: { en: 'Steel belt traction type (GRV20-V)', ar: 'نوع الجرّ بالحزام الفولاذي (GRV20-V)' },
        columns: [
          { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' },
          { en: 'Persons', ar: 'الأشخاص' },
          { en: 'Car W×D (mm)', ar: 'المقصورة ع×ع (مم)' },
          { en: 'Car height (mm)', ar: 'ارتفاع المقصورة (مم)' },
          { en: 'Hoistway W×D (mm)', ar: 'البئر ع×ع (مم)' },
          { en: 'Overhead (mm)', ar: 'الارتفاع العلوي (مم)' },
          { en: 'Pit depth (mm)', ar: 'عمق الحفرة (مم)' },
          { en: 'Door opening (mm)', ar: 'فتحة الباب (مم)' },
        ],
        rows: [
          ['260', '3', '850×1200', '2200', '1500×1600', '2900', '300', '700×2000'],
          ['320', '4', '950×1200', '2200', '1600×1600', '2900', '300', '750×2000'],
          ['400', '5', '1050×1200', '2200', '1700×1600', '2900', '300', '800×2000'],
        ],
        remark: {
          en: 'Remark: rated speed 0.4 m/s · traveling height ≤ 12m · single-phase 220V / three-phase 380V',
          ar: 'ملاحظة: السرعة المقننة 0.4 م/ث · ارتفاع الانتقال ≤ 12م · تغذية أحادية الطور 220 فولت / ثلاثية الطور 380 فولت',
        },
      },
    ],
    notes: {
      en: 'Door opening mode: auto center opening door (auto side opening door is alternative). Remark: details should be based on the drawings confirmed by both parties.',
      ar: 'وضع فتح الباب: فتح مركزي آلي (البديل الفتح الجانبي الآلي). ملاحظة: التفاصيل تخضع للرسومات المعتمدة من الطرفين.',
    },
  },
}
