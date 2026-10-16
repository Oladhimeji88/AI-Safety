import { useEffect, useState } from 'react'
import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { ScreenBody } from '../components/layout.jsx'
import { Icon } from '../icons.jsx'

const STATUS = [
  ['nav', 'Live location streaming', 'Victoria Island, Lagos · accurate to 4m'],
  ['users', '3 contacts notified', 'Amara, David & Chloe alerted now'],
  ['phone', 'Emergency services engaged', 'Lagos response · ETA being calculated'],
]

function ActionBtn({ icon, label, bg, color = '#fff', onClick }) {
  return (
    <button onClick={onClick} className="rounded-[16px] py-[18px] px-2 flex flex-col items-center gap-1.5 font-bold text-[13px] active:scale-[.97] transition" style={{ background: bg, color, backdropFilter: bg.includes('255,255,255,.16') ? 'blur(6px)' : undefined }}>
      <Icon name={icon} size={24} className="" />
      <span>{label}</span>
    </button>
  )
}

export function SOS({ nav }) {
  const [t, setT] = useState(7)
  useEffect(() => {
    const id = setInterval(() => setT((v) => (v > 0 ? v - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])
  const total = 553
  const offset = total * (1 - t / 9)

  return (
    <PhoneFrame statusLight screenStyle={{ background: 'linear-gradient(170deg,#7f1d1d,#b91c1c 50%,#dc2626)', color: '#fff' }}>
      <ScreenBody className="px-5 pb-5 flex flex-col">
        <div className="text-center pt-1.5">
          <div className="flex items-center justify-center gap-2"><span className="w-[9px] h-[9px] rounded-full bg-white animate-pulse" /><b className="tracking-[.18em] text-[12px] uppercase opacity-90">Emergency Active</b></div>
        </div>

        {/* countdown ring */}
        <div className="mx-auto mt-[18px] relative" style={{ width: 200, height: 200 }}>
          <svg viewBox="0 0 200 200" style={{ transform: 'rotate(-90deg)' }} width="200" height="200">
            <circle cx="100" cy="100" r="88" fill="rgba(255,255,255,.12)" />
            <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="8" />
            <circle cx="100" cy="100" r="88" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeDasharray={total} strokeDashoffset={offset} style={{ transition: 'stroke-dashoffset 1s linear' }} />
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <div className="text-[13px] opacity-85">{t > 0 ? 'Contacting services in' : 'Services contacted'}</div>
              <b className="text-[58px] font-display leading-none">{String(t).padStart(2, '0')}</b>
              <div className="text-[12px] opacity-80">Tap to add detail</div>
            </div>
          </div>
        </div>

        {/* status chips */}
        <div className="flex flex-col gap-2.5 mt-5">
          {STATUS.map((s) => (
            <div key={s[1]} className="rounded-[16px] py-3 px-3.5 flex items-center gap-3" style={{ background: 'rgba(255,255,255,.14)', backdropFilter: 'blur(6px)' }}>
              <div className="w-[38px] h-[38px] rounded-[11px] grid place-items-center" style={{ background: 'rgba(255,255,255,.18)' }}><Icon name={s[0]} size={20} /></div>
              <div className="flex-1"><b className="text-[13.5px]">{s[1]}</b><div className="text-[11.5px] opacity-80 mt-px">{s[2]}</div></div>
              <Icon name="check" size={18} stroke={2.4} />
            </div>
          ))}
        </div>

        <div className="flex-1 min-h-[14px]" />

        {/* big actions */}
        <div className="grid grid-cols-2 gap-2.5 mt-2">
          <ActionBtn icon="phone" label="Call Contact" bg="#fff" color="#b91c1c" onClick={() => nav('sosCall')} />
          <ActionBtn icon="share" label="Send Location" bg="rgba(255,255,255,.16)" />
          <ActionBtn icon="chat" label="Emergency Chat" bg="rgba(255,255,255,.16)" />
          <ActionBtn icon="shield" label="I'm Safe Now" bg="rgba(0,0,0,.18)" onClick={() => nav('dashboard')} />
        </div>
      </ScreenBody>
    </PhoneFrame>
  )
}

export function SOSCall({ nav }) {
  return (
    <PhoneFrame statusLight screenStyle={{ background: 'linear-gradient(170deg,#0B1F3A,#13294d)', color: '#fff' }}>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-[240px] relative">
          {/* simple dark map */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,31,58,.4), #0B1F3A)' }} />
          <div className="absolute bottom-4 left-5 right-5">
            <div className="rounded-[14px] py-[11px] px-3.5" style={{ background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(8px)' }}>
              <div className="flex items-center gap-2.5"><Icon name="pin" size={17} className="text-green" /><div><div className="text-[11px] opacity-70">Streaming live location</div><b className="text-[13px]">Victoria Island, Lagos</b></div></div>
            </div>
          </div>
        </div>
        <div className="px-5 py-[18px] text-center">
          <span className="inline-flex text-[11.5px] font-bold py-[5px] px-[11px] rounded-full" style={{ background: 'rgba(34,197,94,.18)', color: '#22C55E' }}>Connecting to priority contact</span>
          <div className="w-[84px] h-[84px] rounded-[28px] grid place-items-center text-[30px] font-extrabold text-white font-display mx-auto mt-[18px]" style={{ background: 'linear-gradient(150deg,#22C55E,#16a34a)' }}>A</div>
          <h2 className="text-[22px] mt-3.5 font-bold">Amara Okafor</h2>
          <p className="opacity-70 text-[13px] mt-0.5">Sister · Priority contact</p>
          <p className="opacity-85 text-[14px] mt-3.5">Calling… <b className="font-display">00:04</b></p>
        </div>
        <div className="flex-1" />
        <div className="px-6 pb-[26px] flex justify-center gap-[22px]">
          <button className="w-16 h-16 rounded-full grid place-items-center text-white" style={{ background: 'rgba(255,255,255,.12)' }}><Icon name="chat" size={24} /></button>
          <button onClick={() => nav('sos')} className="w-[72px] h-[72px] rounded-full grid place-items-center text-white shadow-red bg-danger"><Icon name="phone" size={28} /></button>
          <button className="w-16 h-16 rounded-full grid place-items-center text-white" style={{ background: 'rgba(255,255,255,.12)' }}><Icon name="share" size={24} /></button>
        </div>
      </div>
    </PhoneFrame>
  )
}
