/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/***/**/*.js"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['ui-serif', 'Georgia',' Cambria', "Times New Roman", 'Times', 'serif'],
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '30px',
    },
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}

