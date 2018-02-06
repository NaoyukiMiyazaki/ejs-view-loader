const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    index: './index.js',
  },
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: [
          {
            loader: require.resolve('..'),
            options: {
              watch: `${__dirname}/**/*.ejs`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.ejs`,
      filename: `${__dirname}/index.html`,
      inject: false,
    })
  ]
}
