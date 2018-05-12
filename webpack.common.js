const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module:{
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [ { loader: "babel-loader"} ]
      },
      {
        test: /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [ { loader: "file-loader", options: { name: "images/[name].[ext]" } } ]
      }, 
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:"[name]-bundle.css",
      chunkFilename : "[id].css",
    })
  ],
}
