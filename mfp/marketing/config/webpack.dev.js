const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode:'development',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        },
        Plugin:[
            new HtmlWebpackPlugin({
                template:'./public/index.html'
            })
        ]
    },
};

module.exports = merge(commonConfig,devConfig);