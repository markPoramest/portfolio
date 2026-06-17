/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wabi: {
          bg: '#FAF6F0',
          text: '#1C1C1C',
          accent: '#9E2A2B',
          secondary: '#4A5568',
        },
        tokyo: {
          bg: '#121212',
          text: '#FAF6F0',
          accent: '#E63946',
          secondary: '#A0AEC0',
        },
      },
      fontFamily: {
        sans: ['"Quicksand"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      },
      animation: {
        'unfold': 'unfold 1s ease-out forwards',
        'fade-slide-up': 'fadeSlideUp 0.8s ease-out forwards',
      },
      keyframes: {
        unfold: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
