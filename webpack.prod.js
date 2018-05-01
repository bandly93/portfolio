const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = env => {
	return {
		entry: {
			client: ['./src/client/index.js','./src/shared/style.css'],	
		},
		mode:'production',
		output : {
			filename: '[name]-bundle.js',
			path: path.resolve(__dirname,'dist'),
			publicPath: '/',
		},
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
						use: {
							loader:'css-loader',
							options : {
								minimize : true
							}
						}
					})
     	  },
      	{
        	test: /\.(jpg|png|gif)$/,
       	  use: [ { loader: "file-loader", options: { name: "images/[name].[ext]" } } ]
      	}, 
    	]
  	},
		plugins: [
			new OptimizeCssAssetsPlugin({
				assetNameRegExp: /\.css$/g,
				cssProcessor : require('cssnano'),
				cssProcessorOptions : {	discardComments: { removeAll:true } },
				canPrint: true
			}),
			new webpack.DefinePlugin({
				__isBrowser__ : 'true',
				'process.env' : {
					NODE_ENV: JSON.stringify(env.NODE_ENV)
				}
			}),
			new ExtractTextPlugin({
				filename : '[name]-bundle.css',
				allChunks:true
			}),
			new UglifyJSPlugin(),
			new CompressionPlugin({
				asset : '[path].gz[query]',
				algorithm : 'gzip',
				test : /\.js$|\.css$|\.html$/,
				minRatio:1,
			}),
			new BrotliPlugin(),
		]
	}
}
