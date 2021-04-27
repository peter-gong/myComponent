// webpack配置文件开发环境部分
// import { merge } from 'webpack-merge';
import pkgMerge from 'webpack-merge';
const { merge } = pkgMerge;
import base from './webpack.base.mjs';
import path from 'path';
import webpack from 'webpack';
import apiMocker from 'mocker-api';

export default merge(base, {
  mode: 'development', // 开发模式
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(path.resolve(), '../public/'),
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'https://api.github.com/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
      // '/test': {
      //   target: 'http://localhost:8080/',
      //   changeOrigin: true,
      // },
    },
    before(app) {
      apiMocker(app, path.resolve('./mocker/index.js'), {
        proxy: {
          '/repos/(.*)': 'https://api.github.com/',
          // '/test': 'http://localhost:8080/',
        },
        changeHost: true,
      });
    },
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});
