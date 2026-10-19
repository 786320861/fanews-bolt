import { useEffect, useState } from 'react'
import { Activity, Menu, X, ArrowRight } from 'lucide-react'

const NAV_LINKS = [
  { label: '产品', href: '#products' },
  { label: '解决方案', href: '#solutions' },
  { label: '客户', href: '#clients' },
  { label: '关于', href: '#about' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-primary/10 bg-white/85 py-3 shadow-soft backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center">
              <div className="absolute inset-0 rounded-2xl bg-fresh-gradient opacity-80 blur-[6px] transition-opacity group-hover:opacity-100" />
              <div className="relative grid h-10 w-10 place-items-center rounded-2xl border border-white/60 bg-white/90 shadow-soft">
                <Activity className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
            </div>
            <div className="leading-tight">
              <p className="font-display text-lg font-extrabold tracking-tight text-[#23424B]">
                凡闻科技 <span className="gradient-text font-extrabold">Fanews</span>
              </p>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5d868e]">
                Content Intelligence
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#4d727a] transition-colors hover:bg-primary/10 hover:text-primary-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="group ml-4 inline-flex items-center gap-2 rounded-full bg-fresh-gradient px-5 py-2.5 text-sm font-bold text-white shadow-glow-soft transition-all hover:shadow-soft-lg hover:brightness-105"
            >
              预约演示
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-primary/15 bg-white/80 text-[#23424B] shadow-card lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-[#23424B]/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <nav
            className="absolute inset-x-4 top-24 rounded-3xl border border-primary/10 bg-white/95 p-6 shadow-soft-lg backdrop-blur-xl"
            aria-label="移动端导航"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3.5 text-base font-semibold text-[#4d727a] transition-colors hover:bg-primary/10 hover:text-primary-dark"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-fresh-gradient px-5 py-3.5 font-bold text-white shadow-glow-soft"
              >
                预约演示 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
