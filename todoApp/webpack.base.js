const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

module.exports = {
	//run babel on everyfile
	mode: process.env.MODE,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['env', 'react'],
					plugins: [
						require('babel-plugin-transform-class-properties'),
						require('babel-plugin-transform-object-rest-spread')
					]
				}
			},
			{
				test: /\.(css|sass|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [autoprefixer(), cssnano()]
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'application/font-woff',
							name: 'fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(ttf|eot|svg|ttc)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				use: [
					{
						loader: 'file-loader',

						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(mp4|ogg|webm)$/,
				use: [
					{
						loader: 'file-loader',

						options: {
							name: 'videos/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.modernizrrc.js$/,
				use: ['modernizr-loader']
			},
			{
				test: /\.modernizrrc(\.json)?$/,
				use: ['modernizr-loader', 'json-loader']
			}
		]
	},
	resolve: {
		alias: {
			modernizr$: path.resolve(__dirname, '.modernizrrc'),
			containers: path.resolve(__dirname, 'src/client/components/containers/'),
			general: path.resolve(__dirname, 'src/client/components/general/'),
			views: path.resolve(__dirname, 'src/client/components/views/'),
			utils: path.resolve(__dirname, 'src/client/utils/')
		}
	}
};
