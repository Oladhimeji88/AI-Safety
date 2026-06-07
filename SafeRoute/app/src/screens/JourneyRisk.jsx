import { PhoneFrame } from '../components/PhoneFrame.jsx'
import { ScreenBody, BottomBar, ScreenHeader } from '../components/layout.jsx'
import { RiskGauge } from '../components/RiskGauge.jsx'
import { Button, Card, Chip, Avatar, Meter, Lbl } from '../components/ui.jsx'
import { Icon } from '../icons.jsx'

const FACTORS = [
  ['Road quality', 'Good', 92, '#22C55E'],
  ['Recent incidents', 'Minimal', 85, '#22C55E'],
  ['Traffic', 'Moderate', 64, '#F59E0B'],
  ['Weather', 'Clear', 96, '#22C55E'],
  ['Community reports', '2 nearby', 71, '#F59E0B'],
]

export function JourneyRisk({ nav }) {
  return (
    <PhoneFrame>
      <ScreenBody className="pb-[92px]">
        <ScreenHeader title="Journey risk analysis" onBack={() => nav('journeyPlan')} />

        <div className="px-[18px]">
          <Card className="text-center p-[22px]" style={{ background: 'linear-gradient(160deg,#ecfdf3,var(--surface))', borderColor: 'rgba(34,197,94,.25)' }}>
            <RiskGauge score={82} />
            <div className="inline-flex mt-2"><Chip icon="shield" className="text-[13px] py-1.5 px-4">Low Risk</Chip></div>
            <p className="text-[11.5px] text-ink-2 mt-2.5 leading-snug">This route is safer than 82% of comparable trips at this time of day.</p>
          </Card>
        </div>

        <div className="px-[18px] mt-[18px]">
          <Lbl className="mb-3">Contributing factors</Lbl>
          <Card className="py-1.5 px-4">
            {FACTORS.map((f, i) => (
              <div key={f[0]} className={`py-3 ${i ? 'border-t border-line' : ''}`}>
                <div className="flex items-center justify-between"><b className="text-[13.5px]">{f[0]}</b><span className="text-[11.5px] font-bold" style={{ color: f[3] === '#22C55E' ? '#16a34a' : '#b45309' }}>{f[1]}</span></div>
                <Meter value={f[2]} color={f[3]} className="mt-2" />
              </div>
            ))}
          </Card>
        </div>

        <div className="px-[18px] mt-4">
          <Card className="flex items-center gap-3" style={{ background: 'rgba(11,31,58,.04)' }}>
            <Avatar color="linear-gradient(150deg,#0B1F3A,#1c3a66)"><Icon name="sparkle" size={20} /></Avatar>
            <div className="flex-1"><b className="text-[13px]">AI suggestion</b><p className="text-[11.5px] text-ink-2 mt-0.5 leading-snug">A route via Ozumba Mbadiwe avoids the 2 community reports and saves ~4 min.</p></div>
          </Card>
        </div>
      </ScreenBody>

      <BottomBar>
        <div className="flex gap-2.5">
          <Button variant="outline" className="flex-1">Alternatives</Button>
          <Button onClick={() => nav('liveJourney')} className="flex-[1.6]">Start journey</Button>
        </div>
      </BottomBar>
    </PhoneFrame>
  )
}
