/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,jsx,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          700: "#004B9B",
          800: "#003875",
        },
        brand: {
          blue: "#004B9B",
          warm: "#FF5A00",
          warmLight: "#FFC62A",
          accent: "#FD7E14",
          dark: "#0B1B2B",
        },
        "brand-accent": "#FD7E14",
      },
    },
  },
  plugins: [],
};
