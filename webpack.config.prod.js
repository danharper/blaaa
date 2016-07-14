var webpack = require('webpack');
var base = require('./webpack.config.js');

// in production, we change to external source maps,
// and swap out the plugins used for development

module.exports = Object.assign({}, base, {
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			sourceMap: true,
			compress: {
				drop_console: true,
			}
		}),
	]
});

