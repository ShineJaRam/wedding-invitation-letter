/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        cvh: 'calc(var(--vh,1vh)*100)',
      },
      minHeight: {
        cvh: 'calc(var(--vh,1vh)*100)',
      },
    },
  },
  plugins: [],
};
