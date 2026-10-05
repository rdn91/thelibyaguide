export interface VisaChecklistStep {
  stepNumber: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  actionRequiredEn: string;
  actionRequiredAr: string;
  officialLink?: string;
  badgeEn?: string;
  badgeAr?: string;
}

export const evisaSteps: VisaChecklistStep[] = [
  {
    stepNumber: 1,
    titleEn: 'Partner with a Licensed Libyan Tour Operator',
    titleAr: 'التعاقد مع وكالة سياحة وسفر ليبية مرخصة',
    descriptionEn:
      'Under Libyan immigration regulations, independent tourist travel is not currently permitted. Foreign tourists must book an approved itinerary with an officially registered Libyan travel agency who will sponsor their entry and generate the mandatory Letter of Invitation (LOI).',
    descriptionAr:
      'وفقاً للوائح الهجرة الليبية، لا يُسمح بالسياحة الفردية غير المنظمة للأجانب في الوقت الراهن. يجب على السائح حجز برنامج سياحي مع وكالة ليبية مرخصة تتولى كفالة التأشيرة وإصدار خطاب الدعوة الرسمي (LOI).',
    actionRequiredEn: 'Select an agency from our Vetted Operator Directory and agree on your travel dates.',
    actionRequiredAr: 'اختر وكالة من دليل الوكالات المعتمدة لدينا واتفق معهم على مواعيد وخط سير الرحلة.',
    badgeEn: 'Mandatory Prerequisite',
    badgeAr: 'متطلب إلزامي أولي'
  },
  {
    stepNumber: 2,
    titleEn: 'Receive Your Official Letter of Invitation (LOI)',
    titleAr: 'استلام خطاب الدعوة الرسمي (LOI)',
    descriptionEn:
      'Your host agency registers your visit with the Ministry of Tourism and General Department of Passports and Nationality. Once approved, you will receive a unique security clearance reference and official Arabic LOI document with security QR code.',
    descriptionAr:
      'تقوم الوكالة بتسجيل بيانات زيارتكم لدى وزارة السياحة ومصلحة الجوازات والجنسية. بعد الموافقة، يُرسل لكم خطاب الدعوة المعتمد باللغة العربية مع رمز التحقق الأمني (QR Code).',
    actionRequiredEn: 'Keep digital and printed copies of the LOI ready for portal upload and border arrival.',
    actionRequiredAr: 'احتفظ بنسخة رقمية ومطبوعة من خطاب الدعوة لرفعه على البوابة وتقديمه عند الوصول.',
    badgeEn: 'Document Issued',
    badgeAr: 'وثيقة رسمية'
  },
  {
    stepNumber: 3,
    titleEn: 'Submit Application on Official Government Portal (evisa.gov.ly)',
    titleAr: 'تقديم الطلب عبر بوابة التأشيرة الإلكترونية الرسمية (evisa.gov.ly)',
    descriptionEn:
      'Visit the official Libyan government electronic visa portal. Create an account, input your biographical passport details, upload your passport scan, passport photograph (white background), and upload the LOI provided by your agency.',
    descriptionAr:
      'الدخول إلى البوابة الرسمية للحكومة الليبية للتأشيرة الإلكترونية. إنشاء حساب، إدخال بيانات الجواز، ورفع صورة الجواز، والصورة الشخصية، وخطاب الدعوة الصادر من الوكالة.',
    actionRequiredEn: 'Submit application and pay the government processing fee ($63 USD equivalent).',
    actionRequiredAr: 'إرسال الطلب وسداد الرسوم الحكومية الرسمية عبر البوابة.',
    officialLink: 'https://evisa.gov.ly',
    badgeEn: 'Official Portal',
    badgeAr: 'البوابة الحكومية'
  },
  {
    stepNumber: 4,
    titleEn: 'Certified Arabic Passport Translation Stamp',
    titleAr: 'ختم ترجمة جواز السفر المعتمدة باللغة العربية',
    descriptionEn:
      'Libyan immigration law requires all non-Arabic passports to carry a certified Arabic translation of the biodata page. Most licensed agencies handle this translation in Tripoli or Benghazi and affix the stamp or separate certificate upon airport arrival.',
    descriptionAr:
      'يشترط القانون الليبي توفر ترجمة معتمدة باللغة العربية لصفحة بيانات الجواز لغير الناطقين بالعربية. تتولى الوكالة إعداد هذه الترجمة واعتمادها رسمياً وتسليمها لكم عند الوصول.',
    actionRequiredEn: 'Verify with your tour operator that your Arabic translation dossier is pre-prepared.',
    actionRequiredAr: 'التأكيد مع وكالتك السياحية على جاهزية ملف الترجمة العربية قبل موعد السفر.',
    badgeEn: 'Immigration Requirement',
    badgeAr: 'شرط قانوني'
  },
  {
    stepNumber: 5,
    titleEn: 'Arrival, Immigration Clearance & Guide Reception',
    titleAr: 'الوصول، إنهاء إجراءات الجوازات واستقبال المرشد',
    descriptionEn:
      'Arrive via Mitiga (Tripoli TIP), Benina (Benghazi BEN), Misrata (MRA), or Ras Ajdir border. Present your printed eVisa, passport, and LOI to the immigration officer. Your licensed guide and agency representative will meet you immediately after customs to begin your escorted journey.',
    descriptionAr:
      'الوصول عبر مطار معيتيقة (طرابلس) أو بنينا (بنغازي) أو مصراتة أو منفذ رأس جدير. تقديم التأشيرة المطبوعة والجواز لموظف الجوازات، واستقبالكم من قبل ممثل الوكالة والمرشد المعتمد.',
    actionRequiredEn: 'Have printed documents in carry-on bag; proceed to agency greeting zone.',
    actionRequiredAr: 'الاحتفاظ بالوثائق الورقية في حقيبة اليد والتوجه لنقطة استقبال مندوب الوكالة.',
    badgeEn: 'Entry & Welcome',
    badgeAr: 'الوصول والترحيب'
  }
];

export const restrictionRules = {
  israeliStamp: {
    ruleEn:
      'CRITICAL: Under longstanding Libyan immigration statutes, any passport bearing an Israeli visa, entry/exit stamp, or border crossing stamp with Israel (including land borders from Egypt or Jordan) will result in immediate entry denial and deportation.',
    ruleAr:
      'تنبيه صارم: وفقاً لقوانين الهجرة الليبية، يُمنع دخول أي مسافر يحمل جواز سفره تأشيرة أو ختماً إسرائيلياً أو أختام المعابر الحدودية المجاورة لإسرائيل، ويُعاد المسافر فوراً على نفس الرحلة.',
    solutionEn:
      'If your passport contains Israeli stamps, you must renew or replace your passport before applying for a Libyan eVisa.'
  },
  passportValidity: {
    minMonths: 6,
    minBlankPages: 2,
    ruleEn: 'Passport must be valid for at least 6 months past your scheduled departure date, with at least 2 blank consecutive visa pages.',
    ruleAr: 'يجب أن يكون جواز السفر ساري المفعول لمدة لا تقل عن 6 أشهر بعد تاريخ المغادرة، ويحتوي على صفحتين فارغتين على الأقل.'
  }
};
