// tslint:disable:no-var-requires
import { CheckerPlugin } from 'awesome-typescript-loader';
import * as extractTextPlugin from 'extract-text-webpack-plugin';
import * as hwp from 'html-webpack-plugin';
import * as path from 'path';
import { Configuration, HotModuleReplacementPlugin, optimize } from 'webpack';

const Root = (...paths: string[]) => path.join(__dirname, ...paths);

const isDev = process.env.NODE_ENV === 'dev';

const Base: Configuration = {
    entry: {
        app: Root('src/app'),
    },

    output: {
        path: Root('../dist/admin'),
        filename: '[name].[hash:8].js',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
            },

            {
                test: /\.html$/,
                loader: 'html-loader',
            },

            {
                test: /\.scss$/,
                include: Root('./src'),
                use: ['raw-loader', 'sass-loader'],
            },

            {
                test: /\.scss$/,
                exclude: Root('./src'),
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
        ],
    },

    devtool: isDev ? 'cheap-module-source-map' : 'source-map',

    plugins: [
        new CheckerPlugin(),

        new HotModuleReplacementPlugin(),

        new hwp({
            title: 'hops',
            filename: 'index.html',
            template: Root('./src/index.html'),
        }),

        new extractTextPlugin('style.css'),
    ],

    devServer: {
        contentBase: Root('../dist/admin'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
        port: 9100,
    },
};

export default [Base];
