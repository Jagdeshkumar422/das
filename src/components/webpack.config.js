// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/lucide-react/ // 👈 Exclude lucide-react
        ],
      },
    ],
  },
};
