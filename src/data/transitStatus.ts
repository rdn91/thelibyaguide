import { TransitStatusLog } from '@/types';

export const liveStatusLogs: TransitStatusLog[] = [
  {
    id: 'mitiga-tip',
    entryPointNameEn: 'Mitiga International Airport (TIP)',
    entryPointNameAr: 'مطار معيتيقة الدولي - طرابلس (TIP)',
    type: 'airport',
    status: 'operational',
    flightsActiveToday: 42,
    code: 'TIP',
    notesEn:
      'Fully operational for scheduled international passenger flights. Direct routes active to/from Istanbul (IST), Tunis (TUN), Cairo (CAI), Amman (AMM), Malta (MLA), Rome (FCO charter), and Dubai (DXB). Tourist eVisa border clearance processing normally.',
    notesAr:
      'يعمل بكامل طاقته للرحلات الدولية المجدولة. خطوط منتظمة إلى إسطنبول، تونس، القاهرة، عمان، مالطا، وروما. إنهاء إجراءات التأشيرة الإلكترونية السياحية يسير بسلاسة تامة.',
    updatedAt: 'Updated Today, 08:30 AM (Operational)'
  },
  {
    id: 'benina-ben',
    entryPointNameEn: 'Benina International Airport (BEN)',
    entryPointNameAr: 'مطار بنينا الدولي - بنغازي (BEN)',
    type: 'airport',
    status: 'operational',
    flightsActiveToday: 26,
    code: 'BEN',
    notesEn:
      'Operational with steady international traffic from Cairo (CAI), Alexandria (HBE), Istanbul (IST), and Tunis (TUN), plus frequent domestic hops to Mitiga (TIP). Dedicated customs desks for licensed tour group receptions.',
    notesAr:
      'يعمل بانتظام مع رحلات دولية من القاهرة والإسكندرية وإسطنبول وتونس، إلى جانب جسر جوي داخلي مع مطار معيتيقة.',
    updatedAt: 'Updated Today, 09:15 AM (Operational)'
  },
  {
    id: 'misrata-mra',
    entryPointNameEn: 'Misrata International Airport (MRA)',
    entryPointNameAr: 'مطار مصراتة الدولي (MRA)',
    type: 'airport',
    status: 'operational',
    flightsActiveToday: 16,
    code: 'MRA',
    notesEn:
      'Operational for regional international flights (Tunis, Istanbul, Alexandria). Excellent secondary gateway for travelers heading directly east to Leptis Magna (100 km).',
    notesAr:
      'يعمل برحلات إقليمية مجدولة إلى تونس وإسطنبول والإسكندرية. نقطة وصول بديلة ممتازة وقريبة من لبدة الكبرى (100 كم).',
    updatedAt: 'Updated Today, 07:45 AM (Operational)'
  },
  {
    id: 'ras-ajdir-border',
    entryPointNameEn: 'Ras Ajdir Land Border (Tunisia-Libya)',
    entryPointNameAr: 'معبر رأس جدير الحدودي (تونس - ليبيا)',
    type: 'land_border',
    status: 'operational',
    notesEn:
      'Open 24/7 for civilian passenger transit. Frequently utilized by European tour groups arriving overland via Djerba Airport (DJE, Tunisia). Pre-arranged agency transfer and certified Arabic passport translation required at gate.',
    notesAr:
      'مفتوح 24 ساعة لعبور المسافرين والسيارات. يستخدمه السياح القادمون عبر مطار جربة التونسي. يلزم وجود مرافقة الوكالة والترجمة العربية للجواز.',
    updatedAt: 'Updated Today, 06:00 AM (Normal Transit)'
  },
  {
    id: 'coastal-highway-m1',
    entryPointNameEn: 'Coastal Highway (Tripoli - Al Khums - Misrata)',
    entryPointNameAr: 'الطريق الساحلي السريع (طرابلس - الخمس - مصراتة)',
    type: 'coastal_highway',
    status: 'normal_transit',
    notesEn:
      'Paved dual-carriageway coastal artery completely open. Routine security checkpoints with swift tourist clearance upon presentation of agency itinerary manifest.',
    notesAr:
      'طريق سريع مزدوج معبد بالكامل ومؤمن بدوريات نظامية. تسهيل فوري لحركة السياح بمجرد إبراز ترخيص الوكالة والبيان.',
    updatedAt: 'Updated Today, 10:00 AM (Clear & Flowing)'
  }
];

export const commercialAirlines = [
  { name: 'Afriqiyah Airways', code: '8U', hub: 'Tripoli / Benghazi', destinations: ['Tunis', 'Cairo', 'Istanbul', 'Khartoum'] },
  { name: 'Berniq Airways', code: 'NB', hub: 'Benghazi / Tripoli', destinations: ['Cairo', 'Tunis', 'Istanbul', 'Dubai', 'Amman'] },
  { name: 'Libyan Airlines', code: 'LN', hub: 'Tripoli / Benghazi', destinations: ['Tunis', 'Cairo', 'Amman', 'Alexandria', 'Istanbul'] },
  { name: 'Crown Airlines', code: 'CW', hub: 'Tripoli', destinations: ['Tunis', 'Istanbul', 'Malta'] },
  { name: 'Medsky Airways', code: 'MSY', hub: 'Tripoli / Misrata', destinations: ['Rome', 'Malta', 'Istanbul', 'Tunis'] },
  { name: 'Tunisair', code: 'TU', hub: 'Tunis Carthage', destinations: ['Tripoli Mitiga', 'Benghazi Benina'] },
  { name: 'Turkish Airlines', code: 'TK', hub: 'Istanbul Airport', destinations: ['Tripoli Mitiga'] }
];
