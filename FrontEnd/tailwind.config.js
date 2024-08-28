/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "Bg-images": 'url("../public/10001.png")',
        "Evangadi-bg-images": "url('../src/images/Evangadi_Bg_image.svg')",
      },
    },
  },
  plugins: [],
};
