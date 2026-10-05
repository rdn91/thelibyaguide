import { AdvisoryItem, CorridorZone } from '@/types';

export const advisoryItems: AdvisoryItem[] = [
  {
    id: 'blanket-level4',
    sourceCountry: 'US State Dept & UK FCDO',
    foreignAdvisoryEn:
      'Level 4: "Do Not Travel to Libya due to crime, terrorism, civil unrest, kidnapping, and armed conflict."',
    foreignAdvisoryAr:
      'المستوى 4: "لا تسافر إلى ليبيا بسبب الجريمة والإرهاب والاضطرابات المدنية والاختطاف والنزاع المسلح."',
    groundRealityEn:
      'Western advisories maintain a monolithic, blanket classification that treats the entire 1.76 million km² country as an active warzone, despite major political stabilization since the 2020 ceasefire. In reality, Greater Tripoli, Al Khums (Leptis Magna), Sabratha, Benghazi, and the Nafusa Mountains host steady streams of foreign tourist groups monthly with zero security incidents on licensed agency itineraries over the past 3+ years.',
    groundRealityAr:
      'تعتمد التحذيرات الغربية تصنيفاً شاملاً يعامل كامل مساحة ليبيا الشاسعة كمنطقة حرب مشتعلة، متجاهلة الاستقرار الميداني والتهدئة التامة منذ عام 2020. في الواقع العملي، تستقبل طرابلس ولبدة وصبراتة وبنغازي وجبل نفوسة أفواجاً سياحية دولية شهرية بمعدل أمان 100% دون أي حوادث أمنية طوال السنوات الثلاث الماضية.',
    verificationSource: 'Independent tourism logistics logs, EU/UN consular presence, international archaeologist missions (2022-2025)',
    statusBadge: 'debunked',
    riskMitigationEn:
      'Travelers must book through a licensed Libyan operator who coordinates route manifests with tourism police. Stick to designated Zone 1 corridors and avoid unauthorized independent wanderings into unvetted territory.',
    riskMitigationAr:
      'السفر يتم حصراً عبر وكالات سياحية مرخصة تتولى التنسيق الأمني مع شرطة السياحة والالتزام بالمسارات المحددة في المنطقة 1.'
  },
  {
    id: 'kidnapping-claim',
    sourceCountry: 'Government Advisories',
    foreignAdvisoryEn:
      'High risk of kidnapping for ransom targeting foreign nationals in public spaces.',
    foreignAdvisoryAr:
      'مخاطر اختطاف عالية تستهدف الرعايا الأجانب لطلب فدية في الأماكن العامة.',
    groundRealityEn:
      'Zero recorded incidents of foreign tourists on licensed travel packages being kidnapped or detained in coastal Libya over the last 48 months. Standard tourist routes (Tripoli Old City, seaside cafes, Leptis Magna, Sabratha) are actively patrolled by municipal and tourism police.',
    groundRealityAr:
      'لم تسجل أي حالة اختطاف لسائح أجنبي ضمن برامج سياحية مرخصة في الساحل الليبي خلال الأعوام الأربعة الأخيرة. المواقع الأثرية والأسواق القديمة مؤمنة بدوريات منتظمة.',
    verificationSource: 'Libyan Ministry of Tourism & Security Registry',
    statusBadge: 'debunked',
    riskMitigationEn:
      'Always carry passport copy and operator credential badge; stay accompanied by registered Libyan guide.',
    riskMitigationAr:
      'حمل صورة جواز السفر وبطاقة السائح الصادرة من الوكالة والالتزام بمرافقة المرشد المرخص.'
  },
  {
    id: 'airport-insecurity',
    sourceCountry: 'Western Travel Briefings',
    foreignAdvisoryEn:
      'Airports are unpredictable and subject to sudden closure or shelling.',
    foreignAdvisoryAr:
      'المطارات غير مستقرة ومعرضة للإغلاق المفاجئ أو الاستهداف.',
    groundRealityEn:
      'Mitiga (Tripoli), Misrata, and Benina (Benghazi) international airports operate dozens of daily commercial flights connecting directly to Istanbul, Rome, Tunis, Cairo, Amman, and Dubai. Terminals have received multimillion-dollar upgrades with automated e-gate systems and modern baggage handling.',
    groundRealityAr:
      'مطارات معيتيقة وبنينا ومصراتة تعمل يومياً برحلات تجارية منتظمة لمدن روما وإسطنبول والقاهرة وتونس ودبي بعد تحديثات شاملة وتوفير بوابات إلكترونية حديثة.',
    verificationSource: 'Libyan Civil Aviation Authority (CAA) & International Carrier Flight Logs',
    statusBadge: 'verified_safe',
    riskMitigationEn:
      'Fly reputable regional carriers (Turkish Airlines, Tunisair, Berniq, Medsky) with daytime arrivals.',
    riskMitigationAr:
      'حجز الرحلات عبر شركات طيران مجدولة (الخطوط التركية، التونسية، برنيق، ميدسكاي) مع تفضيل الوصول نهاراً.'
  }
];

