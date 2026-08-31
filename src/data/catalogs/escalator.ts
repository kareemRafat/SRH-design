import type { ServiceCatalog } from './types'

export const ESCALATOR_CATALOG: ServiceCatalog = {
  slug: 'escalators',
  hero: {
    title: { en: 'Escalators & Moving Walks', ar: 'السلالم الكهربائية والمشايات المتحركة' },
    subtitle: {
      en: 'GRE / GRM series — lead the development of future transport by innovative technology',
      ar: 'سلسلة GRE / GRM — نتصدر تطوير تنقل المستقبل بتقنيات مبتكرة',
    },
    badge: 'GRE / GRM',
    image: '/assets/images/escalator-hero.webp',
    imageAlt: {
      en: 'SRH escalator in a commercial building',
      ar: 'سلم كهربائي SRH في مبنى تجاري',
    },
  },
  overview: {
    heading: { en: 'Sicher Elevator', ar: 'شركة سيشر للمصاعد' },
    text: {
      en: 'Sicher Elevator Co., Ltd. is a comprehensive elevator manufacturing service provider covering development, manufacturing, sales, installation, maintenance and modernization of elevators, and holds the national highest-level production license for special equipment (A1). For nearly 20 years it has taken "all for safe reach" as its core philosophy, and SRH has become a well-received elevator brand in more than 80 countries and regions.',
      ar: 'شركة سيشر للمصاعد (Sicher) مزود خدمة تصنيع متكامل يشمل التطوير والتصنيع والبيع والتركيب والصيانة وتحديث المصاعد، وتحمل أعلى رخصة إنتاج وطنية للمعدات الخاصة (A1). منذ قرابة 20 عاماً وتبنّت "الوصول الآمن" فلسفة أساسية لها، وأصبحت SRH علامة مصاعد موثوقة في أكثر من 80 دولة ومنطقة.',
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
        en: 'Top 10 supplier in national government purchases for seven consecutive years',
        ar: 'من أفضل 10 موردين في المشتريات الحكومية لسبع سنوات متتالية',
      },
      {
        en: 'Core technology won the Science and Technology Advancement Award of Zhejiang Province',
        ar: 'حصلت التقنية الأساسية على جائزة التقدم العلمي والتقني لمقاطعة تشجيانغ',
      },
      {
        en: 'Drafted over 30 national and industrial elevator standards',
        ar: 'شاركت في إعداد أكثر من 30 معياراً وطنياً وصناعياً للمصاعد',
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
        en: 'Five-star enterprise undertaking social responsibility in China',
        ar: 'مؤسسة خمس نجوم تتبنى المسؤولية الاجتماعية في الصين',
      },
    ],
  },
  safety: {
    heading: { en: 'Safety System', ar: 'نظام السلامة' },
    intro: {
      en: 'Guarantee safety from every aspect — accompanying whole-heartedly. Looking amazing while endowing the building with vitality.',
      ar: 'ضمان السلامة من كل الجوانب — برفقة صادقة. مظهر مبهر يمنح المبنى حيوية.',
    },
    features: [
      {
        title: { en: 'Step chain protection', ar: 'حماية سلسلة الدرجات' },
        text: {
          en: 'When step chains are broken, extend excessively, or extend and shorten unexpectedly, the escalator will stop automatically.',
          ar: 'عند انكسار سلاسل الدرجات أو تمديدها الزائد أو تغيّر طولها بشكل مفاجئ، يتوقف السلم الكهربائي تلقائياً.',
        },
      },
      {
        title: { en: 'Handrail entrance protection', ar: 'حماية مدخل مسند اليد' },
        text: {
          en: 'The handrail entrance is installed with a safety device. When a foreign matter is clipped at the handrail entrance, the escalator will stop automatically.',
          ar: 'يُزوَّد مدخل مسند اليد بجهاز سلامة؛ فعند انحصار جسم غريب فيه يتوقف السلم الكهربائي تلقائياً.',
        },
      },
      {
        title: { en: 'Step sagging protection', ar: 'حماية ترهّل الدرجات' },
        text: {
          en: 'When steps or rollers sag unexpectedly, the escalator will stop automatically.',
          ar: 'عند ترهّل الدرجات أو البكرات بشكل غير متوقع، يتوقف السلم الكهربائي تلقائياً.',
        },
      },
      {
        title: { en: 'Missing step detection', ar: 'كشف الدرجات المفقودة' },
        text: {
          en: 'The driving station and the steering station are provided with a monitoring device respectively. When a missing step is detected, the escalator will stop immediately.',
          ar: 'تُزوَّد محطة القيادة ومحطة التوجيه بجهاز مراقبة؛ وعند اكتشاف درجة مفقودة يتوقف السلم فوراً.',
        },
      },
      {
        title: { en: 'Comb safety protection', ar: 'حماية أمان المشط' },
        text: {
          en: 'When there is a foreign matter between the moving step and the still comb, the safety switches monitoring both sides of the comb plate will be triggered and the whole escalator will stop automatically.',
          ar: 'عند وجود جسم غريب بين الدرجة المتحركة والمشط الثابت، تُفعِّل مفاتيح السلامة على جانبي لوحة المشط فيتوقف السلم بالكامل تلقائياً.',
        },
      },
    ],
  },
  products: {
    heading: { en: 'Products', ar: 'المنتجات' },
    image: '/assets/images/escalator-2.webp',
    imageAlt: {
      en: 'SRH escalator detail',
      ar: 'تفاصيل سلم كهربائي من SRH',
    },
    models: [
      {
        id: 'gre20',
        name: { en: 'GRE20 Escalator', ar: 'سلم كهربائي GRE20' },
        tagline: { en: 'Maximum rise up to 7.9 meters', ar: 'أقصى ارتفاع يصل إلى 7.9 أمتار' },
        footnote: {
          en: '* Only for H > 6m — ** Optional for indoor type',
          ar: '* فقط للارتفاعات الأكبر من 6م — ** اختياري للنوع الداخلي',
        },
        specs: [
          { label: { en: 'Application', ar: 'التطبيق' }, value: 'Indoor, outdoor · 16-hr operation daily' },
          { label: { en: 'Rise H (m)', ar: 'الارتفاع H (م)' }, value: '≤6 | ≤7.9' },
          { label: { en: 'Inclination (°)', ar: 'زاوية الميلان (°)' }, value: '35 | 30 | 27.3' },
          { label: { en: 'Step width (mm)', ar: 'عرض الدرجة (مم)' }, value: '600/800/1000' },
          { label: { en: 'Horizontal steps', ar: 'الدرجات الأفقية' }, value: '2/2 | 2/2 · 3/3*' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '0.5' },
          { label: { en: 'Main power', ar: 'التغذية الرئيسية' }, value: '380V AC / 50Hz / 3P' },
          { label: { en: 'Balustrade', ar: 'الحاجز' }, value: 'Tempered glass (10mm)' },
          { label: { en: 'Handrail', ar: 'مسند اليد' }, value: 'Black' },
          { label: { en: 'Balustrade height (mm)', ar: 'ارتفاع الحاجز (مم)' }, value: '900' },
          { label: { en: 'Inner & outer decking', ar: 'التكسية الداخلية والخارجية' }, value: 'Hairline stainless steel' },
          { label: { en: 'Skirting', ar: 'القاعدة الجانبية' }, value: 'Carbon steel / black powder' },
          { label: { en: 'Step', ar: 'الدرجة' }, value: 'Stainless steel' },
          { label: { en: 'Landing plate', ar: 'لوحة الهبوط' }, value: 'Stainless steel (anti-sliding)' },
          { label: { en: 'Illumination**', ar: 'الإضاءة**' }, value: 'Lighting under upper & lower landing steps' },
          { label: { en: 'Indicator', ar: 'المؤشر' }, value: 'Failure code indicator on control cabinet' },
          { label: { en: 'Safety', ar: 'السلامة' }, value: 'Emergency stop button · Inspection operation' },
          { label: { en: 'Operation', ar: 'التشغيل' }, value: 'Key switch' },
        ],
      },
      {
        id: 'gre30',
        name: { en: 'GRE30 Escalator', ar: 'سلم كهربائي GRE30' },
        tagline: { en: 'Maximum rise up to 13 meters', ar: 'أقصى ارتفاع يصل إلى 13 متراً' },
        footnote: { en: '* Optional for indoor type', ar: '* اختياري للنوع الداخلي' },
        specs: [
          { label: { en: 'Application', ar: 'التطبيق' }, value: 'Indoor, outdoor · 16-hr operation daily' },
          { label: { en: 'Rise H (m)', ar: 'الارتفاع H (م)' }, value: '≤13' },
          { label: { en: 'Inclination (°)', ar: 'زاوية الميلان (°)' }, value: '30 | 27.3' },
          { label: { en: 'Step width (mm)', ar: 'عرض الدرجة (مم)' }, value: '600/800/1000' },
          { label: { en: 'Horizontal steps', ar: 'الدرجات الأفقية' }, value: '3/3' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '0.5' },
          { label: { en: 'Main power', ar: 'التغذية الرئيسية' }, value: '380V AC / 50Hz / 3P' },
          { label: { en: 'Balustrade', ar: 'الحاجز' }, value: 'Tempered glass (10mm)' },
          { label: { en: 'Handrail', ar: 'مسند اليد' }, value: 'Black' },
          { label: { en: 'Balustrade height (mm)', ar: 'ارتفاع الحاجز (مم)' }, value: '900' },
          { label: { en: 'Inner & outer decking', ar: 'التكسية الداخلية والخارجية' }, value: 'Hairline stainless steel' },
          { label: { en: 'Skirting', ar: 'القاعدة الجانبية' }, value: 'Carbon steel / black powder' },
          { label: { en: 'Step', ar: 'الدرجة' }, value: 'Stainless steel' },
          { label: { en: 'Landing plate', ar: 'لوحة الهبوط' }, value: 'Stainless steel (anti-sliding)' },
          { label: { en: 'Illumination**', ar: 'الإضاءة**' }, value: 'Lighting under upper & lower landing steps' },
          { label: { en: 'Indicator', ar: 'المؤشر' }, value: 'Failure code indicator on control cabinet' },
          { label: { en: 'Safety', ar: 'السلامة' }, value: 'Emergency stop button · Inspection operation' },
          { label: { en: 'Operation', ar: 'التشغيل' }, value: 'Key switch' },
        ],
      },
      {
        id: 'gre50',
        name: { en: 'GRE50 Public Transport Escalator', ar: 'سلم كهربائي للنقل العام GRE50' },
        tagline: { en: 'Maximum rise up to 30 meters', ar: 'أقصى ارتفاع يصل إلى 30 متراً' },
        footnote: { en: '** Optional for indoor type', ar: '** اختياري للنوع الداخلي' },
        specs: [
          { label: { en: 'Application', ar: 'التطبيق' }, value: 'Indoor, outdoor · 20-hr operation daily' },
          { label: { en: 'Rise H (m)', ar: 'الارتفاع H (م)' }, value: '≤30' },
          { label: { en: 'Inclination (°)', ar: 'زاوية الميلان (°)' }, value: '30 | 27.3' },
          { label: { en: 'Step width (mm)', ar: 'عرض الدرجة (مم)' }, value: '600/800/1000' },
          { label: { en: 'Horizontal steps', ar: 'الدرجات الأفقية' }, value: '3/3' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '0.5' },
          { label: { en: 'Main power', ar: 'التغذية الرئيسية' }, value: '380V AC / 50Hz / 3P' },
          {
            label: { en: 'Balustrade', ar: 'الحاجز' },
            value: 'Stainless steel inclined balustrade; tempered glass (10mm)',
          },
          { label: { en: 'Handrail', ar: 'مسند اليد' }, value: 'Black' },
          { label: { en: 'Balustrade height (mm)', ar: 'ارتفاع الحاجز (مم)' }, value: '1000' },
          { label: { en: 'Skirting', ar: 'القاعدة الجانبية' }, value: 'Hairline stainless steel' },
          { label: { en: 'Step', ar: 'الدرجة' }, value: 'Aluminum alloy' },
          { label: { en: 'Landing plate', ar: 'لوحة الهبوط' }, value: 'Stainless steel (anti-sliding)' },
          { label: { en: 'Illumination**', ar: 'الإضاءة**' }, value: 'Lighting under upper & lower landing steps' },
          { label: { en: 'Indicator', ar: 'المؤشر' }, value: 'Failure code indicator on control cabinet' },
          { label: { en: 'Safety', ar: 'السلامة' }, value: 'Emergency stop button · Inspection operation' },
          { label: { en: 'Operation', ar: 'التشغيل' }, value: 'Key switch' },
        ],
      },
      {
        id: 'grm20b',
        name: { en: 'GRM20B Moving Walk', ar: 'مشاية متحركة GRM20B' },
        tagline: { en: 'Maximum horizontal span up to 120 meters', ar: 'مدى أفقي أقصاه 120 متراً' },
        specs: [
          { label: { en: 'Application', ar: 'التطبيق' }, value: 'Indoor, outdoor · 16-hr operation daily' },
          { label: { en: 'Horizontal span (m)', ar: 'المدى الأفقي (م)' }, value: '≤120' },
          { label: { en: 'Inclination (°)', ar: 'زاوية الميلان (°)' }, value: '0–6' },
          { label: { en: 'Pallet width (mm)', ar: 'عرض المنصة (مم)' }, value: '800/1000' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '0.5' },
          { label: { en: 'Main power', ar: 'التغذية الرئيسية' }, value: '380V AC / 50Hz / 3P' },
          { label: { en: 'Balustrade', ar: 'الحاجز' }, value: 'Tempered glass (10mm)' },
          { label: { en: 'Handrail', ar: 'مسند اليد' }, value: 'Black' },
          { label: { en: 'Balustrade height (mm)', ar: 'ارتفاع الحاجز (مم)' }, value: '900' },
          { label: { en: 'Inner & outer decking', ar: 'التكسية الداخلية والخارجية' }, value: 'Hairline stainless steel' },
          { label: { en: 'Skirting', ar: 'القاعدة الجانبية' }, value: 'Carbon steel / black powder' },
          { label: { en: 'Pallet', ar: 'المنصة' }, value: 'Stainless steel' },
          { label: { en: 'Landing plate', ar: 'لوحة الهبوط' }, value: 'Stainless steel (anti-sliding)' },
          { label: { en: 'Indicator', ar: 'المؤشر' }, value: 'Failure code indicator on control cabinet' },
          { label: { en: 'Safety', ar: 'السلامة' }, value: 'Emergency stop button · Inspection operation' },
          { label: { en: 'Operation', ar: 'التشغيل' }, value: 'Key switch' },
        ],
      },
      {
        id: 'grm20',
        name: { en: 'GRM20 Moving Walk', ar: 'مشاية متحركة GRM20' },
        tagline: { en: 'Inclination angle 10°–12°', ar: 'زاوية ميلان 10°–12°' },
        footnote: { en: '* Optional for indoor type', ar: '* اختياري للنوع الداخلي' },
        specs: [
          { label: { en: 'Application', ar: 'التطبيق' }, value: 'Indoor, outdoor · 16-hr operation daily' },
          { label: { en: 'Horizontal span (m)', ar: 'المدى الأفقي (م)' }, value: '≤50' },
          { label: { en: 'Inclination (°)', ar: 'زاوية الميلان (°)' }, value: '10/11/12' },
          { label: { en: 'Pallet width (mm)', ar: 'عرض المنصة (مم)' }, value: '800/1000' },
          { label: { en: 'Speed (m/s)', ar: 'السرعة (م/ث)' }, value: '0.5' },
          { label: { en: 'Main power', ar: 'التغذية الرئيسية' }, value: '380V AC / 50Hz / 3P' },
          { label: { en: 'Balustrade', ar: 'الحاجز' }, value: 'Tempered glass (10mm)' },
          { label: { en: 'Handrail', ar: 'مسند اليد' }, value: 'Black' },
          { label: { en: 'Balustrade height (mm)', ar: 'ارتفاع الحاجز (مم)' }, value: '900' },
          { label: { en: 'Inner & outer decking', ar: 'التكسية الداخلية والخارجية' }, value: 'Hairline stainless steel' },
          { label: { en: 'Skirting', ar: 'القاعدة الجانبية' }, value: 'Carbon steel / black powder' },
          { label: { en: 'Pallet', ar: 'المنصة' }, value: 'Stainless steel' },
          { label: { en: 'Landing plate', ar: 'لوحة الهبوط' }, value: 'Stainless steel (anti-sliding)' },
          { label: { en: 'Indicator', ar: 'المؤشر' }, value: 'Failure code indicator on control cabinet' },
          { label: { en: 'Illumination*', ar: 'الإضاءة*' }, value: 'Lighting under upper & lower landing pallets' },
          { label: { en: 'Safety', ar: 'السلامة' }, value: 'Emergency stop button · Inspection operation' },
          { label: { en: 'Operation', ar: 'التشغيل' }, value: 'Key switch' },
        ],
      },
    ],
  },
  optionalSpecs: {
    heading: { en: 'Optional Specification', ar: 'المواصفات الاختيارية' },
    appliesTo: 'GRE20 · GRE30 · GRE50 · GRM20B · GRM20',
    rows: [
      { label: { en: 'Handrail colors', ar: 'ألوان مسند اليد' }, value: 'Green, red, blue, yellow' },
      { label: { en: 'Balustrade height (mm)', ar: 'ارتفاع الحاجز (مم)' }, value: '1000' },
      {
        label: { en: 'Illumination', ar: 'الإضاءة' },
        value: 'Under landing steps/pallets · skirting lighting · comb lighting · handrail lighting',
      },
      { label: { en: 'Indicator', ar: 'المؤشر' }, value: 'Indicator on outer decking' },
      { label: { en: 'Direction indicator', ar: 'مؤشر الاتجاه' }, value: 'Running direction indicator on outer decking' },
      { label: { en: 'Step or pallets', ar: 'الدرجات أو المنصات' }, value: 'One-piece aluminum' },
      { label: { en: 'Landing plate', ar: 'لوحة الهبوط' }, value: 'Aluminum alloy (anti-sliding)' },
      { label: { en: 'Energy control', ar: 'التحكم بالطاقة' }, value: 'VVVF' },
      { label: { en: 'Automatic lubrication ★★', ar: 'التشحيم التلقائي ★★' }, value: 'Real-time lubrication of all transmission components' },
      { label: { en: 'External cladding', ar: 'التكسية الخارجية' }, value: 'Hairline St.St. / painted steel / glass / mirror St.St.' },
      { label: { en: 'Heating device ★★', ar: 'جهاز التدفئة ★★' }, value: 'Heats the escalator step route' },
      { label: { en: 'Speed (m/s) ★', ar: 'السرعة (م/ث) ★' }, value: '0.65' },
    ],
    footnote: {
      en: '★ Only for GRE30, GRE50 — ★★ Standard for outdoor type',
      ar: '★ فقط لـ GRE30 وGRE50 — ★★ قياسي للنوع الخارجي',
    },
  },
  safetyDevices: {
    heading: { en: 'Safety Devices', ar: 'أجهزة السلامة' },
    columns: [
      { en: 'Device', ar: 'الجهاز' },
      { en: 'Function', ar: 'الوظيفة' },
      { en: 'Type', ar: 'النوع' },
    ],
    rows: [
      {
        device: { en: 'Static electricity protection of step (pallet)', ar: 'حماية الكهرباء الساكنة للدرجة (المنصة)' },
        description: { en: 'Eliminates static electricity raised from running of the steps (pallets).', ar: 'يزيل الكهرباء الساكنة الناتجة عن حركة الدرجات (المنصات).' },
        kind: 'standard',
      },
      {
        device: { en: 'Static electricity protection of handrail', ar: 'حماية الكهرباء الساكنة لمسند اليد' },
        description: { en: 'Eliminates static electricity raised from running of the handrail.', ar: 'يزيل الكهرباء الساكنة الناتجة عن حركة مسند اليد.' },
        kind: 'standard',
      },
      {
        device: { en: 'Emergency stop button on entrance', ar: 'زر إيقاف الطوارئ عند المدخل' },
        description: { en: 'Stops the escalator (moving walk) against emergency raise.', ar: 'يوقف السلم الكهربائي (المشاية) عند حالات الطوارئ.' },
        kind: 'standard',
      },
      {
        device: { en: 'Handrail entry safety protection', ar: 'حماية أمان مدخل مسند اليد' },
        description: { en: 'Protects against sundries being jammed into the handrail entry.', ar: 'يحمي من انحصار الشوائب في مدخل مسند اليد.' },
        kind: 'standard',
      },
      {
        device: { en: 'Over speed protection', ar: 'حماية السرعة الزائدة' },
        description: { en: 'Protection against speed being over 20% of rated speed.', ar: 'حماية من تجاوز السرعة المقننة بنسبة 20%.' },
        kind: 'standard',
      },
      {
        device: { en: 'Under speed protection', ar: 'حماية انخفاض السرعة' },
        description: { en: 'Protection against speed being less than 20% of rated speed.', ar: 'حماية من انخفاض السرعة عن 20% من السرعة المقننة.' },
        kind: 'standard',
      },
      {
        device: { en: 'Unintentional reversal protection', ar: 'حماية الانعكاس غير المقصود' },
        description: { en: 'Protects against unintentional reversal of the direction of travel.', ar: 'يحمي من انعكاس اتجاه الحركة دون قصد.' },
        kind: 'standard',
      },
      {
        device: { en: 'Phase failure protection', ar: 'حماية انقطاع الأطوار' },
        description: { en: 'Protects against risk of phase failure.', ar: 'يحمي من خطر انقطاع أحد الأطوار.' },
        kind: 'standard',
      },
      {
        device: { en: 'Short circuit protection', ar: 'حماية القصر الكهربائي' },
        description: { en: 'Protects against risk of short circuit.', ar: 'يحمي من خطر القصر الكهربائي.' },
        kind: 'standard',
      },
      {
        device: { en: 'Over-load protection', ar: 'حماية الحمل الزائد' },
        description: { en: 'Protects against the motor continually over loading.', ar: 'يحمي المحرك من التحميل الزائد المستمر.' },
        kind: 'standard',
      },
      {
        device: { en: 'Step (pallet) loss protection', ar: 'حماية فقدان الدرجات (المنصات)' },
        description: { en: 'Stops when it monitors the step (pallet) loss.', ar: 'يتوقف عند رصد فقدان درجة (منصة).' },
        kind: 'standard',
      },
      {
        device: { en: 'Step (pallet) sagging protection', ar: 'حماية ترهّل الدرجات (المنصات)' },
        description: { en: 'Protects against steps (pallets) breakage and sagging.', ar: 'يحمي من كسر وترهّل الدرجات (المنصات).' },
        kind: 'standard',
      },
      {
        device: { en: 'Step (pallet) chains safety protection', ar: 'حماية سلامة سلاسل الدرجات (المنصات)' },
        description: { en: 'Protects against chains breakage or undue elongation.', ar: 'يحمي من كسر السلاسل أو تمدها الزائد.' },
        kind: 'standard',
      },
      {
        device: { en: 'Comb safety guard', ar: 'حارس أمان المشط' },
        description: { en: 'Protects against sundries being trapped at the comb.', ar: 'يحمي من حبس الشوائب عند المشط.' },
        kind: 'standard',
      },
      {
        device: { en: 'Inspection socket', ar: 'مقبس الفحص' },
        description: { en: 'Provides voltage to inspect or maintain.', ar: 'يوفر الجهد لأغراض الفحص والصيانة.' },
        kind: 'standard',
      },
      {
        device: { en: 'Machine room guard', ar: 'حاجز غرفة الآلات' },
        description: { en: 'A safety plate separates the machine room from movable parts to protect service personnel.', ar: 'لوحة أمان تفصل غرفة الآلات عن الأجزاء المتحركة لحماية فنيي الصيانة.' },
        kind: 'standard',
      },
      {
        device: { en: 'Emergency stop on control cabinet', ar: 'زر إيقاف الطوارئ على خزانة التحكم' },
        description: { en: 'Stops the unit against emergency raise during inspection and maintenance.', ar: 'يوقف الوحدة عند الطوارئ أثناء الفحص والصيانة.' },
        kind: 'standard',
      },
      {
        device: { en: 'Handrail speed-detection protection', ar: 'حماية كشف سرعة مسند اليد' },
        description: { en: 'Stops within 15 seconds when handrail speed is 15% lower than step (pallet) speed.', ar: 'يتوقف خلال 15 ثانية عندما تكون سرعة مسند اليد أقل بـ15% من سرعة الدرجات (المنصات).' },
        kind: 'standard',
      },
      {
        device: { en: 'Brake over-distance protection', ar: 'حماية المسافة الزائدة للفرامل' },
        description: { en: 'Prevents restart when brake distance is 1.2 times larger than stipulated.', ar: 'يمنع إعادة التشغيل عندما تكون مسافة الفرملة أكبر بـ1.2 مرة من المقررة.' },
        kind: 'standard',
      },
      {
        device: { en: 'Floor anti-start protection', ar: 'حماية عدم تشغيل أرضية المنصة' },
        description: { en: 'Stops when the floor plate is removed or opened.', ar: 'يتوقف عند إزالة لوحة الأرضية أو فتحها.' },
        kind: 'standard',
      },
      {
        device: { en: 'Main drive chains safety protection', ar: 'حماية سلامة سلاسل النقل الرئيسية' },
        description: { en: 'Protects against drive chains breakage or undue elongation.', ar: 'يحمي من كسر سلاسل النقل أو تمدها الزائد.' },
        kind: 'standard',
      },
      {
        device: { en: 'Skirting brush', ar: 'فرشاة القاعدة الجانبية' },
        description: { en: 'Brushes on skirting enhance passenger safety.', ar: 'فرش على القاعدة الجانبية لتعزيز سلامة الركاب.' },
        kind: 'standard',
      },
      {
        device: { en: 'Host brake detection', ar: 'كشف فرامل المحرك الرئيسية' },
        description: { en: 'Prevents start before release of the host brake is detected.', ar: 'يمنع التشغيل قبل التحقق من تحرر فرامل المحرك الرئيسية.' },
        kind: 'standard',
      },
      {
        device: { en: 'Skirting guard', ar: 'حاجز القاعدة الجانبية' },
        description: { en: 'Protects against foreign objects jammed into clearance between steps (pallets) and skirting.', ar: 'يحمي من دخول أجسام غريبة بين الدرجات (المنصات) والقاعدة الجانبية.' },
        kind: 'optional',
      },
      {
        device: { en: 'Anti-crawl device', ar: 'مانع تسلق الجهاز' },
        description: { en: 'Prevents passengers from crawling on the external handrail.', ar: 'يمنع الركاب من التسلق على مسند اليد الخارجي.' },
        kind: 'optional',
      },
      {
        device: { en: 'Anti-skid device', ar: 'مانع الانزلاق' },
        description: { en: 'Outer cover plate near handrail height prevents accidental crawl, skid and fall.', ar: 'غطاء خارجي بارتفاع مسند اليد يمنع التسلق والانزلاق والسقوط العرضي.' },
        kind: 'optional',
      },
      {
        device: { en: 'Arrester', ar: 'الحاجز الواقي' },
        description: { en: 'Prevents passengers entering the area between wall and handrail or between two units.', ar: 'يمنع دخول الركاب إلى المنطقة بين الحائط ومسند اليد أو بين وحدتين.' },
        kind: 'optional',
      },
      {
        device: { en: 'Protection baffle', ar: 'لوحة الحماية' },
        description: { en: 'Set at crossings of the outer handrail edge and any obstacle.', ar: 'تُركَّب عند تقاطعات الحافة الخارجية لمسند اليد مع أي عائق.' },
        kind: 'optional',
      },
      {
        device: { en: 'Auxiliary brake', ar: 'الفرامل المساعدة' },
        description: { en: 'Stops the unit when running direction is opposite to indication above 1.4 times rated speed.', ar: 'يوقف الوحدة عندما يكون اتجاه الحركة معاكساً للمؤشر بسرعة تتجاوز 1.4 مرة من السرعة المقننة.' },
        kind: 'optional',
      },
    ],
    footnote: { en: '* Standard applies to H > 6m', ar: '* ينطبق المعيار على الارتفاعات الأكبر من 6 أمتار' },
  },
  install: {
    heading: { en: 'Installation Arrangements', ar: 'ترتيبات التركيب' },
    items: [
      {
        title: { en: 'Single unit', ar: 'وحدة مفردة' },
        text: {
          en: 'Used to link two levels. Suitable for buildings with passenger traffic flowing mainly in one direction; flexible adjustment to traffic flow (up in the morning and down in the evening) is possible.',
          ar: 'تُستخدم لربط مستويين. مناسبة للمباني التي يسير فيها حركة الركاب في اتجاه واحد غالباً، مع مرونة في تعديل الاتجاه (صعوداً صباحاً ونزولاً مساءً).',
        },
      },
      {
        title: { en: 'Parallel, interrupted arrangement (two-way traffic)', ar: 'ترتيب متوازٍ متقطع (حركة ثنائية الاتجاه)' },
        text: {
          en: 'Used mainly in department stores and public transport buildings with heavy traffic volume. With three or more escalators the traveling direction can be reversed according to traffic flow; economical since no inner lateral claddings are required.',
          ar: 'تُستخدم أساساً في المتاجر الكبرى ومحاور النقل العام ذات الحركة الكثيفة. مع ثلاث سلالم أو أكثر يمكن عكس اتجاه الحركة بحسب تدفق الركاب؛ وهي اقتصادية لأنها لا تتطلب تكسية جانبية داخلية.',
        },
      },
      {
        title: { en: 'Continuous arrangement (one-way traffic)', ar: 'ترتيب متصل (حركة أحادية الاتجاه)' },
        text: {
          en: 'Used mainly in smaller department stores to link three sales levels. Requires more space than the interrupted arrangement.',
          ar: 'تُستخدم أساساً في المتاجر الأصغر لربط ثلاثة مستويات تجارية. تتطلب مساحة أكبر من الترتيب المتقطع.',
        },
      },
      {
        title: { en: 'Crisscross, continuous arrangement (two-way traffic)', ar: 'ترتيب متقاطع متصل (حركة ثنائية الاتجاه)' },
        text: {
          en: 'Used mainly in major department stores, public buildings and transport hubs where transport times between levels should be kept to a minimum.',
          ar: 'تُستخدم أساساً في المتاجر الكبرى والمباني العامة ومحاور النقل حيث يجب تقليص زمن التنقل بين المستويات إلى أدنى حد.',
        },
      },
      {
        title: { en: 'Interrupted arrangement (one-way traffic)', ar: 'ترتيب متقطع (حركة أحادية الاتجاه)' },
        text: {
          en: 'Somewhat inconvenient for users but advantageous for store owners: the short detour and spatial separation between up and down travel ideally leads customers past advertising displays.',
          ar: 'أقل راحة للمستخدمين لكنها مفيدة لأصحاب المتاجر: الطريق الملتف والفصل المكاني بين الصعود والنزول يقودان العملاء أمام واجهات العروض الإعلانية بشكل مثالي.',
        },
      },
    ],
  },
  sketches: {
    heading: { en: 'Construction Sketches — Supporting Forces', ar: 'المخططات الإنشائية — قوى المساند' },
    intro: {
      en: 'Indoor and outdoor types — dimensions in mm, subject to change without notice.',
      ar: 'الأنواع الداخلية والخارجية — الأبعاد بالمليمتر وقابلة للتغيير دون إشعار.',
    },
    tables: [
      {
        id: 'gre20-27',
        title: { en: '27.3° GRE20 escalator', ar: 'سلم كهربائي GRE20 بميل 27.3°' },
        columns: [
          { en: 'Step width', ar: 'عرض الدرجة' },
          { en: 'R1 (kN)', ar: 'R1 (kN)' },
          { en: 'R2 (kN)', ar: 'R2 (kN)' },
          { en: 'Rise', ar: 'الارتفاع' },
        ],
        rows: [
          ['600', '3.5xL+15.5', '3.5xL+10', '3000/3500'],
          ['800', '4xL+17', '4xL+11', '4000/4500'],
          ['1000', '4.5xL+18.5', '4.5xL+11.5', '5000/6000'],
        ],
        remark: { en: 'Remark: L measured by m', ar: 'ملاحظة: تُقاس L بالمتر' },
      },
      {
        id: 'gre20-30',
        title: { en: '30° GRE20 escalator', ar: 'سلم كهربائي GRE20 بميل 30°' },
        columns: [
          { en: 'Step width', ar: 'عرض الدرجة' },
          { en: 'R1 (kN)', ar: 'R1 (kN)' },
          { en: 'R2 (kN)', ar: 'R2 (kN)' },
          { en: 'Rise', ar: 'الارتفاع' },
        ],
        rows: [
          ['600', '3.5xL+15.5', '3.5xL+10', '3000/3500'],
          ['800', '4xL+17', '4xL+11', '4000/4500'],
          ['1000', '4.5xL+18.5', '4.5xL+11.5', '5000/6000'],
        ],
        remark: { en: 'Remark: L measured by m', ar: 'ملاحظة: تُقاس L بالمتر' },
      },
      {
        id: 'gre30',
        title: { en: '27.3° / 30° GRE30 escalator', ar: 'سلم كهربائي GRE30 بميل 27.3° / 30°' },
        columns: [
          { en: 'Step width', ar: 'عرض الدرجة' },
          { en: 'R1 (kN)', ar: 'R1 (kN)' },
          { en: 'R2 (kN)', ar: 'R2 (kN)' },
          { en: 'R3 (kN)', ar: 'R3 (kN)' },
        ],
        rows: [
          ['800', '4.5xL2+17.1', '4.5xL1+8.8', '4.5xL+11.5'],
          ['1000', '5xL2+18.5', '5xL1+9.5', '5.2xL+12.5'],
        ],
        remark: {
          en: 'Remark: L, L1, L2 measured by m; value of L1 & L2 less than 15m',
          ar: 'ملاحظة: تُقاس L وL1 وL2 بالمتر؛ وقيمة L1 وL2 أقل من 15 متراً',
        },
      },
      {
        id: 'grm-moving-walk',
        title: { en: '0° GRM20B / 10°–12° GRM20 moving walk', ar: 'مشاية GRM20B بميل 0° / GRM20 بميل 10°–12°' },
        columns: [
          { en: 'Pallet width', ar: 'عرض المنصة' },
          { en: 'R1', ar: 'R1' },
          { en: 'R2', ar: 'R2' },
          { en: 'R3', ar: 'R3' },
        ],
        rows: [
          ['800', '32kN', '31kN', '48kN'],
          ['1000', '36kN', '33kN', '55kN'],
        ],
      },
    ],
    notes: {
      en: '1. Applies to civil construction of a single arrangement escalator/moving walk. 2. Upper end of truss should be extended 417mm when step width 600mm is chosen. 3. Sizes measured in mm; some sizes may change without notice.',
      ar: '1. تنطبق على الإنشاء المدني لسلم/مشاية بترتيب مفرد. 2. يجب تمديد النهاية العليا للهيكل بمقدار 417 مم عند اختيار عرض درجة 600 مم. 3. الأبعاد بالمليمتر وقد تتغير بعض الأحجام دون إشعار.',
    },
  },
}
