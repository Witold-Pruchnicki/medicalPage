const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, './dist'),
    },
    watch: false,
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['autoprefixer']],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|jpe?g|gif|webp|awif|svg)$/i,
                loader: 'url-loader',
                options: {
                    name: 'images/[hash]-[name].[ext]',
                    publicPath: 'src',
                },
            },
            {
                test: /\.(png|jpg|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ],
};
