const path = require('path');

let config = {
  pages: ['Home/home.html']
}

let HtmlWebpackPlugin = require('html-webpack-plugin');
let htmlPages = (pages => {
  let htmlTemplates = []
  pages.forEach(page => {
    htmlTemplates.push(new HtmlWebpackPlugin({
      template: 'src/components/' + page
    }))
  })
  return htmlTemplates
})(config.pages)

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    ...htmlPages
  ],
  module: {
    rules: [{
        test: /\.html$/,
        use: [{
          loader: 'handlebars-loader',
          options: {
            extensions: '.html',
            rootRelative: path.resolve(__dirname, 'src') + '/'
          }
        }]
      },
      {
        test: /\.s(c|a)ss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader", // compiles Sass to CSS
          options: {
            includePaths: [path.resolve(__dirname, 'node_modules/kickstart-node/lib-core/sass')]
          }
        }]
      }
    ]
  }
};
