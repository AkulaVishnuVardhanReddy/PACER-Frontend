/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Hide scrollbar in Webkit-based browsers (Chrome, Safari, Edge) */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE 10+ */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Hide scrollbar in WebKit-based browsers */
        },
      });
    }
  ],
}
