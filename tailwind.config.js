/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - warm orange from home page
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Accent - amber companion tone
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Success / Verified green
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        // Alert / Flag red
        danger: {
          400: '#fb7185',
          500: '#ef4444',
          600: '#dc2626',
        },
        // Warm amber for campaigns
        warm: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // Background neutrals
        surface: {
          50: '#fffbf5',
          100: '#fff7ed',
          200: '#ffedd5',
          300: '#fed7aa',
        },
        dark: {
          800: '#292524',
          900: '#1c1917',
          950: '#0f1720',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'blue-sm': '0 4px 14px rgba(249,115,22,0.18)',
        'blue-md': '0 10px 28px rgba(249,115,22,0.24)',
        'blue-lg': '0 18px 48px rgba(249,115,22,0.30)',
        'card': '0 4px 18px rgba(28,25,23,0.06)',
        'card-hover': '0 14px 40px rgba(28,25,23,0.12)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f1720 0%, #17212b 50%, #2a1a12 100%)',
        'card-gradient': 'linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0f1720 0%, #1c1917 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
