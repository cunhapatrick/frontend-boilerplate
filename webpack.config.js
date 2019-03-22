import AntdScssThemePlugin from "antd-scss-theme-plugin";

const webpackConfig = {
  rules: [
    {
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        AntdScssThemePlugin.themify({
          loader: "sass-loader" // compiles SASS to CSS
        })
      ]
    }
  ]
};

module.exports = webpackConfig;
