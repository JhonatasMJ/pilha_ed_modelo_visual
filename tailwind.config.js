const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "background-sky": "#D4EAF3",
        borda: "#8CD8FA",
        texto: "#0EA5E9",
        paragrafo: "#0F172A",
      },
    },
  },
  plugins: [],
});
