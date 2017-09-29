const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.js',
  output: {
    filename: './build/server.js',
  },
  // resolve: {
  //   modules: ['client/src', 'node_modules'],
  // },
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
