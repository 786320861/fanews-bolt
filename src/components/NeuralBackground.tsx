import { useMemo } from 'react'

interface Blob {
  size: number
  top: string
  left: string
  color: string
  delay: string
  duration: string
}

interface Sparkle {
  top: string
  left: string
  size: number
  delay: string
  color: string
}

/** Fixed fresh-style background: pastel blobs, dot grid, and floating sparkles. */
export default function FreshBackground() {
  const blobs = useMemo<Blob[]>(
    () => [
      { size: 420, top: '-10%', left: '-8%', color: 'rgba(126,200,227,0.5)', delay: '0s', duration: '10s' },
      { size: 360, top: '6%', left: '62%', color: 'rgba(243,166,184,0.4)', delay: '1.4s', duration: '12s' },
      { size: 460, top: '42%', left: '-10%', color: 'rgba(61,180,184,0.32)', delay: '2s', duration: '13s' },
      { size: 400, top: '58%', left: '70%', color: 'rgba(255,217,169,0.45)', delay: '0.7s', duration: '11s' },
      { size: 340, top: '84%', left: '16%', color: 'rgba(165,219,236,0.5)', delay: '2.6s', duration: '12s' },
    ],
    [],
  )

  const sparkles = useMemo<Sparkle[]>(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        top: `${8 + ((i * 37) % 84)}%`,
        left: `${4 + ((i * 23) % 92)}%`,
        size: 5 + (i % 3) * 3,
        delay: `${(i % 6) * 0.7}s`,
        color: i % 3 === 0 ? '#F3A6B8' : i % 3 === 1 ? '#3DB4B8' : '#F5B97F',
      })),
    [],
  )

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Pastel blobs */}
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="blob-decoration"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: blob.color,
            animation: `float ${blob.duration} ease-in-out ${blob.delay} infinite`,
          }}
        />
      ))}

      {/* Dot grid */}
      <div className="absolute inset-0 bg-grid-dots bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            background: s.color,
            opacity: 0.6,
            animation: `pulseGlow 4s ease-in-out ${s.delay} infinite`,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
          }}
        />
      ))}

      {/* Bottom soft fade to keep cards readable */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#F5F9FA] to-transparent" />
    </div>
  )
}
