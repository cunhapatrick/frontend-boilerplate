const webpackConfig = {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "less-loader", // compiles LESS to CSS
          options: {
            // NOTE custom theme variables
            modifyVars: {},
            javasciptEnabled: true
          }
        }
      ]
    }
  ]
};

module.exports = webpackConfig;
