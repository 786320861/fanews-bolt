import Section from './Section'
import Reveal from './Reveal'
import { TIMELINE } from '../data/content'

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left copy */}
        <Reveal>
          <p className="section-label">About Fanews</p>
          <h2 className="mt-5 font-display text-display-lg font-bold text-[#23424B]">
            十年深耕
            <br />
            中国内容智能领域
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#4d727a]">
            杭州凡闻科技有限公司成立于 2012 年，始终专注于大数据与内容科技。我们以
            「信息、知识、智能」三级数据智能体系为方法论，帮助媒体与企业在数字时代构建全新的内容生态系统。
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#4d727a]">
            从舆情感知到智能生产，从内容交换到行业大模型，凡闻以持续创新的技术，陪伴客户走过多轮行业变革。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['国家高新技术企业', '内容智能先行者', '全媒体数据网络'].map((badge) => (
              <span key={badge} className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[19px] top-2 h-full w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />
          <div className="flex flex-col gap-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 120}>
                <div className="relative flex gap-6 pl-2">
                  <div className="relative z-10 mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-white shadow-soft">
                    <span className="h-2.5 w-2.5 rounded-full bg-fresh-gradient shadow-glow-sm" />
                  </div>
                  <div className="rounded-2xl border border-primary/10 bg-white/80 p-5 shadow-card transition-all hover:shadow-soft-lg">
                    <span className="gradient-text font-display text-2xl font-extrabold">{item.year}</span>
                    <h3 className="mt-2 font-display text-lg font-bold text-[#23424B]">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#4d727a]">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
