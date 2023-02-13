/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSans: "'Noto Sans Syloti Nagri', sans-serif",
      },
      boxShadow: {
        k: "1px 1px 0px 25px rgba(255,216,22,0.28)",
        s: "1px 1px 0px 25px rgba(59,130,246,0.28)",
      },
    },
  },
  plugins: [],
};
