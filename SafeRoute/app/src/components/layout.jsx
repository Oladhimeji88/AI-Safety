import { Icon } from '../icons.jsx'

/* Scrollable screen body. */
export function ScreenBody({ children, className = '' }) {
  return <div className={`flex-1 overflow-y-auto overflow-x-hidden no-scrollbar ${className}`}>{children}</div>
}

/* A fixed bottom action area with a fade so content scrolls under it. */
export function BottomBar({ children }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 px-[18px] pt-[14px] pb-[26px] z-10"
      style={{ background: 'linear-gradient(180deg, transparent, var(--surface) 30%)' }}>
      {children}
    </div>
  )
}

/* Compact screen header with optional back button. */
export function ScreenHeader({ title, onBack, right }) {
  return (
    <div className="px-[18px] pt-2 pb-1 flex items-center gap-3">
      {onBack && (
        <button onClick={onBack} className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-surface border border-line shadow-sm text-ink shrink-0">
          <Icon name="chevron" size={18} className="rotate-180" />
        </button>
      )}
      <h1 className="text-[19px] font-bold flex-1">{title}</h1>
      {right}
    </div>
  )
}
