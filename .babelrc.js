module.exports = {
  presets: ["next/babel", "@zeit/next-typescript/babel"],
  plugins: [
    [
      "import",
      {
        libraryName: "antd",
        style: true
      }
    ],
    "@babel/plugin-transform-classes"
  ]
};
