// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#c208f5", // Primary brand color
        background: "#000000", // Site background
        text: "#ffffff", // Main text color
        header: "#c208f5", // Header & logo color
      },
      fontFamily: {
        sans: ["'Google Sans'", "sans-serif"], // Custom Google Sans
      },
    },
  },
  plugins: [],
}
