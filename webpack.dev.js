const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
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
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__ : 'true'
		}),
		new webpack.NamedModulesPlugin(),
	]
});
