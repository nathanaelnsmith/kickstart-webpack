const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/pages/home.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              extensions: '.html',
              rootRelative: path.resolve(__dirname, 'src') + '/'
            }
          }
        ]
      }
    ]
  }
};
