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
		publicPath: '/',
	},
	mode:'development',
	devtool : 'inline-source-map',
	devServer: {
		contentBase : 'dist',
		publicPath : '/',
		overlay:true,
    inline: true,
    port: 8080, 
    proxy: {
    	'**': {
      	target: 'http://[::1]:3000',
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
		new webpack.NamedModulesPlugin(),
		new ExtractTextPlugin({
			filename : '[name]-bundle.css',
			allChunks:true
		}),
	]
}
