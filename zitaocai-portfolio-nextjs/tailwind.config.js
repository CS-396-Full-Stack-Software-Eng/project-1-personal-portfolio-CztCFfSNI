/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-clockwise': 'spin-clockwise 50s linear infinite',
        'orbit': 'orbit 50s linear infinite',
      },
      keyframes: {
        'spin-clockwise': {
          '0%': { transform: 'rotate(0deg) translateX(150px)' },
          '100%': { transform: 'rotate(360deg) translateX(-150px)' },
        },
        'orbit': {
          '0%': {
            transform: 'rotate(0deg) translateX(-150px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(-150px) rotate(-360deg)',
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
