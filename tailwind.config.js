/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        // Override Tailwind's default amber so existing `amber-*` classes adopt the new theme
        amber: {
          50: '#f5f8ff',
          100: '#e8efff',
          200: '#cfe0ff',
          300: '#a9c5ff',
          400: '#7ea5ff',
          500: '#4e82ff',
          600: '#2f63e6',
          700: '#234ec0',
          800: '#1e3f99',
          900: '#1a357d',
          950: '#0f1f48',
        },
        // Blue–Purple theme remapped to existing tokens
        // earth -> primary blue
        earth: {
          50: '#f5f8ff',
          100: '#e8efff',
          200: '#cfe0ff',
          300: '#a9c5ff',
          400: '#7ea5ff',
          500: '#4e82ff',
          600: '#2f63e6',
          700: '#234ec0',
          800: '#1e3f99',
          900: '#1a357d',
          950: '#0f1f48',
        },
        // cream -> soft lavender blues (light surfaces)
        cream: {
          50: '#fbfcff',
          100: '#f3f6ff',
          200: '#e5ebff',
          300: '#d0dbff',
          400: '#b5c6ff',
          500: '#95adff',
          600: '#6f8dff',
          700: '#566fec',
          800: '#455abf',
          900: '#3a4a99',
          950: '#212a57',
        },
        // sage -> secondary purple
        sage: {
          50: '#f7f5ff',
          100: '#eee9ff',
          200: '#dccfff',
          300: '#c1a6ff',
          400: '#a07eff',
          500: '#7d4eff',
          600: '#6230e6',
          700: '#4d24c0',
          800: '#3f1e99',
          900: '#341a7d',
          950: '#1d0f48',
        },
        // terracotta -> magenta accent
        terracotta: {
          50: '#fff5fb',
          100: '#ffe9f6',
          200: '#ffcfe9',
          300: '#ffa6d6',
          400: '#ff7ec0',
          500: '#ff4ea4',
          600: '#e6308e',
          700: '#c02473',
          800: '#991e5e',
          900: '#7d194e',
          950: '#480f2d',
        },
      },
      boxShadow: {
        'earth': '0 10px 25px rgba(78, 130, 255, 0.15)',
        'earth-lg': '0 20px 40px rgba(78, 130, 255, 0.2)',
        'sage': '0 10px 25px rgba(125, 78, 255, 0.15)',
        'sage-lg': '0 20px 40px rgba(125, 78, 255, 0.2)',
        'dark': '0 10px 25px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 20px 40px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-earth': 'linear-gradient(135deg, #f5f8ff 0%, #cfe0ff 50%, #a9c5ff 100%)',
        'gradient-earth-dark': 'linear-gradient(135deg, #0f1f48 0%, #1a357d 50%, #1e3f99 100%)',
        'gradient-sage': 'linear-gradient(135deg, #f7f5ff 0%, #dccfff 50%, #c1a6ff 100%)',
        'gradient-sage-dark': 'linear-gradient(135deg, #1d0f48 0%, #341a7d 50%, #3f1e99 100%)',
        'gradient-cream': 'linear-gradient(135deg, #fbfcff 0%, #e5ebff 50%, #d0dbff 100%)',
        'gradient-cream-dark': 'linear-gradient(135deg, #212a57 0%, #3a4a99 50%, #455abf 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
}
