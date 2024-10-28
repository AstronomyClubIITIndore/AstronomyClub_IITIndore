/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(rgb(2, 21, 48), rgb(0, 0, 0))',
      },
    },
  },
  plugins: [],
};
