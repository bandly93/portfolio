const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const isProd = process.env.NODE_ENV === 'production';

module.exports = env => { 
  return merge(common,{
    entry: {
			client: ['./src/client/index.js','./src/shared/style.css'],	
		},
    mode:'production',
		plugins: [
			new OptimizeCssAssetsPlugin({
				assetNameRegExp: /\.css$/g,
				cssProcessor : require('cssnano'),
				cssProcessorOptions : {	discardComments: { removeAll:true } },
				canPrint: true
			}),
			new webpack.DefinePlugin({
				__isBrowser__ : 'true',
        'process.env': {
          NODE_ENV:JSON.stringify(env.NODE_ENV)
        }
      }),
			new UglifyJSPlugin(),
			/*
			new CompressionPlugin({
				asset : '[path].gz[query]',
				algorithm : 'gzip',
				test : /\.(js|css|html|svg|jpg|png|gif)$/,
				minRatio:1,
			}),
			*/
			new BrotliPlugin({
				asset : '[path].br[query]',
				algorithm:'brolti',
				test : /\.(js|css|html|svg|jpg|png|gif)$/,
				threshold:10240,
				minRatio:0.8,
				quality: 11,
			}),
  	]
  })
}
