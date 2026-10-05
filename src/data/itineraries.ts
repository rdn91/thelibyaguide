import { Itinerary } from '@/types';

export const itineraries: Itinerary[] = [
  {
    id: 'farwa-weekend-escape',
    titleEn: 'Friday Fish Lunch & Sunset at Farwa Island',
    titleAr: 'رحلة الجمعة: غداء سمك طازج وغروب شبه جزيرة فروة',
    duration: '24h',
    targetPersona: 'both',
    region: 'tripolitania',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    distanceKm: 160,
    descriptionEn:
      'The quintessential Friday getaway for Tripoli residents and coastal explorers. Head west along the palm-fringed coastal highway to Zuwara, indulge in freshly grilled Mediterranean grouper and sea bream, take a short boat shuttle across the turquoise lagoon to Farwa Island, and watch thousands of pink flamingos against the setting sun.',
    descriptionAr:
      'الملاذ الأمثل لعطلة نهاية الأسبوع لسكان طرابلس وعشاق الطبيعة البحرية. الانطلاق غرباً على الطريق الساحلي إلى زوارة، وتناول وجبة سمك مشوي طازج في مرسى الصيد، ثم ركوب قارب العبور إلى جزيرة فروة لمشاهدة أسراب طيور الفلامنجو مع غروب الشمس الساحر.',
    stops: [
      {
        time: '08:30 AM',
        titleEn: 'Departure from Tripoli along Western Coastline',
        titleAr: 'الانطلاق من طرابلس عبر الطريق الساحلي الغربي',
        descriptionEn: 'Scenic morning drive past olive groves and coastal towns (Zawia, Sabratha) toward Zuwara.',
        descriptionAr: 'رحلة صباحية ممتعة بمحاذاة مزارع الزيتون والبلدات الساحلية غرباً.',
        location: 'Tripoli Highway M1',
        category: 'Drive'
      },
      {
        time: '11:00 AM',
        titleEn: 'Arrival at Zuwara Harbor & Fisherman Feast',
        titleAr: 'الوصول إلى ميناء زوارة وتناول وجبة السمك الطازج',
        descriptionEn: 'Feast on charcoal-grilled sea bass, fried red mullet, calamari, and spicy Libyan sharmoula dip at the harbor side.',
        descriptionAr: 'تناول وجبة غداء بحرية غنية بالسمك المشوي على الفحم (وقار وشلبة) مع الشرمولة الليبية الحارة.',
        location: 'Zuwara Fishing Pier',
        category: 'Food'
      },
      {
        time: '01:30 PM',
        titleEn: 'Boat Shuttle to Farwa Island Lagoon',
        titleAr: 'ركوب قارب العبور نحو محمية جزيرة فروة',
        descriptionEn: 'Board local wooden fisherman skiffs for a 10-minute crossing across the calm, crystalline lagoon.',
        descriptionAr: 'عبور بحيرة فروة الهادئة ذات المياه الشفافة على متن قوارب الصيادين التقليدية.',
        location: 'Abu Kammash Pier',
        category: 'Boat'
      },
      {
        time: '03:00 PM',
        titleEn: 'Flamingo Spotting & Lagoon Snorkeling',
        titleAr: 'مشاهدة طيور الفلامنجو والسباحة في المياه الفيروزية',
        descriptionEn: 'Wade through warm knee-deep shallows, observe nesting bird colonies, and relax on pristine white sands.',
        descriptionAr: 'الاسترخاء على الرمال البيضاء ومراقبة مستعمرات طيور النحام الوردي المهاجرة والسباحة المنعشة.',
        location: 'Farwa Spit',
        category: 'Nature'
      },
      {
        time: '06:15 PM',
        titleEn: 'Sunset at Farwa Lighthouse & Evening Return',
        titleAr: 'مشهد الغروب عند فنار فروة التاريخي ورحلة العودة',
        descriptionEn: 'Golden hour photography at the 1913 maritime lighthouse before returning to Tripoli for late night coffee.',
        descriptionAr: 'التقاط صور الغروب الذهبي بجوار الفنار الأثري والعودة الهادئة إلى العاصمة.',
        location: 'Farwa Lighthouse',
        category: 'Sunset'
      }
    ]
  },
  {
    id: 'nafusa-granary-loop',
    titleEn: '48-Hour Nafusa Mountain Granary & Troglodyte Loop',
    titleAr: 'مسار 48 ساعة: قلاع جبل نفوسة وحواشين غريان المحفورة',
    duration: '48h',
    targetPersona: 'both',
    region: 'tripolitania',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    distanceKm: 320,
    descriptionEn:
      'A thrilling two-day mountain expedition ascending from the Mediterranean plain to the 800-meter-high Nafusa escarpment. Explore hand-carved underground troglodyte residences, traditional pottery kilns in Gharyan, the cliff-hung village of Yefren, and the monumental 800-year-old fortified granary fortress of Gasr Nalut.',
    descriptionAr:
      'رحلة استكشافية جبلية لمدة يومين تنطلق من السهل الساحلي صعوداً إلى جرف جبل نفوسة بارتفاع 800 متر. تشمل زيارة حواشين الحفر المنحوتة في باطن الصخر، وأفران الخزف اليدوي في غريان، وإطلالات يفرن المعلقة، وقصر نالوت الأثري الشامخ.',
    stops: [
      {
        time: 'Day 1 - 09:00 AM',
        titleEn: 'Climb the Gharyan Mountain Switchbacks',
        titleAr: 'صعود عقبة غريان الجبلية الشهيرة',
        descriptionEn: 'Panoramic climb through pine-clad hairpins with viewpoints looking across the Jafara plain.',
        descriptionAr: 'صعود ممتع بين المنعطفات الجبلية ذات الهواء العليل والإطلالة على سهول الجفارة.',
        location: 'Al-Qawasim Escarpment',
        category: 'Scenic Drive'
      },
      {
        time: 'Day 1 - 11:00 AM',
        titleEn: 'Abu Ghalia Troglodyte Underground Cave Dwellings',
        titleAr: 'استكشاف حوش أبو غالية الصخري في غريان',
        descriptionEn: 'Step into naturally cooled subterranean rooms hand-hewn into mountain rock 10 meters beneath the ground.',
        descriptionAr: 'الدخول إلى غرف الحفر الباردة طبيعياً على عمق 10 أمتار تحت سطح الأرض مع شرح لتاريخ السكن.',
        location: 'Gharyan',
        category: 'Heritage'
      },
      {
        time: 'Day 1 - 03:00 PM',
        titleEn: 'Yefren Clifftop Village & Traditional Olive Mills',
        titleAr: 'بلدة يفرن المعلقة ومعاصر الزيتون الصخرية',
        descriptionEn: 'Discover ancient stone olive presses and enjoy mountain tea on dizzying panoramic terrace cafes.',
        descriptionAr: 'مشاهدة معاصر الزيتون الحجرية القديمة واحتساء الشاي بالزعتر في مقاهي الجرف الجبلي.',
        location: 'Yefren',
        category: 'Viewpoint'
      },
      {
        time: 'Day 2 - 10:00 AM',
        titleEn: 'Monumental 4-Story Gasr Nalut Granary',
        titleAr: 'زيارة قصر نالوت الأثري المكون من 4 طوابق',
        descriptionEn: 'Climb wooden ladders through 400 ancient storage vaults preserving Berber tribal heritage.',
        descriptionAr: 'التجول بين 400 غرفة تخزين مقببة وممراتها الدائرية التي تحفظ ذاكرة القبائل الأمازيغية.',
        location: 'Gasr Nalut',
        category: 'Architecture'
      },
      {
        time: 'Day 2 - 04:00 PM',
        titleEn: 'Pottery Souk Shopping & Sunset Descent',
        titleAr: 'التسوق من سوق الفخار بغريان والنزول عند المغيب',
        descriptionEn: 'Pick up hand-painted clay tajines and olive oil containers before descending the mountain at sunset.',
        descriptionAr: 'اقتناء الفخار والخزف اليدوي الملون والعودة إلى طرابلس مع خيوط الغروب الذهبية.',
        location: 'Gharyan Pottery Souk',
        category: 'Shopping'
      }
    ]
  },
  {
    id: 'roman-coastal-odyssey',
    titleEn: 'Leptis Magna & Sabratha: Imperial Roman Coastal Circuit',
    titleAr: 'طريق الأباطرة: جولتا لبدة الكبرى وصبراتة على البحر المتوسط',
    duration: '48h',
    targetPersona: 'international',
    region: 'tripolitania',
    coverImage: 'https://images.unsplash.com/photo-1548625361-195fe578716b?q=80&w=1200&auto=format&fit=crop',
    distanceKm: 290,
    descriptionEn:
      'The definitive journey through two of the ancient world’s greatest UNESCO treasures. Stand in awe of Septimius Severus’ monumental Roman city at Leptis Magna on day one, and marvel at the theatrical marvel of Sabratha overlooking the Mediterranean waves on day two.',
    descriptionAr:
      'البرنامج الكلاسيكي الأبرز لعشاق الآثار الرومانية حول العالم. زيارة مدينة لبدة الكبرى عاصمة الإمبراطور سيبتيموس سيفيروس في اليوم الأول، ومشاهدة المسرح الروماني المرموق في صبراتة في اليوم الثاني.',
    stops: [
      {
        time: 'Day 1 - Full Day',
        titleEn: 'Complete Exploration of Leptis Magna',
        titleAr: 'يوم استكشاف متكامل في لبدة الكبرى',
        descriptionEn: 'Guided journey through the Severan Arch, Hadrianic Baths, Colonnaded Street, Forum, Basilica, and Amphitheater.',
        descriptionAr: 'جولة مفصلة مع مرشد أثري تشمل قوس سيفيروس، وحمامات هادريان، والشارع المعمد، والبازيليكا، والمسرح.',
        location: 'Al Khums',
        category: 'UNESCO'
      },
      {
        time: 'Day 2 - Morning',
        titleEn: 'Sabratha Seaside Roman Theater & Museum',
        titleAr: 'المسرح الروماني ومتحف الفسيفساء في صبراتة',
        descriptionEn: 'Walk the triple-tiered Corinthian columns, explore the Antonine temple, and study seaside Byzantine mosaics.',
        descriptionAr: 'استكشاف أعمدة المسرح الرخامية الـ 108، ومعبد أنطونيوس، وأرضيات الفسيفساء البيزنطية البحرية.',
        location: 'Sabratha',
        category: 'UNESCO'
      },
      {
        time: 'Day 2 - Evening',
        titleEn: 'Tripoli Old Medina Tea & Bab Al-Bahr Fish Dinner',
        titleAr: 'شاي المدينة القديمة وعشاء سمك باب البحر بطرابلس',
        descriptionEn: 'Celebrate with traditional mint tea in Souq Al-Mushir and freshly caught grilled fish at the historic harbor.',
        descriptionAr: 'اختتام الرحلة بالشاي الليبي باللوز في أزقة المدينة القديمة ووجبة عشاء بحرية في باب البحر.',
        location: 'Tripoli Medina',
        category: 'Culture'
      }
    ]
  }
];
