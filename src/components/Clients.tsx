import Section from './Section'
import Reveal from './Reveal'
import { CLIENTS } from '../data/content'

export default function Clients() {
  const doubled = [...CLIENTS, ...CLIENTS]

  return (
    <Section id="clients" className="py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="section-label">Trusted Partners</p>
        <h2 className="mt-5 font-display text-3xl font-bold text-[#23424B] sm:text-4xl">
          服务信任我们的客户
        </h2>
        <p className="mt-5 text-lg text-[#4d727a]">
          从央级媒体到地方政务，1200+ 合作机构共同构建的内容智能生态。
        </p>
      </Reveal>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4" style={{ animationDuration: '45s' }}>
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-primary/10 bg-white/85 px-8 py-5 shadow-card backdrop-blur"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow-sm" />
              <div>
                <p className="whitespace-nowrap font-display text-lg font-bold text-[#23424B]/85">{client.name}</p>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7ea3aa]">{client.kind}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Reveal delay={100} className="mt-10 text-center">
        <p className="font-mono text-sm font-medium text-[#7ea3aa]">
          ... 以及更多来自政务、媒体与企业的合作伙伴
        </p>
      </Reveal>
    </Section>
  )
}
