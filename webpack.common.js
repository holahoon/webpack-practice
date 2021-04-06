const path = require('path');

module.exports = {
  entry: {
    main: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.html$/, // any file ending with .html
        use: ['html-loader'], // minifies html
      },
      {
        test: /\.ts$/, // looks for files with .ts
        include: [path.resolve(__dirname, 'src')], // only test in this path
        use: 'ts-loader', // then, use ts-loader to convert to JS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'], // extensions for webpack to resolve
  },
};

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   devtool: 'eval-source-map', // eval is better for development. For production: just use source-map
//   entry: './src/index.ts',
//   output: {
//     // publicPath: 'public',
//     filename: 'bundle.[contenthash].js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   resolve: {
//     extensions: ['.ts', '.js'], // extensions for webpack to resolve
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/, // test to if file ends with .ts
//         include: [path.resolve(__dirname, 'src')], // only use this rule to search for .ts files
//         use: 'ts-loader',
//       },
//     ],
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       template: 'public/index.html',
//     }),
//   ],
// };
