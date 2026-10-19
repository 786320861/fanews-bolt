import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, Cpu, Database, BrainCircuit, Sparkles, HeartHandshake, Wand2 } from 'lucide-react'
import { HERO_KEYWORDS } from '../data/content'

function useTypewriter(words: string[], typeSpeed = 90, deleteSpeed = 45, pause = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
        },
        deleting ? deleteSpeed : typeSpeed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}

const FLOAT_ICONS = [
  { icon: Cpu, top: '10%', left: '6%', delay: '0s', bg: '#EAF7F9', color: '#3DB4B8' },
  { icon: Database, top: '72%', left: '10%', delay: '1.2s', bg: '#FFF1F4', color: '#F3A6B8' },
  { icon: BrainCircuit, top: '14%', left: '84%', delay: '0.6s', bg: '#FFF7EC', color: '#F5B97F' },
  { icon: Wand2, top: '70%', left: '80%', delay: '1.8s', bg: '#F0F7FF', color: '#7EC8E3' },
]

export default function Hero() {
  const typed = useTypewriter(HERO_KEYWORDS)

  return (
    <section id="top" className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-8">
      {/* Soft glow above */}
      <div className="absolute left-1/2 top-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-soft-blob opacity-60 blur-3xl" />

      <div className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/15 bg-white/80 px-4 py-2 shadow-card backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-primary-dark">
              AI Powered · Content Intelligence
            </span>
          </div>

          <h1 className="font-display text-display-xl font-extrabold leading-tight text-[#23424B]">
            让内容与智能
            <br />
            <span className="gradient-text">温柔相遇</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#4d727a] sm:text-xl">
            凡闻科技以大数据与人工智能为核心，为政务、媒体与企业提供从数据汇聚、知识提炼到智能创造的全链路内容智能解决方案。
          </p>

          {/* Typewriter line */}
          <div className="mt-6 flex items-center gap-3 font-mono text-sm text-[#5d868e]">
            <span className="font-semibold text-primary">$</span>
            <span>智能引擎已就绪 —— 正在解析</span>
            <span className="gradient-text font-bold">{typed}</span>
            <span className="inline-block h-4 w-[2px] animate-typing-caret bg-primary" />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-fresh-gradient px-7 py-3.5 text-base font-bold text-white shadow-glow-soft transition-all hover:shadow-soft-lg hover:brightness-105"
            >
              开启智能之旅
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-7 py-3.5 text-base font-semibold text-primary-dark shadow-card backdrop-blur transition-colors hover:border-primary/40 hover:bg-white"
            >
              探索产品矩阵
            </a>
          </div>
        </div>

        {/* Right: fresh floating visual */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[440px] sm:block">
          {/* Rotating dashed rings */}
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary/25" />
          <div className="absolute inset-10 animate-spin-slow rounded-full border-2 border-dotted border-accent/40" style={{ animationDirection: 'reverse' }} />
          <div className="absolute inset-20 animate-spin-slow rounded-full border border-primary/15" />

          {/* Soft center glow */}
          <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-soft-blob" />

          {/* Core card */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative grid h-40 w-40 place-items-center rounded-[2rem] border border-white/80 bg-white/85 shadow-soft-lg backdrop-blur">
              <div className="absolute inset-3 rounded-[1.6rem] bg-fresh-gradient opacity-15" />
              <div className="relative text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-fresh-gradient text-white shadow-glow-sm">
                  <BrainCircuit className="h-7 w-7" />
                </div>
                <p className="mt-3 font-display text-2xl font-extrabold gradient-text">Fanews</p>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5d868e]">AI Core</p>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          {FLOAT_ICONS.map(({ icon: Icon, top, left, delay, bg, color }, i) => (
            <div
              key={i}
              className="absolute grid h-16 w-16 place-items-center rounded-2xl border border-white/80 shadow-soft"
              style={{ top, left, background: bg, animation: `float 7s ease-in-out ${delay}s infinite` }}
            >
              <Icon className="h-7 w-7" style={{ color }} />
            </div>
          ))}

          {/* Tiny orbiting dots */}
          {Array.from({ length: 9 }).map((_, i) => {
            const angle = (i / 9) * Math.PI * 2
            return (
              <div
                key={i}
                className="absolute h-2.5 w-2.5 rounded-full"
                style={{
                  top: `calc(50% - 5px + ${Math.sin(angle) * 44}%)`,
                  left: `calc(50% - 5px + ${Math.cos(angle) * 44}%)`,
                  background: i % 2 === 0 ? '#3DB4B8' : '#F3A6B8',
                  boxShadow: '0 0 8px rgba(61,180,184,0.5)',
                }}
              />
            )
          })}

          {/* Floating hearts / sparkles accents */}
          <HeartHandshake
            className="absolute left-2 bottom-6 h-6 w-6 text-accent"
            style={{ animation: 'float 6s ease-in-out 1s infinite' }}
          />
          <Sparkles
            className="absolute right-4 top-2 h-6 w-6 text-[#F5B97F]"
            style={{ animation: 'float 5s ease-in-out 0.5s infinite' }}
          />
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#intelligence"
        className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#5d868e] transition-colors hover:text-primary"
        aria-label="向下滚动"
      >
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
