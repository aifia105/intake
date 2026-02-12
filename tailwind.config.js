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
      fontFamily: {
        "inter-regular": ["Inter_28pt-Regular"],
        "inter-bold": ["Inter_28pt-Bold"],
        "inter-medium": ["Inter_28pt-Medium"],
        "inter-semibold": ["Inter_28pt-SemiBold"],
        roboto: ["RobotoCondensed-Regular"],
      },
    },
  },
  plugins: [],
};
