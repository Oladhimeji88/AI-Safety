import { Icon } from '../icons.jsx'

/* StatusBar — iOS-style, inherits text color from screen theme. */
export function StatusBar({ light = false }) {
  return (
    <div className={`h-[50px] flex items-end justify-between px-[22px] pb-[7px] text-[13px] font-bold shrink-0 z-30 ${light ? 'text-white' : 'text-ink'}`}>
      <span>9:41</span>
      <div className="flex gap-1.5 items-center">
        <Icon name="signal" size={16} />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" /><path d="M12 19.5h.01" />
        </svg>
        <svg width="17" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="2" y="7" width="17" height="10" rx="2.5" /><path d="M22 10v4" /><rect x="4" y="9.5" width="11" height="5" rx="1" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}

/* PhoneFrame — the device shell. `screenStyle`/`screenClass` style the
   inner screen (used for SOS full-bleed gradients). */
export function PhoneFrame({ children, dark = false, statusLight = false, screenStyle, screenClass = '' }) {
  return (
    <div
      className={dark ? 'dark' : ''}
      style={{
        position: 'relative', width: 330, height: 712, borderRadius: 46, flexShrink: 0,
        background: '#05080f', padding: 13,
        boxShadow: '0 50px 90px -30px rgba(11,31,58,.55), 0 0 0 2px rgba(255,255,255,.04), inset 0 0 0 2px rgba(255,255,255,.06)',
      }}
    >
      {/* dynamic island */}
      <div style={{ position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)', width: 108, height: 30, background: '#05080f', borderRadius: 18, zIndex: 40, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 11 }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#0c1524', boxShadow: 'inset 0 0 0 2px #1b2740' }} />
      </div>
      <div
        className={`relative w-full h-full rounded-[34px] overflow-hidden flex flex-col text-[14px] ${screenClass}`}
        style={{ background: screenStyle ? undefined : 'var(--bg)', color: 'var(--ink)', ...(screenStyle || {}) }}
      >
        <StatusBar light={statusLight} />
        {children}
      </div>
    </div>
  )
}
