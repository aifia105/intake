/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#0B0F14",
        card: "#151A21",
        primary: "#4ADE80",
        secondary: "#22D3EE",
        accent: "#FACC15",
        "text-primary": "#E5E7EB",
        "text-muted": "#9CA3AF",
        danger: "#F87171",
      },
    },
  },
  plugins: [],
};
