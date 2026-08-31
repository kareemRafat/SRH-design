import type { ServiceCatalog } from './types'

export const PASSENGER_CATALOG: ServiceCatalog = {
  slug: 'passenger-elevators',
  hero: {
    title: { en: 'Passenger & Panorama Elevators', ar: 'مصاعد الركاب والبانوراما' },
    subtitle: {
      en: 'GRP / GRO 20 series — lead the development of future transport by innovative technology',
      ar: 'سلسلة GRP / GRO 20 — نتصدر تطوير تنقل المستقبل بتقنيات مبتكرة',
    },
    badge: 'GRP / GRO',
    image: '/assets/images/passenger-elevator-hero.webp',
    imageAlt: {
      en: 'Modern SRH passenger elevator cabin',
      ar: 'مقصورة مصعد ركاب عصرية من SRH',
    },
  },
  overview: {
    heading: { en: 'Sicher Elevator', ar: 'شركة سيشر للمصاعد' },
    text: {
      en: 'Sicher Elevator Co., Ltd. is a comprehensive elevator manufacturing service provider engaging in the development, manufacturing, sales, installation, maintenance and modern renewal of elevators, and holds the national highest-level production license for special equipment (A1). After successfully listing on the growth enterprise market of the Shenzhen Stock Exchange in September 2021 (Stock Code: 301056), Sicher became the first elevator company listed on the growth enterprise market in Zhejiang and one of the top 10 Chinese elevator manufacturers. For nearly 20 years it has taken "all for safe reach" as its core philosophy, and its products have been exported to over 80 countries and regions.',
      ar: 'شركة سيشر للمصاعد مزود خدمة تصنيع متكامل يشمل التطوير والتصنيع والبيع والتركيب والصيانة والتحديث المصاعدي، وتحمل أعلى رخصة إنتاج وطنية للمعدات الخاصة (A1). بعد إدراجها الناجح في سوق النمو ببورصة شنتشن في سبتمبر 2021 (رمز السهم: 301056)، أصبحت سيشر أول شركة مصاعد تُدرج في سوق النمو بمقاطعة تشجيانغ وضمن أفضل 10 شركات مصاعد صينية. منذ قرابة 20 عاماً وتبنّت "الوصول الآمن" فلسفة أساسية لها، وصُدِّرت منتجاتها إلى أكثر من 80 دولة ومنطقة.',
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
        en: 'Owns SRH Aufzuge GmbH, a modern German elevator manufacturing factory',
        ar: 'تمتلك SRH Aufzuge GmbH مصنعاً ألمانياً حديثاً لتصنيع المصاعد',
      },
      {
        en: 'National CNAS certification center laboratory',
        ar: 'مختبر معتمد وطني بمعايير CNAS',
      },
    ],
  },
  safety: {
    heading: { en: 'Safety System', ar: 'نظام السلامة' },
    intro: {
      en: 'From production to installation and delivery, the whole process is controlled to ensure the safety and reliability of each elevator.',
      ar: 'من الإنتاج حتى التركيب والتسليم، تُراقَب العملية بأكملها لضمان سلامة وموثوقية كل مصعد.',
    },
    features: [
      {
        title: { en: 'Precise light curtain protection', ar: 'حماية ستائر ضوئية دقيقة' },
        text: {
          en: 'Infrared light covers the whole door height during opening and closing, and accurately identifies obstacles even under strong light.',
          ar: 'يغطي الضوء تحت الأحمر كامل ارتفاع الباب أثناء الفتح والإغلاق، ويكتشف العوائق بدقة حتى تحت الإضاءة القوية.',
        },
      },
      {
        title: { en: 'Overload holding stop', ar: 'التوقف عند الحمل الزائد' },
        text: {
          en: 'When the car is overloaded the buzzer rings and the elevator stays stopped on the same floor until the load is reduced.',
          ar: 'عند زيادة الحمل عن الحد المسموح يرن جرس التنبيه ويبقى المصعد متوقفاً في نفس الطابق حتى تخفيف الحمل.',
        },
      },
      {
        title: { en: 'Down over-speed protection', ar: 'حماية السرعة الزائدة الهابطة' },
        text: {
          en: 'When speed reaches 1.2 times the rated value the elevator decelerates automatically; at 1.4 times the safety gear acts.',
          ar: 'عند وصول السرعة إلى 1.2 مرة من القيمة المقننة يتباطأ المصعد تلقائياً، وعند 1.4 مرة تعمل مكابح الأمان.',
        },
      },
      {
        title: { en: 'Up over-speed protection', ar: 'حماية السرعة الزائدة الصاعدة' },
        text: {
          en: 'When ascending speed exceeds 1.2 times the rated value the elevator automatically decelerates or brakes.',
          ar: 'عند تجاوز سرعة الصعود 1.2 مرة من القيمة المقننة يتباطأ المصعد أو تُفعَّل الفرامل تلقائياً.',
        },
      },
      {
        title: { en: 'Brake force self-detection', ar: 'الكشف الذاتي لقوة الفرامل' },
        text: {
          en: 'The system detects and warns about braking force regularly to guarantee reliable stopping every trip.',
          ar: 'يراقب النظام قوة الكبح ويصدر تحذيراً بشكل دوري لضمان توقف موثوق في كل رحلة.',
        },
      },
      {
        title: { en: 'Unintended car movement', ar: 'حماية الحركة غير المقصودة' },
        text: {
          en: 'Prevents or stops accidental car movement while the car is at a door-unlocked landing area.',
          ar: 'يمنع أو يوقف حركة المقصورة العرضية أثناء وجودها في منطقة الطابق المفتوح.',
        },
      },
    ],
  },
  products: {
    heading: { en: 'Products', ar: 'المنتجات' },
    image: '/assets/images/panorama.webp',
    imageAlt: {
      en: 'SRH panorama elevator glass cabin',
      ar: 'مقصورة مصعد البانوراما الزجاجية من SRH',
    },
    models: [
      {
        id: 'grps20',
        name: { en: 'GRPS20 Small Machine Room Elevator', ar: 'مصعد GRPS20 بغرفة آلات صغيرة' },
        tagline: { en: 'Rated capacity 630–2000 kg · Speed 1.0–4.0 m/s', ar: 'حمولة مقننة 630–2000 كلغ · سرعة 1.0–4.0 م/ث' },
        specs: [
          { label: { en: 'Type', ar: 'النوع' }, value: 'SMR passenger elevator' },
          { label: { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' }, value: '630 – 2000' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '1.0 – 4.0' },
          { label: { en: 'Persons', ar: 'الأشخاص' }, value: '8 – 26' },
          {
            label: { en: 'Machine room', ar: 'غرفة الآلات' },
            value: 'Efficient layout saves nearly 50% of machine room space',
          },
          { label: { en: 'Car wall', ar: 'جدار المقصورة' }, value: 'Hairline stainless steel (RJ011)' },
          {
            label: { en: 'Ceiling', ar: 'السقف' },
            value: 'Mirror stainless steel, LED crystal lamp (RHD003)',
          },
          { label: { en: 'Floor', ar: 'الأرضية' }, value: 'PVC (RHPV004)' },
          { label: { en: 'COP', ar: 'لوحة التحكم' }, value: 'Embedded control box (RC004)' },
          { label: { en: 'Hall call box', ar: 'صندوق نداء البهو' }, value: 'No bottom box (standard)' },
        ],
      },
      {
        id: 'grpn20',
        name: { en: 'GRPN20 Machine Roomless Elevator', ar: 'مصعد GRPN20 بدون غرفة آلات' },
        tagline: { en: 'Rated capacity 630–1600 kg · Speed 1.0–2.0 m/s', ar: 'حمولة مقننة 630–1600 كلغ · سرعة 1.0–2.0 م/ث' },
        specs: [
          { label: { en: 'Type', ar: 'النوع' }, value: 'MRL passenger elevator' },
          { label: { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' }, value: '630 – 1600' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '1.0 – 2.0' },
          { label: { en: 'Persons', ar: 'الأشخاص' }, value: '8 – 21' },
          {
            label: { en: 'Layout', ar: 'التخطيط' },
            value: 'Control cabinet and drive system arranged inside the hoistway',
          },
          { label: { en: 'Car wall', ar: 'جدار المقصورة' }, value: 'Hairline stainless steel (RJ011)' },
          {
            label: { en: 'Ceiling', ar: 'السقف' },
            value: 'Mirror stainless steel, LED crystal lamp (RHD003)',
          },
          { label: { en: 'Floor', ar: 'الأرضية' }, value: 'PVC (RHPV004)' },
          { label: { en: 'COP', ar: 'لوحة التحكم' }, value: 'Embedded control box (RC004)' },
          { label: { en: 'Hall call box', ar: 'صندوق نداء البهو' }, value: 'No bottom box (standard)' },
        ],
      },
      {
        id: 'grpn20-vii',
        name: { en: 'GRPN20-VII Machine Roomless Elevator', ar: 'مصعد GRPN20-VII بدون غرفة آلات' },
        tagline: { en: 'Ultra-thin permanent magnet traction machine', ar: 'جرّ بمغناطيس دائم فائق النحافة' },
        footnote: { en: '* Ultra-thin traction machine exclusive to GRPN20-VII', ar: '* الجرّ فائق النحافة حصري لموديل GRPN20-VII' },
        specs: [
          { label: { en: 'Type', ar: 'النوع' }, value: 'MRL passenger elevator' },
          { label: { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' }, value: '630 – 1000' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '1.0 – 1.75' },
          { label: { en: 'Persons', ar: 'الأشخاص' }, value: '8 – 13' },
          {
            label: { en: 'Traction machine*', ar: 'الجرّ*' },
            value: 'Axial ultra-thin permanent magnet synchronous design',
          },
          {
            label: { en: 'Advantage', ar: 'الميزة' },
            value: 'Smaller size and weight, low noise, high efficiency',
          },
          { label: { en: 'Car wall', ar: 'جدار المقصورة' }, value: 'Hairline stainless steel' },
          {
            label: { en: 'Ceiling', ar: 'السقف' },
            value: 'Mirror stainless steel with LED lighting',
          },
          { label: { en: 'Floor', ar: 'الأرضية' }, value: 'PVC' },
          { label: { en: 'Hall call box', ar: 'صندوق نداء البهو' }, value: 'No bottom box (standard)' },
        ],
      },
      {
        id: 'gros',
        name: { en: 'GROS Panorama Elevator', ar: 'مصعد البانوراما GROS' },
        tagline: { en: 'Rated capacity 630–1600 kg · Speed 1.0–2.5 m/s', ar: 'حمولة مقننة 630–1600 كلغ · سرعة 1.0–2.5 م/ث' },
        footnote: {
          en: '* Layout plans: square · chamfered · semi-circular · round — blue parts are panorama glass',
          ar: '* مخططات التوزيع: مربع · مشطوف · نصف دائري · دائري — الأجزاء الزرقاء زجاج بانوراما',
        },
        specs: [
          { label: { en: 'Type', ar: 'النوع' }, value: 'SMR panorama elevator' },
          { label: { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' }, value: '630 – 1600' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '1.0 – 2.5' },
          { label: { en: 'Persons', ar: 'الأشخاص' }, value: '8 – 21' },
          { label: { en: 'Car wall', ar: 'جدار المقصورة' }, value: 'Safety laminated glass' },
          {
            label: { en: 'Ceiling', ar: 'السقف' },
            value: 'Steel plate paint frame with acrylic lighting',
          },
          { label: { en: 'Handrail', ar: 'مسند اليد' }, value: 'Stainless steel tube' },
          {
            label: { en: 'View', ar: 'الإطلالة' },
            value: 'Large-screen glass walls, mobile panorama platform',
          },
          {
            label: { en: 'Hoistway', ar: 'البئر' },
            value: 'Customized colors of glass and hoistway frame',
          },
          { label: { en: 'Floor', ar: 'الأرضية' }, value: 'PVC' },
        ],
      },
      {
        id: 'gron',
        name: { en: 'GRON Panorama Elevator', ar: 'مصعد البانوراما GRON' },
        tagline: { en: 'Rated capacity 630–1600 kg · Speed 1.0–2.0 m/s', ar: 'حمولة مقننة 630–1600 كلغ · سرعة 1.0–2.0 م/ث' },
        footnote: {
          en: '* Layout plans: square · chamfered · semi-circular — blue parts are panorama glass',
          ar: '* مخططات التوزيع: مربع · مشطوف · نصف دائري — الأجزاء الزرقاء زجاج بانوراما',
        },
        specs: [
          { label: { en: 'Type', ar: 'النوع' }, value: 'MRL panorama elevator' },
          { label: { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' }, value: '630 – 1600' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '1.0 – 2.0' },
          { label: { en: 'Persons', ar: 'الأشخاص' }, value: '8 – 21' },
          { label: { en: 'Car wall', ar: 'جدار المقصورة' }, value: 'Safety laminated glass' },
          {
            label: { en: 'Ceiling', ar: 'السقف' },
            value: 'Steel plate paint frame with acrylic lighting',
          },
          { label: { en: 'Handrail', ar: 'مسند اليد' }, value: 'Stainless steel tube' },
          {
            label: { en: 'Space', ar: 'المساحة' },
            value: 'Spacious and transparent, alleviates discomfort at high altitude',
          },
          {
            label: { en: 'Hoistway', ar: 'البئر' },
            value: 'Customized appearance matching building aesthetics',
          },
          { label: { en: 'Floor', ar: 'الأرضية' }, value: 'PVC' },
        ],
      },
    ],
  },
  optionalSpecs: {
    heading: { en: 'Optional Functions', ar: 'الوظائف الاختيارية' },
    appliesTo: 'GRPS20 · GRPN20 · GRPN20-VII · GROS · GRON',
    rows: [
      {
        label: { en: 'Group control', ar: 'التحكم الجماعي' },
        value: 'Automatically chooses the most appropriate response for three or more grouped elevators',
      },
      {
        label: { en: 'Duplex control', ar: 'التحكم الثنائي' },
        value: 'Two identical elevators unite to respond to calls through computer dispatch',
      },
      {
        label: { en: 'Open door in advance', ar: 'فتح الباب مسبقاً' },
        value: 'Door opens automatically as soon as the car enters the door-open zone',
      },
      {
        label: { en: 'Absolute-location APS', ar: 'التموضع المطلق APS' },
        value: 'Accurate positioning realizes accurate movement of the elevator',
      },
      {
        label: { en: 'Caution pinch function', ar: 'وظيفة منع التصاق الأصابع' },
        value: 'Three-dimensional infrared protection at the door jamb prevents fingers from being caught',
      },
      {
        label: { en: '3D door protection', ar: 'حماية ثلاثية الأبعاد للباب' },
        value: 'TOF combined with infrared creates a three-dimensional photocell protection area',
      },
      {
        label: { en: 'IC card control', ar: 'التحكم ببطاقة IC' },
        value: 'All (partial) landings input car commands only through IC card',
      },
      {
        label: { en: 'Intelligent voice call', ar: 'النداء الصوتي الذكي' },
        value: 'Automatic floor registration by voice recognition technology',
      },
      {
        label: { en: 'Face recognition call', ar: 'النداء بتعريف الوجه' },
        value: 'Contactless floor registration by face feature capture',
      },
      {
        label: { en: 'Bluetooth / QR code call', ar: 'النداء بالبلوتوث / رمز QR' },
        value: 'Remote door control via mobile phone or dynamic cloud-generated QR code',
      },
      {
        label: { en: 'Internet of Things', ar: 'إنترنت الأشياء' },
        value: '24-hour collection and transmission of running information with remote real-time monitoring',
      },
      {
        label: { en: 'Energy-regenerating', ar: 'تجديد الطاقة' },
        value: 'Converts potential energy to electrical power, maximizing renewable energy utilization',
      },
    ],
    footnote: {
      en: 'The specific configuration is subject to the order contract.',
      ar: 'يخضع التحديد النهائي لعقد الطلب.',
    },
  },
  safetyDevices: {
    heading: { en: 'Standard Functions', ar: 'الوظائف القياسية' },
    columns: [
      { en: 'Function', ar: 'الوظيفة' },
      { en: 'Description', ar: 'الوصف' },
      { en: 'Type', ar: 'النوع' },
    ],
    rows: [
      {
        device: { en: 'VVVF drive', ar: 'قيادة VVVF' },
        description: {
          en: 'Motor rotating speed precisely adjusted for smooth speed curve at start, travel and stop.',
          ar: 'ضبط دقيق لسرعة دوران المحرك لمنحنى سرعة سلس عند بدء الحركة والتنقل والتوقف.',
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
        device: { en: 'Independent running', ar: 'التشغيل المستقل' },
        description: {
          en: 'Elevator responds only to car commands, ignoring landings calls.',
          ar: 'يستجيب المصعد فقط لأوامر المقصورة متجاهلاً نداءات الطوابق.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Automatic pass without stop', ar: 'المرور الآلي دون توقف' },
        description: {
          en: 'Crowded car automatically passes calling landings when load nears preset value.',
          ar: 'تتجاوز المقصورة المزدحمة نداءات الطوابق تلقائياً عندما يقترب الحمل من القيمة المحددة.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Command register cancel', ar: 'إلغاء الأمر المسجل' },
        description: {
          en: 'Pressing the same button twice continuously cancels the registered command.',
          ar: 'الضغط المتتابع مرتين على نفس الزر يلغي الأمر المسجل.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Direct parking', ar: 'الاصطفاف المباشر' },
        description: {
          en: 'Distance principle with no crawling during leveling.',
          ar: 'مبدأ المسافة دون زحف أثناء عملية الاستواء.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Designated stop', ar: 'التوقف المحدد' },
        description: {
          en: 'If a door cannot open at the designated floor, the car travels to the next designated floor.',
          ar: 'إذا تعذر فتح الباب في الطابق المحدد تنتقل المقصورة إلى الطابق المحدد التالي.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Anti-stall timer protection', ar: 'حماية مؤقت الانزلاق' },
        description: {
          en: 'Stops operation due to slipping of the traction wire rope.',
          ar: 'يوقف التشغيل عند انزلاق أسلاك الجرّ.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Start protection control', ar: 'حماية بدء التشغيل' },
        description: {
          en: 'Stops operation if the car does not leave the door zone within the designated time.',
          ar: 'يوقف التشغيل إذا لم تغادر المقصورة منطقة الباب خلال الوقت المحدد.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Fault self-diagnosis', ar: 'التشخيص الذاتي للأعطال' },
        description: {
          en: 'Controller records the latest 62 troubles for quick removal.',
          ar: 'يسجل المتحكم آخر 62 عطلاً للإزالة السريعة.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Up/down over-run & final limit', ar: 'حدود التجاوز العلوي والسفلي' },
        description: {
          en: 'Prevents surging to the top or knocking the bottom when out of control.',
          ar: 'يمنع الاندفاع للأعلى أو الارتطام بالأسفل عند فقدان السيطرة.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Steel rope slipping detection', ar: 'كشف انزلاق الأسلاك الفولاذية' },
        description: {
          en: 'Monitors offset during running and runs to safety mode if deviation occurs.',
          ar: 'يراقب الانزياح أثناء الحركة ويتحول لوضع الأمان عند حدوث انحراف.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Balance system self-learning', ar: 'التعلم الذاتي لنظام الاتزان' },
        description: {
          en: 'Automatically recognizes and calculates elevator balance coefficient deviation.',
          ar: 'يتعرف تلقائياً ويحسب انحراف معامل اتزان المصعد.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Emergency car lighting', ar: 'إضاءة طوارئ المقصورة' },
        description: {
          en: 'Automatically activated once power failure occurs.',
          ar: 'تعمل تلقائياً عند حدوث انقطاع التيار.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Five way intercom', ar: 'اتصال خماسي الاتجاهات' },
        description: {
          en: 'Communication among car, car top, machine room, well pit and rescue duty room.',
          ar: 'اتصال بين المقصورة وسطحها وغرفة الآلات وباطن البئر وغرفة الإنقاذ.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Fire emergency return', ar: 'العودة في حالات الطوارئ' },
        description: {
          en: 'All calls cancelled; elevator drives to the designated rescue landing and opens the door.',
          ar: 'إلغاء جميع النداءات؛ يعود المصعد لبهو الإنقاذ المحدد ويفتح الباب.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Micro-touch buttons', ar: 'أزرار لمس دقيقة' },
        description: {
          en: 'New type micro-touch buttons for operation panel and hall call buttons.',
          ar: 'أزرار لمس دقيقة جديدة للوحة التحكم وأزرار نداء البهو.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Car arrival gong', ar: 'جرس الوصول' },
        description: {
          en: 'Announces that the passengers arrive.',
          ar: 'يعلن وصول الركاب.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Ventilation/light auto shut off', ar: 'إيقاف التهوية والإضاءة آلياً' },
        description: {
          en: 'Fan and lighting close automatically if no call within the stipulated time.',
          ar: 'يُغلق المروحة والإضاءة تلقائياً عند عدم وجود نداء خلال الوقت المحدد.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'LED green lighting', ar: 'إضاءة LED موفرة' },
        description: {
          en: 'Long service life with low power consumption.',
          ar: 'عمر تشغيلي طويل واستهلاك منخفض للطاقة.',
        },
        kind: 'standard',
      },
      {
        device: { en: 'Anti-nuisance', ar: 'منع الإزعاج' },
        description: {
          en: 'Under light load, three or more commands cancel all registered car calls.',
          ar: 'في حالة الحمل الخفيف، يؤدي تسجيل ثلاثة أوامر أو أكثر إلى إلغاء جميع النداءات المسجلة.',
        },
        kind: 'optional',
      },
      {
        device: { en: 'Voice announcer', ar: 'المعلن الصوتي' },
        description: {
          en: 'Informs passengers about relevant information upon normal arrival.',
          ar: 'يبلغ الركاب بالمعلومات ذات الصلة عند الوصول الطبيعي.',
        },
        kind: 'optional',
      },
      {
        device: { en: 'Operation box for disabled', ar: 'لوحة تحكم لذوي الإعاقة' },
        description: {
          en: 'Convenient for wheelchair passengers and those with visual disorder.',
          ar: 'ملائمة لركاب الكراسي المتحركة وضعاف البصر.',
        },
        kind: 'optional',
      },
      {
        device: { en: 'Professional antibacterial button', ar: 'زر مضاد للبكتيريا' },
        description: {
          en: 'Contact surface made of special antibacterial materials for efficient sterilization.',
          ar: 'سطح اللمس من مواد مضادة خاصة للبكتيريا لتعقيم فعال.',
        },
        kind: 'optional',
      },
      {
        device: { en: 'Camera in car', ar: 'كاميرا داخل المقصورة' },
        description: {
          en: 'Camera installed in the car to monitor cabin conditions.',
          ar: 'كاميرا داخل المقصورة لمراقبة أحوال المقصورة.',
        },
        kind: 'optional',
      },
      {
        device: { en: 'Auto return device', ar: 'جهاز العودة التلقائية' },
        description: {
          en: 'In normal power failure, the chargeable battery drives the car to the nearest landing.',
          ar: 'عند انقطاع التيار، تقود البطارية القابلة للشحن المقصورة إلى أقرب طابق.',
        },
        kind: 'optional',
      },
    ],
    footnote: {
      en: 'Full standard and optional function lists are available in the catalog.',
      ar: 'القوائم الكاملة للوظائف القياسية والاختيارية متوفرة في الكتالوج.',
    },
  },
  install: {
    heading: { en: 'Flexible Customization', ar: 'التخصيص المرن' },
    items: [
      {
        title: { en: 'Small machine room passenger elevator', ar: 'مصعد ركاب بغرفة آلات صغيرة' },
        text: {
          en: 'Efficient machine room layout with clever compact structure saves nearly 50% of the machine room space while maintaining excellent performance, bringing more possibilities to architectural design.',
          ar: 'تخطيط فعال لغرفة الآلات بهيكل مدمج ذكي يوفر قرابة 50% من مساحة الغرفة مع الحفاظ على أداء ممتاز، ما يفتح إمكانيات أوسع للتصميم المعماري.',
        },
      },
      {
        title: { en: 'Machine-roomless passenger elevator', ar: 'مصعد ركاب بدون غرفة آلات' },
        text: {
          en: 'Control cabinet and drive system originally located in the machine room are arranged inside the hoistway to maximize building space utilization and greatly reduce energy consumption.',
          ar: 'توضع خزانة التحكم ونظام القيادة داخل بئر المصعد بدلاً من غرفة الآلات لتعظيم استغلال مساحة المبنى وتقليل استهلاك الطاقة بشكل كبير.',
        },
      },
      {
        title: { en: 'Innovative ultra-thin traction machine', ar: 'جرّ فائق النحافة مبتكر' },
        text: {
          en: 'New electromagnetic design realizes the axial ultra-thin structure of the permanent magnet synchronous traction machine, greatly reducing size and weight. Only for GRPN20-VII.',
          ar: 'تصميم كهرومغناطيسي جديد يحقق هيكلاً محورياً فائق النحافة لجرّ المغناطيس الدائم المتزامن، ما يقلل الحجم والوزن بشكل كبير. حصرياً لموديل GRPN20-VII.',
        },
      },
      {
        title: { en: 'New generation permanent magnet traction machine', ar: 'الجيل الجديد من جرّ المغناطيس الدائم' },
        text: {
          en: 'High-performance permanent magnet materials with special motor design realize compact structure, small volume, light weight, low noise and high efficiency.',
          ar: 'مواد مغناطيس دائم عالية الأداء وتصميم محرك خاص يحققان هيكلاً مدمجاً وحجماً صغيراً ووزناً خفيفاً وضوضاء منخفضة وكفاءة عالية.',
        },
      },
    ],
  },
  sketches: {
    heading: { en: 'Product Specifications & Dimensions', ar: 'المواصفات والأبعاد' },
    intro: {
      en: 'All dimensions in mm — specific parameters are subject to the actual drawings.',
      ar: 'جميع الأبعاد بالمليمتر — المعلمات النهائية تخضع للرسومات التنفيذية.',
    },
    fullWidth: true,
    tables: [
      {
        id: 'product-specs',
        title: { en: '20 series product specifications', ar: 'مواصفات سلسلة 20' },
        columns: [
          { en: 'Model', ar: 'الموديل' },
          { en: 'Type', ar: 'النوع' },
          { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' },
          { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' },
        ],
        rows: [
          ['GRPS20', 'SMR passenger', '630~2000', '1.0~4.0'],
          ['GRPN20', 'MRL passenger', '630~1600', '1.0~2.0'],
          ['GROS', 'SMR panorama', '630~1600', '1.0~2.5'],
          ['GRON', 'MRL panorama', '630~1600', '1.0~2.0'],
          ['GRBS', 'SMR bed elevator', '1600~2000', '1.0~2.5'],
          ['GRBN', 'MRL bed elevator', '1600~2000', '1.0~1.75'],
        ],
      },
      {
        id: 'grps20-dimensions',
        title: { en: 'GRPS20 hoistway & machine room dimensions', ar: 'أبعاد بئر وغرفة آلات GRPS20' },
        columns: [
          { en: 'Persons', ar: 'الأشخاص' },
          { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' },
          { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' },
          { en: 'Car W×D', ar: 'المقصورة ع×ع' },
          { en: 'Door W×H', ar: 'الباب ع×ا' },
          { en: 'HW×HD', ar: 'البئر ع×ع' },
          { en: 'O.H', ar: 'الارتفاع العلوي' },
          { en: 'P.D', ar: 'عمق الحفرة' },
          { en: 'MR W×D', ar: 'غرفة الآلات ع×ع' },
          { en: 'Max H (m)', ar: 'أقصى ارتفاع (م)' },
        ],
        rows: [
          ['8', '630', '1.0 / 1.75', '1400×1100', '800×2100', '2000×1750', '4100 | 4300', '1300 | 1400', '2000×1750', '45 | 95'],
          ['10', '800', '1.0 / 1.75 / 2.0 / 2.5', '1400×1350', '800×2100', '2000×2000', '4100–4700', '1300–1700', '2000×2000', '45–150'],
          ['13', '1000', '1.0 – 4.0', '1600×1500', '900×2100', '2200×2150', '4100–5800', '1300–3200', '2200×2150', '45–180'],
          ['13*', '1000', '1.0 – 4.0', '1100×2100*', '900×2100', '2100×2500*', '4100–5800', '1300–3200', '2100×2500*', '45–180'],
          ['15', '1150', '1.0 – 4.0', '1700×1500', '1000×2100', '2300×2150', '4200–5800', '1350–3200', '2300×2150', '45–180'],
          ['16', '1250', '1.0 – 4.0', '1950×1400', '1100×2100', '2600×2050', '4200–5800', '1350–3200', '2600×2050', '45–180'],
          ['18', '1350', '1.0 – 4.0', '1950×1550', '1100×2100', '2600×2200', '4200–5800', '1350–3200', '2600×2200', '45–180'],
          ['21', '1600', '1.0 – 4.0', '1950×1750', '1100×2100', '2600×2400', '4200–5800', '1350–3200', '2600×2400', '45–180'],
          ['26', '2000', '1.0 – 4.0', '2100×1950', '1200×2100', '2800×2600', '4200–5800', '1350–3200', '2800×2600', '45–180'],
        ],
        remark: {
          en: 'Remark: * stretcher elevator — machine room height 2300mm for all capacities',
          ar: 'ملاحظة: * مصعد للنقالات — ارتفاع غرفة الآلات 2300 مم لجميع السعات',
        },
      },
      {
        id: 'grpn20-dimensions',
        title: { en: 'GRPN20 hoistway dimensions', ar: 'أبعاد بئر GRPN20' },
        columns: [
          { en: 'Persons', ar: 'الأشخاص' },
          { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' },
          { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' },
          { en: 'Car W×D', ar: 'المقصورة ع×ع' },
          { en: 'Door W×H', ar: 'الباب ع×ا' },
          { en: 'HW×HD', ar: 'البئر ع×ع' },
          { en: 'O.H', ar: 'الارتفاع العلوي' },
          { en: 'P.D', ar: 'عمق الحفرة' },
          { en: 'Max H (m)', ar: 'أقصى ارتفاع (م)' },
        ],
        rows: [
          ['8', '630', '1.0 / 1.75', '1400×1100', '800×2100', '2350×1600', '3900 | 4100', '1400 | 1500', '45 | 60'],
          ['10', '800', '1.0 / 1.75 / 2.0', '1400×1350', '800×2100', '2350×1750', '3900–4200', '1400–1700', '45–75'],
          ['13', '1000', '1.0 / 1.75 / 2.0', '1600×1500', '900×2100', '2550×1900', '3900–4200', '1400–1700', '45–75'],
          ['16', '1250', '1.0 / 1.75 / 2.0', '1950×1400', '1100×2100', '3100×1900', '4300–4500', '1500–1700', '45–75'],
          ['18', '1350', '1.0 / 1.75 / 2.0', '1950×1550', '1100×2100', '3100×2000', '4300–4500', '1500–1700', '45–75'],
          ['21', '1600', '1.0 / 1.75 / 2.0', '1950×1750', '1100×2100', '3100×2200', '4500–4700', '1500–1700', '45–75'],
        ],
      },
      {
        id: 'gros-shapes',
        title: { en: 'GROS panorama layouts', ar: 'مخططات مصعد البانوراما GROS' },
        columns: [
          { en: 'Shape', ar: 'الشكل' },
          { en: 'Persons', ar: 'الأشخاص' },
          { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' },
          { en: 'Car W×D', ar: 'المقصورة ع×ع' },
          { en: 'HW×HD', ar: 'البئر ع×ع' },
          { en: 'MR W×D', ar: 'غرفة الآلات ع×ع' },
        ],
        rows: [
          ['Square', '8 – 21', '630 – 1600', '1400×1100 – 1950×1750', '2200×1650 – 2750×2200', '2200×1650 – 2750×2200'],
          ['Chamfered', '13', '1000', '1400×1850', '2400×1110', '2400×2395'],
          ['Semi-circular', '10 / 13', '800 / 1000', '1200×1650 / 1400×1850', '2200×1110 / 2400×1110', '2200×2195 / 2400×2395'],
          ['Round', '15', '1150', '1200×2100', '2750×1060', '2750×2700'],
        ],
        remark: {
          en: 'Remark: blue parts indicate panorama glass',
          ar: 'ملاحظة: الأجزاء الزرقاء تدل على الزجاج البانورامي',
        },
      },
      {
        id: 'grbn-dimensions',
        title: { en: 'GRBN machine roomless bed elevator', ar: 'مصعد سرير المرضى GRBN بدون غرفة آلات' },
        columns: [
          { en: 'Persons', ar: 'الأشخاص' },
          { en: 'Capacity (kg)', ar: 'الحمولة (كلغ)' },
          { en: 'Traction', ar: 'نسبة الجرّ' },
          { en: 'Car W×D', ar: 'المقصورة ع×ع' },
          { en: 'Door', ar: 'الباب' },
          { en: 'HW×HD', ar: 'البئر ع×ع' },
          { en: 'O.H', ar: 'الارتفاع العلوي' },
          { en: 'Max H (m)', ar: 'أقصى ارتفاع (م)' },
        ],
        rows: [
          ['21', '1600', '2:1', '1400×2400', '1100×2100 Central', '2650×2800', '4300 | 4400', '45 | 60'],
          ['24', '1800', '4:1', '1500×2500', '1100×2100 Central', '2800×2900', '4500 | 4600', '45 | 60'],
          ['26', '2000', '4:1', '1500×2700', '1200×2100 Central', '2800×3100', '4500 | 4600', '45 | 60'],
          ['21', '1600', '2:1', '1400×2400', '1100×2100 Telescopic', '2550×2900', '4300 | 4400', '45 | 60'],
          ['24', '1800', '4:1', '1500×2500', '1200×2100 Telescopic', '2800×3000', '4500 | 4600', '45 | 60'],
          ['26', '2000', '4:1', '1500×2700', '1300×2100 Telescopic', '2800×3200', '4500 | 4600', '45 | 60'],
        ],
      },
    ],
    notes: {
      en: '1. All dimensions in mm unless noted. 2. Specific parameters are subject to the actual drawings. 3. Civil works: hoistway must be vertical with ventilation holes not less than 1% of hoistway area; pit should be waterproof; machine room temperature 5–40°C with live load not less than 7.0 kN/m²; grounding resistance not greater than 4Ω.',
      ar: '1. جميع الأبعاد بالمليمتر ما لم يُذكر خلاف ذلك. 2. المعلمات النهائية تخضع للرسومات التنفيذية. 3. الأعمال المدنية: يجب أن يكون البئر عمودياً مع فتحات تهوية لا تقل عن 1% من مساحة البئر؛ ويجب عزل الحفرة ضد المياه؛ ودرجة حرارة غرفة الآلات 5–40°م بحمل لا يقل عن 7.0 كن/م²؛ ومقاومة التأريض لا تزيد عن 4 أوم.',
    },
  },
}
