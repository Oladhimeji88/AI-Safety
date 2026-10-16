// Stylized vector map — a lightweight stand-in for a mapping SDK.
// Honors theme via CSS map-* variables. Children render as overlays.
export function MapCanvas({ route = true, risk = false, dark = false, children }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: 'var(--map-land)' }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 330 600" preserveAspectRatio="xMidYMid slice">
        <rect width="330" height="600" fill="var(--map-land)" />
        <path d="M-20 470 Q 80 430 160 470 T 360 460 L360 620 L-20 620 Z" fill="var(--map-water)" />
        <path d="M210 -20 Q 250 80 300 110 T 360 200 L360 -20 Z" fill="var(--map-water)" />
        <g fill="var(--surface)" opacity={dark ? 0.5 : 0.85}>
          <rect x="22" y="60" width="70" height="60" rx="7" />
          <rect x="110" y="48" width="64" height="74" rx="7" />
          <rect x="200" y="150" width="62" height="58" rx="7" />
          <rect x="40" y="200" width="80" height="66" rx="7" />
          <rect x="150" y="240" width="70" height="60" rx="7" />
          <rect x="36" y="320" width="66" height="70" rx="7" />
          <rect x="135" y="360" width="78" height="60" rx="7" />
          <rect x="240" y="300" width="60" height="80" rx="7" />
        </g>
        <g stroke="var(--map-road-major)" strokeWidth="11" fill="none" strokeLinecap="round">
          <path d="M-10 150 H 360" /><path d="M120 -10 V 610" />
        </g>
        <g stroke="var(--map-road)" strokeWidth="6" fill="none" strokeLinecap="round">
          <path d="M-10 290 H 360" /><path d="M-10 430 H 360" /><path d="M230 -10 V 610" /><path d="M30 -10 V 610" />
        </g>
        {route && (
          <>
            <path d="M60 500 C 90 430 120 410 120 350 S 180 250 230 200 240 120 250 60" fill="none" stroke="#22C55E" strokeWidth="6.5" strokeLinecap="round" opacity=".28" />
            <path d="M60 500 C 90 430 120 410 120 350 S 180 250 230 200 240 120 250 60" fill="none" stroke="#22C55E" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="2 12" />
          </>
        )}
        {risk && (
          <>
            <circle cx="170" cy="300" r="46" fill="#F59E0B" opacity=".14" />
            <circle cx="265" cy="150" r="40" fill="#EF4444" opacity=".14" />
            <circle cx="80" cy="420" r="50" fill="#22C55E" opacity=".12" />
          </>
        )}
      </svg>
      {children}
    </div>
  )
}

/* A live "you are here" pulsing dot. */
export function LiveDot({ size = 16 }) {
  return (
    <div className="relative rounded-full bg-green border-[3px] border-white shadow" style={{ width: size, height: size, boxShadow: '0 0 0 5px rgba(34,197,94,.25)' }}>
      <span className="absolute -inset-[3px] rounded-full border-2 border-green animate-ripple" />
    </div>
  )
}

/* A map pin (positioned via style by caller). */
export function Pin({ color = '#22C55E', left, top }) {
  return (
    <div className="absolute z-[5]" style={{ left, top, transform: 'translate(-50%,-50%)' }}>
      <div className="w-[18px] h-[18px] rounded-full border-[3px] border-white shadow-md" style={{ background: color }} />
    </div>
  )
}
