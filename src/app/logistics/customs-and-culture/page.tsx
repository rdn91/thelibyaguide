'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Camera, 
  Coins, 
  Shirt, 
  HeartHandshake, 
  CheckCircle2, 
  ShieldAlert, 
  Coffee,
  Info
} from 'lucide-react';

export default function CustomsAndCulturePage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
          <HeartHandshake className="w-4 h-4" />
          <span>{language === 'ar' ? 'العادات والتقاليد والأنظمة القانونية' : 'Ground Truth Cultural Etiquette & Regulations'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {language === 'ar' ? 'العادات والتقاليد واللوائح القانونية في ليبيا' : 'Culture, Etiquette & Regulations in Libya'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {language === 'ar'
            ? 'دليل عملي لتجنب الحرج والمشاكل القانونية: أنظمة التصوير والدرون، الاقتصاد النقدي وتصريف العملة، واللباس المعتدل، وكرم الضيافة الليبي.'
            : 'Essential ground truth knowledge on currency exchange, drone and photography laws, dress codes, and the warm hospitality traditions of North Africa.'}
        </p>
      </div>

      {/* 4 CORE SECTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1. Cash, Currency & Financial Reality */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Coins className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'ar' ? 'العملة والاقتصاد النقدي (كاش)' : 'Cash Economy & Currency Exchange'}
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              {language === 'ar'
                ? 'ليبيا تعتمد كلياً على التعاملات النقدية (الكاش). بطاقات الائتمان الدولية (فيزا وماستركارد) وأجهزة الصراف الآلي العالمية لا تعمل في معظم المتاجر والمطاعم.'
                : 'Libya operates overwhelmingly as a cash economy. International credit cards (Visa/Mastercard) and international ATM withdrawals do not function in domestic shops, cafes, or markets.'}
            </p>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-white/5 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <Info className="w-4 h-4 text-amber-400" />
                <span>{language === 'ar' ? 'نصيحة الصرف اللوجستية:' : 'Practical Cash Advice:'}</span>
              </div>
              <p className="text-slate-400">
                {language === 'ar'
                  ? 'احرص على جلب أوراق نقدية نظيفة وحديثة باليورو أو الدولار الأمريكي (فئة 50 و100). يمكن تصريفها بسهولة وبسعر السوق عبر وكالتك أو في سوق المشير بطرابلس.'
                  : 'Bring crisp, unmarked €50/€100 or \$50/\$100 banknotes. Your host tour operator will assist you with legal currency exchange into Libyan Dinars (LYD) at favorable parallel market rates upon arrival.'}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Photography & Drone Regulations */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
            <Camera className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'ar' ? 'قوانين التصوير واستخدام الدرون' : 'Photography & Drone Regulations'}
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              {language === 'ar'
                ? 'التصوير في المواقع الأثرية والطبيعية مسموح به ومرحب به بحرية. ولكن يُحظر تماماً تصوير المنشآت العسكرية، الحواجز الأمنية، والمباني الحكومية الحساسة.'
                : 'Photography of ancient Roman/Greek ruins, desert dunes, and public squares is completely permitted and celebrated. However, photographing military checkpoints, government installations, or uniformed personnel is strictly illegal.'}
            </p>
            <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                <ShieldAlert className="w-4 h-4" />
                <span>{language === 'ar' ? 'تنبيه طائرات الدرون:' : 'Crucial Drone Notice:'}</span>
              </div>
              <p>
                {language === 'ar'
                  ? 'إدخال طائرات الدرون عبر المطار بدون تصريح مسبق من وزارة الدفاع وهيئة الطيران المدني يؤدي لمصادرتها فوراً. يجب استخراج تصريح مسبق عبر وكالتك.'
                  : 'Importing consumer drones without prior written defense and civil aviation permits will result in immediate customs confiscation at the airport. Professional film crews must obtain permits 30 days prior via their agency.'}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Dress Codes & Modesty */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Shirt className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'ar' ? 'اللباس المحتشم والآداب العامة' : 'Dress Code & Cultural Modesty'}
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              {language === 'ar'
                ? 'ليبيا مجتمع إسلامي محافظ ومرحب للغاية بالضيوف. يُفضل ارتداء ملابس مريحة وفضفاضة تغطي الكتفين والركبتين للرجال والنساء في الأماكن العامة والأسواق.'
                : 'Libyan society is traditional and deeply hospitable. Modest, comfortable casual clothing covering shoulders and knees is appropriate for both men and women in public markets, historic medinas, and villages.'}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{language === 'ar' ? 'لا يُلزم النساء الأجنبيات بارتداء الحجاب في الشارع' : 'Foreign women are not legally required to wear a hijab in public'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{language === 'ar' ? 'يُطلب غطاء الرأس الخفيف عند زيارة المساجد التاريخية' : 'A headscarf is requested when entering active historical mosques'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Libyan Hospitality & Tea Rituals */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <Coffee className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'ar' ? 'طقوس الشاي بالرغوة وكرم الضيافة' : 'The Legendary Libyan Tea Ritual'}
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              {language === 'ar'
                ? 'الشاي الليبي ("شاهي العالة") ليس مجرد مشروب، بل هو رمز الكرم والترحاب. يتم خفقه في إبريقين معدنيين حتى تتكون رغوة كثيفة ("رغوة الشاهي")، ويُقدم مع الفول السوداني أو اللوز المحمص.'
                : 'Libyan tea ("Shahi Al-Aala") is a cornerstone of cultural life and hospitality. Brewed slowly with heavy foam created by pouring back and forth between metal pots, it is traditionally served in three small glasses, accompanied by roasted peanuts or almonds.'}
            </p>
            <p className="text-xs text-slate-400">
              {language === 'ar'
                ? 'قبول كوب الشاي عند استضافتك في المتاجر أو البيوت يعد بادرة احترام وود متبادل.'
                : 'Accepting a glass of tea when invited by a shopkeeper or local host is considered polite and sparks warm conversation.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
