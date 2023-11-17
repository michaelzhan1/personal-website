/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#363636',
        'custom-light': '#efede7',
        'navbar-text': '#666666',
        'main-bg': '#f5f5f5',
      }
    },
  },
  plugins: [],
}

