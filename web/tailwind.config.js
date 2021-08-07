module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#47A359",
        secondary: "#D8FBE9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
