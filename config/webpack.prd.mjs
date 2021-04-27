// webpack配置文件生产环境部分
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import { merge } from 'webpack-merge';
import pkgCleanWebpackPlugin from 'clean-webpack-plugin';
const { CleanWebpackPlugin } = pkgCleanWebpackPlugin;
import pkgMerge from 'webpack-merge';
const { merge } = pkgMerge;
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import base from './webpack.base.mjs';
import webpack from 'webpack';

export default merge(base, {
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }],
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin(),
  ],
});
