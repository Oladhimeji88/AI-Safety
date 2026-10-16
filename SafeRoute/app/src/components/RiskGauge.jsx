// Circular 0–100 journey risk score. Higher score = safer.
export function RiskGauge({ score = 82, size = 130 }) {
  const r = 52
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - score / 100)
  const color = score >= 75 ? '#22C55E' : score >= 50 ? '#F59E0B' : '#EF4444'
  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" style={{ transform: 'rotate(-90deg)' }} width={size} height={size}>
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--line)" strokeWidth="11" />
        <circle cx="60" cy="60" r={r} fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <b className="text-[34px] font-display leading-none">{score}</b>
          <div className="text-[11.5px] text-ink-2">/ 100</div>
        </div>
      </div>
    </div>
  )
}
