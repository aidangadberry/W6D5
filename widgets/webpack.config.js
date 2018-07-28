const path = require('path');
module.exports = {
  entry: "./dist/widgets.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname)
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use : {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  }
};
