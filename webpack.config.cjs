const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'appComponent.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader', "postcss-loader", miniCssExtractPlugin.loader]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },{
                test: /\.pug$/,
                use: ['pug-loader']
            }
        ]
    },
    resolve: {
        fallback: {
            fs: false
        },
        alias:{
            tailwindcss: path.resolve(__dirname, "tailwind.config.js")
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        open: true,
        port: 2020,
        historyApiFallback: true,
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        new miniCssExtractPlugin()
    ]
}