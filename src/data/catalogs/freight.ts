import type { ServiceCatalog } from './types'

export const FREIGHT_CATALOG: ServiceCatalog = {
  slug: 'freight-elevators',
  hero: {
    title: { en: 'Service & Freight Elevators', ar: 'مصاعد الخدمة والبضائع' },
    subtitle: {
      en: 'GRF / GRA / GRFH series — innovative technology for heavy-duty mobility',
      ar: 'سلسلة GRF / GRA / GRFH — تقنيات مبتكرة للتنقل عالي الحمولة',
    },
    badge: 'GRF / GRA / GRFH',
    image: '/assets/images/service-freight-hero.webp',
    imageAlt: {
      en: 'SRH freight elevator for heavy loads',
      ar: 'مصعد بضائع من SRH للأحمال الثقيلة',
    },
  },
  overview: {
    heading: { en: 'Sicher Elevator', ar: 'شركة سيشر للمصاعد' },
    text: {
      en: 'Sicher Elevator Co., Ltd. is a comprehensive elevator manufacturing service provider engaging in development, manufacturing, sales, installation, maintenance and modern renewal and transformation of elevators. The company has taken "all for safe reach" as its core philosophy and concentrated on core technology and elevator safety while building an integrated industrial service platform for the elevator industry. Its products have been exported to more than 80 countries and regions, with SRH positioned as an elevator brand serving international markets.',
      ar: 'شركة سيشر للمصاعد مزود خدمة تصنيع متكامل يشمل التطوير والتصنيع والبيع والتركيب والصيانة والتحديث المصاعدي. تبنّت الشركة "الوصول الآمن" فلسفة أساسية لها وركزت على التقنية الأساسية وسلامة المصاعد مع بناء منصة خدمية صناعية متكاملة لقطاع المصاعد. صُدِّرت منتجاتها إلى أكثر من 80 دولة ومنطقة، حيث تحتل SRH مكانة علامة مصاعد تخدم الأسواق الدولية.',
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
        en: 'Selected among leading national government elevator suppliers',
        ar: 'ضمن كبار موردي المصاعد للحكومة الوطنية',
      },
      {
        en: 'Core technology recognized by Zhejiang Province science and technology awards',
        ar: 'تقنية أساسية حاصلة على جوائز العلوم والتقنية لمقاطعة تشجيانغ',
      },
      {
        en: 'Participated in drafting national and industrial elevator standards',
        ar: 'شاركت في إعداد المعايير الوطنية والصناعية للمصاعد',
      },
      {
        en: 'International manufacturing and service capabilities',
        ar: 'قدرات تصنيع وخدمة دولية',
      },
    ],
  },
  safety: {
    heading: { en: 'Functions & Safety', ar: 'الوظائف والسلامة' },
    intro: {
      en: 'Functional configurations are presented as catalog options. Availability depends on the selected elevator system and project requirements.',
      ar: 'تُعرض التهيئات الوظيفية كخيارات بالكتالوج. يعتمد توفرها على نظام المصعد المختار ومتطلبات المشروع.',
    },
    features: [
      {
        title: { en: 'Door protection', ar: 'حماية الباب' },
        text: {
          en: 'Door protection helps prevent objects from being trapped during closing.',
          ar: 'تحمي حماية الباب من انحصار الأجسام أثناء الإغلاق.',
        },
      },
      {
        title: { en: 'Up / down overrun protection', ar: 'حماية التجاوز العلوي والسفلي' },
        text: {
          en: 'Protective control against excessive travel at the limits of travel.',
          ar: 'تحكم وقائي ضد التجاوز الزائد عند نهايتي مسار الحركة.',
        },
      },
      {
        title: { en: 'Inspection operation', ar: 'وضع الفحص' },
        text: {
          en: 'Inspection mode allows controlled inching operation for maintenance work.',
          ar: 'يسمح وضع الفحص بتشغيل متدرج محكم لأعمال الصيانة.',
        },
      },
      {
        title: { en: 'Emergency car lighting', ar: 'إضاءة طوارئ المقصورة' },
        text: {
          en: 'Emergency lighting activates automatically after power failure.',
          ar: 'تعمل إضاءة الطوارئ تلقائياً عند انقطاع التيار الكهربائي.',
        },
      },
      {
        title: { en: 'Five-way intercom', ar: 'اتصال خماسي الاتجاهات' },
        text: {
          en: 'Communication between car, car top, machine room, pit and rescue room.',
          ar: 'اتصال بين المقصورة وسطحها وغرفة الآلات وباطن البئر وغرفة الإنقاذ.',
        },
      },
      {
        title: { en: 'Fire emergency return', ar: 'العودة في حالات الطوارئ' },
        text: {
          en: 'Emergency return function drives the car to the designated rescue landing.',
          ar: 'تعيد وظيفة الطوارئ المقصورة إلى بهو الإنقاذ المحدد.',
        },
      },
    ],
  },
  products: {
    heading: { en: 'Products', ar: 'المنتجات' },
    image: '/assets/images/service-freight-hero.webp',
    imageAlt: {
      en: 'SRH freight elevator series detail',
      ar: 'تفاصيل سلسلة مصاعد البضائع من SRH',
    },
    models: [
      {
        id: 'grf-series',
        name: { en: 'GRF Series Freight Elevator', ar: 'مصعد البضائع سلسلة GRF' },
        tagline: { en: '18 tons super heavy load', ar: 'حمولة فائقة تصل إلى 18 طناً' },
        footnote: {
          en: '* Final project parameters are subject to actual drawings',
          ar: '* المعلمات النهائية للمشروع تخضع للرسومات التنفيذية',
        },
        specs: [
          { label: { en: 'Type', ar: 'النوع' }, value: 'Heavy-duty freight elevator' },
          { label: { en: 'Rated capacity (kg)', ar: 'الحمولة المقننة (كلغ)' }, value: '2000 – 5000*' },
          { label: { en: 'Rated speed (m/s)', ar: 'السرعة المقننة (م/ث)' }, value: '0.5' },
          { label: { en: 'Max travel height (m)', ar: 'أقصى ارتفاع للانتقال (م)' }, value: '30' },
          {
            label: { en: 'Drive & control', ar: 'القيادة والتحكم' },
            value: 'Advanced drive and control systems integrated',
          },
          {
            label: { en: 'Structure', ar: 'الهيكل' },
            value: 'Wear-resistant steel plates for key structural components',
          },
          {
            label: { en: 'Space', ar: 'المساحة' },
            value: 'Compact hoistway structure with larger door opening for easy loading',
          },
          { label: { en: 'Car ceiling', ar: 'سقف المقصورة' }, value: 'Painted steel' },
          { label: { en: 'Car wall & door', ar: 'جدار المقصورة والباب' }, value: 'Painted steel' },
          { label: { en: 'Car floor', ar: 'أرضية المقصورة' }, value: 'Chequer steel' },
          { label: { en: 'Sill', ar: 'العتبة' }, value: 'Reinforced iron / cast iron' },
        ],
      },
      {
        id: 'gra10',
        name: { en: 'GRA10 Car Elevator', ar: 'مصعد السيارات GRA10' },
        tagline: { en: 'Urban three-dimensional transportation', ar: 'التنقل الرأسي ثلاثي الأبعاد داخل المدن' },
        footnote: {
          en: '* Suitable for automotive 4S stores, maintenance workshops, large-scale shopping malls and parking applications',
          ar: '* مناسب لمعارض وصالات السيارات 4S وورش الصيانة والمراكز التجارية الكبيرة وتطبيقات مواقف السيارات',
        },
        specs: [
          { label: { en: 'Type', ar: 'النوع' }, value: 'Car elevator' },
          { label: { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' }, value: '3000 / 5000' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '0.5' },
          { label: { en: 'Car size (mm)', ar: 'مقاس المقصورة (مم)' }, value: '2700×5500 / 2700×6000' },
          { label: { en: 'Door opening (mm)', ar: 'فتحة الباب (مم)' }, value: '2700×2200' },
          { label: { en: 'Hoistway size (mm)', ar: 'مقاس البئر (مم)' }, value: '4400×6100 / 4400×6600' },
          { label: { en: 'Machine room (mm)', ar: 'غرفة الآلات (مم)' }, value: '4400×6100 / 4400×6600' },
          { label: { en: 'Max travel (m)', ar: 'أقصى انتقال (م)' }, value: '30' },
          {
            label: { en: 'Operation', ar: 'التشغيل' },
            value: 'Operation panel on both sides for convenient entry and exit',
          },
          {
            label: { en: 'Safety', ar: 'السلامة' },
            value: 'Microcomputer control with multiple protection devices',
          },
        ],
      },
      {
        id: 'grfh10',
        name: { en: 'GRFH10 Hydraulic Freight Elevator', ar: 'مصعد البضائع الهيدروليكي GRFH10' },
        tagline: { en: 'Diversified lifting modes · Capacity up to 5000 kg', ar: 'أنماط رفع متنوعة · حمولة حتى 5000 كلغ' },
        footnote: {
          en: '* Lifting modes: 4:2 single-cylinder side action · 2:1 double-cylinder side action · 1:1 double-cylinder direct action · 2:1 side action rail arrangement',
          ar: '* أنماط الرفع: 4:2 أسطوانة مفردة جانبية · 2:1 أسطوانتان جانبياً · 1:1 أسطوانتان مباشرة · 2:1 ترتيب جانبي بمجرى',
        },
        specs: [
          { label: { en: 'Type', ar: 'النوع' }, value: 'Hydraulic freight elevator' },
          { label: { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' }, value: '1000 – 5000' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '0.25 – 0.5' },
          { label: { en: 'Drive types', ar: 'أنواع القيادة' }, value: '1 cylinder / 4:2 · 2 cylinders / 2:1' },
          { label: { en: 'Max travel (m)', ar: 'أقصى انتقال (م)' }, value: '23.5' },
          {
            label: { en: 'Machine room', ar: 'غرفة الآلات' },
            value: 'No top machine room required; arranged within the hoistway per building requirements',
          },
          {
            label: { en: 'Control', ar: 'التحكم' },
            value: 'Intelligent microcomputer control with rapid, accurate response',
          },
          {
            label: { en: 'Safety', ar: 'السلامة' },
            value: 'Speed-limiting shut-off valve and hydraulic circuit protection',
          },
          { label: { en: 'Car size (mm)', ar: 'مقاس المقصورة (مم)' }, value: '1300×1750 – 2400×3600' },
          { label: { en: 'Hoistway size (mm)', ar: 'مقاس البئر (مم)' }, value: '2400×2150 – 4000×4050' },
        ],
      },
    ],
  },
  optionalSpecs: {
    heading: { en: 'Decoration & Options', ar: 'التكسيات والخيارات' },
    appliesTo: 'GRF · GRA10 · GRFH10',
    rows: [
      { label: { en: 'Car ceiling — standard', ar: 'سقف المقصورة — قياسي' }, value: 'Painted steel' },
      { label: { en: 'Car ceiling — option', ar: 'سقف المقصورة — اختياري' }, value: 'Hairline stainless steel' },
      {
        label: { en: 'Car wall & car door — standard', ar: 'جدار المقصورة والباب — قياسي' },
        value: 'Painted steel',
      },
      {
        label: { en: 'Car wall & car door — option', ar: 'جدار المقصورة والباب — اختياري' },
        value: 'Hairline stainless steel',
      },
      { label: { en: 'Operation panel', ar: 'لوحة التشغيل' }, value: 'Hairline stainless steel' },
      { label: { en: 'Car floor', ar: 'أرضية المقصورة' }, value: 'Chequer steel' },
      { label: { en: 'Sill', ar: 'العتبة' }, value: 'Reinforced iron / cast iron' },
      {
        label: { en: 'Landing door', ar: 'باب البهو' },
        value: 'Painted steel (standard) · hairline stainless steel (optional)',
      },
      { label: { en: 'Jamb', ar: 'إطار الباب' }, value: 'Matched to landing door' },
      {
        label: { en: 'Hall door openings', ar: 'فتحات أبواب البهو' },
        value: '2P side opening · 4P center opening · 6P center opening',
      },
      {
        label: { en: 'Control configurations', ar: 'تهيئات التحكم' },
        value: 'RC330 operation panel · RZ330 optional configuration',
      },
      {
        label: { en: 'Panel options', ar: 'خيارات اللوحات' },
        value: 'RPO01 chequer steel protection · GBC anti-collision strip',
      },
    ],
    footnote: {
      en: 'Finish language: painted steel · hairline stainless steel · dark metal · SRH gold accent',
      ar: 'لغة التشطيبات: صلب مطلي · ستانلس ستيل مشطوف · معدن داكن · لمسة ذهبية SRH',
    },
  },
  safetyDevices: {
    heading: { en: 'Function Configuration', ar: 'تهيئة الوظائف' },
    columns: [
      { en: 'Function', ar: 'الوظيفة' },
      { en: 'Description', ar: 'الوصف' },
      { en: 'Type', ar: 'النوع' },
    ],
    rows: [
      {
        device: { en: 'Collective selective control', ar: 'تحكم جماعي انتقائي' },
        description: {
          en: 'Call management for efficient elevator operation.',
          ar: 'إدارة النداءات لتشغيل فعال للمصعد.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Reopen with hall call', ar: 'إعادة الفتح عند نداء البهو' },
        description: {
          en: 'The door can reopen in response to a hall call during closing.',
          ar: 'يمكن للباب إعادة الفتح استجابةً لنداء البهو أثناء الإغلاق.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Car stop and door open', ar: 'توقف المقصورة وفتح الباب' },
        description: {
          en: 'The elevator decelerates, levels and opens the door after stopping.',
          ar: 'يتباطأ المصعد ويستوي ويفتح الباب بعد التوقف.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Automatic pass without stop', ar: 'المرور الآلي دون توقف' },
        description: {
          en: 'When the car is sufficiently loaded, it can pass the calling landing.',
          ar: 'عندما تكون المقصورة محملة بشكل كافٍ يمكنها تجاوز طابق النداء.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'VVVF door operator', ar: 'مشغل باب VVVF' },
        description: {
          en: 'Precise adjustment for smooth and sensitive door movement.',
          ar: 'ضبط دقيق لحركة باب سلسة وحساسة.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Internet of Things', ar: 'إنترنت الأشياء' },
        description: {
          en: 'Remote monitoring and continuous collection of elevator running information.',
          ar: 'مراقبة عن بُعد وجمع مستمر لمعلومات تشغيل المصعد.',
        },
        kind: 'optional',
      },
      {
        device: { en: 'RZ330 control configuration', ar: 'تهيئة تحكم RZ330' },
        description: {
          en: 'Optional control configuration for operation panel and hall call interface.',
          ar: 'تهيئة تحكم اختيارية لوحة التشغيل وواجهة نداء البهو.',
        },
        kind: 'optional',
      },
      {
        device: { en: 'GBC anti-collision strip', ar: 'شريط مضاد للاصطدام GBC' },
        description: {
          en: 'Anti-collision strip option protecting car and goods at door areas.',
          ar: 'خيار شريط مضاد للاصطدام يحمي المقصورة والبضائع عند مناطق الأبواب.',
        },
        kind: 'optional',
      },
    ],
    footnote: {
      en: 'Availability depends on the selected elevator system and project requirements.',
      ar: 'يعتمد التوفر على نظام المصعد المختار ومتطلبات المشروع.',
    },
  },
  install: {
    heading: { en: 'IoT Service System', ar: 'نظام خدمة إنترنت الأشياء' },
    items: [
      {
        title: { en: 'Worry-free maintenance', ar: 'صيانة بلا قلق' },
        text: {
          en: 'Maintenance reminder service with automatic reminder before scheduled maintenance.',
          ar: 'خدمة تنبيه للصيانة مع تذكير آلي قبل موعد الصيانة الدورية.',
        },
      },
      {
        title: { en: 'Worry-free emergency', ar: 'طوارئ بلا قلق' },
        text: {
          en: 'Active alarm service with positioning and planning of emergency response.',
          ar: 'خدمة إنذار نشطة مع تحديد الموقع وتخطيط الاستجابة للطوارئ.',
        },
      },
      {
        title: { en: 'Worry-free safety hazards', ar: 'مخاطر سلامة بلا قلق' },
        text: {
          en: 'Automatic early warning and customized solutions with maintenance personnel feedback.',
          ar: 'إنذار مبكر آلي وحلول مخصصة مع تغذية راجعة من فنيي الصيانة.',
        },
      },
      {
        title: { en: 'Worry-free management', ar: 'إدارة بلا قلق' },
        text: {
          en: 'Information internet service and synchronization between service centers and related parties.',
          ar: 'خدمة معلومات عبر الإنترنت ومزامنة بين مراكز الخدمة والأطراف ذات العلاقة.',
        },
      },
    ],
  },
  sketches: {
    heading: { en: 'Technical Specifications', ar: 'المواصفات الفنية' },
    intro: {
      en: 'Principal catalog specifications. Final project parameters are subject to actual drawings.',
      ar: 'المواصفات الرئيسية من الكتالوج. المعلمات النهائية للمشروع تخضع للرسومات التنفيذية.',
    },
    fullWidth: true,
    tables: [
      {
        id: 'grf-specs',
        title: { en: 'GRF series freight elevator', ar: 'مصعد البضائع سلسلة GRF' },
        columns: [
          { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' },
          { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' },
          { en: 'Car W×D (mm)', ar: 'المقصورة ع×ع (مم)' },
          { en: 'Door W×H (mm)', ar: 'الباب ع×ا (مم)' },
          { en: 'Hoistway W×D (mm)', ar: 'البئر ع×ع (مم)' },
          { en: 'Max travel (m)', ar: 'أقصى انتقال (م)' },
        ],
        rows: [
          ['2000', '0.5', '1500×2700', '1500×2200', '2800×3200', '30'],
          ['3000', '0.5', '2000×2900', '2000×2200', '2450×3400', '30'],
          ['5000', '0.5', '2400×3600', '2400×2200', '4000×4100', '—'],
        ],
      },
      {
        id: 'gra10-specs',
        title: { en: 'GRA10 car elevator', ar: 'مصعد السيارات GRA10' },
        columns: [
          { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' },
          { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' },
          { en: 'Car size (mm)', ar: 'المقصورة (مم)' },
          { en: 'Door opening (mm)', ar: 'فتحة الباب (مم)' },
          { en: 'Hoistway (mm)', ar: 'البئر (مم)' },
          { en: 'Machine room (mm)', ar: 'غرفة الآلات (مم)' },
          { en: 'Door W×H (mm)', ar: 'الباب ع×ا (مم)' },
          { en: 'Max travel (m)', ar: 'أقصى انتقال (م)' },
        ],
        rows: [
          ['3000', '0.5', '2700×5500', '2700×2200', '4400×6100', '4400×6100', '2700×4500', '30'],
          ['5000', '0.5', '2700×6000', '2700×2200', '4400×6600', '4400×6600', '2700×4600', '30'],
        ],
      },
      {
        id: 'grfh10-specs',
        title: { en: 'GRFH10 hydraulic freight elevator', ar: 'مصعد البضائع الهيدروليكي GRFH10' },
        columns: [
          { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' },
          { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' },
          { en: 'Drive type', ar: 'نوع القيادة' },
          { en: 'Car W×D (mm)', ar: 'المقصورة ع×ع (مم)' },
          { en: 'Door opening (mm)', ar: 'فتحة الباب (مم)' },
          { en: 'Hoistway W×D (mm)', ar: 'البئر ع×ع (مم)' },
          { en: 'MR W×D (mm)', ar: 'غرفة الآلات ع×ع (مم)' },
          { en: 'Max travel (m)', ar: 'أقصى انتقال (م)' },
        ],
        rows: [
          ['1000', '0.5', '1 cylinder / 4:2', '1300×1750', '1300×2200', '2400×2150', '2000×2150', '23.5'],
          ['2000', '0.5', '1 cylinder / 4:2', '1500×2700', '1500×2200', '2800×3100', '2000×3100', '23.5'],
          ['3000', '0.25', '2 cylinders / 2:1', '2000×2900', '2000×2200', '3400×3400', '2000×3400', '18'],
          ['5000', '0.25', '2 cylinders / 2:1', '2400×3600', '2400×2400', '4000×4050', '2400×4050', '12'],
        ],
      },
    ],
    notes: {
      en: 'Construction sketches for GRFS, GRFN, GRA10 and GRFH10 arrangements (hoistway elevation, machine room plan and hoistway plan) are available in the full catalog. Specific parameters are subject to actual drawings; some dimensions may change according to final project and civil construction requirements.',
      ar: 'المخططات الإنشائية لترتيبات GRFS وGRFN وGRA10 وGRFH10 (مسقط رأسي للبئر ومسقط غرفة الآلات ومسقط البئر) متوفرة في الكتالوج الكامل. المعلمات النهائية تخضع للرسومات التنفيذية؛ وقد تتغير بعض الأبعاد وفقاً لمتطلبات المشروع النهائي والإنشاء المدني.',
    },
  },
}
