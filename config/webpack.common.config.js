/**
 * webpack common config file.
 */
const helpers = require('../helpers/');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    entry: {
        main: helpers.root('src/main.ts'),
        vendor: helpers.root('src/vendor.ts'),
        polyfill: helpers.root('src/polyfill.ts')
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            {test: /\.html$/, loader: 'html-loader'}
        ],
        exprContextCritical: false
    },

    plugins: [
        // awesome-typescript.
        new CheckerPlugin(),

        // chuck plugin.
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfill'],
            minChunks: Infinity
        }),

        // html webpack plugin config.
        new HWP({
            filename: 'index.html',
            template: helpers.root('src/index.html'),
            chunksSortMode: 'auto'
        })

    ]
};