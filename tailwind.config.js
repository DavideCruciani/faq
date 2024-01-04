/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/src/assets/images/background-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
