// webpack配置文件公共部分
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config = {
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(path.resolve(), './dist'), // 打包后的目录
    filename: 'bundle.js', // 打包后的文件名称
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
    alias: {
      '@pages': path.resolve(path.resolve(), './src/pages/'),
      '@components': path.resolve(path.resolve(), './src/components/'),
      '@static': path.resolve(path.resolve(), './src/static/'),
      '@mocker': path.resolve(path.resolve(), './src/mocker/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.png/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // html模板路径
      template: './src/index.html',
      inject: 'body',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};

export default config;
