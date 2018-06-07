var path = require('path');
module.exports = {
  entry: './script.old.js',
  output: {
   path:path.resolve(__dirname, 'dist'),
   filename:'script.old.js'
  }
};