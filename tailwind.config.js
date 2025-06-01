/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "teal-100": "#BCE5E2",
        "teal-200": "#8CD5D4",
        "teal-500": "#7DBBB6",
        "sky-100": "#EBF0F5", // border colour
        "stone-100": "#F3F3F3", // background colour
        "gray-500": "#616B79", // subtext colour
        "zinc-700": "#34383F",
        "zinc-50": "#FFFFFF",
      },
      fontSize: {
        h1: ["64px",  { lineHeight: "auto" }],
        h2: ["40px", { lineHeight: "auto" }],
        h3: ["36px", { lineHeight: "auto" }],
        h4: ["24px", { lineHeight: "auto" }],
        h5: ["20px", { lineHeight: "auto" }],
        "body-lg": ["18px", { lineHeight: "auto" }],
        "body-md": ["16px", { lineHeight: "auto" }],
        "body-sm": ["14px", { lineHeight: "auto" }],
      },
    },
  },
  plugins: [],
}

