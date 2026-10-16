import { useState } from 'react'
import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { ScreenBody, BottomBar } from '../components/layout.jsx'
import { MapCanvas, LiveDot } from '../components/MapCanvas.jsx'
import { Button, Card, Chip, Avatar, Toggle, IconTile } from '../components/ui.jsx'
import { Icon, Logo } from '../icons.jsx'

const Dots = ({ i, n = 5 }) => (
  <div className="flex gap-1.5 justify-center">
    {Array.from({ length: n }).map((_, k) => (
      <span key={k} className="h-1.5 rounded-full transition-all" style={{ width: k === i ? 22 : 6, background: k === i ? '#22C55E' : 'var(--line)' }} />
    ))}
  </div>
)

function Welcome({ next }) {
  return (
    <ScreenBody className="flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center relative">
        <div className="absolute w-60 h-60 rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,197,94,.18), transparent 65%)' }} />
        <div className="w-[108px] h-[108px] rounded-[32px] grid place-items-center shadow-lg relative" style={{ background: 'linear-gradient(150deg,#0B1F3A,#1c3a66)' }}>
          <Logo size={58} />
        </div>
        <h1 className="text-[30px] font-extrabold mt-8">SafeRoute</h1>
        <p className="text-ink-2 text-[15px] leading-snug mt-3 max-w-[240px]">Intelligent travel safety and emergency response — wherever the road takes you.</p>
      </div>
      <div className="px-[18px] pb-6">
        <Button onClick={next} iconRight="arrow" className="mb-3">Get started</Button>
        <Button variant="outline">I already have an account</Button>
        <p className="text-[11.5px] text-ink-2 text-center mt-4">Trusted by travelers in 40+ high-risk regions</p>
      </div>
    </ScreenBody>
  )
}

function Why({ next }) {
  const rows = [
    { i: 'gauge', c: '#16a34a', bg: 'var(--green-50)', t: 'Know the risk first', d: 'Every route scored before you move.' },
    { i: 'nav', c: '#0B1F3A', bg: 'rgba(11,31,58,.06)', t: 'Watched in real time', d: 'Loved ones follow your live trip.' },
    { i: 'sos', c: '#dc2626', bg: 'var(--danger-50)', t: 'Help in one tap', d: 'Coordinated SOS in under 3 seconds.' },
  ]
  return (
    <ScreenBody className="px-[18px] pt-1.5">
      <p className="text-[11px] font-bold uppercase tracking-[.06em] text-ink-3 mb-1.5">Why SafeRoute</p>
      <h1 className="text-[25px] leading-[1.15] font-bold">Travel shouldn't mean traveling alone.</h1>
      <p className="text-ink-2 mt-3 text-[14px] leading-snug">In regions where help is far and roads are uncertain, SafeRoute is the calm intelligence in your pocket.</p>
      <div className="mt-6 flex flex-col gap-3">
        {rows.map((r) => (
          <Card key={r.t} className="flex items-center gap-3">
            <div className="w-[42px] h-[42px] rounded-[14px] grid place-items-center" style={{ background: r.bg === 'var(--green-50)' ? '#ecfdf3' : r.bg === 'var(--danger-50)' ? '#fef2f2' : 'rgba(11,31,58,.06)', color: r.c }}>
              <Icon name={r.i} size={22} />
            </div>
            <div><b className="text-[14.5px]">{r.t}</b><div className="text-[11.5px] text-ink-2 mt-0.5">{r.d}</div></div>
          </Card>
        ))}
      </div>
      <div className="mt-6"><Dots i={1} /></div>
      <Button onClick={next} className="mt-5">Continue</Button>
    </ScreenBody>
  )
}

