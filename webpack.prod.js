const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js',
  },
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
