const path=require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports={
    mode: 'development',
    entry: './src/main/main.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: "images/[name][ext]",
    },
    devServer:{
        static: {
            directory: path.join(__dirname, "./"),
            publicPath: "/",
        },
        port: 8080,
        open: true,
        client: {
            overlay:{
                warnings: true,
                errors: true
            }
        },
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:"index.html"
        }),
        // new CopyWebpackPlugin({'patterns': [
        //     { from: './src/images', to: 'images' }
        // ]}),
    ],
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource',
            },
        ]
    }
}