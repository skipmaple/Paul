module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('tailwindcss/nesting'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      features: { 'nesting-rules': false },
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
