const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common,{
	entry: {
		server : ['./src/server/index.js','./src/shared/style.css']
	},
	target:'node',
	externals: [nodeExternals()],	  
});
