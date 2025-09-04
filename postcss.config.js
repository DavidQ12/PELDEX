module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      theme: {
        extend: {
          colors: {
            orange: {
              500: '#FF8C00',
              600: '#FF6B00',
            }
          }
        },
      },
      plugins: [],
    },
    autoprefixer: {},
  }
}