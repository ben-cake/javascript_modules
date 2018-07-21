var path = require('path'); 
var webpack = require('webpack');

module.exports = { 
   entry: './src/index.js', 
   module: { 
    rules: [
      {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
              presets: ['es2015']
          }
      }
     ]
   }, 
   resolve: { 
     extensions: [ '.tsx', '.ts', '.js' ] 
   }, 
   output: { 
     filename: 'app.js', 
     path: path.resolve(__dirname, 'public') 
   } 
};
