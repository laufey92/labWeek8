const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
 entry: './src/client/index.js',
 output: {
 	filename: 'main.js',
 	path: path.resolve(__dirname, 'dist')
 },
 	plugins: [
 		new HtmlWebpackPlugin({
 		title: 'Greeting page'
 	}),
 
 	new CleanWebpackPlugin(
 		["dist"]) //array af objectum inn i moppuni dist
	]
}
