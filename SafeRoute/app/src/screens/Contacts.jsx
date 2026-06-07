import { useState } from 'react'
import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { ScreenBody } from '../components/layout.jsx'
import { TabBar } from '../components/TabBar.jsx'
import { Button, Card, Chip, Avatar, Toggle } from '../components/ui.jsx'
import { Icon } from '../icons.jsx'

const CONTACTS = [
  ['Amara Okafor', 'Sister', '#22C55E', 'AO', true, 'family'],
  ['David Eze', 'Colleague', '#0B1F3A', 'DE', false, 'work'],
  ['Chloe Bassey', 'Best friend', '#F59E0B', 'CB', false, 'friend'],
  ['Dr. Ade Cole', 'Family doctor', '#475569', 'AC', false, 'trusted'],
]

export function Contacts({ nav }) {
  const [share, setShare] = useState(CONTACTS.map(() => true))
  return (
    <PhoneFrame>
      <ScreenBody className="px-[18px] pt-2 pb-[92px]">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-[22px] font-bold">Emergency contacts</h1>
          <button className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-green text-[#04130a]"><Icon name="plus" size={20} stroke={2.5} /></button>
        </div>
        <p className="text-ink-2 text-[11.5px] mb-4">These people are alerted automatically during a safety event.</p>

        <Card className="flex gap-3.5 text-white border-0" style={{ background: 'linear-gradient(150deg,#0B1F3A,#13294d)' }}>
          <div className="flex-1"><div className="text-[11.5px] opacity-70">Auto-notify when</div><b className="text-[13.5px] block mt-0.5">Missed check-in · SOS · Off-route</b></div>
          <Icon name="settings" size={22} />
        </Card>

        <div className="mt-4 flex flex-col gap-2.5">
          {CONTACTS.map((c, i) => (
            <Card key={c[0]} className="flex items-center gap-3 p-3">
              <Avatar color={c[2]}>{c[3]}</Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-1.5"><b className="text-[14px]">{c[0]}</b>{c[4] && <Chip icon="star" className="py-[3px] px-2 text-[9.5px]">Priority</Chip>}</div>
                <div className="text-[11.5px] text-ink-2 mt-0.5 capitalize">{c[1]} · {c[5]}</div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <Toggle on={share[i]} onClick={() => setShare(share.map((s, k) => (k === i ? !s : s)))} scale={0.85} />
                <span className="text-[10px] text-ink-2">Live loc.</span>
              </div>
            </Card>
          ))}
        </div>
        <Button variant="outline" icon="plus" className="mt-3.5 border-dashed">Add trusted contact</Button>
      </ScreenBody>
      <TabBar active="contacts" onNavigate={nav} onSOS={() => nav('sos')} />
    </PhoneFrame>
  )
}
