/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3DB4B8',
          light: '#6ECFD4',
          dark: '#2E9196',
        },
        secondary: {
          DEFAULT: '#7EC8E3',
          light: '#A5DBEC',
        },
        accent: {
          DEFAULT: '#F3A6B8',
          light: '#F9C4D0',
        },
        base: {
          bg: '#F5F9FA',
          surface: '#FFFFFF',
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"Nunito"', 'system-ui', 'sans-serif'],
        display: ['"Nunito"', '"Noto Sans SC"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'grid-dots': 'radial-gradient(rgba(61,180,184,0.16) 1.5px, transparent 1.5px)',
        'grid-dots-soft': 'radial-gradient(rgba(61,180,184,0.09) 1px, transparent 1px)',
        'fresh-gradient': 'linear-gradient(135deg, #3DB4B8 0%, #7EC8E3 60%, #F3A6B8 125%)',
        'soft-mist': 'linear-gradient(160deg, #EAF7F9 0%, #F5F9FA 65%)',
        'soft-blob':
          'radial-gradient(closest-side, rgba(126,200,227,0.5), transparent 72%)',
      },
      boxShadow: {
        soft: '0 12px 32px -12px rgba(61,180,184,0.22)',
        'soft-lg': '0 24px 56px -20px rgba(61,180,184,0.30)',
        'glow-sm': '0 8px 24px -8px rgba(61,180,184,0.4)',
        'glow-soft': '0 10px 40px -10px rgba(61,180,184,0.35)',
        'card': '0 4px 16px -4px rgba(23,53,60,0.08)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'scan-line': 'scanLine 6s linear infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        'spin-slow': 'spin 26s linear infinite',
        marquee: 'marquee 42s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'typing-caret': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
