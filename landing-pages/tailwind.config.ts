import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // SashiDo Brand Colors - Professional Purple/Blue Scheme
        primary: {
          DEFAULT: '#5B4FFF', // Purple primary
          50: '#F5F4FF',
          100: '#EBE9FF',
          200: '#D7D4FF',
          300: '#C3BFFF',
          400: '#8F85FF',
          500: '#5B4FFF',
          600: '#4939E6',
          700: '#3726CC',
          800: '#2B1DB3',
          900: '#1F1499',
        },
        secondary: {
          DEFAULT: '#00C9A7', // Teal accent
          50: '#E6FFF9',
          100: '#CCFFF4',
          200: '#99FFE9',
          300: '#66FFDE',
          400: '#33FFD3',
          500: '#00C9A7',
          600: '#00A085',
          700: '#007863',
          800: '#005042',
          900: '#002821',
        },
        dark: {
          DEFAULT: '#1A1A2E', // Deep navy for text/backgrounds
          50: '#F7F7F9',
          100: '#EFEFF3',
          200: '#DFDFE7',
          300: '#CFCFDB',
          400: '#AFAFC3',
          500: '#8F8FAB',
          600: '#6F6F93',
          700: '#4F4F7B',
          800: '#2F2F63',
          900: '#1A1A2E',
        },
        light: {
          DEFAULT: '#FAFBFC', // Very light background
          50: '#FFFFFF',
          100: '#FAFBFC',
          200: '#F4F6F8',
          300: '#EEF1F4',
          400: '#E8ECF0',
          500: '#E2E7EC',
          600: '#C9D1D9',
          700: '#B0BBC6',
          800: '#97A5B3',
          900: '#7E8FA0',
        },
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 102, 255, 0.08)',
        'medium': '0 4px 40px rgba(0, 102, 255, 0.12)',
        'strong': '0 8px 60px rgba(0, 102, 255, 0.16)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
export default config

