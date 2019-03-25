module.exports = {
  presets: ["next/babel", "@zeit/next-typescript/babel", "babel-preset-env"],
  plugins: [
    [
      "import",
      {
        libraryName: "antd",
        style: true
      }
    ]
  ]
};
