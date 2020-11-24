const path = require('path')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const HtmlWebpackPlagin = require('html-webpack-plugin');
//const CopyPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const config = {
  entry: path.resolve(__dirname,"src","index.js"),
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    inline: true, 
    contentBase: path.join("dist"),
  },
  module: {
    rules: [
      /*{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },*/
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/, 
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: './',
        },
      },
      /*{
        test: /\.html$/, 
        loader: 'html-loader',
      },*/
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[path][name].[ext]',
            publicPath: './',
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({filename: 'main.css'}),
    /*new HtmlWebpackPlagin({
      template: 'src/index.html',
      inject: true,
      pablicPath: ""
    }),*/
    /*new CopyPlugin({
      patterns: [
        { 
          from: 'src/images',
          to: 'images'
        },
      ],
    })*/
  ]
};

module.exports = config;