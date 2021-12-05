const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const babelPresetEnv = require.resolve('@babel/preset-env')
const babelPresetReact = require.resolve('@babel/preset-react')
const babelPresetTypescript = require.resolve('@babel/preset-typescript')
module.exports = env => {
  return {
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, 'docs'),
      filename: 'index.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /nodeModules/,
          use: [{
            loader: 'babel-loader'
          }]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new MiniCssExtractPlugin()
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
    }
  }
}
