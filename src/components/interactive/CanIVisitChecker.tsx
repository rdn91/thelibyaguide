'use client';

import { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, CircleAlert, CircleX, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge, type Tone } from '@/components/ui/Badge';
import { Select } from '@/components/ui/Input';
import { cn, logistics } from '@/lib/utils';

type Verdict = 'go' | 'caution' | 'stop';
type Route = 'coast' | 'nafusa' | 'east' | 'sahara';

const ROUTES: { id: Route; label: string; detail: string; tier: 'A' | 'B' }[] = [
  { id: 'coast', label: 'Tripoli, Sabratha & Leptis Magna', detail: 'Coastal corridor, 4–5 days', tier: 'A' },
  { id: 'nafusa', label: 'Nafusa Mountains & Ghadames', detail: 'Ghadames needs desert permits', tier: 'B' },
  { id: 'east', label: 'Cyrene, Apollonia & the Green Mountain', detail: 'Fly into Benghazi', tier: 'A' },
  { id: 'sahara', label: 'Acacus, Ubari lakes & Fezzan', detail: 'Full expedition, 8+ days', tier: 'B' },
];

const LEAD = [
  { id: 'lt2', label: 'Less than 2 weeks', weeks: 1 },
  { id: '2to4', label: '2–4 weeks', weeks: 3 },
  { id: '4to6', label: '4–6 weeks', weeks: 5 },
  { id: '6plus', label: 'More than 6 weeks', weeks: 8 },
];

const STEPS = ['Passport', 'Visa path', 'Itinerary', 'Operator'] as const;

const VERDICT: Record<Verdict, { tone: Tone; label: string; Icon: typeof Check }> = {
  go: { tone: 'open', label: 'Ready', Icon: Check },
  caution: { tone: 'permit', label: 'Needs attention', Icon: CircleAlert },
  stop: { tone: 'closed', label: 'Blocked', Icon: CircleX },
};

function Choice({
  checked,
  onChange,
  type = 'radio',
  name,
  children,
}: {
  checked: boolean;
  onChange: () => void;
  type?: 'radio' | 'checkbox';
  name: string;
  children: React.ReactNode;
}) {
  return (
    <label
      className={cn(
        'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
        checked ? 'border-sea bg-sea-soft/60' : 'border-line bg-white hover:border-line-strong',
      )}
    >
      <input type={type} name={name} checked={checked} onChange={onChange} className="mt-1 size-4 accent-[#104068]" />
      <span className="text-sm leading-relaxed">{children}</span>
    </label>
  );
}

