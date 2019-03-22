const withTypescript = require("@zeit/next-typescript");
const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

module.exports = withTypescript(
  withLess(
    withCss({
      distDir: "../build",
      webpack: (config, options) => {
        return config;
      },
      lessLoaderOptions: {
        javascriptEnabled: true
      }
    })
  )
);
