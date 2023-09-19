const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',//to conver new versions of JS into old versions of JS this process is call "tranpile" this is due to browser compability so it can work in all the browsers
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
  ],
 },
};
