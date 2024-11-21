/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      fontFamily: {
        'pt-serif': ['"PT Serif"', 'serif'], 
        'patua-one': ['"Patua One"', 'serif'], 
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 20s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
}

