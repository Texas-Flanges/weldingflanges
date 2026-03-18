import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'steel': {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0d1117',
        },
        'industrial': {
          dark: '#ffffff',
          darker: '#ffffff',
        },
        'accent': {
          orange: '#e8590c',
          'orange-light': '#f07932',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'industrial-pattern': 'linear-gradient(135deg, rgba(26, 31, 38, 0.8) 0%, rgba(15, 20, 25, 0.9) 100%), repeating-linear-gradient(0deg, rgba(255, 140, 66, 0.03) 0px, rgba(255, 140, 66, 0.03) 1px, transparent 1px, transparent 2px)',
      },
    },
  },
  plugins: [],
};

export default config;
