var webpack = require('webpack');
var glob = require('glob');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')),
  "process.env": { 
     NODE_ENV: JSON.stringify("production") 
   }
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var getEntry = function () {
    var entry = {};
    glob.sync('./src/**/*.jsx').forEach(function (name) {
        if(name.indexOf('/components/') < 0){
          var n = name.slice(6, name.length - 4);
          entry[n] = name;
        }
    });
    // console.log(entry);
    // {
    //   main:  './src/index.jsx',
    //   other: './src/other.jsx',
    //   button: './src/button.jsx',
    //   dialog: './src/dialog.jsx',
    //   select: './src/select.jsx',
    //   datepicker: './src/datepicker.jsx',
    //   table: './src/table.jsx',
    //   tablemock: './src/tablemock.jsx'
    // }
    return entry;
};
module.exports = {
  cache: true,
  entry: getEntry(),
  output: {
    path: 'public/build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }},
      {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }},
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass!styl"
      }
    ]
  },
  plugins: [
    definePlugin,
    commonsPlugin
  ]
};