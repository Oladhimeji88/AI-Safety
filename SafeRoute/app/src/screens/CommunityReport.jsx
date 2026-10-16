import { useState } from 'react'
import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { ScreenBody, BottomBar, ScreenHeader } from '../components/layout.jsx'
import { Button, Card, Chip, Lbl } from '../components/ui.jsx'
import { Icon } from '../icons.jsx'

const CATS = [['alert', 'Suspicious'], ['route', 'Road block'], ['car', 'Accident'], ['shield', 'Security'], ['users', 'Missing']]

export function CommunityReport({ nav }) {
  const [cat, setCat] = useState(3)
  return (
    <PhoneFrame>
      <ScreenBody className="px-[18px] pt-2 pb-[92px]">
        <ScreenHeader title="Report incident" onBack={() => nav('map')} />
        <p className="text-ink-2 text-[11.5px] mb-4 mt-1">Your report helps the community. Verified by moderators before it goes live.</p>

        <Lbl className="mb-2.5">Category</Lbl>
        <div className="flex flex-wrap gap-2">
          {CATS.map((c, i) => (
            <button key={c[1]} onClick={() => setCat(i)} className={`rounded-lg border py-[11px] px-3.5 flex items-center gap-2 transition ${cat === i ? 'border-green bg-green-50' : 'border-line bg-surface'}`}>
              <span className={cat === i ? 'text-green-600' : 'text-ink-2'}><Icon name={c[0]} size={18} /></span>
              <b className={`text-[12.5px] ${cat === i ? 'text-green-600' : 'text-ink'}`}>{c[1]}</b>
            </button>
          ))}
        </div>

        <Lbl className="mt-[18px] mb-2.5">Location</Lbl>
        <Card className="flex items-center gap-3 py-3 px-3.5">
          <Icon name="pin" size={19} className="text-green-600" />
          <div className="flex-1"><b className="text-[13.5px]">Bourdillon Rd, Ikoyi</b><div className="text-[11.5px] text-ink-2">Auto-detected · tap to adjust</div></div>
          <Icon name="chevron" size={17} className="text-ink-3" />
        </Card>

        <Lbl className="mt-[18px] mb-2.5">Description</Lbl>
        <Card className="py-3.5 px-3.5 min-h-[78px]"><span className="text-ink-2 text-[13.5px]">Two unmarked vehicles stopping cars near the junction…</span></Card>

        <Lbl className="mt-[18px] mb-2.5">Photo evidence <span className="font-medium normal-case text-ink-3">· optional</span></Lbl>
        <div className="flex gap-2.5">
          <div className="w-[74px] h-[74px] rounded-[16px] grid place-items-center border border-dashed border-line text-ink-3"><Icon name="camera" size={24} /></div>
          <div className="w-[74px] h-[74px] rounded-[16px] relative" style={{ background: 'linear-gradient(135deg,#cbd5e1,#e2e8f0)' }}><div className="absolute bottom-1.5 left-1.5"><Chip className="text-[9px] py-[3px] px-[7px]">Added</Chip></div></div>
        </div>

        <Card className="mt-[18px] flex items-center gap-2.5" style={{ background: 'rgba(11,31,58,.04)' }}>
          <Icon name="eye" size={18} className="text-navy" /><span className="text-[11.5px] font-medium">Reports can be anonymous. Your identity is never shown publicly.</span>
        </Card>
      </ScreenBody>
      <BottomBar>
        <Button onClick={() => nav('map')} iconRight="arrow">Submit report</Button>
      </BottomBar>
    </PhoneFrame>
  )
}
