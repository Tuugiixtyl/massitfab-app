/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      "light",
      "dark",
      "synthwave",
      "retro",
      "forest",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),
  ],
};
