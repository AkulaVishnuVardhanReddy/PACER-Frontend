/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 1.5s infinite linear',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        },
      },
    },
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
