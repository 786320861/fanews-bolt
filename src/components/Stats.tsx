import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { STATS } from '../data/content'

function StatCard({
  value,
  suffix,
  label,
  sub,
  start,
}: {
  value: number
  suffix: string
  label: string
  sub: string
  start: boolean
}) {
  const count = useCountUp(value, start)
  return (
    <div className="relative flex flex-col items-center gap-2 px-4 py-8 text-center">
      <div className="font-display text-5xl font-extrabold text-[#23424B] sm:text-6xl">
        <span className="gradient-text">{count}</span>
        <span className="ml-1 text-2xl text-[#7ea3aa] sm:text-3xl">{suffix}</span>
      </div>
      <p className="mt-1 text-lg font-bold text-[#23424B]">{label}</p>
      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7ea3aa]">{sub}</p>
    </div>
  )
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 })

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white/80 shadow-soft backdrop-blur-xl"
      >
        {/* Top scan line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

        <div className="grid grid-cols-2 divide-x divide-y divide-primary/5 lg:grid-cols-4 lg:divide-y-0">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} start={inView} />
          ))}
        </div>
      </div>
    </div>
  )
}
