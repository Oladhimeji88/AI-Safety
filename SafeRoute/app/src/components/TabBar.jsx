import { Icon } from '../icons.jsx'

const TABS = [
  { id: 'dashboard', label: 'Home', icon: 'home' },
  { id: 'map', label: 'Map', icon: 'map' },
  { id: 'sos', label: 'SOS', icon: 'sos' },
  { id: 'contacts', label: 'Contacts', icon: 'users' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
]

/* Bottom navigation with a raised central SOS action. */
export function TabBar({ active, onNavigate, onSOS }) {
  return (
    <div className="shrink-0 flex items-start justify-around px-[10px] pt-[11px] pb-6 bg-surface border-t border-line relative z-20">
      {TABS.map((t) => {
        if (t.id === 'sos') {
          return (
            <button key={t.id} onClick={onSOS} className="flex flex-col items-center flex-1 -mt-[26px]" aria-label="Emergency SOS">
              <span className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#f87171] to-danger grid place-items-center shadow-red text-white border-4 border-surface">
                <Icon name="sos" size={24} />
              </span>
            </button>
          )
        }
        const on = active === t.id
        return (
          <button
            key={t.id}
            onClick={() => onNavigate(t.id)}
            className={`flex flex-col items-center gap-1 flex-1 text-[10px] font-bold ${on ? 'text-green-600' : 'text-ink-3'}`}
          >
            <Icon name={t.icon} size={23} />
            <span>{t.label}</span>
          </button>
        )
      })}
    </div>
  )
}
