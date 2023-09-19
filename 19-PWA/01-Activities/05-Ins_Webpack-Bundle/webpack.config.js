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
      test: /\.css$/i,  //for anything that has a css extencion i want you to buldle all the files into one file 
      use: ['style-loader', 'css-loader'],
    },
  ],
},
};
