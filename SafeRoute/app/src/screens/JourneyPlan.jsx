import { useState } from 'react'
import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { ScreenBody, BottomBar } from '../components/layout.jsx'
import { MapCanvas, Pin } from '../components/MapCanvas.jsx'
import { Button, Card, Chip, Avatar, Toggle, Lbl } from '../components/ui.jsx'
import { Icon } from '../icons.jsx'

const MODES = [{ i: 'car', t: 'Drive' }, { i: 'bus', t: 'Public' }, { i: 'walk', t: 'Walk' }]

export function JourneyPlan({ nav }) {
  const [mode, setMode] = useState(0)
  const [live, setLive] = useState(true)
  return (
    <PhoneFrame>
      <ScreenBody className="pb-[92px]">
        <div className="h-[170px] relative">
          <MapCanvas>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,.04), var(--surface))' }} />
            <Pin color="#0B1F3A" left="18%" top="80%" />
            <Pin color="#22C55E" left="76%" top="18%" />
          </MapCanvas>
          <div className="px-[18px] absolute top-2.5 left-0 right-0">
            <button onClick={() => nav('dashboard')} className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-surface border border-line shadow-sm text-ink">
              <Icon name="chevron" size={18} className="rotate-180" />
            </button>
          </div>
        </div>

        <div className="px-[18px] -mt-[26px] relative z-[2]">
          <Card className="py-1.5 px-3.5">
            <div className="flex items-center gap-3 py-3">
              <span className="w-[9px] h-[9px] rounded-full border-2 border-navy" />
              <div className="flex-1"><div className="text-[11.5px] text-ink-2">From</div><b className="text-[13.5px]">Victoria Island, Lagos</b></div>
            </div>
            <div className="flex items-center gap-3 py-3 border-t border-line">
              <span className="w-[9px] h-[9px] rounded-full bg-green" />
              <div className="flex-1"><div className="text-[11.5px] text-ink-2">To</div><b className="text-[13.5px]">Murtala Muhammed Airport</b></div>
              <Icon name="flag" size={17} className="text-green-600" />
            </div>
          </Card>
        </div>

        <div className="px-[18px] mt-4">
          <Lbl className="mb-2.5">Transport</Lbl>
          <div className="grid grid-cols-3 gap-2.5">
            {MODES.map((m, i) => (
              <button key={m.t} onClick={() => setMode(i)} className={`rounded-lg border p-3.5 px-2 text-center transition ${mode === i ? 'border-green bg-green-50' : 'border-line bg-surface'}`}>
                <div className={mode === i ? 'text-green-600' : 'text-ink-2'}><Icon name={m.i} size={24} className="mx-auto" /></div>
                <b className={`text-[12px] block mt-1.5 ${mode === i ? 'text-green-600' : 'text-ink'}`}>{m.t}</b>
              </button>
            ))}
          </div>
        </div>

        <div className="px-[18px] mt-4 flex flex-col gap-2.5">
          <Card className="flex items-center justify-between py-3.5 px-[15px]">
            <div className="flex items-center gap-3"><Icon name="clock" size={20} className="text-navy" /><div><div className="text-[11.5px] text-ink-2">Arrival time</div><b className="text-[13.5px]">Set for 4:30 PM</b></div></div>
            <Icon name="chevron" size={18} className="text-ink-3" />
          </Card>
          <Card className="flex items-center justify-between py-3.5 px-[15px]">
            <div className="flex items-center gap-3"><Icon name="users" size={20} className="text-navy" /><div><div className="text-[11.5px] text-ink-2">Watching this trip</div><b className="text-[13.5px]">Amara + 1 contact</b></div></div>
            <div className="flex"><Avatar size={26} color="#22C55E" className="border-2 border-surface">A</Avatar><Avatar size={26} color="#0B1F3A" className="border-2 border-surface -ml-2">D</Avatar></div>
          </Card>
          <Card className="flex items-center justify-between py-3.5 px-[15px]">
            <div className="flex items-center gap-3"><Icon name="nav" size={20} className="text-green-600" /><div><div className="text-[11.5px] text-ink-2">Live tracking</div><b className="text-[13.5px]">On for this journey</b></div></div>
            <Toggle on={live} onClick={() => setLive(!live)} />
          </Card>
        </div>
      </ScreenBody>

      <BottomBar>
        <Card className="flex items-center justify-between py-3 px-4 mb-3 bg-surface-2">
          <div className="flex items-center gap-2.5 text-ink-2"><Icon name="clock" size={18} /><div className="text-[11.5px] text-ink"><b className="text-[15px] font-display">34 min</b> · 18.2 km</div></div>
          <Chip dot>Low risk route</Chip>
        </Card>
        <Button onClick={() => nav('journeyRisk')} iconRight="arrow">Review route &amp; risk</Button>
      </BottomBar>
    </PhoneFrame>
  )
}
