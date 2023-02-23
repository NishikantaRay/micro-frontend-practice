const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port:8082
    },
    plugins: [
        new ModuleFedrationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/index'
            },
            shared: {
                faker:{
                    singleton: true
                }

            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    
};