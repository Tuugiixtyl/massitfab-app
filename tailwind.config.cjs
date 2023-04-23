/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      "dracula",
      "pastel",
      "dark",
      "wireframe",
      "light",
      "lofi",
      "retro",
      "forest",
      "business",
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
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),
  ],
};
