import Section from './Section'
import Reveal from './Reveal'
import { SOLUTIONS } from '../data/content'

export default function Solutions() {
  return (
    <Section id="solutions">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="section-label">Solutions For Excellence</p>
        <h2 className="mt-5 font-display text-display-lg font-bold text-[#23424B]">
          赋能三大行业 · 驱动业务卓越
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#4d727a]">
          面向不同行业的差异化需求，凡闻提供针对性解决方案，帮助客户从数据中获取更好的洞察与智能。
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {SOLUTIONS.map((solution, i) => (
          <Reveal key={solution.en} delay={i * 140}>
            <article className="group relative h-full overflow-hidden rounded-[2rem] border border-primary/10 bg-white/80 p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg">
              {/* Gradient wash */}
              <div className={`pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br ${solution.accent} opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-30`} />

              <div className="relative flex items-center justify-between">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.accent} shadow-glow-sm`}>
                  <solution.icon className="h-7 w-7 text-white" />
                </div>
                <span className="rounded-full border border-primary/15 bg-white px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                  {solution.en}
                </span>
              </div>

              <h3 className="mt-8 font-display text-3xl font-bold text-[#23424B]">{solution.title}</h3>
              <p className="mt-4 leading-relaxed text-[#4d727a]">{solution.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-[#39777E] transition-colors group-hover:border-primary/25 group-hover:bg-primary/10"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
