import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { MapCanvas, LiveDot, Pin } from '../components/MapCanvas.jsx'
import { Button, Card, Chip, Avatar, Meter } from '../components/ui.jsx'
import { Icon } from '../icons.jsx'

const TIMELINE = [
  ['Departed Victoria Island', '4:02 PM', 'done'],
  ['Passed Lekki toll · clear', '4:11 PM', 'done'],
  ['Approaching Third Mainland', 'now', 'active'],
  ['Arrive at airport', '4:24 PM', 'pending'],
]

export function LiveJourney({ nav }) {
  return (
    <PhoneFrame>
      <div className="flex-1 overflow-hidden flex flex-col relative">
        <div className="relative flex-1 min-h-[430px]">
          <MapCanvas>
            <Pin color="#0B1F3A" left="18%" top="84%" />
            <Pin color="#22C55E" left="76%" top="12%" />
            <div className="absolute" style={{ left: '40%', top: '54%', transform: 'translate(-50%,-50%)' }}><LiveDot /></div>
          </MapCanvas>

          <div className="px-[18px] absolute top-2 left-0 right-0">
            <Card className="flex items-center justify-between py-[11px] px-3.5 shadow-md">
              <div className="flex items-center gap-2.5">
                <Chip dot>Live</Chip>
                <div><b className="text-[13px]">To Airport</b><div className="text-[11.5px] text-ink-2">On safest route</div></div>
              </div>
              <div className="flex">
                <Avatar size={28} color="#22C55E" className="border-2 border-surface">A</Avatar>
                <Avatar size={28} color="#0B1F3A" className="border-2 border-surface -ml-2">D</Avatar>
                <div className="w-7 h-7 rounded-[14px] grid place-items-center text-[10px] font-bold text-ink-2 bg-surface-2 border-2 border-surface -ml-2">+1</div>
              </div>
            </Card>
          </div>

          <div className="absolute left-[18px] bottom-4">
            <Card className="py-2.5 px-3.5 text-center"><b className="text-[20px] font-display leading-none">52</b><div className="text-[11.5px] text-ink-2">km/h</div></Card>
          </div>
        </div>

        {/* bottom sheet */}
        <div className="bg-surface rounded-t-[24px] -mt-[22px] relative z-[3] px-[18px] pt-3.5 pb-4 shrink-0" style={{ boxShadow: '0 -10px 30px rgba(11,31,58,.10)' }}>
          <div className="w-[38px] h-1 rounded-full bg-line mx-auto mb-3.5" />
          <div className="flex items-center justify-between">
            <div><div className="text-[11.5px] text-ink-2">Arriving in</div><b className="text-[26px] font-display">14 min</b></div>
            <div className="text-right"><div className="text-[11.5px] text-ink-2">ETA · 4:24 PM</div><div className="mt-1"><Chip dot>6 min early</Chip></div></div>
          </div>
          <Meter value={58} color="linear-gradient(90deg,#22C55E,#16a34a)" className="mt-3.5" />

          <div className="mt-3.5 flex flex-col">
            {TIMELINE.map((t, i, a) => (
              <div key={t[0]} className="flex gap-3 items-stretch">
                <div className="flex flex-col items-center">
                  <span className="w-[11px] h-[11px] rounded-full shrink-0 mt-[3px]" style={{ background: t[2] === 'pending' ? 'var(--line)' : '#22C55E', boxShadow: t[2] === 'active' ? '0 0 0 4px rgba(34,197,94,.25)' : 'none' }} />
                  {i < a.length - 1 && <span className="w-0.5 flex-1 bg-line min-h-[14px]" />}
                </div>
                <div className={i < a.length - 1 ? 'pb-2.5' : ''}><b className={`text-[12.5px] ${t[2] === 'pending' ? 'text-ink-3' : 'text-ink'}`}>{t[0]}</b><div className="text-[11.5px] text-ink-2">{t[1]}</div></div>
              </div>
            ))}
          </div>

          <Button onClick={() => nav('sos')} variant="red" icon="sos" className="mt-1.5">Hold for Emergency SOS</Button>
        </div>
      </div>
    </PhoneFrame>
  )
}
