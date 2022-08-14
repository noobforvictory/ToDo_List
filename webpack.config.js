const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
  entry:{
   index:  './src/index.js',
   home: './src/home.js',
   today: './src/today.js',
   week: './src/week.js',
   proj: './src/proj.js',
   file: './src/file.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    
    static: './dist',

  },
  plugins: [

    new HtmlWebpackPlugin({
        
        template: './src/user.html',
        
        title: 'ToDo',

    }),

  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    caches:true,
  },
  optimization: {

    runtimeChunk: 'single',

  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },
      

    ],

  },
};