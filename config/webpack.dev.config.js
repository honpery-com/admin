/**
 * webpack dev config file.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const helpers = require('../helpers');
const {HotModuleReplacementPlugin} = require('webpack');
const config = require('./app.config.json');


module.exports = merge(common, {

    output: {
        path: helpers.root('build'),
        filename: '[name].bundle.js'
    },

    devtool: 'source-map',

    plugins: [
        new HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: helpers.root('build'),
        inline: true,
        hot: true,
        color: true,
        compress: true,
        host: '0.0.0.0',
        port: config.dev.port,
        historyApiFallback: true
    }

});