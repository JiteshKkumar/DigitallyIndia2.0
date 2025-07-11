// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#B9FF66',
//         secondary: '#191A23',
//         tartiary: '#F3F3F3',
//       },
//       fontFamily: {
//         primary: ["Space Grotesk", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B9FF66',
        secondary: '#191A23',
        tartiary: '#F3F3F3',
      },
      fontFamily: {
        primary: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        spinSlow: 'spinSlow 30s linear infinite', // added
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spinSlow: { // added
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
