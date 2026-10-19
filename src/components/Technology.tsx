import Section from './Section'
import Reveal from './Reveal'
import { TECHNOLOGIES } from '../data/content'

export default function Technology() {
  return (
    <Section id="about" className="pb-16 lg:pb-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="section-label">Technology Stack</p>
        <h2 className="mt-5 font-display text-display-lg font-bold text-[#23424B]">
          技术底座 · 驱动内容智能
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#4d727a]">
          凡闻的技术体系以大数据为基座、以 AI 为核心，构建覆盖全媒体场景的智能能力矩阵。
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TECHNOLOGIES.map((tech, i) => (
          <Reveal key={tech.en} delay={i * 120}>
            <div className="group relative h-full rounded-2xl border border-primary/10 bg-white/80 p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft-lg">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary transition-colors group-hover:bg-fresh-gradient group-hover:text-white">
                <tech.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#23424B]">{tech.title}</h3>
              <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9db9bf]">{tech.en}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4d727a]">{tech.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
