/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Japan Trip Travel Theme Colors
        wabi: {
          bg: '#FFFCF2',        // Floral White (--bg-base)
          surface: '#f5efe4',   // Warm surface (--bg-surface)
          card: '#ffffff',      // Pure card (--bg-card)
          elevated: '#ede5d6',  // Elevated element (--bg-elevated)
          text: '#252422',      // Eerie Black (--text-primary)
          secondary: '#736d65', // Muted text (--text-muted)
          muted: '#403D39',     // Charcoal (--text-secondary)
          accent: '#EB5E28',    // Flame Orange (--accent)
          'accent-light': '#f2794b',
          border: '#dcd4c6',    // Border default (--border-default)
        },
        tokyo: {
          bg: '#252422',        // Eerie Black (--bg-base)
          surface: '#2e2c29',   // Dark surface (--bg-surface)
          card: '#403D39',      // Charcoal card (--bg-card)
          elevated: '#4e4b45',  // Elevated element (--bg-elevated)
          text: '#FFFCF2',      // Floral White (--text-primary)
          secondary: '#CCC5B9', // Pale Silver (--text-secondary)
          muted: '#a8a196',     // Muted text (--text-muted)
          accent: '#EB5E28',    // Flame Orange (--accent)
          'accent-light': '#f2794b',
          border: '#54504a',    // Border default (--border-default)
        },
        // Direct CSS variable-based aliases
        'bg-base': 'var(--bg-base)',
        'bg-surface': 'var(--bg-surface)',
        'bg-card': 'var(--bg-card)',
        'bg-elevated': 'var(--bg-elevated)',
        'border-default': 'var(--border-default)',
        'border-muted': 'var(--border-muted)',
        'border-subtle': 'var(--border-subtle)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-faint': 'var(--text-faint)',
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          muted: 'var(--accent-muted-bg)',
          subtle: 'var(--accent-subtle-bg)',
        },
      },
      boxShadow: {
        earth: 'var(--shadow-earth)',
        card: 'var(--shadow-card)',
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
