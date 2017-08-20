const webpack= require("webpack");
const {resolve}= require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports= {
	context: resolve('src'),
	entry: {
		vendor: ['lodash'],
		app: ['babel-polyfill', './js/index']
	},
	output: {
		path: resolve('dist'),
		filename: 'bundle.js',
		publicPath: "/dist/"
	},
    resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "vendor.js",
		}),
		new ExtractTextPlugin('css/styles.css', {
			allChunks: true
		})
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel-loader','eslint-loader'],
				exclude: /node_modules/
			},
			{
				test: /(\.css)$/,
				loaders: ExtractTextPlugin.extract('css-loader', 'style-loader'),
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loaders: ['file-loader'],
			},
			{
				test: /\.(woff|woff2)$/,
				loaders: ['url-loader'],
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loaders: ['url-loader'],
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loaders: ['url-loader'],
			}
		]
	}
}