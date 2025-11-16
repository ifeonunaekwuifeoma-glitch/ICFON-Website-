/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006400",
        canada: "#d62828"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};





