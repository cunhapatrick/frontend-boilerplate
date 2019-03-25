const path = require("path");

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

const webpackConfig = {
  resolve: {
    extensions: [".ts", ".js", ".json", ",tsx"]
  },
  devtool: "source-map",
  modules: {
    loaders: [
      {
        test: /.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /.js$/,
        loader: "source-map-loader",
        enforce: "pre"
      }
    ]
  },
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
