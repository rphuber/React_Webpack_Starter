const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
	return {
		entry: './source/index.js',
		output: {
			path: resolve(__dirname, './build'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: resolve(__dirname, './source'),
					loader: 'babel-loader',
					options: {
						presets: ['react', ['es2015', { modules: false }]]
					}
				},
				{
					test: /\.scss$/,
					include: resolve(__dirname, './source'),
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[name]__[local]--[hasj:base64:5]'
							}
						},
						'sass-loader'
					]
				},
				{
					test: /\.html$/,
					include: resolve(__dirname, './source'),
					loader: 'html-loader'
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'source/index.html'
			})
		],
		devServer: {
			historyApiFallback: true,
			contentBase: resolve(__dirname, './build'),
			port: 8081
		}
	}
}
