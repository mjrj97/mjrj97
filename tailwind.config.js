/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      display: ['"Poppins"'],
      body: ['"Quicksand"'],
    },
    extend: {
      colors: {
        'dark-blue': '#040b14',
        'dark-blue-accent': '#212431',
        'light-blue': '#149ddd',
      },
    },
  },
  plugins: [],
};
