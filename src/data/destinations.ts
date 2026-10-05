import { Destination } from '@/types';

export const destinations: Destination[] = [
  // --- UNESCO WORLD HERITAGE SITES ---
  {
    id: 'leptis-magna',
    slug: 'leptis-magna',
    titleEn: 'Leptis Magna',
    titleAr: 'لبدة الكبرى',
    category: 'unesco',
    region: 'tripolitania',
    city: 'Al Khums',
    cityAr: 'الخمس',
    coordinates: { lat: 32.6372, lng: 14.2967 },
    descriptionEn:
      'The jewel of Roman North Africa and birth city of Emperor Septimius Severus. Leptis Magna features the world’s most intact Roman civic architecture: the grand Arch of Septimius Severus, marble-clad Hadrianic Baths, the towering Severan Basilica, an ornate colonnaded street, and an amphitheater carved directly into natural seaside topography.',
    descriptionAr:
      'درة شمال أفريقيا الرومانية ومسقط رأس الإمبراطور سيبتيموس سيفيروس. تعد لبدة الكبرى الموقع الروماني الأكثر اكتمالاً في حوض البحر الأبيض المتوسط، وتضم قوس النصر، وحمامات هادريان الرخامية، والبازيليكا السيفيرية الشامخة، والشارع المعمد، والمسرح الروماني المطل مباشرة على البحر.',
    historicalEra: 'Phoenician & Roman Empire (7th c. BCE - 3rd c. CE)',
    safetyTier: 'agency_escorted',
    crowdMetricEn: 'Equivalent scale to Pompeii — with 99.4% fewer visitors per day',
    crowdMetricAr: 'بحجم يضاهي بومبي الإيطالية — وبنسبة زوار أقل بـ 99.4% يومياً لتجربة استكشاف حصرية تماماً',
    featuredImage: 'https://images.unsplash.com/photo-1548625361-195fe578716b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1548625361-195fe578716b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1200&auto=format&fit=crop',
    ],
    highlightsEn: [
      'Arch of Septimius Severus with intricate limestone relief carvings',
      'Hadrianic Baths with preserved hypocaust underground heating systems',
      'Severan Basilica & Forum adorned with Gorgon Medusa medallions',
      '16,000-seat amphitheater with panoramic Mediterranean horizon views'
    ],
    highlightsAr: [
      'قوس سيبتيموس سيفيروس ذو النقوش الحجرية البديعة',
      'حمامات هادريان ذات أنظمة التدفئة الأرضية المحفوظة بالكامل',
      'بازيليكا سيفيروس وساحة الفوروم المزينة برؤوس الميدوزا المنحوتة',
      'المسرح الروماني الذي يتسع لـ 16,000 متفرج بإطلالة ساحرة على المتوسط'
    ],
    practicalInfo: {
      admissionHoursEn: '08:30 AM – 05:30 PM (Daily)',
      admissionHoursAr: '08:30 صباحاً – 05:30 مساءً (يومياً)',
      nearestFuel: 'Al Khums Coastal Exit (2.4 km)',
      nearestHospital: 'Al Khums Central Teaching Hospital (4.5 km)',
      bestSeasonEn: 'October to April (Mild Mediterranean breeze, 18-24°C)',
      bestSeasonAr: 'من أكتوبر إلى أبريل (طقس معتدل 18-24 مئوية)',
      accessRoadStatusEn: 'Dual-carriageway coastal highway in excellent condition from Tripoli (120 km / 90 mins)',
      accessRoadStatusAr: 'طريق ساحلي مزدوج ممتاز ومؤمن انطلاقاً من طرابلس (120 كم / 90 دقيقة)',
      recommendedStayHours: 5
    },
    tags: ['UNESCO', 'Roman', 'Archaeology', 'Coastal', 'Must-See']
  },
  {
    id: 'sabratha',
    slug: 'sabratha',
    titleEn: 'Sabratha',
    titleAr: 'صبراتة الأثرية',
    category: 'unesco',
    region: 'tripolitania',
    city: 'Sabratha',
    cityAr: 'صبراتة',
    coordinates: { lat: 32.8055, lng: 12.4842 },
    descriptionEn:
      'Famed for its world-renowned three-story Roman theater built directly on the Mediterranean seashore. Originally a Phoenician trade post, Sabratha evolved into an imperial Roman maritime capital featuring temples dedicated to Liber Pater, Isis, and Serapis, along with vibrant mosaic floors now conserved in the adjacent site museum.',
    descriptionAr:
      'تشتهر بمسرحها الروماني الأسطوري ذي الأعمدة الوردية ثلاثية الطوابق المنتصبة قبالة أمواج البحر الأبيض المتوسط. نشأت كمركز تجاري فينيقي ثم ازدهرت في العهد الروماني، وتضم معابد إيزيس وسيرابيس وحمامات الفسيفساء ومتحف الآثار.',
    historicalEra: 'Phoenician & Roman (500 BCE - 4th c. CE)',
    safetyTier: 'agency_escorted',
    crowdMetricEn: 'Voted one of the top 3 coastal ancient theaters globally; virtually zero tour bus congestion',
    crowdMetricAr: 'من أروع المسارح الرومانية البحرية في العالم دون أي ازدحامات سياحية خانقة',
    featuredImage: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Iconic 3-tier Roman Theater scaenae frons with 108 Corinthian marble columns',
      'Temple of Isis directly overlooking turquoise Mediterranean breakers',
      'Seaside Christian Byzantine basilica with preserved polychrome mosaics',
      'Archaeological museum with Roman maritime amphorae and sculptures'
    ],
    highlightsAr: [
      'واجهة المسرح الروماني المكونة من 108 أعمدة كورنثية رخامية',
      'معبد إيزيس المطل مباشرة على زرقة البحر',
      'البازيليكا البيزنطية ذات الأرضيات الفسيفسائية الملونة',
      'المتحف الأثري الذي يضم تماثيل رخامية نادرة وجراراً رومانية بحرية'
    ],
    practicalInfo: {
      admissionHoursEn: '09:00 AM – 05:00 PM (Daily)',
      admissionHoursAr: '09:00 صباحاً – 05:00 مساءً (يومياً)',
      nearestFuel: 'Sabratha City Center roundabout (1.8 km)',
      nearestHospital: 'Sabratha Teaching Hospital (3.2 km)',
      bestSeasonEn: 'September to May',
      bestSeasonAr: 'من سبتمبر إلى مايو',
      accessRoadStatusEn: 'Paved coastal highway West of Tripoli (70 km / 60 mins)',
      accessRoadStatusAr: 'طريق ساحلي سريع غرب طرابلس (70 كم / 60 دقيقة)',
      recommendedStayHours: 3
    },
    tags: ['UNESCO', 'Roman', 'Theater', 'Mediterranean', 'Day-Trip']
  },
  {
    id: 'cyrene',
    slug: 'cyrene',
    titleEn: 'Cyrene (Shahat)',
    titleAr: 'قورينا (شحات)',
    category: 'unesco',
    region: 'cyrenaica',
    city: 'Shahat',
    cityAr: 'شحات',
    coordinates: { lat: 32.8222, lng: 21.8556 },
    descriptionEn:
      'Perched atop the lush green ravines of the Jebel Akhdar (Green Mountain), Cyrene was one of the greatest intellectual and cultural capitals of the ancient Hellenic world. Named after the nymph Cyrene, this monumental city hosts the colossal Temple of Zeus (larger than the Parthenon in Athens), the Sanctuary of Apollo, and terraced Greek theaters descending toward the sea.',
    descriptionAr:
      'تتربع قورينا على قمم الجبل الأخضر المكسوة بأشجار الصنوبر والعرعر. كانت إحدى أعظم العواصم الفكرية في العالم الإغريقي، وتضم معبد زيوس الأكبر حجماً من البارثينون في أثينا، ونبع أبولو المقدس، والمدرجات الإغريقية المطلة على البحر وسهل المرج.',
    historicalEra: 'Ancient Greece (Founded 631 BCE by Thera settlers) & Roman',
    safetyTier: 'agency_escorted',
    crowdMetricEn: 'More extensive than Delphi or Olympia; complete peace and pastoral scenery',
    crowdMetricAr: 'تفوق دلفي وأولمبيا بمساحتها وجمال تلالها الخضراء وأجوائها الهادئة الساحرة',
    featuredImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Colossal Temple of Zeus, matching the scale of the Athenian Parthenon',
      'Sanctuary and sacred fountain of Apollo high in the mountain ridge',
      'The Agora and Stoa with original inscribed stone decrees',
      'Extensive cliff-cut Hellenistic Necropolis of over 1,200 rock-cut tombs'
    ],
    highlightsAr: [
      'معبد زيوس الضخم الذي يضاهي معبد البارثينون في أثينا',
      'مزار ونبع أبولو المقدس على حافة الجرف الجبلي',
      'الأغورا الرخامية والأروقة ذات النقوش الدستورية القديمة',
      'المقابر الملكية المنحوتة في صخور الجبل الأخضر (أكثر من 1200 مدفن)'
    ],
    practicalInfo: {
      admissionHoursEn: '08:30 AM – 05:00 PM',
      admissionHoursAr: '08:30 صباحاً – 05:00 مساءً',
      nearestFuel: 'Shahat town center (1 km)',
      nearestHospital: 'Al-Bayda Central Medical Complex (18 km)',
      bestSeasonEn: 'March to June (Wildflower blooms across the Green Mountain)',
      bestSeasonAr: 'من مارس إلى يونيو (موسم تفتح أزهار الجبل الأخضر)',
      accessRoadStatusEn: 'Scenic mountain highways from Benghazi (220 km) or Al-Bayda (18 km)',
      accessRoadStatusAr: 'طرق جبلية ذات مناظر خلابة من بنغازي (220 كم) أو البيضاء (18 كم)',
      recommendedStayHours: 6
    },
    tags: ['UNESCO', 'Greek', 'Green Mountain', 'Temples', 'Nature']
  },
  {
    id: 'ghadames-old-town',
    slug: 'ghadames-old-town',
    titleEn: 'Old Town Ghadames',
    titleAr: 'مدينة غدامس القديمة',
    category: 'unesco',
    region: 'fezzan',
    city: 'Ghadames',
    cityAr: 'غدامس',
    coordinates: { lat: 30.1333, lng: 9.5000 },
    descriptionEn:
      'Known as the "Pearl of the Desert", Ghadames is a masterclass in Saharan bio-climatic architecture. A labyrinth of covered, cool, whitewashed mudbrick corridors designed to mitigate intense desert heat. The ground floor was reserved for domestic chores and storage, subterranean streets shielded pedestrians from sun and sandstorms, and interconnected rooftops formed an exclusive private domain for women.',
    descriptionAr:
      'تُلقب بلؤلؤة الصحراء، وتعد إحدى أروع المدن الطينية الواحية في العالم. صُممت بنظام معماري فريد للتكيف مع مناخ الصحراء: أزقة مغطاة باردة ومطلية بالجير، طوابق سفلية لحفظ المؤن، وشبكة أسطح علوية متصلة كانت مخصصة لتنقل وحياة النساء الاجتماعية بحرية تامة.',
    historicalEra: 'Berber & Trans-Saharan Caravan Era (1st c. CE - 19th c.)',
    safetyTier: 'permit_required',
    crowdMetricEn: 'Preserved authentic oasis town frozen in time; serene tranquility without commercial vendors',
    crowdMetricAr: 'مدينة واحات تاريخية أصيلة متكاملة تحفظ عادات وقيم قوافل تجارة الصحراء الكبرى',
    featuredImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Interconnected rooftop corridors providing a secret pedestrian network',
      'Traditional Berber homes with intricate geometric mirrors and brass plates',
      'Ancient Ain Al-Faras spring with its ingenious water-distribution clock system',
      'Sunset tea ceremonies atop the massive golden dunes of the Grand Erg'
    ],
    highlightsAr: [
      'شبكة الأسطح المترابطة التي تتيح التجول فوق المدينة بأكملها',
      'البيوت الغدامسية المزخرفة بالمرايا والأطباق النحاسية المنقوشة',
      'عين الفرس التاريخية ونظام السواقي الفلكي الدقيق لتوزيع المياه',
      'جلسات شاي الغروب البدوية فوق كثبان العرق الشرقي الكبير'
    ],
    practicalInfo: {
      admissionHoursEn: 'Guided access daylight hours (Official local Berber guide mandatory)',
      admissionHoursAr: 'الزيارة خلال ساعات النهار (يشترط مرشد غدامسي محلي مرخص)',
      nearestFuel: 'Ghadames Oasis central station (1 km)',
      nearestHospital: 'Ghadames Rural General Hospital (2 km)',
      bestSeasonEn: 'November to March (Cool desert days, starry nights)',
      bestSeasonAr: 'من نوفمبر إلى مارس (أجواء شتوية صحراوية منعشة)',
      accessRoadStatusEn: 'Paved desert road from Tripoli (600 km) via Nalut or regional flight to Ghadames Airstrip',
      accessRoadStatusAr: 'طريق معبد يمر عبر نالوت في جبل نفوسة (600 كم) أو رحلات جوية داخلية',
      recommendedStayHours: 24
    },
    tags: ['UNESCO', 'Sahara', 'Oasis', 'Traditional', 'Architecture']
  },
  {
    id: 'tadrart-acacus',
    slug: 'tadrart-acacus',
    titleEn: 'Tadrart Acacus Rock Art',
    titleAr: 'جبال تادرارت أكاكوس',
    category: 'unesco',
    region: 'fezzan',
    city: 'Ghat',
    cityAr: 'غات',
    coordinates: { lat: 24.8333, lng: 10.3333 },
    descriptionEn:
      'A jaw-dropping landscape of wind-sculpted sandstone arches, needle spires, and deep desert wadis harboring thousands of prehistoric rock paintings and engravings. Spanning from 12,000 BCE to 100 CE, these masterpieces record the Saharan transition from lush savannas teeming with elephants, giraffes, and waterbirds to the hyper-arid golden desert seen today.',
    descriptionAr:
      'سلسلة جبلية مهيبة تتميز بأقواس حجرية عملاقة نحتتها الرياح وأودية رملية تضم آلاف النقوش والرسومات الصخرية التي تعود لعصور ما قبل التاريخ (من 12,000 ق.م إلى 100 ميلادي). توثق اللوحات تحول الصحراء الكبرى من سهوب خضراء تعج بالفيلة والزرافات والنعام إلى الكثبان الذهبية الحالية.',
    historicalEra: 'Prehistoric Paleolithic, Pastoral & Garamantian periods',
    safetyTier: 'permit_required',
    crowdMetricEn: 'One of the world’s most pristine open-air prehistoric galleries — remote and raw',
    crowdMetricAr: 'أكبر متحف صخري مفتوح في قلب الصحراء الكبرى، نقي وبعيد عن أي تلوث حضري',
    featuredImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Monumental natural rock arches including Fozzigiaren (30+ meters high)',
      'Prehistoric cave frescoes of hunting scenes, dancing shamans, and cattle pastoralists',
      'Towering orange dunes of Tin Merzouga at sunset',
      'Wild camping under the clearest Milky Way skies on Earth'
    ],
    highlightsAr: [
      'قوس فوزيجارن الحجري الطبيعي بارتفاع يفوق 30 متراً',
      'لوحات الكهوف الملونة التي تجسد مشاهد الصيد والرقصات والطقوس الرعوية',
      'كثبان تين مرزوقة البرتقالية الساحرة عند المغيب',
      'تخييم بري تحت أصفى سماء مرصعة بالنجوم ومجرة درب التبانة'
    ],
    practicalInfo: {
      admissionHoursEn: 'Multi-day 4WD expedition with Tuareg field logistics and desert permits',
      admissionHoursAr: 'رحلات استكشافية بالدفع الرباعي بتنسيق مع أدلاء الطوارق وتصاريح رسمية',
      nearestFuel: 'Ghat Oasis central depot (85 km)',
      nearestHospital: 'Ghat District Hospital (90 km)',
      bestSeasonEn: 'November to February (Desert winter; warm days, brisk cold nights)',
      bestSeasonAr: 'من نوفمبر إلى فبراير (أجواء شتوية صحراوية معتدلة نهاراً وباردة ليلاً)',
      accessRoadStatusEn: 'Off-road 4WD desert sand tracks, requires licensed guide convoy',
      accessRoadStatusAr: 'مسالك صحراوية رملية تتطلب سيارات دفع رباعي ومرافقة خبراء الصحراء',
      recommendedStayHours: 72
    },
    tags: ['UNESCO', 'Sahara', 'Expedition', 'Rock-Art', '4x4']
  },

  // --- NAFUSA MOUNTAINS (BERBER HERITAGE & ESCARPMENT) ---
  {
    id: 'nalut-gasr',
    slug: 'nalut-gasr',
    titleEn: 'Gasr Nalut (Fortified Granary)',
    titleAr: 'قصر نالوت الأثري',
    category: 'mountain',
    region: 'tripolitania',
    city: 'Nalut',
    cityAr: 'نالوت',
    coordinates: { lat: 31.8667, lng: 10.9833 },
    descriptionEn:
      'Perched dramatically on the precipice of the Jebel Nafusa plateau, Gasr Nalut is a multi-tiered fortified Berber granary dating back over 800 years. Built from local stone, gypsum, and palm timbers, this beehive-like fortress contains over 400 individual vaulted storage chambers (ghorfas) where tribes protected olive oil, grain, and valuables during times of siege.',
    descriptionAr:
      'يقع قصر نالوت على حافة جرف جبل نفوسة الشاهق، وهو حصن ومخزن غلال أمازيغي يعود تاريخه لأكثر من 800 عام. شُيّد من الحجارة والجبس وجذوع النخيل، ويضم أكثر من 400 غرفة مقببة (غرفة تخزين) موزعة على عدة طوابق كانت القبائل تحفظ فيها القمح وزيت الزيتون والوثائق الثمينة.',
    historicalEra: 'Amazigh / Berber Medieval Period (11th-13th c.)',
    safetyTier: 'open_domestic',
    crowdMetricEn: 'Pristine mountain monument with panoramic 100-mile views over the Libyan plains',
    crowdMetricAr: 'معلم جبلي أصيل يوفر إطلالة بانورامية استثنائية تمتد لأكثر من 100 كيلومتر فوق السهول',
    featuredImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      '4-story circular granary courtyard with stepped palm-log ladders',
      'Original subterranean stone olive presses with massive counterweights',
      'Panoramic clifftop viewpoint looking down 600m to the desert floor'
    ],
    highlightsAr: [
      'فناء دائري من 4 طوابق وسلالم تقليدية من خشب النخيل',
      'معاصر الزيتون الصخرية التاريخية ذات المكابس الخشبية الضخمة',
      'إطلالة الجرف الجبلي التي تنحدر 600 متر نحو سهول الظاهر'
    ],
    practicalInfo: {
      admissionHoursEn: '08:00 AM – 06:00 PM (Local keeper on site)',
      admissionHoursAr: '08:00 صباحاً – 06:00 مساءً (يتواجد أمين القصر المحلي)',
      nearestFuel: 'Nalut Mountain Highway station (1 km)',
      nearestHospital: 'Nalut Central Hospital (2.5 km)',
      bestSeasonEn: 'Year-round, especially Autumn & Spring',
      bestSeasonAr: 'على مدار العام، وبخاصة فصلي الخريف والربيع',
      accessRoadStatusEn: 'Paved mountain highway in good condition from Tripoli (280 km / 3.5 hrs)',
      accessRoadStatusAr: 'طريق جبلي معبد ممتاز ومضاء يربط طرابلس بنالوت (280 كم / 3.5 ساعات)',
      recommendedStayHours: 3
    },
    tags: ['Mountain', 'Berber', 'Heritage', 'Viewpoint', 'Road-Trip']
  },
  {
    id: 'gharyan-troglodyte-pottery',
    slug: 'gharyan-troglodyte-pottery',
    titleEn: 'Gharyan Underground Homes & Artisan Pottery',
    titleAr: 'غريان: حواشين الحفر وصناعة الخزف',
    category: 'mountain',
    region: 'tripolitania',
    city: 'Gharyan',
    cityAr: 'غريان',
    coordinates: { lat: 32.1722, lng: 13.0203 },
    descriptionEn:
      'The gateway to the Nafusa Mountains, Gharyan is famous worldwide for two distinct traditions: subterranean "hawoosh al-hafr" (cave dwellings hand-carved 10 meters into the mountain bedrock maintaining a constant 20°C temperature year-round) and generations-old handcrafted terracotta and glazed pottery workshops lining the highway.',
    descriptionAr:
      'بوابة جبل نفوسة ومدينة الخزف التقليدي وحواشين الحفر الأسطورية. تُمثل مساكن الحفر المنحوتة في باطن الصخور على عمق 10 أمتار معجزة بيئية تحفظ اعتدال الحرارة (20 درجة مئوية) صيفاً وشتاءً، وتجاورها أفران الفخار اليدوي بألوانه الزاهية وتصاميمه الأندلسية والمغاربية.',
    historicalEra: 'Ancient Berber troglodyte traditions continuing through modern era',
    safetyTier: 'open_domestic',
    crowdMetricEn: 'Beloved domestic weekend road-trip destination; highly welcoming local hospitality',
    crowdMetricAr: 'الوجهة الأولى لرحلات نهاية الأسبوع العائلية من طرابلس بفضل كرم الضيافة وأجواء الجبل العليلة',
    featuredImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Tour of the preserved Abu Ghalia subterranean dwelling with central courtyard',
      'Artisan pottery demonstration and custom hand-painted tagines and amphorae',
      'Cool mountain breeze and scenic stop at the mountain hairpin bends (Al-Qawasim)'
    ],
    highlightsAr: [
      'جولة داخل حوش أبو غالية الصخري المنحوت بفنائه الداخلي المفتوح للسماء',
      'ورش الخزف الحية وتلوين الطواجن والأواني الفخارية يدوياً',
      'المطلات الجبلية في عقبة القواسم واستنشاق هواء الجبل النقي'
    ],
    practicalInfo: {
      admissionHoursEn: '09:00 AM – Sunset (Pottery souk open until 10:00 PM)',
      admissionHoursAr: '09:00 صباحاً – حتى الغروب (سوق الفخار مفتوح حتى 10:00 مساءً)',
      nearestFuel: 'Main entrance highway station (0.5 km)',
      nearestHospital: 'Gharyan Central Teaching Hospital (3 km)',
      bestSeasonEn: 'Spring, Summer (refreshingly cool compared to coast), and Autumn',
      bestSeasonAr: 'الربيع والصيف (طقس منعش مقارنة بحرارة الساحل) والخريف',
      accessRoadStatusEn: 'Dual carriageway highway climbing from Tripoli plain (80 km / 1 hr)',
      accessRoadStatusAr: 'طريق مزدوج سريع وسهل يبدأ من طرابلس صعوداً للجبل (80 كم / ساعة واحدة)',
      recommendedStayHours: 4
    },
    tags: ['Mountain', 'Crafts', 'Troglodyte', 'Family', 'Weekend-Trip']
  },

  // --- MEDITERRANEAN COAST & MARINE SANCTUARIES ---
  {
    id: 'farwa-island',
    slug: 'farwa-island',
    titleEn: 'Farwa Island (Jazirat Farwa)',
    titleAr: 'شبه جزيرة فروة',
    category: 'beach',
    region: 'tripolitania',
    city: 'Zuwara',
    cityAr: 'زوارة',
    coordinates: { lat: 33.1000, lng: 11.7500 },
    descriptionEn:
      'A 13-kilometer-long pristine coastal spit and shallow lagoon near the Tunisian border, Farwa is Libya’s crown ecological jewel. Surrounded by calm crystalline turquoise waters, it serves as a critical stopover for migratory greater flamingos, herons, and rare loggerhead sea turtles (Caretta caretta) nesting along its powdery white sandbanks.',
    descriptionAr:
      'لسان ساحلي رملي عذري وبحيرة ضحلة تمتد لـ 13 كيلومتراً قرب الحدود الغربية عند مدينة زوارة. تُعد محمية فروة درة البيئة البحرية في ليبيا، وتتميز بمياهها الفيروزية الصافية ورمالها البيضاء، وتعد موطناً لأسراب طيور النحام الوردي (الفلامنجو) والسلاحف البحرية ضخمة الرأس المهددة بالانقراض.',
    safetyTier: 'open_domestic',
    crowdMetricEn: 'Untouched Caribbean-style sandbar without commercial resorts or high-rises',
    crowdMetricAr: 'طبيعة عذرية تشبه جزر الكاريبي برمالها ومياهها الخلابة دون أي كتل إسمنتية أو تلوث',
    featuredImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Flocks of thousands of pink flamingos in the calm saltwater lagoon',
      'Historic 1913 maritime lighthouse perched at the tip of the sand spit',
      'Freshly caught grilled sea bass and amberjack at local fisherman piers in Zuwara',
      'Crystal-clear snorkeling with vibrant seagrass meadows (Posidonia oceanica)'
    ],
    highlightsAr: [
      'أسراب طيور الفلامنجو الوردية في بحيرة فروة الهادئة',
      'الفنار البحري التاريخي المشيد عام 1913 عند رأس الجزيرة',
      'وجبات السمك الطازج المشوي (القراض والشلبة والوقار) في مراسي زوارة',
      'السباحة والغوص السطحي بين مروج أعشاب البحر البوسيدونيا الشفافة'
    ],
    practicalInfo: {
      admissionHoursEn: 'Daylight hours; boat shuttles operate from Abu Kammash harbor (10 min ride)',
      admissionHoursAr: 'ساعات النهار؛ تنطلق قوارب الصيادين المحليين من مرسى أبو كماش (10 دقائق)',
      nearestFuel: 'Abu Kammash junction (6 km)',
      nearestHospital: 'Zuwara Maritime Hospital (14 km)',
      bestSeasonEn: 'May to October for swimming; November to March for flamingo birdwatching',
      bestSeasonAr: 'من مايو لأكتوبر للسباحة؛ ومن نوفمبر لمارس لمشاهدة طيور الفلامنجو المهاجرة',
      accessRoadStatusEn: 'Coastal highway west from Tripoli (150 km / 2 hrs) to Abu Kammash port',
      accessRoadStatusAr: 'الطريق الساحلي السريع غرباً من طرابلس (150 كم / ساعتان) وصولاً لمرسى العبور',
      recommendedStayHours: 6
    },
    tags: ['Beach', 'Eco-Tourism', 'Flamingos', 'Snorkeling', 'Island']
  },
  {
    id: 'tripoli-old-medina',
    slug: 'tripoli-old-medina',
    titleEn: 'Tripoli Old Medina & Bab Al-Bahr',
    titleAr: 'مدينة طرابلس القديمة وباب البحر',
    category: 'heritage',
    region: 'tripolitania',
    city: 'Tripoli',
    cityAr: 'طرابلس',
    coordinates: { lat: 32.8986, lng: 13.1783 },
    descriptionEn:
      'The historic heart of the "Bride of the Mediterranean". Enclosed by ancient defensive bastions, the Old Medina blends Roman, Ottoman, Maltese, and Italian architectural heritage. Stroll through the Souq Al-Mushir watchmakers and copper artisans, marvel at the 2nd-century Arch of Marcus Aurelius, and sip spiced mint tea with almonds in centuries-old courtyard caravanserais.',
    descriptionAr:
      'القلب التاريخي النابض لعروس البحر الأبيض المتوسط. تحيط بها الأسوار الأثرية وتجمع بين العمارة الرومانية والعثمانية والمالطية والإيطالية. تمتاز بأزقة سوق المشير وسوق النحاسين والفضة، وقوس ماركوس أوريليوس الرخامي، وجامع قرجي، ومقاهي الشاي باللوز والنعناع في فضاءات الفنادق العثمانية العتيقة.',
    historicalEra: 'Phoenician, Roman, Ottoman, and Karamanli Dynasty',
    safetyTier: 'open_domestic',
    crowdMetricEn: 'Vibrant, safe urban historic center buzzing with evening families and cafe culture',
    crowdMetricAr: 'مركز حضري آمن يعج بالعائلات ورواد المقاهي والشباب حتى ساعات متأخرة من الليل',
    featuredImage: 'https://images.unsplash.com/photo-1548625361-195fe578716b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1548625361-195fe578716b?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Arch of Marcus Aurelius (163 CE) carved from solid Pentelic white marble',
      'Al-Saraya Al-Hamra (Red Castle fortress) standing sentry over Martyrs’ Square',
      'Gurgi Mosque with stunning Tunisian ceramic tilework and Ottoman woodwork',
      'Bab Al-Bahr wholesale fish market and seaside grilled seafood feast'
    ],
    highlightsAr: [
      'قوس الإمبراطور ماركوس أوريليوس (163 م) المنحوت من رخام بنتليك الأبيض',
      'قلعة السرايا الحمراء الحصينة المشرفة على ميدان الشهداء',
      'جامع قرجي بزخارفه الخزفية التونسية وأعمدته المنحوتة وسقفه البديع',
      'سوق باب البحر لأسماك الصيد اليومي الطازجة وتناول الأسماك المشوية على الفحم'
    ],
    practicalInfo: {
      admissionHoursEn: 'Medina alleys accessible 24/7; artisan shops active 10:00 AM – 10:00 PM',
      admissionHoursAr: 'الأزقة مفتوحة 24/7؛ المحلات والمقاهي تعمل من 10:00 صباحاً حتى 10:00 مساءً',
      nearestFuel: 'Omar Al-Mukhtar St petrol station (0.8 km)',
      nearestHospital: 'Tripoli Central Hospital - Sharia Az-Zawiyah (2 km)',
      bestSeasonEn: 'Year-round; spectacular during cool Mediterranean sunset hours',
      bestSeasonAr: 'على مدار العام؛ رائعة عند الغروب والمساء مع نسيم البحر المتوسط',
      accessRoadStatusEn: 'Heart of central Tripoli, pedestrianized streets with secure exterior parking lots',
      accessRoadStatusAr: 'قلب طرابلس، شوارع مخصصة للمشاة ومواقف سيارات منظمة ومؤمنة في المحيط',
      recommendedStayHours: 5
    },
    tags: ['Heritage', 'Medina', 'Culture', 'Ottoman', 'Fish-Market', 'Tea-Houses']
  },
  {
    id: 'ras-al-hilal-waterfall',
    slug: 'ras-al-hilal-waterfall',
    titleEn: 'Ras al-Hilal Waterfalls & Coastal Forest',
    titleAr: 'شلالات وغابات رأس الهلال',
    category: 'beach',
    region: 'cyrenaica',
    city: 'Derna / Al-Jabal Al-Akhdar',
    cityAr: 'درنة / الجبل الأخضر',
    coordinates: { lat: 32.8667, lng: 22.1833 },
    descriptionEn:
      'Where the forested mountains of Cyrenaica drop directly into the azure Mediterranean. Ras al-Hilal features freshwater springs and natural waterfalls cascading down rocky limestone gorges into secluded pebble coves fringed by wild olive and cypress trees.',
    descriptionAr:
      'المكان الذي تعانق فيه غابات الصنوبر الجبلية أمواج البحر الأزرق. يتميز رأس الهلال بعيون المياه العذبة والشلالات الطبيعية التي تتدفق بين الجروف الجيرية إلى خلجان صخرية ساحرة تظللها أشجار العرعر والزيتون البري.',
    safetyTier: 'agency_escorted',
    crowdMetricEn: 'Idyllic Mediterranean micro-climate with lush vegetation rarely seen in North Africa',
    crowdMetricAr: 'مناخ متوسطي معتدل وغطاء نباتي كثيف ونادر في شمال أفريقيا',
    featuredImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Freshwater waterfall spilling through lush mountain flora toward the beach',
      'Secluded coastal coves ideal for freediving and spearfishing',
      'Scenic cliffside driving along one of North Africa’s most dramatic corniche roads'
    ],
    highlightsAr: [
      'شلال المياه العذبة المنساب بين النباتات الجبلية نحو الشاطئ',
      'خلجان هادئة وصافية ممتازة للغوص الحر وصيد الأسماك',
      'طريق كورنيش جبلي بانورامي يعد من أجمل المسارات الساحلية في المنطقة'
    ],
    practicalInfo: {
      admissionHoursEn: 'Daylight hours (free public access)',
      admissionHoursAr: 'ساعات النهار (دخول عام مجاني)',
      nearestFuel: 'Ras al-Hilal village center (2 km)',
      nearestHospital: 'Sousa District Health Center (15 km)',
      bestSeasonEn: 'Spring (April-June) for gushing waterfalls; Summer for sea swimming',
      bestSeasonAr: 'الربيع (أبريل-يونيو) لتدفق الشلالات؛ والصيف للسباحة في البحر',
      accessRoadStatusEn: 'Paved coastal mountain road between Sousa and Derna',
      accessRoadStatusAr: 'طريق ساحلي جبلي معبد بين سوسة ودرنة',
      recommendedStayHours: 4
    },
    tags: ['Waterfall', 'Nature', 'Coast', 'Hiking', 'Green-Mountain']
  },

  // --- SAHARA & FEZZAN OASIS GEMS ---
  {
    id: 'ubari-lakes',
    slug: 'ubari-lakes',
    titleEn: 'Ubari Sand Sea & Gaberoun Lake',
    titleAr: 'بحيرات أوباري وبحيرة قبرعون',
    category: 'oasis',
    region: 'fezzan',
    city: 'Ubari',
    cityAr: 'أوباري',
    coordinates: { lat: 26.8000, lng: 13.0167 },
    descriptionEn:
      'Hidden deep inside the towering crimson dunes of the Idehan Ubari sand sea are more than a dozen dreamlike saltwater desert lakes. The most famous, Lake Gaberoun, is framed by date palms and ruins of an abandoned desert village. Its high salinity allows swimmers to float effortlessly while gazing up at sand dunes reaching 150 meters high.',
    descriptionAr:
      'في قلب بحر رمال إدهان أوباري وبين كثبانه الذهبية التي ترتفع لأكثر من 150 متراً، ترقد مجموعة من أروع بحيرات الصحراء المالحة. أشهرها بحيرة قبرعون المحاطة بأشجار النخيل وأطلال القرية الطينية القديمة، حيث تمكن ملوحة مياهها العالية السباحين من الطفو بسهولة والاستمتاع بالتزلج على الرمال.',
    historicalEra: 'Pleistocene Saharan mega-lake remnants (Lake Megafezzan)',
    safetyTier: 'permit_required',
    crowdMetricEn: 'Surreal cinematic landscape that feels like another planet — zero commercial tourism clutter',
    crowdMetricAr: 'مشهد صحراوي سينمائي مهيب كأنك في كوكب آخر بعيداً عن صخب العالم',
    featuredImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Float effortlessly in hyper-saline warm waters of Lake Gaberoun',
      'Sandboarding down 120-meter vertical dune faces into soft sands',
      'Traditional Tuareg bread baked under desert embers (Taguella)',
      'Star gazing sessions with visibility of outer-space nebulae'
    ],
    highlightsAr: [
      'الطفو بسهولة في مياه بحيرة قبرعون الدافئة الغنية بالأملاح المعدنية',
      'التزلج على الكثبان الرملية الشاهقة بارتفاع 120 متراً',
      'تذوق خبز الملة التارقي التقليدي المخبوز تحت جمر رمال الصحراء',
      'رصد النجوم والمجرات في أظلم وأنقى سماء ليلية على وجه الأرض'
    ],
    practicalInfo: {
      admissionHoursEn: '4WD guided expedition only with licensed Tuareg desert operator',
      admissionHoursAr: 'حصراً برحلات سيارات الدفع الرباعي برفقة مرشدين طوارق معتمدين',
      nearestFuel: 'Ubari Oasis city station (35 km)',
      nearestHospital: 'Ubari General Hospital (38 km)',
      bestSeasonEn: 'October to March',
      bestSeasonAr: 'من أكتوبر إلى مارس',
      accessRoadStatusEn: 'Challenging sand dune navigation requiring deflated tires and expert local drivers',
      accessRoadStatusAr: 'مسار رملي يتطلب تخفيض ضغط الإطارات وخبرة سائقين محليين متمرسين',
      recommendedStayHours: 24
    },
    tags: ['Sahara', 'Lakes', 'Dunes', 'Desert', 'Sandboarding']
  },

  // --- DOMESTIC WEEKEND & CULINARY HUBS ---
  {
    id: 'specialty-coffee-tripoli',
    slug: 'specialty-coffee-tripoli',
    titleEn: 'Tripoli Specialty Coffee Scene & Hay Al-Andalus',
    titleAr: 'مشهد القهوة المختصة في طرابلس وحي الأندلس',
    category: 'cafe',
    region: 'tripolitania',
    city: 'Tripoli',
    cityAr: 'طرابلس',
    coordinates: { lat: 32.8750, lng: 13.1400 },
    descriptionEn:
      'Tripoli has developed one of North Africa’s most vibrant modern specialty coffee cultures. In fashionable neighborhoods like Hay Al-Andalus, Dhat Al-Imad, and Gergarish, minimalist roasteries and glass-fronted cafes serve Ethiopian single-origins, V60 pour-overs, and Italian-style espresso alongside Libyan dates and pastries.',
    descriptionAr:
      'تشهد طرابلس نهضة شبابية رائدة في ثقافة القهوة المختصة والمحامص الحديثة. في أحياء حي الأندلس السياحي وذات العماد وقرقارش، تنتشر مقاهٍ عصرية تقدم محاصيل القهوة المختصة الإثيوبية والكولومبية بطرق الترشيح V60 والإسبريسو الإيطالي إلى جانب الحلويات الليبية والتمور الفاخرة.',
    safetyTier: 'open_domestic',
    crowdMetricEn: 'Lively meeting ground for Libyan tech entrepreneurs, designers, and students',
    crowdMetricAr: 'ملتقى حيوي يومي لرواد الأعمال والمصممين والشباب الليبي في بيئة راقية ومريحة',
    featuredImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Specialty roasters (Dose, Coffee Lab, Black Gold) sourcing top micro-lots',
      'Artisanal pastries incorporating Deglet Nour dates and Libyan wild thyme',
      'Outdoor breezy terrace seating buzzing until midnight every weekend'
    ],
    highlightsAr: [
      'محامص مختصة رائدة تستورد أجود حبوب البن وتوفر أجهزة تحضير عالمية',
      'مخبوزات مبتكرة بحشوات تمر دقلة النور والزعتر الجبلي الليبي',
      'جلسات خارجية مكيفة ومفتوحة في الهواء الطلق تنبض بالحياة حتى منتصف الليل'
    ],
    practicalInfo: {
      admissionHoursEn: '07:30 AM – 12:30 AM (Daily)',
      admissionHoursAr: '07:30 صباحاً – 12:30 بعد منتصف الليل (يومياً)',
      nearestFuel: 'Hay Al-Andalus central station (0.4 km)',
      nearestHospital: 'Al-Khadra Teaching Hospital (3 km)',
      bestSeasonEn: 'Year-round',
      bestSeasonAr: 'على مدار العام',
      accessRoadStatusEn: 'Central Tripoli paved urban avenues with ample valet and street parking',
      accessRoadStatusAr: 'شوارع حضرية منظمة ومعبدة بالكامل في قلب العاصمة',
      recommendedStayHours: 2
    },
    tags: ['Cafe', 'Specialty-Coffee', 'Tripoli', 'Weekend', 'Youth-Culture']
  },
  {
    id: 'benghazi-corniche-market',
    slug: 'benghazi-corniche-market',
    titleEn: 'Benghazi Corniche & Souq Al-Hout',
    titleAr: 'كورنيش بنغازي وسوق الحوت',
    category: 'weekend_spot',
    region: 'cyrenaica',
    city: 'Benghazi',
    cityAr: 'بنغازي',
    coordinates: { lat: 32.1167, lng: 20.0667 },
    descriptionEn:
      'The bustling cultural soul of Cyrenaica. The Benghazi Corniche overlooks the eastern Mediterranean shoreline, punctuated by the Italian-era Al-Manara lighthouse. On Friday afternoons, families gather for sea breezes, roasted sunflower seeds, street food, and visits to the restored Souq Al-Hout (fish and artisan market).',
    descriptionAr:
      'الروح الثقافية النابضة لمدينة بنغازي وإقليم برقة. يمتد الكورنيش على شاطئ البحر الأبيض المتوسط محتضناً منارة بنغازي التاريخية المشيدة في مطلع القرن العشرين. تجتمع العائلات مساء كل جمعة للاستمتاع بنسيم البحر والمشروبات الساخنة وزيارة سوق الحوت التراثي والأسواق المجاورة.',
    safetyTier: 'open_domestic',
    crowdMetricEn: 'Heartwarming communal atmosphere showcasing Eastern Libyan hospitality',
    crowdMetricAr: 'أجواء عائلية اجتماعية دافئة تعكس كرم وضيافة أهالي بنغازي وبرقة الأصيلة',
    featuredImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop'
    ],
    highlightsEn: [
      'Sunset walks along the renovated waterfront corniche',
      'Historic Al-Manara lighthouse standing 41 meters tall above the harbor',
      'Fresh seafood grills and traditional Benghazi mint tea with roasted almonds'
    ],
    highlightsAr: [
      'نزهات الغروب على رصيف الكورنيش البحري الجديد',
      'منارة بنغازي الإيطالية الشامخة بارتفاع 41 متراً قبالة الميناء',
      'وجبات السمك البحري الطازج والشاي البنغازي باللوز المحمص'
    ],
    practicalInfo: {
      admissionHoursEn: 'Accessible 24/7; prime visiting time 04:00 PM – 11:00 PM',
      admissionHoursAr: 'مفتوح على مدار الساعة؛ أفضل وقت للزيارة بين 04:00 عصراً و11:00 ليلاً',
      nearestFuel: 'Al-Sabri coastal station (1.2 km)',
      nearestHospital: 'Benghazi Medical Center (BMC) (5 km)',
      bestSeasonEn: 'March to November',
      bestSeasonAr: 'من مارس إلى نوفمبر',
      accessRoadStatusEn: 'Direct paved city thoroughfares connecting all districts of Benghazi',
      accessRoadStatusAr: 'شوارع معبدة واسعة تربط كافة مناطق بنغازي بالكورنيش',
      recommendedStayHours: 3
    },
    tags: ['Corniche', 'Benghazi', 'Family', 'Seafood', 'Weekend']
  }
];
