import Reveal from './Reveal'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/75 px-8 py-16 text-center shadow-soft-lg backdrop-blur-xl sm:px-16">
          {/* Background glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-grid-dots bg-[size:32px_32px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <div className="relative">
            <p className="section-label">Start Your Journey</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-display-lg font-bold text-[#23424B]">
              准备好释放数据的
              <span className="gradient-text">智能价值</span>了吗？
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#4d727a]">
              让我们帮助您的业务获得更深刻的数据洞察与智能决策能力。与凡闻一起，重构内容新生态。
            </p>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-fresh-gradient px-8 py-4 text-lg font-bold text-white shadow-glow-soft transition-all hover:shadow-soft-lg hover:brightness-105"
            >
              立即联系顾问
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
