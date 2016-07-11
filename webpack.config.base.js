import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  module: {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    root: path.join(__dirname, 'app'),
    extensions: ['', '.js', '.jsx', '.json', '.css'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  // noInfo: true,
  plugins: [
    new CopyWebpackPlugin([
      { from: 'assets' },
    ]),
  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ]
};
