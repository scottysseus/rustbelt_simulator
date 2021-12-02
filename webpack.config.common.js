const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const babelPresetEnv = require.resolve('@babel/preset-env');
const babelPresetReact = require.resolve('@babel/preset-react');

module.exports = env => {

    return {
        output: {
            path: path.join(__dirname, 'docs'),
            filename: 'index.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /nodeModules/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                babelPresetEnv,
                                babelPresetReact
                            ]
                        }
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
            new MiniCssExtractPlugin(),
        ],
    }
}