import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
}

/** Consistent section shell with max width, padding, and anchor offset. */
export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32 ${className}`}>
      {children}
    </section>
  )
}
