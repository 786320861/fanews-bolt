import Section from './Section'
import Reveal from './Reveal'
import { INTELLIGENCE_TIERS } from '../data/content'

export default function Intelligence() {
  return (
    <Section id="intelligence">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="section-label">Data Intelligence Hierarchy</p>
        <h2 className="mt-5 font-display text-display-lg font-bold text-[#23424B]">
          三级智能 · 从数据到洞察
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#4d727a]">
          我们的能力体系遵循数据智能三阶段层级：信息、知识、智能。从结构化数据到可行动洞察，逐级进化，驱动价值释放。
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {INTELLIGENCE_TIERS.map((tier, i) => (
          <Reveal key={tier.stage} delay={i * 140}>
            <article className="group relative h-full overflow-hidden rounded-[2rem] border border-primary/10 bg-white/80 p-8 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg">
              {/* Soft pastel wash */}
              <div className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${tier.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-35`} />

              {/* Number watermark */}
              <span className="pointer-events-none absolute -right-2 -top-7 font-display text-[7rem] font-bold leading-none text-primary/5">
                {tier.stage}
              </span>

              <div className={`relative mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tier.accent} shadow-glow-sm`}>
                <tier.icon className="h-7 w-7 text-white" />
              </div>

              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-3xl font-bold text-[#23424B]">{tier.title}</h3>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#7ea3aa]">{tier.en}</span>
              </div>

              <p className="mt-4 leading-relaxed text-[#4d727a]">{tier.description}</p>

              <ul className="mt-6 space-y-2.5">
                {tier.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-[#39777E]">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-10 hidden justify-center gap-24 lg:flex">
        <span className="font-mono text-2xl text-primary/40">→</span>
        <span className="font-mono text-2xl text-primary/40">→</span>
      </Reveal>
    </Section>
  )
}
