/**
 * ChinaBrasil Design System — mapeamento para Tailwind CSS.
 *
 * Uso (após `pnpm add -D @nuxtjs/tailwindcss` e adicionar o módulo ao nuxt.config.ts):
 *
 *   // tailwind.config.js (raiz do projeto)
 *   const { theme } = require('./design-system/tailwind.tokens.js')
 *   module.exports = {
 *     content: ['./app/**\/*.{vue,js,ts}'],
 *     theme: { extend: theme },
 *   }
 */

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      red: {
        950: '#2B0808',
        900: '#7A1315',
        800: '#93191A',
        700: '#AE2626',
        600: '#C93838',
      },
      jade: {
        700: '#166B52',
        600: '#1E8566',
        500: '#2A9E7B',
      },
      gold: {
        700: '#A87B2E',
        600: '#C79A42',
        500: '#D9B662',
        300: '#EDDBA9',
      },
      neutral: {
        white: '#FFFFFF',
        offwhite: '#FAF6F5',
        surface: '#F5F0EE',
        surfacealt: '#EEE3E0',
        border: '#E8DEDC',
        text: '#2A1F1F',
        muted: '#6B5757',
        light: '#A18F8F',
      },
      success: '#1E8566',
      warning: '#C79A42',
      error: '#AE2626',
      info: '#2E6E8E',
    },
    fontFamily: {
      display: ['Fraunces', 'Georgia', 'serif'],
      sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    fontSize: {
      caption: ['0.72rem', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '600' }],
      button: ['0.8rem', { lineHeight: '1', letterSpacing: '0.06em', fontWeight: '600' }],
      'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      'body-md': ['1rem', { lineHeight: '1.6' }],
      'body-lg': ['1.125rem', { lineHeight: '1.65' }],
      'heading-md': ['1.3rem', { lineHeight: '1.3', fontWeight: '600' }],
      'heading-lg': ['clamp(1.5rem, 2.4vw, 2rem)', { lineHeight: '1.18', letterSpacing: '-0.015em', fontWeight: '600' }],
      'heading-xl': ['clamp(1.9rem, 3vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '500' }],
      'display-lg': ['clamp(2.1rem, 4vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.025em', fontWeight: '500' }],
      'display-xl': ['clamp(2.5rem, 5vw, 4.75rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '500' }],
    },
    spacing: {
      0: '0px', 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px',
      8: '32px', 10: '40px', 12: '48px', 16: '64px', 20: '80px', 24: '96px', 32: '128px',
    },
    borderRadius: {
      none: '0', sm: '4px', DEFAULT: '8px', md: '8px', lg: '14px', xl: '20px', '2xl': '28px', pill: '999px',
    },
    boxShadow: {
      none: 'none',
      soft: '0 8px 30px rgba(43, 8, 8, 0.07)',
      card: '0 14px 40px rgba(43, 8, 8, 0.09)',
      floating: '0 20px 60px rgba(43, 8, 8, 0.18)',
    },
    extend: {
      maxWidth: {
        content: '1180px',
        text: '640px',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '450ms',
      },
    },
  },
}
