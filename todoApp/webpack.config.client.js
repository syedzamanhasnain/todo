const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');

require('dotenv').config();

const dev_plugin =
	process.env.MODE === 'development'
		? [new webpack.HotModuleReplacementPlugin()]
		: [];

const config = {
	target: 'web',
	node: {
		fs: 'empty'
	},
	context: path.resolve('./src'),
	// entry file
	entry: './client/index.js',
	//output
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	plugins: [
		...dev_plugin,
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		}),
		new webpack.DefinePlugin({
			IS_SERVER: false,
			IS_CLIENT: true
		}),
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new CopyWebpackPlugin([
			{
				from: './client/assets',
				to: './',
				ignore: ['*.scss']
			}
		]),
		new MiniCssExtractPlugin({
			filename: 'css/style.css',
			chunkFilename: '[name].css'
		}),
		new Dotenv(),
		new CompressionPlugin()
	]
};

module.exports = merge(baseConfig, config);
