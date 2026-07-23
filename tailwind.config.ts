import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        win: {
          blue: '#0078D4',
          blueHover: '#005A9E',
          blueLight: '#E5F3FF',
          blueBorder: '#B3D8F4',
          cyan: '#00B7C3',
          purple: '#88179A',
          purpleLight: '#F3E5F5',
          green: '#107C41',
          greenLight: '#E6F4EA',
          amber: '#FF8C00',
          amberLight: '#FFF4E5',
          red: '#D13438',
          bg: '#F8FAFC',
          card: '#FFFFFF',
        },
        navy: {
          50: '#F0F6FF',
          100: '#DDEBFF',
          800: '#0F1C36',
          900: '#071A2E',
          950: '#040E1B',
        },
        subject: {
          physics: '#0078D4',
          math: '#88179A',
          biology: '#107C41',
          chemistry: '#FF8C00',
        }
      },
      fontFamily: {
        heading: ['var(--font-jakarta)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
