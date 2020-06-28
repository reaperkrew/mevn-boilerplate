const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoader = require('vue-loader');

module.exports = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, '../public/javascripts'),
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/javascripts/',
    filename: 'app.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader',
      ]
    },{
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader',
      ],
    },]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../stylesheets/app.css'
    }),
    new VueLoader.VueLoaderPlugin(),
  ]
};
