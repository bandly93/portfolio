const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		client: ['./src/client/index.js','./src/shared/style.css'],	
	},
	output : {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname,'dist'),
	},
	mode:'development',
	devtool : 'source-map',
	devServer: {
  	publicPath: '/',
		overlay:true,
		hot:true,
    contentBase: './src/client',
    inline: true,
    port: 8080, 
    proxy: {
    	'**': {
      	target: 'http://localhost:3000',
        changeOrigin: true,
        secure:false
      }
    }
  },
	module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [ { loader: "babel-loader"} ]
      },
      {
        test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:[ { loader: 'css-loader' } ]
				})
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [ { loader: "file-loader", options: { name: "images/[name].[ext]" } } ]
      }, 
    ]
  },
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__ : 'true'
		}),
		new ExtractTextPlugin({
			filename : '[name]-bundle.css',
			allChunks:true
		})
	]
}
