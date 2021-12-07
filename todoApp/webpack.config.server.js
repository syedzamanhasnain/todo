const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const historyFallback = require('connect-history-api-fallback');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');

require('dotenv').config();

const dev_plugin =
	process.env.MODE === 'development'
		? [new webpack.HotModuleReplacementPlugin()]
		: [];

const config = {
	// Building for node not broser
	target: 'node',
	context: path.resolve('./src'),
	// entry file
	entry: './server/index.js',
	//output
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		...dev_plugin,
		new webpack.DefinePlugin({
			IS_SERVER: true,
			IS_CLIENT: false
		}),
		new BrowserSyncPlugin({
			server: {
				baseDir: ['build'],
				middleware: [historyFallback()]
			},
			port: 3000,
			host: 'localhost',
			open: false
		}),
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new MiniCssExtractPlugin({
			filename: 'css/style.css',
			chunkFilename: '[name].css'
		}),
		new Dotenv(),
		new CompressionPlugin()
	]
};

module.exports = merge(baseConfig, config);
