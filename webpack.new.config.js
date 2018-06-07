var path = require('path');
module.exports = {
  entry: './script.new.js',
  output: {
   path:path.resolve(__dirname, 'dist'),
   filename:'script.new.js'
  }
};