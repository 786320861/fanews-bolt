import { useState, type FormEvent } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { CONTACTS } from '../data/content'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', company: '', phone: '', need: '' })

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setStatus('submitting')
    // Simulate a request to a demo endpoint
    setTimeout(() => setStatus('success'), 1200)
  }

  return (
    <Section id="contact" className="py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: info */}
        <Reveal>
          <p className="section-label">Contact Us</p>
          <h2 className="mt-5 font-display text-display-lg font-bold text-[#23424B]">
            让我们一起
            <br />
            开启智能之旅
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#4d727a]">
            无论是产品咨询、方案定制还是技术合作，我们的专家团队随时为您服务。
          </p>

          <div className="mt-10 space-y-4">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 rounded-2xl border border-primary/10 bg-white/80 px-5 py-4 shadow-card transition-all hover:border-primary/30 hover:shadow-soft"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-fresh-gradient group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7ea3aa]">{c.label}</p>
                  <p className="mt-0.5 font-bold text-[#23424B] group-hover:text-primary-dark">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-primary/10 bg-white/80 p-5 shadow-card">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#7ea3aa]">办公地点</p>
            <p className="mt-2 font-bold text-[#23424B]">中国 · 浙江省杭州市</p>
            <p className="mt-1 text-sm text-[#5d868e]">Hangzhou, Zhejiang, China</p>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white/85 p-8 shadow-soft-lg backdrop-blur-xl sm:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-soft-blob opacity-80 blur-2xl" />

            {status === 'success' ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
                  <CheckCircle2 className="relative h-16 w-16 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-[#23424B]">提交成功</h3>
                <p className="mt-3 max-w-sm text-[#4d727a]">
                  感谢您的信任，我们的顾问将在 1 个工作日内与您联系。
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-8 rounded-full border border-primary/20 bg-white px-6 py-2.5 text-sm font-semibold text-primary-dark shadow-card transition-colors hover:bg-primary/10"
                >
                  再提交一条
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#23424B]">预约产品演示</h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="您的称呼 *">
                    <input required value={form.name} onChange={update('name')} placeholder="请输入姓名" className="input" />
                  </Field>
                  <Field label="单位名称">
                    <input value={form.company} onChange={update('company')} placeholder="请输入单位 / 公司" className="input" />
                  </Field>
                </div>

                <Field label="联系电话 *">
                  <input required type="tel" value={form.phone} onChange={update('phone')} placeholder="请输入手机号码" className="input" />
                </Field>

                <Field label="您的需求">
                  <textarea value={form.need} onChange={update('need')} rows={4} placeholder="简单描述您的业务场景与需求（选填）" className="input resize-none" />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-fresh-gradient px-6 py-4 font-bold text-white shadow-glow-soft transition-all hover:shadow-soft-lg hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> 提交中...
                    </>
                  ) : (
                    <>
                      提交需求 <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#4d727a]">{label}</span>
      {children}
    </label>
  )
}
