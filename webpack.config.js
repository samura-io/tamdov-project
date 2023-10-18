const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/pages/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 8080,
        hot: true,
        compress: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                  },
                  'postcss-loader']
            }, 
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|json|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name].[contenthash][ext]'
                  }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/content.json', to: 'content.json' },
                { from: 'src/images', to: 'images'}
            ],
          }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
    performance : {
        hints : false
    }        
};