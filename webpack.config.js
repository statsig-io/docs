const path = require('path');

module.exports = {
  // Adjust the entry point as needed for your project
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // Exclude all node_modules except @staticons/react so that its TS files are transpiled
        exclude: /node_modules\/(?!@staticons\/react)/,
        use: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}; 