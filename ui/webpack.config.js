var webpack = require ('webpack');
var path = require('path');

var config = {
    entry : path.resolve(__dirname,'src/index.html'),
    output :{
        path:path.resolve(__dirname,'src/dist'),
        filename: 'bundle.js'
    },
    module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.resolve(__dirname,'src'),
        loader : 'babel'
      }
    ]
  }

};

module.exports = config