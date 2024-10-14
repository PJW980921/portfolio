import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // => @media (max-width: 1119px) { ... }
      md: { max: '1480px' }, // tablet

      // => @media (max-width: 743px) { ... }
      sm: { max: '768px' }, // mobile
    },
    extend: {
      fontFamily: {
        bmEuljiro: ['var(--font-bm-euljiro)'],
        bmHannaAir: ['var(--font-bm-hanna_air)'],
        bmHannaPro: ['var(--font-bm-hanna_pro)'],
      },
      keyframes: {
        'spin-reverse': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {},
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
