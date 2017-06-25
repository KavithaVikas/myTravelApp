var webpack = require ('webpack');
var path = require('path');

var config = {
    entry : path.resolve(__dirname,'src/index.js'),
    output :{
        path:path.resolve(__dirname,'src/dist'),
        filename: 'bundle.js'
    },
    module : {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']}
    ]
  }

};

module.exports = config