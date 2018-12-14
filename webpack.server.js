const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common,{
	entry: {
		server : ['@babel/polyfill','./src/server/index.js']
	},
	target:'node',
	externals: [nodeExternals()],	  
});
