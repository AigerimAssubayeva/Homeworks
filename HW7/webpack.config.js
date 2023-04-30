const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.default = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        clean: true,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.ts$/,
            //     use: 'ts-loader',
            //     //include: [path.resolve(__dirname,'src')]
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg)$/,
                use: 'file-loader'
            },
        ],
    },
    // resolve: {
    //     extensions: ['.ts'],
    // },
    plugins: [
        new HtmlWebpackPlugin({ template: 'dist/index.html'}),
    ],      
};