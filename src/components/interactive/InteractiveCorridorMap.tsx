'use client';

import { useEffect, useRef, useState } from 'react';
import type { LayerGroup, Map as LeafletMap } from 'leaflet';
import type { CorridorRoute, Sight } from '@/lib/types';
import { cn } from '@/lib/utils';

type Layer = 'A' | 'B' | 'air' | 'sights';

const STYLE: Record<CorridorRoute['tier'], { color: string; weight: number; dashArray?: string }> = {
  A: { color: '#2d6a4f', weight: 5 },
  B: { color: '#d97706', weight: 4, dashArray: '10 8' },
  air: { color: '#104068', weight: 2, dashArray: '2 8' },
};

const LEGEND: { key: Layer; label: string; swatch: string }[] = [
  { key: 'A', label: 'Coastal & city corridor', swatch: 'bg-open' },
  { key: 'B', label: 'Saharan expedition', swatch: 'bg-permit' },
  { key: 'air', label: 'Domestic flights', swatch: 'bg-sea' },
  { key: 'sights', label: '30 sights', swatch: 'bg-ochre' },
];

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

export default function InteractiveCorridorMap({
  routes,
  sights,
  className,
}: {
  routes: CorridorRoute[];
  sights: Sight[];
  className?: string;
}) {
  const el = useRef<HTMLDivElement>(null);
  const layers = useRef<Partial<Record<Layer, LayerGroup>>>({});
  const map = useRef<LeafletMap | null>(null);
  const [visible, setVisible] = useState<Record<Layer, boolean>>({ A: true, B: true, air: true, sights: true });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import('leaflet')).default;
      if (cancelled || !el.current || map.current) return;

      const m = L.map(el.current, {
        center: [29.5, 16],
        zoom: 5,
        minZoom: 4,
        maxZoom: 11,
        scrollWheelZoom: false,
        attributionControl: true,
      });
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
      }).addTo(m);

      for (const tier of ['A', 'B', 'air'] as const) {
        const g = L.layerGroup();
        routes
          .filter((r) => r.tier === tier)
          .forEach((r) => L.polyline(r.points, { ...STYLE[tier], opacity: 0.9, lineCap: 'round' }).bindTooltip(r.label).addTo(g));
        g.addTo(m);
        layers.current[tier] = g;
      }

      const sg = L.layerGroup();
      sights.forEach((s) => {
        L.circleMarker([s.coordinates.lat, s.coordinates.lng], {
          radius: 6,
          color: '#fff',
          weight: 2,
          fillColor: s.access === 'expedition' ? '#d97706' : '#c58940',
          fillOpacity: 1,
        })
          .bindPopup(
            `<p style="font-weight:600;margin:0 0 2px">${escapeHtml(s.nameEn)}</p>` +
              `<p style="margin:0 0 6px;color:#636b74;font-size:12px">${escapeHtml(s.city)} · ${
                s.access === 'expedition' ? 'Escorted expedition' : 'Day trip from a city'
              }</p>` +
              `<a href="/destinations/${encodeURIComponent(s.slug)}" style="color:#104068;font-weight:600;font-size:12px">Open guide →</a>`,
          )
          .addTo(sg);
      });
      sg.addTo(m);
      layers.current.sights = sg;
      map.current = m;
    })();
    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
      layers.current = {};
    };
  }, [routes, sights]);

  const toggle = (k: Layer) => {
    setVisible((v) => {
      const next = { ...v, [k]: !v[k] };
      const g = layers.current[k];
      if (g && map.current) {
        if (next[k]) g.addTo(map.current);
        else g.remove();
      }
      return next;
    });
  };

  return (
    <div className={cn('overflow-hidden rounded-2xl border border-line bg-card', className)}>
      <div
        ref={el}
        className="h-[420px] w-full sm:h-[520px]"
        role="region"
        aria-label="Map of Libya showing escorted tourist corridors and the 30 sights"
      />
      <div className="flex flex-wrap gap-2 border-t border-line bg-white p-3" role="group" aria-label="Map layers">
        {LEGEND.map((l) => (
          <button
            key={l.key}
            type="button"
            aria-pressed={visible[l.key]}
            onClick={() => toggle(l.key)}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors',
              visible[l.key] ? 'border-ink/15 bg-ground text-ink' : 'border-line bg-white text-muted line-through',
            )}
          >
            <span className={cn('size-2.5 rounded-full', l.swatch)} aria-hidden />
            {l.label}
          </button>
        ))}
        <p className="ms-auto self-center text-[11px] text-muted">Routes are illustrative, not navigational.</p>
      </div>
    </div>
  );
}