export default function CanIVisitChecker() {
  const uid = useId();
  const [step, setStep] = useState(0);
  const [passportId, setPassportId] = useState('');
  const [validity, setValidity] = useState<'yes' | 'no' | ''>('');
  const [stamps, setStamps] = useState<'yes' | 'no' | ''>('');
  const [lead, setLead] = useState('');
  const [routes, setRoutes] = useState<Route[]>([]);
  const [checks, setChecks] = useState<number[]>([]);

  useEffect(() => {
    // Hero quick-check deep-links here with ?passport=
    const p = new URLSearchParams(window.location.search).get('passport');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (p && logistics.passports.some((x) => x.id === p)) setPassportId(p);
  }, []);

  const passport = logistics.passports.find((p) => p.id === passportId);
  const advisory = logistics.advisories.find((a) => a.id === passport?.advisory);
  const leadWeeks = LEAD.find((l) => l.id === lead)?.weeks ?? 0;
  const hasSahara = routes.some((r) => ROUTES.find((x) => x.id === r)?.tier === 'B');
  const total = logistics.operatorChecklist.length;

  const results: { title: string; verdict: Verdict; body: string }[] = [
    {
      title: 'Passport',
      verdict: passport?.blocked || validity === 'no' ? 'stop' : stamps === 'yes' ? 'caution' : 'go',
      body: passport?.blocked
        ? passport.note
        : validity === 'no'
          ? 'Renew first: you need at least 6 months of validity beyond your arrival date.'
          : stamps === 'yes'
            ? 'Israeli stamps or entry marks may lead to refusal. Many travellers apply on a fresh passport.'
            : 'Validity and stamps look fine.',
    },
    {
      title: 'Visa path',
      verdict: leadWeeks >= 4 ? 'go' : leadWeeks >= 2 ? 'caution' : 'stop',
      body:
        leadWeeks >= 4
          ? 'Enough time for operator sponsorship, the LOI and the e-Visa.'
          : leadWeeks >= 2
            ? 'Tight. Some e-Visas clear in days, others take weeks. Book changeable flights.'
            : 'Too short to plan on. Move your dates or treat any approval as a bonus.',
    },
    {
      title: 'Itinerary',
      verdict: routes.length === 0 ? 'caution' : hasSahara && leadWeeks < 6 ? 'caution' : 'go',
      body:
        routes.length === 0
          ? 'Pick at least one region.'
          : hasSahara
            ? `Desert routes add permits and a convoy.${leadWeeks < 6 ? ' Allow 6+ weeks.' : ''} Best season is October–March.`
            : 'Coastal and mountain corridors suit a first trip. Plan 5–8 days.',
    },
    {
      title: 'Operator',
      verdict: checks.length === total ? 'go' : checks.length >= total - 2 ? 'caution' : 'stop',
      body:
        checks.length === total
          ? 'Your operator meets every check on our list.'
          : `${total - checks.length} of ${total} checks still open. Don't pay a deposit until they're answered in writing.`,
    },
  ];

  const canNext = [
    !!passport && (passport.blocked || (!!validity && !!stamps)),
    !!lead,
    routes.length > 0,
    true,
  ][step];

  const reset = () => {
    setStep(0);
    setPassportId('');
    setValidity('');
    setStamps('');
    setLead('');
    setRoutes([]);
    setChecks([]);
  };

  const done = step === STEPS.length;

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-ground shadow-card">
      <ol className="grid grid-cols-4 border-b border-line bg-white" aria-label="Steps">
        {STEPS.map((s, i) => (
          <li key={s}>
            <button
              type="button"
              onClick={() => i < step && setStep(i)}
              disabled={i > step}
              aria-current={i === step ? 'step' : undefined}
              className={cn(
                'flex w-full flex-col items-start gap-1 px-3 py-3 text-start sm:px-5 sm:py-4',
                i === step ? 'text-sea' : i < step || done ? 'text-ink' : 'text-muted',
              )}
            >
              <span
                className={cn(
                  'h-1 w-full rounded-full',
                  i < step || done ? 'bg-sea' : i === step ? 'bg-sea/40' : 'bg-line',
                )}
                aria-hidden
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                <span className="tabular-nums">{i + 1}</span>
                <span className="hidden sm:inline"> · {s}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div className="p-5 sm:p-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <fieldset className="space-y-6">
                <legend className="font-display text-2xl">Which passport are you travelling on?</legend>
                <Select
                  aria-label="Passport"
                  value={passportId}
                  onChange={(e) => setPassportId(e.target.value)}
                  className="max-w-md"
                >
                  <option value="">Choose a passport…</option>
                  {logistics.passports.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </Select>
                {passport && (
                  <div
                    className={cn(
                      'rounded-xl p-4 text-sm leading-relaxed',
                      passport.blocked ? 'bg-closed-soft text-closed' : 'bg-card',
                    )}
                  >
                    {advisory && <p className="font-semibold">{advisory.issuer}: {advisory.rating}</p>}
                    <p className={cn(advisory && 'mt-1')}>{passport.note}</p>
                  </div>
                )}
                {passport && !passport.blocked && (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <fieldset className="space-y-2">
                      <legend className="mb-2 text-sm font-semibold">More than 6 months of validity on arrival?</legend>
                      {(['yes', 'no'] as const).map((v) => (
                        <Choice key={v} name={`${uid}-val`} checked={validity === v} onChange={() => setValidity(v)}>
                          {v === 'yes' ? 'Yes' : 'No, or not sure'}
                        </Choice>
                      ))}
                    </fieldset>
                    <fieldset className="space-y-2">
                      <legend className="mb-2 text-sm font-semibold">Any Israeli stamps or entry marks?</legend>
                      {(['no', 'yes'] as const).map((v) => (
                        <Choice key={v} name={`${uid}-stamp`} checked={stamps === v} onChange={() => setStamps(v)}>
                          {v === 'no' ? 'No' : 'Yes'}
                        </Choice>
                      ))}
                    </fieldset>
                  </div>
                )}
              </fieldset>
            )}

            {step === 1 && (
              <fieldset className="space-y-6">
                <legend className="font-display text-2xl">How long until you want to fly?</legend>
                <p className="max-w-2xl text-sm leading-relaxed text-muted">
                  Tourist visas are sponsored: a licensed operator requests security clearance, issues your Letter of
                  Invitation, then the e-Visa is issued via{' '}
                  <a href={logistics.visa.portal} target="_blank" rel="noopener noreferrer" className="font-medium text-sea underline">
                    evisa.gov.ly
                  </a>
                  .
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {LEAD.map((l) => (
                    <Choice key={l.id} name={`${uid}-lead`} checked={lead === l.id} onChange={() => setLead(l.id)}>
                      {l.label}
                    </Choice>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset className="space-y-6">
                <legend className="font-display text-2xl">Where do you want to go?</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {ROUTES.map((r) => (
                    <Choice
                      key={r.id}
                      type="checkbox"
                      name={`${uid}-route`}
                      checked={routes.includes(r.id)}
                      onChange={() => setRoutes((x) => (x.includes(r.id) ? x.filter((y) => y !== r.id) : [...x, r.id]))}
                    >
                      <span className="flex flex-wrap items-center gap-2 font-semibold">
                        {r.label}
                        <Badge tone={r.tier === 'A' ? 'open' : 'permit'}>{r.tier === 'A' ? 'Corridor A' : 'Corridor B'}</Badge>
                      </span>
                      <span className="mt-0.5 block text-muted">{r.detail}</span>
                    </Choice>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 3 && (
              <fieldset className="space-y-6">
                <legend className="font-display text-2xl">Does your operator pass these checks?</legend>
                <p className="max-w-2xl text-sm leading-relaxed text-muted">
                  We don&apos;t list or rank operators. Ask yours for each of these in writing before you pay.
                </p>
                <div className="grid gap-2">
                  {logistics.operatorChecklist.map((c, i) => (
                    <Choice
                      key={c}
                      type="checkbox"
                      name={`${uid}-op`}
                      checked={checks.includes(i)}
                      onChange={() => setChecks((x) => (x.includes(i) ? x.filter((y) => y !== i) : [...x, i]))}
                    >
                      {c}
                    </Choice>
                  ))}
                </div>
              </fieldset>
            )}

            {done && (
              <div>
                <h3 className="font-display text-2xl">Your readiness protocol</h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {results.map((r) => {
                    const v = VERDICT[r.verdict];
                    return (
                      <li key={r.title} className="rounded-2xl border border-line bg-white p-5">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold">{r.title}</p>
                          <Badge tone={v.tone}>
                            <v.Icon className="size-3.5" aria-hidden /> {v.label}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-6 text-xs leading-relaxed text-muted">
                  This is a planning aid, not legal or security advice. Your government&apos;s advisory still applies —
                  read it before booking.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-6">
          {step > 0 && !done ? (
            <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
              <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden /> Back
            </Button>
          ) : done ? (
            <Button variant="ghost" onClick={reset}>
              <RotateCcw className="size-4" aria-hidden /> Start again
            </Button>
          ) : (
            <span />
          )}
          {!done && (
            <Button
              onClick={() => setStep((s) => (passport?.blocked ? STEPS.length : s + 1))}
              disabled={!canNext}
            >
              {step === STEPS.length - 1 ? 'See my protocol' : 'Continue'}
              <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
