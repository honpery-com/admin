/**
 * webpack common config file.
 */
const helpers = require('../helpers/');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HWP = require('html-webpack-plugin');

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
            { test: /\.ts$/, loader: 'awesome-typescript-loader' },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },

    plugins: [
        // awesome-typescript.
        new CheckerPlugin(),

        // html webpack plugin config.
        new HWP({
            filename: 'index.html',
            template: helpers.root('src/index.html')
        })

    ]
};