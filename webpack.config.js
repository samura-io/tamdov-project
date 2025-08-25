const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    return {
        entry: "./src/pages/index.js",
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
            watchFiles: ['src/**/*'],
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
                    test: /\.css$/i,
                    use: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                    ],
                },
                {
                    test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|json|otf)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/[name].[contenthash][ext]'
                    }
                },
                {
                    test: /\.scss$/i,
                    use: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    quietDeps: true
                                }
                            }
                        }
                    ],
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/content.json', to: 'content.json' },
                    { from: 'src/styles', to: 'styles' },
                    {
                        from: 'src/images',
                        to: 'images',
                        globOptions: {
                            ignore: ['*.png', '*.jpg', '*.gif', '*.svg'],
                        },
                    },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: 'styles/style.css',
            }),
            new CleanWebpackPlugin(),
        ],
        performance: {
            hints: false
        }
    };
};