function Privacy({ next }) {
  const pts = ['End-to-end encrypted location streams', 'You choose who sees your trips, and when', 'Data auto-deletes on your schedule', 'Never sold. Never advertised against.']
  return (
    <ScreenBody className="px-[18px] pt-1.5">
      <div className="w-16 h-16 rounded-[20px] grid place-items-center" style={{ background: 'rgba(11,31,58,.06)', color: '#0B1F3A' }}><Icon name="lock" size={30} /></div>
      <h1 className="text-[25px] mt-[18px] font-bold">Your privacy is the product.</h1>
      <p className="text-ink-2 mt-2.5 text-[14px] leading-snug">Safety only works when you trust it. Here's our promise, in plain language.</p>
      <Card className="mt-5 py-1.5 px-4">
        {pts.map((p, i) => (
          <div key={p} className={`flex items-center gap-3 py-3 ${i ? 'border-t border-line' : ''}`}>
            <div className="w-[26px] h-[26px] rounded-[9px] grid place-items-center" style={{ background: '#ecfdf3', color: '#16a34a' }}><Icon name="check" size={16} stroke={2.6} /></div>
            <span className="text-[13.5px] font-medium">{p}</span>
          </div>
        ))}
      </Card>
      <div className="flex items-center gap-2 mt-[18px] text-ink-2"><Icon name="eye" size={18} /><span className="text-[11.5px]">Read our full privacy commitment any time in Settings.</span></div>
      <Button onClick={next} className="mt-[18px]">I understand &amp; agree</Button>
    </ScreenBody>
  )
}

function Contacts({ next }) {
  return (
    <ScreenBody className="px-[18px] pt-1.5">
      <p className="text-[11px] font-bold uppercase tracking-[.06em] text-ink-3">Step 4 of 5</p>
      <h1 className="text-[24px] mt-1.5 font-bold">Who should we alert?</h1>
      <p className="text-ink-2 mt-2 text-[14px] leading-snug">Add trusted contacts. They'll be notified if you miss a check-in or trigger SOS.</p>
      <Card className="mt-5 flex flex-col gap-1">
        {[['Amara Okafor', 'Sister · Priority', '#22C55E', 'AO', true], ['David Eze', 'Colleague', '#0B1F3A', 'DE', false]].map((c, i) => (
          <div key={c[0]} className={`flex items-center gap-3 py-3 ${i ? 'border-t border-line' : ''}`}>
            <Avatar color={c[2]}>{c[3]}</Avatar>
            <div className="flex-1"><b className="text-[14px]">{c[0]}</b><div className="text-[11.5px] text-ink-2">{c[1]}</div></div>
            {c[4] && <Chip icon="star">Priority</Chip>}
          </div>
        ))}
      </Card>
      <Button variant="outline" icon="plus" className="mt-3 border-dashed">Add another contact</Button>
      <Card className="mt-4 border-transparent" style={{ background: '#ecfdf3' }}>
        <div className="flex items-center gap-2.5 text-green-600"><Icon name="shield" size={18} /><span className="text-[11.5px] text-ink font-medium">Contacts are only notified during a real safety event — never for marketing.</span></div>
      </Card>
      <Button onClick={next} className="mt-[18px]">Continue</Button>
    </ScreenBody>
  )
}

function Location({ next }) {
  return (
    <ScreenBody className="flex flex-col">
      <div className="h-[300px] relative">
        <MapCanvas route={false}>
          <div className="absolute" style={{ left: '50%', top: '55%', transform: 'translate(-50%,-100%)' }}><LiveDot size={22} /></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, var(--surface) 96%)' }} />
        </MapCanvas>
      </div>
      <div className="px-[18px] -mt-10 relative z-[2] flex-1 flex flex-col">
        <div className="w-[60px] h-[60px] rounded-[18px] bg-surface shadow-md grid place-items-center text-green-600 mx-auto mb-4"><Icon name="pin" size={30} /></div>
        <h1 className="text-[23px] text-center font-bold">Enable location</h1>
        <p className="text-ink-2 text-center mt-2 text-[14px] leading-snug px-1.5">SafeRoute uses your location to monitor journeys and pinpoint you in an emergency. You can pause sharing anytime.</p>
        <Card className="mt-[18px] py-3 px-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5"><Icon name="nav" size={17} /><span className="text-[13px] font-semibold">Precise location</span></div>
            <Chip>Recommended</Chip>
          </div>
        </Card>
        <div className="flex-1" />
        <Button onClick={next} className="mt-4 mb-2">Allow while using app</Button>
        <Button onClick={next} variant="outline" className="mb-6">Not now</Button>
      </div>
    </ScreenBody>
  )
}

const STEPS = [Welcome, Why, Privacy, Contacts, Location]

export function Onboarding({ nav }) {
  const [step, setStep] = useState(0)
  const Step = STEPS[step]
  const next = () => (step < STEPS.length - 1 ? setStep(step + 1) : nav('dashboard'))
  return (
    <PhoneFrame>
      <Step next={next} />
    </PhoneFrame>
  )
}
