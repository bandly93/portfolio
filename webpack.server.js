const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		server : ['./src/server/index.js','./src/shared/style.css']
	},
	output: {
		filename : '[name]-bundle.js',
		path : path.resolve(__dirname,'dist')
	},
	target:'node',
	externals: [nodeExternals()],
	module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [ { loader: "babel-loader"} ]
      },
      {
        test: /\.css$/,
				use : ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:[ { loader:'css-loader' }]
				})
				
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [ { loader: "file-loader", options: { name: "images/[name].[ext]" } } ]
      },
    ]
  },
	plugins : [
		new ExtractTextPlugin({
			filename : '[name]-bundle.css',
			allChunks:true
		}),
	]	
}
