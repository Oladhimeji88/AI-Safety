// SafeRoute UI primitives — the atomic layer of the component library.
import { Icon } from '../icons.jsx'

const cx = (...c) => c.filter(Boolean).join(' ')

/* ---------- Button ---------------------------------------------------- */
const BTN_BASE =
  'inline-flex items-center justify-center gap-2 w-full rounded-[16px] font-bold text-[15px] py-4 px-4 transition active:scale-[.98] font-body select-none'
const BTN_VARIANTS = {
  green: 'bg-gradient-to-b from-green to-green-600 text-[#04130a] shadow-green',
  navy: 'bg-navy text-white dark:bg-surface-2 dark:text-ink dark:border dark:border-line',
  outline: 'bg-surface text-ink border-[1.5px] border-line',
  red: 'bg-gradient-to-b from-[#f87171] to-danger text-white shadow-red',
}
export function Button({ variant = 'green', icon, iconRight, children, className, ...p }) {
  return (
    <button className={cx(BTN_BASE, BTN_VARIANTS[variant], className)} {...p}>
      {icon && <Icon name={icon} size={18} stroke={2.4} />}
      {children}
      {iconRight && <Icon name={iconRight} size={18} stroke={2.4} />}
    </button>
  )
}

/* ---------- Chip ------------------------------------------------------ */
const CHIP_VARIANTS = {
  green: 'bg-green-50 text-green-600',
  amber: 'bg-amber-50 text-amber-700',
  red: 'bg-danger-50 text-danger-600',
  navy: 'bg-navy/[.06] text-navy dark:bg-white/10 dark:text-ink',
  glass: 'bg-white/15 text-white',
}
export function Chip({ variant = 'green', dot, icon, children, className }) {
  return (
    <span className={cx('inline-flex items-center gap-1.5 text-[11.5px] font-bold py-[5px] px-[11px] rounded-full whitespace-nowrap', CHIP_VARIANTS[variant], className)}>
      {dot && <span className="w-[7px] h-[7px] rounded-full bg-current" />}
      {icon && <Icon name={icon} size={12} stroke={2.4} />}
      {children}
    </span>
  )
}

/* ---------- Card ------------------------------------------------------ */
export function Card({ className, children, ...p }) {
  return (
    <div className={cx('bg-surface rounded-lg shadow border border-line', className?.includes('p-') ? '' : 'p-4', className)} {...p}>
      {children}
    </div>
  )
}

/* ---------- Avatar ---------------------------------------------------- */
export function Avatar({ children, color = '#0B1F3A', size = 42, className }) {
  return (
    <div
      className={cx('grid place-items-center rounded-[14px] font-extrabold text-white font-display shrink-0', className)}
      style={{ width: size, height: size, background: color, fontSize: size * 0.4 }}
    >
      {children}
    </div>
  )
}

/* ---------- Toggle ---------------------------------------------------- */
export function Toggle({ on = false, onClick, scale = 1 }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={on}
      className={cx('relative shrink-0 rounded-full transition-colors', on ? 'bg-green' : 'bg-slate-300 dark:bg-white/20')}
      style={{ width: 44 * scale, height: 26 * scale }}
    >
      <span
        className="absolute top-[3px] rounded-full bg-white shadow-sm transition-all"
        style={{ width: 20 * scale, height: 20 * scale, left: on ? 21 * scale : 3 * scale }}
      />
    </button>
  )
}

/* ---------- Meter ----------------------------------------------------- */
export function Meter({ value = 50, color = 'var(--green)', className }) {
  return (
    <div className={cx('h-2 rounded-full bg-line overflow-hidden', className)}>
      <i className="block h-full rounded-full transition-all" style={{ width: `${value}%`, background: color }} />
    </div>
  )
}

/* ---------- Label ----------------------------------------------------- */
export const Lbl = ({ children, className }) => (
  <p className={cx('text-[11px] font-bold uppercase tracking-[.06em] text-ink-3', className)}>{children}</p>
)

/* ---------- Icon tile (circular/rounded action background) ------------ */
export function IconTile({ name, color, bg, size = 40, icon = 21 }) {
  return (
    <div className="grid place-items-center rounded-xl shrink-0" style={{ width: size, height: size, background: bg, color }}>
      <Icon name={name} size={icon} />
    </div>
  )
}
