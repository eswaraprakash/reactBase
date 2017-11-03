//webpack.config.js
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
};
module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    // Loaders configuration
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            // LESS and CSS loader
            // Files will get handled by less loader and then passed to the extract text plugin
            // which will write it to the file we defined above
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            // File loader for image assets -> ADDED IN THIS STEP
            // We'll add only image extensions, but you can things like svgs, fonts and videos
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    // Enable importing JS files without specifying their's extenstion
    //
    // So we can write:
    // import MyComponent from './my-component';
    //
    // Instead of:
    // import MyComponent from './my-component.jsx';
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 3000,
        contentBase: paths.SRC,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'),
    ]
};
