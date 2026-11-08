'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import type { Lang, Mode } from '@/lib/types';
import { getDict, type Dict } from '@/lib/i18n';

interface SiteContext {
  lang: Lang;
  mode: Mode;
  t: Dict;
  setLang: (lang: Lang) => void;
  setMode: (mode: Mode) => void;
}

const Ctx = createContext<SiteContext | null>(null);

function read<T extends string>(key: string, allowed: readonly T[]): T | null {
  try {
    const v = localStorage.getItem(key);
    return v && (allowed as readonly string[]).includes(v) ? (v as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage unavailable (private mode); the preference just won't persist.
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [mode, setModeState] = useState<Mode>('visitor');

  useEffect(() => {
    // Restoring saved preferences after hydration keeps server and client markup identical.
    const savedLang = read('tlg.lang', ['en', 'ar'] as const);
    const savedMode = read('tlg.mode', ['visitor', 'resident'] as const);
    /* eslint-disable react-hooks/set-state-in-effect */
    if (savedLang) setLangState(savedLang);
    if (savedMode) setModeState(savedMode);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    write('tlg.lang', l);
  }, []);

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    write('tlg.mode', m);
  }, []);

  const value = useMemo(() => ({ lang, mode, t: getDict(lang), setLang, setMode }), [lang, mode, setLang, setMode]);

  return (
    <Ctx.Provider value={value}>
      {/* "user": framer-motion drops transform and layout animations when the OS asks for reduced motion. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </Ctx.Provider>
  );
}

export function useSite(): SiteContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useSite must be used inside <Providers>');
  return ctx;
}
