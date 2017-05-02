module.exports = {
  plugins: [
    require("postcss-smart-import")({
      plugins: [
        require("stylelint"),
      ],
    }),
    require('postcss-custom-properties'),
    require("postcss-reporter"),
  ],
}
