const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true,
        port: 8000,
    },
    entry: {
        build: "./src/build.js" // Ponto de entrada
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpilar arquivos .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Usar o babel-loader para transpilar JavaScript
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/, // Processar arquivos .css
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader', // Usar postcss-loader para otimizar CSS
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('cssnano')({
                                        preset: 'default',
                                    })
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css' // Nome do arquivo CSS de saída
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            '...', // Para manter os minimizadores padrão do Webpack (como TerserPlugin para JS)
            new CssMinimizerPlugin()
        ],
    },
    mode: 'production' // Certifique-se de que o modo de produção está definido
};
