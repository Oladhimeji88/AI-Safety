/** @type {import('tailwindcss').Config} */
// SafeRoute design tokens — the single source of truth for brand color,
// typography, radius and elevation. Mirrors tokens.js and SPEC.md.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1F3A', 600: '#1c3a66', 700: '#13294d' },
        green: { DEFAULT: '#22C55E', 600: '#16a34a', 50: '#ecfdf3' },
        amber: { DEFAULT: '#F59E0B', 50: '#fff7ed', 700: '#b45309' },
        danger: { DEFAULT: '#EF4444', 600: '#dc2626', 50: '#fef2f2' },
        slate: { DEFAULT: '#1E293B' },
        mist: '#F8FAFC',
        // semantic surface tokens (flip in dark mode via CSS vars)
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-3': 'var(--ink-3)',
        line: 'var(--line)',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '12px', DEFAULT: '16px', lg: '20px', xl: '24px', '2xl': '30px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(11,31,58,.06), 0 1px 3px rgba(11,31,58,.04)',
        DEFAULT: '0 4px 12px rgba(11,31,58,.06), 0 2px 4px rgba(11,31,58,.04)',
        md: '0 12px 28px rgba(11,31,58,.10), 0 4px 10px rgba(11,31,58,.05)',
        lg: '0 24px 60px rgba(11,31,58,.16), 0 8px 20px rgba(11,31,58,.08)',
        green: '0 12px 28px rgba(34,197,94,.30)',
        red: '0 14px 34px rgba(239,68,68,.40)',
      },
      keyframes: {
        pulse4: { '0%,100%': { boxShadow: '0 0 0 4px rgba(34,197,94,.25)' }, '50%': { boxShadow: '0 0 0 8px rgba(34,197,94,0)' } },
        ripple: { '0%': { transform: 'scale(1)', opacity: '.8' }, '100%': { transform: 'scale(2.6)', opacity: '0' } },
      },
      animation: {
        pulse4: 'pulse4 2.2s infinite',
        ripple: 'ripple 2s infinite',
      },
    },
  },
  plugins: [],
}
