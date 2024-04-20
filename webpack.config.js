const path = require("path");

module.exports = {
  mode: "development",
  entry: "./MyComponent.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react-toolbox.js",
    library: "ReactToolbox",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