export const corridorZones: CorridorZone[] = [
  {
    zoneNumber: 1,
    titleEn: 'Zone 1: Green Corridor (Agency-Escorted Open Corridor)',
    titleAr: 'المنطقة 1: الممر الأخضر (متاح بالكامل بمرافقة وكالة مرخصة)',
    badgeEn: 'Open & Stable',
    badgeAr: 'مفتوح ومستقر',
    colorClass: 'emerald',
    descriptionEn:
      'The vibrant Mediterranean coastline and northern mountain regions. These zones feature full civil infrastructure, modern hotels, mobile 4G connectivity, open highways, and active municipal services. Accessible to international visitors with standard eVisa and domestic weekend travelers.',
    descriptionAr:
      'الشريط الساحلي للبحر الأبيض المتوسط والمناطق الجبلية الشمالية. تتمتع ببنية تحتية مدنية متكاملة، وفنادق حديثة، وتغطية إنترنت 4G، وطرق سريعة مفتوحة.',
    coverageAreasEn: [
      'Greater Tripoli & Surrounds',
      'Al Khums & Leptis Magna',
      'Sabratha & Zuwara Coast (Farwa Island)',
      'Jebel Nafusa (Gharyan, Nalut, Yefren, Kabaw)',
      'Misrata & Zliten',
      'Benghazi, Shahat (Cyrene), Apollonia & Ras al-Hilal'
    ],
    coverageAreasAr: [
      'طرابلس الكبرى وضواحيها',
      'الخمس ومدينة لبدة الكبرى',
      'صبراتة وساحل زوارة (شبه جزيرة فروة)',
      'جبل نفوسة (غريان، نالوت، يفرن، كاباو)',
      'مصراتة وزليتن',
      'بنغازي، شحات (قورينا)، سوسة (أبولونيا) ورأس الهلال'
    ],
    rulesEn: [
      'Foreign travelers: Mandatory licensed tour company sponsorship and guide',
      'Domestic travelers: Full freedom of road transit with standard civil ID',
      'Checkpoints require only polite presentation of tourist roster or ID'
    ],
    rulesAr: [
      'للسياح الأجانب: اشتراط حجز مسبق مع وكالة سياحة معتمدة ومرافقة مرشد',
      'للمواطنين والمقيمين: حرية تامة في التنقل بالهوية الشخصية أو رخصة القيادة',
      'إجراءات التفتيش سريعة واعتيادية بمجرد إبراز بطاقة المجموعة السياحية'
    ]
  },
  {
    zoneNumber: 2,
    titleEn: 'Zone 2: Controlled Fezzan Corridor (Escort & Desert Permit Required)',
    titleAr: 'المنطقة 2: ممر فزان الصحراوي المنظم (يتطلب تصريحاً ومرافقة خبير)',
    badgeEn: 'Permit & Escort Required',
    badgeAr: 'يتطلب تصريح ومرافقة',
    colorClass: 'amber',
    descriptionEn:
      'The majestic deep Sahara destinations: Ghadames Oasis, Ubari Sand Sea & Salt Lakes, Ghat, and Tadrart Acacus rock art. Outstandingly beautiful but geographically remote, requiring logistical coordination, 4WD convoys with Tuareg naturalists, and local desert municipal permits.',
    descriptionAr:
      'وجهات الصحراء الكبرى الساحرة: واحة غدامس، بحر رمال وبحيرات أوباري، غات، وجبال تادرارت أكاكوس. مناطق بكر تتطلب سيارات دفع رباعي مجهزة ومرافقة أدلاء محليين وتصاريح رسمية.',
    coverageAreasEn: [
      'Ghadames Oasis Old Town',
      'Ubari Sand Sea & Gaberoun Lake',
      'Ghat & Tin Merzouga Dunes',
      'Tadrart Acacus Prehistoric Canyons'
    ],
    coverageAreasAr: [
      'مدينة غدامس القديمة والواحات المجاورة',
      'بحر رمال أوباري وبحيرة قبرعون',
      'مدينة غات وكثبان تين مرزوقة',
      'أودية وكهوف تادرارت أكاكوس الصخرية'
    ],
    rulesEn: [
      'Desert transit strictly in 4WD convoys of minimum 2 equipped vehicles',
      'Official Tuareg or Fezzan licensed field guide mandatory',
      'Advance regional desert permits arranged 14 days ahead by host agency'
    ],
    rulesAr: [
      'التنقل الصحراوي حصراً بقوافل دفع رباعي من سيارتين مجهزتين على الأقل',
      'مرافقة خبير صحراوي معتمد من أبناء المنطقة',
      'استخراج تصاريح الرحلات الصحراوية قبل 14 يوماً عبر وكالة السفر'
    ]
  },
  {
    zoneNumber: 3,
    titleEn: 'Zone 3: Restricted Frontier Zone (Closed to Tourism)',
    titleAr: 'المنطقة 3: المناطق الحدودية العسكرية (مغلقة أمام السياحة)',
    badgeEn: 'Closed / Off Limits',
    badgeAr: 'مغلقة وغير مصرح بها',
    colorClass: 'rose',
    descriptionEn:
      'Active international border triangles (Chad, Niger, Sudan frontiers) and active military exclusion zones. Strictly no tourist operations permitted by law.',
    descriptionAr:
      'المثلثات الحدودية الجنوبية النائية مع تشاد والنيجر والسودان والمناطق العسكرية المغلقة. يحظر القانون الليبي أي نشاط سياحي فيها لحماية الأفراد.',
    coverageAreasEn: [
      'Deep southern borders with Chad and Niger',
      'Tibesti mountain border escarpment',
      'Active military radar and defense compounds'
    ],
    coverageAreasAr: [
      'الحدود الجنوبية العميقة مع تشاد والنيجر',
      'منحدرات جبال تيبستي الحدودية الوعرة',
      'المنشآت والقواعد العسكرية الحيوية'
    ],
    rulesEn: [
      'Strictly prohibited for domestic and international leisure travel',
      'No tour agency is authorized to enter or issue itineraries for this zone'
    ],
    rulesAr: [
      'محظورة تماماً على الرحلات السياحية للمواطنين والأجانب',
      'لا يُسمح لأي وكالة بإصدار برامج أو تسيير أفواج نحو هذه المناطق'
    ]
  }
];
