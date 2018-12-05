var path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, "output"),
		filename: "bundle.js",
	},
	devServer: {
		port: 8080,
		historyApiFallback: true,
		contentBase: path.join(__dirname, "output"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: path.join(__dirname, "node_modules"),
				loader: "babel-loader",
				options: {
		          presets: ["react","es2015"]
		        },
			},
		]
	},
	mode: "development",
}