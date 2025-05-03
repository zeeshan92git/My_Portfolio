export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'scale-shadow': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
          }
        },
      },
      animation: {
        'scale-shadow': 'scale-shadow 2s ease-in infinite',
      },
    },
  },
  plugins: [],
};
