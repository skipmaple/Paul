module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-flexbugs-fixes'),
    require("postcss-nested"),
    require('autoprefixer'),
  ]
}
