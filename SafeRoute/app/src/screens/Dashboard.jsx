import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { ScreenBody } from '../components/layout.jsx'
import { TabBar } from '../components/TabBar.jsx'
import { Card, Chip, Avatar, Lbl } from '../components/ui.jsx'
import { Icon } from '../icons.jsx'

const QUICK = [
  { i: 'nav', t: 'Start Journey', c: '#16a34a', bg: '#ecfdf3', go: 'journeyPlan' },
  { i: 'sos', t: 'Emergency SOS', c: '#dc2626', bg: '#fef2f2', go: 'sos' },
  { i: 'alert', t: 'Report Incident', c: '#F59E0B', bg: '#fff7ed', go: 'report' },
  { i: 'share', t: 'Share Location', c: '#0B1F3A', bg: 'rgba(11,31,58,.06)', go: 'map' },
]
const ALERTS = [
  { i: 'alert', c: '#F59E0B', bg: '#fff7ed', t: 'Road incident · Lekki Expressway', s: 'Stalled vehicle reported · 8 min ago', tag: 'Advisory', v: 'amber' },
  { i: 'users', c: '#0B1F3A', bg: 'rgba(11,31,58,.06)', t: 'Community report verified', s: 'Checkpoint cleared near Ikoyi · 22 min ago', tag: 'Verified', v: 'navy' },
  { i: 'nav', c: '#16a34a', bg: '#ecfdf3', t: 'Travel advisory updated', s: 'Conditions improved on your usual route', tag: 'Update', v: 'green' },
]

export function Dashboard({ nav }) {
  return (
    <PhoneFrame>
      <ScreenBody className="pb-2">
        {/* greeting */}
        <div className="px-[18px] pt-2 pb-1.5 flex items-center justify-between">
          <div>
            <p className="text-ink-2 text-[11.5px] font-semibold">Good morning,</p>
            <h1 className="text-[24px] mt-px font-bold">Jeremiah 👋</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-surface border border-line shadow-sm text-ink relative">
              <Icon name="bell" size={19} />
              <span className="absolute w-2 h-2 bg-danger rounded-full top-2 right-2.5 border-2 border-surface" />
            </button>
            <Avatar color="linear-gradient(150deg,#0B1F3A,#1c3a66)">J</Avatar>
          </div>
        </div>

        {/* safety status hero */}
        <div className="px-[18px]">
          <div className="rounded-lg shadow-md p-4 relative overflow-hidden text-white" style={{ background: 'linear-gradient(160deg,#0B1F3A,#13294d)' }}>
            <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,197,94,.30), transparent 70%)' }} />
            <div className="flex items-center justify-between relative">
              <div className="flex items-center gap-3">
                <div className="w-[46px] h-[46px] rounded-[14px] grid place-items-center text-green" style={{ background: 'rgba(34,197,94,.2)' }}><Icon name="shield" size={24} /></div>
                <div>
                  <div className="flex items-center gap-2"><span className="w-[9px] h-[9px] rounded-full bg-green" style={{ boxShadow: '0 0 0 4px rgba(34,197,94,.3)' }} /><b className="text-[18px]">You're Safe</b></div>
                  <div className="text-[11.5px] opacity-70 mt-0.5">All systems monitoring</div>
                </div>
              </div>
              <Chip variant="glass">Active</Chip>
            </div>
            <div className="flex mt-4 relative">
              <div className="flex-1">
                <div className="text-[11.5px] opacity-60 flex items-center gap-1.5"><Icon name="pin" size={13} />Current location</div>
                <b className="text-[13.5px] block mt-0.5">Victoria Island, Lagos</b>
              </div>
              <div className="w-px h-[30px] bg-white/[.14]" />
              <div className="flex-1 pl-3.5">
                <div className="text-[11.5px] opacity-60 flex items-center gap-1.5"><Icon name="clock" size={13} />Last check-in</div>
                <b className="text-[13.5px] block mt-0.5">2 mins ago</b>
              </div>
            </div>
          </div>
        </div>

        {/* quick actions */}
        <div className="px-[18px] mt-[18px]">
          <Lbl className="mb-3">Quick actions</Lbl>
          <div className="grid grid-cols-2 gap-3">
            {QUICK.map((q) => (
              <button key={q.t} onClick={() => nav(q.go)} className="bg-surface rounded-lg shadow border border-line p-3.5 flex flex-col gap-3 text-left active:scale-[.98] transition">
                <div className="w-10 h-10 rounded-xl grid place-items-center" style={{ background: q.bg, color: q.c }}><Icon name={q.i} size={21} /></div>
                <b className="text-[13.5px]">{q.t}</b>
              </button>
            ))}
          </div>
        </div>

        {/* view map */}
        <div className="px-[18px] mt-3">
          <button onClick={() => nav('map')} className="w-full bg-surface-2 rounded-lg shadow border border-line py-3 px-[15px] flex items-center justify-between active:scale-[.99] transition">
            <div className="flex items-center gap-3 text-green-600"><Icon name="map" size={21} /><b className="text-[13.5px] text-ink">View Safety Map</b></div>
            <Icon name="chevron" size={18} className="text-ink-3" />
          </button>
        </div>

        {/* nearby alerts */}
        <div className="px-[18px] mt-[18px]">
          <div className="flex items-center justify-between mb-3"><Lbl>Nearby alerts</Lbl><span className="text-[11.5px] text-green-600 font-bold">See all</span></div>
          <div className="flex flex-col gap-2.5">
            {ALERTS.map((a) => (
              <Card key={a.t} className="flex items-center gap-3 p-3">
                <div className="w-[38px] h-[38px] rounded-[11px] grid place-items-center shrink-0" style={{ background: a.bg, color: a.c }}><Icon name={a.i} size={19} /></div>
                <div className="flex-1 min-w-0"><b className="text-[13px]">{a.t}</b><div className="text-[11.5px] text-ink-2 mt-0.5 truncate">{a.s}</div></div>
                <Chip variant={a.v}>{a.tag}</Chip>
              </Card>
            ))}
          </div>
        </div>
      </ScreenBody>
      <TabBar active="dashboard" onNavigate={nav} onSOS={() => nav('sos')} />
    </PhoneFrame>
  )
}
