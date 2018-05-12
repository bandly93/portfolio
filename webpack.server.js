const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common,{
	entry: {
		server : ['./src/server/index.js','./src/shared/style.css']
	},
	output: {
		filename : '[name]-bundle.js',
		path : path.resolve(__dirname,'dist')
	},
	target:'node',
	externals: [nodeExternals()],	  
});
