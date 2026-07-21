/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ps-navy': {
          50: '#f5f7fb',
          100: '#e8ecf5',
          200: '#c9d9ed',
          300: '#aac6e5',
          400: '#6b9fd4',
          500: '#2d78c3',
          600: '#1e5aa0',
          700: '#164280',
          800: '#0f2a60',
          900: '#0a1d40',
        },
        'ps-accent': {
          50: '#f0f9ff',
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sm-nav': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md-card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
