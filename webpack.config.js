var webpack = require('webpack');
var glob = require('glob');
var path = require("path");

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
    return entry;
};
//区分入口
var entry = process.env.NODE_TYPE === 'dingmobile'? './src/entry.js' : './src/weixin/entry.js';
var alias_js = process.env.NODE_TYPE === 'dingmobile'? '/src/components' : '/src/weixin/components';
var output_path = process.env.NODE_TYPE === 'dingmobile'? 'public/build' : 'public/buildweixin';
module.exports = {
  // context: __dirname + "/src/weixin",
  cache: true,
  entry: entry,
  output: {
    path: output_path,
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
      },
      {
      loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      }
    ]
  },
  resolve: {
    alias: {
      js: path.join(__dirname, alias_js)
    }
  },
  plugins: [
    definePlugin,
    commonsPlugin
  ]
};