var path = require('path');
var webpack = require('webpack');
var cssnext = require('postcss-cssnext');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		app: [
			// 'babel-polyfill', <-- uncomment this if you need it - it adds weight, though
			'./client/index.js'
		],
	},
	output: {
		path: path.join(__dirname, 'www/static'),
		filename: 'bundle.[name].js',
		publicPath: '/static/',
	},
	plugins: [
		// new webpack.NoErrorsPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				loaders: ['babel?cacheDirectory'],
				include: [
					path.join(__dirname, 'client'),
				],
			},
			{
				test: /\.css$/,
				include: [
					path.join(__dirname, 'client'),
				],
				loaders: [
					'style',
					'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
					'postcss',
				],
			},
			{
				test: /\.css$/,
				exclude: [
					path.join(__dirname, 'client'),
				],
				loaders: [
					'style',
					'css',
					'postcss',
				],
			},
		],
	},
	postcss: [
		cssnext({
			browsers: ['last 3 versions', 'ie 11'],
		}),
	],
	profile: true,
};
