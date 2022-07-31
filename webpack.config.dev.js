const base = require('./webpack.config')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        example: './example.tsx',
    },
  
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html',
        })
        ,new webpack.HotModuleReplacementPlugin({}),
    ],
})