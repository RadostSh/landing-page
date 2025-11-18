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
        // SashiDo Brand Colors (extracted from sashido.io)
        primary: {
          DEFAULT: '#0066FF', // Primary blue
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        secondary: {
          DEFAULT: '#00D9B5', // Teal/turquoise accent
          50: '#E6FBF7',
          100: '#CCF7EF',
          200: '#99EFDF',
          300: '#66E7CF',
          400: '#33DFBF',
          500: '#00D9B5',
          600: '#00AD91',
          700: '#00826D',
          800: '#005648',
          900: '#002B24',
        },
        dark: {
          DEFAULT: '#0F1419', // Deep dark for backgrounds
          50: '#F5F6F7',
          100: '#EBEDEF',
          200: '#D7DBDF',
          300: '#C3C9CF',
          400: '#AFB7BF',
          500: '#9BA5AF',
          600: '#6B7781',
          700: '#3F4952',
          800: '#272E35',
          900: '#0F1419',
        },
        light: {
          DEFAULT: '#F8F9FA', // Light background
          50: '#FFFFFF',
          100: '#F8F9FA',
          200: '#F1F3F5',
          300: '#E9ECEF',
          400: '#DEE2E6',
          500: '#CED4DA',
          600: '#ADB5BD',
          700: '#868E96',
          800: '#495057',
          900: '#212529',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
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

