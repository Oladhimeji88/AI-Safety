import { useState } from 'react'
import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { TabBar } from '../components/TabBar.jsx'
import { MapCanvas, LiveDot, Pin } from '../components/MapCanvas.jsx'
import { Card, Chip } from '../components/ui.jsx'
import { Icon } from '../icons.jsx'

const FILTERS = ['All', 'Verified', 'Advisories', 'Roads', 'Community']
const LEGEND = [['High risk zone', '#EF4444'], ['Caution', '#F59E0B'], ['Verified safe', '#22C55E']]

export function IntelMap({ nav }) {
  const [filter, setFilter] = useState(0)
  return (
    <PhoneFrame>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="relative flex-1 min-h-[560px]">
          <MapCanvas route={false} risk>
            <Pin color="#EF4444" left="52%" top="50%" />
            <Pin color="#EF4444" left="80%" top="25%" />
            <Pin color="#22C55E" left="24%" top="70%" />
            <Pin color="#F59E0B" left="62%" top="34%" />
            <div className="absolute" style={{ left: '38%', top: '62%', transform: 'translate(-50%,-50%)' }}><LiveDot /></div>
          </MapCanvas>

          <div className="px-[18px] absolute top-2 left-0 right-0">
            <Card className="flex items-center gap-2.5 py-[11px] px-3.5 shadow-md">
              <Icon name="map" size={18} className="text-ink-3" />
              <span className="text-ink-2 text-[13.5px] flex-1">Safety intelligence · Lagos</span>
              <div className="w-[30px] h-[30px] rounded-[9px] grid place-items-center bg-surface-2 text-green-600"><Icon name="layers" size={17} /></div>
            </Card>
            <div className="flex gap-[7px] mt-2.5 overflow-hidden">
              {FILTERS.map((f, i) => (
                <button key={f} onClick={() => setFilter(i)} className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold py-[7px] px-3.5 rounded-full shadow-sm whitespace-nowrap" style={{ background: filter === i ? '#22C55E' : 'var(--surface)', color: filter === i ? '#04130a' : 'var(--ink-2)' }}>
                    {i === 0 && <Icon name="filter" size={12} />}{f}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="absolute left-[18px]" style={{ bottom: 150 }}>
            <Card className="py-2.5 px-3.5">
              {LEGEND.map((l) => (
                <div key={l[0]} className="flex items-center gap-2 py-0.5"><span className="w-[9px] h-[9px] rounded-full" style={{ background: l[1] }} /><span className="text-[11.5px] font-semibold">{l[0]}</span></div>
              ))}
            </Card>
          </div>
        </div>

        <div className="bg-surface rounded-t-[24px] -mt-[22px] relative z-[3] px-[18px] pt-3.5 pb-4 shrink-0" style={{ boxShadow: '0 -10px 30px rgba(11,31,58,.10)' }}>
          <div className="w-[38px] h-1 rounded-full bg-line mx-auto mb-3" />
          <div className="flex items-center justify-between mb-2.5"><b className="text-[15px]">4 alerts near you</b><span className="text-[11.5px] text-green-600 font-bold">Heatmap</span></div>
          <Card className="flex items-center gap-3 p-3">
            <div className="w-[38px] h-[38px] rounded-[11px] grid place-items-center" style={{ background: '#fef2f2', color: '#dc2626' }}><Icon name="alert" size={19} /></div>
            <div className="flex-1"><div className="flex items-center justify-between"><b className="text-[13px]">Security concern · Ikoyi</b><Chip variant="red">High</Chip></div><div className="text-[11.5px] text-ink-2 mt-0.5">Verified · 12 min ago · 320m away</div></div>
          </Card>
        </div>
      </div>
      <TabBar active="map" onNavigate={nav} onSOS={() => nav('sos')} />
    </PhoneFrame>
  )
}
