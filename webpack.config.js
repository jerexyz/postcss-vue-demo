var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractCSS = new ExtractTextPlugin('[name].css');
module.exports = {
	entry: {main:'./style.scss',index:'./index.js'},
	output: {
		path: path.resolve(process.cwd(),'./dist'),
		filename: "[name].css"
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					css: extractCSS.extract({ fallback: 'vue-style-loader', use: ["css-loader", "postcss-loader"] }),
					scss: extractCSS.extract({ fallback: 'vue-style-loader', use: ["css-loader?sourceMap", "postcss-loader?sourceMap", "sass-loader"] }),
					sass: extractCSS.extract({ fallback: 'vue-style-loader', use: ["css-loader", "postcss-loader", "sass-loader"] })
				}
			}
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules\/(?!jumei\-sdk)/
		},
		{
			test: /\.css$/,
			loader: extractCSS.extract({ fallback: 'style-loader', use: ["css-loader", "postcss-loader"] })
		},
		{
			test: /\.scss$/,
			loader: extractCSS.extract({ fallback: 'style-loader', use: ["css-loader", "postcss-loader", "sass-loader"] })
		},
		]
	},
	plugins: [
		extractCSS
	],
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	devtool: '#source-map'
}
