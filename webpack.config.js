const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/main.tsx',
    './src/main.css',
  ], output: {
    filename: './dist/app.js',
    path: path.resolve(__dirname, ''),
  }, resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      _src: path.resolve(__dirname),
    }
  }, module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader'
        }
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'app.css',
              outputPath: './dist'
            }
          }, {
            loader: 'extract-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader'
          }
        ],
      },
    ]
  }
};
