import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'psk-red': '#C91F3C',
        'psk-light-gray': '#EAEAEB',
        'psk-silver': '#ACACAC',
        'psk-slate-gray': '#616162',
        'psk-yellow': '#FDB913'
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': {opacity: '1'},
        },
      },
    },
  },
  plugins: [],
};

export default config; 