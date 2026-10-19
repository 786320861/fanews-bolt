import { useState } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { PRODUCTS } from '../data/content'

export default function Products() {
  const [active, setActive] = useState(0)
  const product = PRODUCTS[active]

  return (
    <Section id="products">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="section-label">Product Matrix</p>
        <h2 className="mt-5 font-display text-display-lg font-bold text-[#23424B]">
          智能产品矩阵
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#4d727a]">
          从数据采集到智能应用，六大核心产品覆盖内容智能全链路，以 AI 能力驱动业务价值。
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Product selector list */}
        <div className="flex flex-col gap-3">
          {PRODUCTS.map((p, i) => {
            const isActive = i === active
            return (
              <button
                key={p.en}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                  isActive
                    ? 'border-primary/40 bg-white shadow-soft'
                    : 'border-primary/10 bg-white/60 hover:border-primary/25 hover:bg-white/90'
                }`}
              >
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${
                    isActive ? 'bg-fresh-gradient text-white shadow-glow-sm' : 'bg-primary/10 text-primary'
                  }`}
                >
                  <p.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-display text-lg font-bold ${isActive ? 'text-[#23424B]' : 'text-[#4d727a]'}`}>
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#9db9bf]">{p.en}</span>
                  </div>
                  <p className="mt-0.5 truncate text-sm text-[#7ea3aa]">{p.description}</p>
                </div>
                <span className={`ml-auto font-mono text-lg font-bold ${isActive ? 'gradient-text' : 'text-primary/30'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active product detail panel */}
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white/85 p-8 shadow-soft-lg backdrop-blur-xl sm:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-soft-blob opacity-80 blur-2xl" />

          {/* Key */}
          <div className="flex items-start justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-fresh-gradient px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-glow-sm">
              {product.tag}
            </span>
            <span className="font-display text-5xl font-extrabold text-primary/10">0{active + 1}</span>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-fresh-gradient shadow-glow-sm">
              <product.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold text-[#23424B]">{product.title}</h3>
              <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-primary">{product.en}</p>
            </div>
          </div>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#4d727a]">{product.description}</p>

          {/* Metric */}
          <div className="mt-8 inline-flex items-baseline gap-3 rounded-2xl border border-primary/10 bg-primary/5 px-6 py-4">
            <span className="gradient-text font-display text-4xl font-extrabold">{product.metric}</span>
            <span className="text-sm font-medium text-[#5d868e]">{product.metricLabel}</span>
          </div>

          {/* Animated progress bar */}
          <div className="mt-8">
            <div className="flex justify-between font-mono text-xs font-semibold text-[#7ea3aa]">
              <span>ENGINE STATUS</span>
              <span className="text-primary">● ONLINE</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-primary/10">
              <div
                className="h-full rounded-full bg-fresh-gradient"
                style={{ width: `${60 + active * 8}%`, transition: 'width 0.6s ease' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
