const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

// Variable definitions
const isDevelopment = process.env.NODE_ENV === 'development';
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
let envKeys = [];
if(env !== undefined) {
    envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
      }, {});
} 


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        libraryTarget: 'umd'
    },
    node: { global: true, fs: 'empty' },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        publicPath: '/',
        open: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.appSrc,
                loader: require.resolve('babel-loader'),
                options: {
                    // This is a feature of `babel-loader` for Webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel']
                }
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }, {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            }, {
                test: [/.css$|.scss$/],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                template: "./public/index.html",
                filename: "./index.html",
                title: 'Rose Global',
                favicon: './public/favicon.ico',
                inject: 'body',
                minify: {
                    removeComments: true,
                    collapseWhitespace: false
                }
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            }
        ),
        new CopyWebpackPlugin(
            [{
                    from: './src/images',
                    to: 'assets/images'
                }]
        ),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin(envKeys)
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    }
};