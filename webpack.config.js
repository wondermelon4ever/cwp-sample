var webpack = require('webpack');

module.exports = {
  //entry: './src/index.js',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname+'/public/',
    filename: 'bundle.js'
  },

  devtool: "source-map", // 디버깅을 위해 빌드 결과물에 소스맵 추가
  resolve: {
    extensions: [".ts", ".tsx", '.js']
  },
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 4000,
    contentBase: __dirname+'/public/',
  },

  module: {
    rules: [
      //{
      //  test: /\.js$/,
      //  loader: 'react-hot-loader',
        //loaders: ['react-hot-loader','babel-loader?' + JSON.stringify({
        //  cacheDirectory: true,
        //  presets: ['es2015', 'react']
        //})],
        //exclude: /node_modules/
        //query: {
        //  cacheDirectory: true,
        //  presets: ['es2015', 'react']
        //}
      //},
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['@babel/env','@babel/react']
        }
      },
      {
        test: /\.css$/i,
        include: /node_modules/,
        // loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        use: [
          'style-loader', 
          { 
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      },
      {
        // .ts나 .tsx 확장자를 ts-loader가 트랜스파일
        test: /\.tsx?$/, loader: "ts-loader"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};