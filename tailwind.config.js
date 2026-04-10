/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#eb515b",
        darkbg: "#0a0c10",
        surface: "#161a22",
        surface2: "#1e2330",
        border: "#2a3142",
        text: "#e8e8f0",
        muted: "#98a2b3",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}