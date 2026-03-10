/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#022B1C',
        secondary: '#0E4A3A',
        accent: '#3DDC97',
        background: '#F5F7F6',
        text: '#111414',
      },
    },
  },
  plugins: [],
}
