import { Activity, ArrowUp, Mail, Phone } from 'lucide-react'

const FOOTER_LINKS = [
  { title: '产品', items: ['舆情智能监测', '内容智能生产', '数据洞察平台', '内容交换网络', '安全合规服务', '行业大模型'] },
  { title: '解决方案', items: ['政务', '媒体', '企业'] },
  { title: '公司', items: ['关于我们', '发展历程', '技术实力', '合作伙伴', '加入我们'] },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-primary/10 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <div className="relative grid h-10 w-10 place-items-center">
                <div className="absolute inset-0 rounded-2xl bg-fresh-gradient opacity-80 blur-[6px]" />
                <div className="relative grid h-10 w-10 place-items-center rounded-2xl border border-white/70 bg-white/90 shadow-soft">
                  <Activity className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
              </div>
              <div className="leading-tight">
                <p className="font-display text-lg font-extrabold text-[#23424B]">
                  凡闻科技 <span className="gradient-text font-extrabold">Fanews</span>
                </p>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5d868e]">Content Intelligence</p>
              </div>
            </a>
            <p className="mt-6 max-w-sm leading-relaxed text-[#4d727a]">
              以大数据与人工智能驱动的内容智能产品与解决方案，赋能政务、媒体与企业客户，重构数字时代的内容生态。
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="mailto:info@cnfanews.com"
                aria-label="发送邮件"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-primary/15 bg-white text-primary shadow-card transition-all hover:border-primary/40 hover:shadow-glow-sm"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:057185331960"
                aria-label="拨打电话"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-primary/15 bg-white text-primary shadow-card transition-all hover:border-secondary/40 hover:shadow-glow-sm"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#7ea3aa]">{group.title}</h4>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-sm font-medium text-[#4d727a] transition-colors hover:text-primary"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-[#7ea3aa]">
            Copyright © 2012-2025 杭州凡闻科技有限公司 Hangzhou Fanwen Science and Technology Co., Ltd.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-5 py-2.5 font-mono text-xs font-semibold text-primary shadow-card transition-all hover:border-primary/40 hover:shadow-glow-sm"
            aria-label="返回顶部"
          >
            返回顶部
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
