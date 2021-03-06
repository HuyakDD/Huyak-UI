const path = require("path");

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  title: "Huyak UI",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "huyak-ui": path.resolve(__dirname, "src")
  }
};
