/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        'primary-dark': '#7C3AED',
        background: '#1F2937',
        surface: '#374151',
        text: '#F3F4F6',
        'text-secondary': '#9CA3AF',
      },
    },
  },
  plugins: [],
};