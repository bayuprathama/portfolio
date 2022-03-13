module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary-bg": "#0A192F",
      "primary-bg-tint": "rgba(10, 25, 47, 0.85)",
      "secondary-bg": "#112240",
      "primary-green": "#64FFDA",
      "primary-green-tint": "rgba(100, 255, 218, 0.1)",
      "accent-pink": "#f087bd",
      "accent-pink-tint": "rgba(240, 135, 189, 0.1)",
      "accent-pink-darker": "#d0679d",
      "accent-pink-darker-tint": "rgba(208, 103, 157, 0.1)",
      "primary-text": "#CCD6F6",
      "secondary-text": "#8892B0",
      transparent: "transparent",
    },
    fontFamily: {
      "roboto-mono": "'Roboto Mono', monospace",
      inter: "'Inter', serif",
    },
  },
  plugins: [],
};
