/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-red-1":"hsl(0, 36%, 70%)",
        "primary-red-2":"hsl(0, 93%, 68%)",
        "neutral-red-1":"hsl(0, 6%, 24%)",
        "btn-start":"hsl(0, 80%, 86%)",
        "btn-end":"hsl(0, 74%, 74%)",
        // "button-bg":"linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      },
    },
  },
  plugins: [],
}
