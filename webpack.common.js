const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = { 
	output : {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname,'dist'),
		publicPath: '/',
	},
  module:{
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [ 
					{ 
						loader: "babel-loader",
						options : {
							babelrc : false,
							presets : ['@babel/preset-react','@babel/preset-env'],
							plugins : ['@babel/plugin-proposal-class-properties'],	
						}
					} 
				]
      },
      {
        test: /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf)$/,
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
