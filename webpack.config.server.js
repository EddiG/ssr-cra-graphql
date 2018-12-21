const path = require('path');
const nodeExternals = require('webpack-node-externals');
require("@babel/polyfill");

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '.', 'server.js')],
  output: {
    path: path.resolve(__dirname, '.', 'build/'),
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        exclude: [/\.js$/, /\.html$/, /\.json$/],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
          publicPath: '/',
          emitFile: false,
        },
      },
    ],
  },
};
