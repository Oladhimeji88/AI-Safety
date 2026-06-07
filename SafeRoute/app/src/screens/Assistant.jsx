import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { Button, Avatar } from '../components/ui.jsx'
import { Icon } from '../icons.jsx'

export function Assistant({ nav, dark }) {
  return (
    <PhoneFrame dark={dark}>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-[18px] pt-2.5 pb-3 border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar color="linear-gradient(150deg,#22C55E,#16a34a)"><Icon name="sparkle" size={20} className="text-[#04130a]" /></Avatar>
            <div><b className="text-[15px]">SafeRoute Assistant</b><div className="text-[11.5px] text-green">● Online · monitoring your trip</div></div>
          </div>
          <button onClick={() => nav('dashboard')} className="w-9 h-9 rounded-[11px] grid place-items-center bg-surface-2 text-ink-2"><Icon name="cross" size={18} /></button>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar px-[18px] pt-4 flex flex-col gap-3">
          <Bubble side="bot">Good afternoon, Jeremiah. Your route to the airport looks clear, but I'm watching one community report near Ikoyi.</Bubble>
          <Bubble side="bot">
            I'd suggest the Ozumba Mbadiwe route — it avoids the report and arrives ~4 min earlier.
            <Button onClick={() => nav('liveJourney')} iconRight="arrow" className="mt-2 py-2.5 text-[13px]">Use safer route</Button>
          </Bubble>
          <Bubble side="me">Is it safe to travel after 8pm tonight?</Bubble>
          <Bubble side="bot">After 8pm, risk on this corridor rises to <b className="text-amber-700">Moderate</b>. I'd recommend leaving before 7:30pm, sharing your live trip, and enabling auto check-ins every 15 min. Want me to set that up?</Bubble>
        </div>

        <div className="px-[18px] pb-[18px] pt-2">
          <div className="bg-surface border border-line rounded-full flex items-center gap-2.5 py-2 pl-4 pr-2 shadow">
            <span className="text-ink-2 flex-1 text-[13.5px]">Ask about your journey…</span>
            <div className="w-[38px] h-[38px] rounded-full bg-green grid place-items-center text-[#04130a]"><Icon name="arrow" size={18} stroke={2.6} /></div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

function Bubble({ side, children }) {
  if (side === 'me') {
    return <div className="max-w-[72%] self-end text-white py-3 px-3.5 rounded-[18px] rounded-br-[6px] bg-navy text-[13.5px] leading-snug">{children}</div>
  }
  return <div className="max-w-[82%] self-start bg-surface-2 py-3 px-3.5 rounded-[18px] rounded-bl-[6px] text-[13.5px] leading-snug">{children}</div>
}
