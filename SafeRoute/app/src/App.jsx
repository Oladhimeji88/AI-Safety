import { useState } from 'react'
import { Logo, Icon } from './icons.jsx'
import { Onboarding } from './screens/Onboarding.jsx'
import { Dashboard } from './screens/Dashboard.jsx'
import { JourneyPlan } from './screens/JourneyPlan.jsx'
import { JourneyRisk } from './screens/JourneyRisk.jsx'
import { LiveJourney } from './screens/LiveJourney.jsx'
import { SOS, SOSCall } from './screens/SOS.jsx'
import { IntelMap } from './screens/IntelMap.jsx'
import { CommunityReport } from './screens/CommunityReport.jsx'
import { Contacts } from './screens/Contacts.jsx'
import { Settings } from './screens/Settings.jsx'
import { Assistant } from './screens/Assistant.jsx'

const SCREENS = {
  onboarding: Onboarding,
  dashboard: Dashboard,
  journeyPlan: JourneyPlan,
  journeyRisk: JourneyRisk,
  liveJourney: LiveJourney,
  sos: SOS,
  sosCall: SOSCall,
  map: IntelMap,
  report: CommunityReport,
  contacts: Contacts,
  settings: Settings,
  assistant: Assistant,
}

const RAIL = [
  ['Get started', [['onboarding', 'Onboarding', 'shield']]],
  ['Core', [['dashboard', 'Home Dashboard', 'home'], ['map', 'Intelligence Map', 'map'], ['assistant', 'AI Assistant', 'sparkle']]],
  ['Journey', [['journeyPlan', 'Start Journey', 'nav'], ['journeyRisk', 'Risk Analysis', 'gauge'], ['liveJourney', 'Live Tracking', 'route']]],
  ['Emergency', [['sos', 'SOS Mode', 'sos'], ['sosCall', 'Contacting Help', 'phone']]],
  ['Community & System', [['report', 'Report Incident', 'alert'], ['contacts', 'Contacts Center', 'users'], ['settings', 'Settings & Privacy', 'settings']]],
]

export default function App() {
  const [screen, setScreen] = useState('onboarding')
  const [dark, setDark] = useState(false)
  const nav = (id) => SCREENS[id] && setScreen(id)
  const Active = SCREENS[screen]

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col lg:flex-row text-slate-800 dark:text-slate-100">
        {/* ---- Side rail ---- */}
        <aside className="lg:w-[300px] lg:h-screen lg:sticky top-0 shrink-0 border-b lg:border-b-0 lg:border-r border-black/[.06] dark:border-white/10 bg-white/70 dark:bg-[#0b1424]/80 backdrop-blur-xl flex flex-col">
          <div className="px-6 pt-6 pb-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-[11px] grid place-items-center shadow-sm" style={{ background: 'linear-gradient(150deg,#0B1F3A,#1c3a66)' }}><Logo size={20} /></span>
            <div>
              <div className="font-display font-bold text-[17px] tracking-tight leading-none">SafeRoute</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Interactive Prototype</div>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 pb-4 flex flex-row lg:flex-col gap-1 lg:gap-0">
            {RAIL.map(([group, items]) => (
              <div key={group} className="lg:mt-3">
                <div className="hidden lg:block px-3 mb-1 text-[10.5px] font-bold uppercase tracking-[.08em] text-slate-400">{group}</div>
                {items.map(([id, label, icon]) => {
                  const on = screen === id
                  return (
                    <button
                      key={id}
                      onClick={() => setScreen(id)}
                      className={`flex items-center gap-2.5 lg:w-full whitespace-nowrap rounded-xl px-3 py-2.5 text-[13.5px] font-semibold transition ${on ? 'bg-navy text-white dark:bg-green dark:text-[#04130a] shadow' : 'text-slate-600 dark:text-slate-300 hover:bg-black/[.04] dark:hover:bg-white/5'}`}
                    >
                      <Icon name={icon} size={17} />
                      {label}
                    </button>
                  )
                })}
              </div>
            ))}
          </nav>

          <div className="px-5 py-4 border-t border-black/[.06] dark:border-white/10 flex items-center justify-between">
            <span className="text-[12px] font-semibold text-slate-500 dark:text-slate-400">Appearance</span>
            <button onClick={() => setDark(!dark)} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[12.5px] font-bold bg-black/[.04] dark:bg-white/10">
              <Icon name={dark ? 'sparkle' : 'eye'} size={15} />
              {dark ? 'Light' : 'Dark'}
            </button>
          </div>
        </aside>

        {/* ---- Stage ---- */}
        <main className="flex-1 grid place-items-center py-12 px-6 relative">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center hidden lg:block">
            <div className="text-[12px] font-bold uppercase tracking-[.1em] text-slate-400">Tap anything — it's live</div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 rounded-full opacity-60 blur-3xl -z-10" style={{ background: 'radial-gradient(circle, rgba(34,197,94,.18), transparent 65%)' }} />
            <Active nav={nav} dark={dark} onToggleTheme={() => setDark(!dark)} />
          </div>
        </main>
      </div>
    </div>
  )
}
