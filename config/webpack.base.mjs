import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(path.resolve(), './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.mjs', '.js', '.json', ".ts", ".tsx"],
        alias: {
            '@pages': path.resolve(path.resolve(), './src/pages/'),
            '@components': path.resolve(path.resolve(), './src/components/'),
            '@static': path.resolve(path.resolve(), './src/static/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.png/,
                type: 'asset/inline'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ],
};

export default config;
