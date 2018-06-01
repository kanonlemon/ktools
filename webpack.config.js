const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'global.ts'),
  output: {
    filename: 'ktools.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader:  'awesome-typescript-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    extensions: ['.ts', '.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    publicPath: path.join('/dist/')
  }
};