import { useState } from 'react'
import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { ScreenBody } from '../components/layout.jsx'
import { TabBar } from '../components/TabBar.jsx'
import { Card, Avatar, Toggle, Lbl } from '../components/ui.jsx'
import { Icon } from '../icons.jsx'

const GROUPS = [
  ['Location & Tracking', [['nav', 'Location permission', 'Always', false], ['share', 'Live tracking', '', true], ['eye', 'Background location', '', true]]],
  ['Privacy & Data', [['lock', 'Data retention', '30 days', false], ['shield', 'Anonymous reports', '', true], ['settings', 'Security & 2FA', 'Enabled', false]]],
  ['Emergency', [['sos', 'SOS trigger', 'Hold 3s', false], ['users', 'Auto-escalation', '', true], ['bell', 'Missed check-in alerts', '', true]]],
]

export function Settings({ nav, dark, onToggleTheme }) {
  const [state, setState] = useState({})
  const isOn = (k, def) => (state[k] === undefined ? def : state[k])
  const flip = (k, def) => setState((s) => ({ ...s, [k]: !isOn(k, def) }))

  return (
    <PhoneFrame dark={dark}>
      <ScreenBody className="px-[18px] pt-2 pb-[92px]">
        <h1 className="text-[22px] font-bold">Settings</h1>

        <Card className="flex items-center gap-3 mt-3.5 p-3.5">
          <Avatar size={48} color="linear-gradient(150deg,#22C55E,#16a34a)">J</Avatar>
          <div className="flex-1"><b className="text-[15px]">Jeremiah Adeyemi</b><div className="text-[11.5px] text-ink-2">Protected since 2024 · Premium</div></div>
          <Icon name="chevron" size={18} className="text-ink-3" />
        </Card>

        <Card className="flex items-center justify-between mt-3 p-3.5">
          <div className="flex items-center gap-3"><Icon name="eye" size={20} className="text-green" /><div><b className="text-[13.5px]">Dark mode</b><div className="text-[11.5px] text-ink-2">Optimized for low-light travel</div></div></div>
          <Toggle on={dark} onClick={onToggleTheme} />
        </Card>

        {GROUPS.map((g) => (
          <div key={g[0]}>
            <Lbl className="mt-5 mb-2.5">{g[0]}</Lbl>
            <Card className="py-1 px-4">
              {g[1].map((r, i) => {
                const key = r[1]
                return (
                  <div key={key} className={`flex items-center gap-3 py-3 ${i ? 'border-t border-line' : ''}`}>
                    <div className="w-[34px] h-[34px] rounded-[10px] grid place-items-center bg-surface-2 text-green"><Icon name={r[0]} size={18} /></div>
                    <span className="flex-1 text-[13.5px] font-semibold">{r[1]}</span>
                    {r[3] === true || r[2] === '' ? (
                      <Toggle on={isOn(key, r[3])} onClick={() => flip(key, r[3])} scale={0.85} />
                    ) : (
                      <><span className="text-[11.5px] text-ink-2 font-semibold">{r[2]}</span><Icon name="chevron" size={16} className="text-ink-3" /></>
                    )}
                  </div>
                )
              })}
            </Card>
          </div>
        ))}
      </ScreenBody>
      <TabBar active="settings" onNavigate={nav} onSOS={() => nav('sos')} />
    </PhoneFrame>
  )
}
