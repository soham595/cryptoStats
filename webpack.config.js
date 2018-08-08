var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    output: {
        path: '/public',
        filename: 'js/bundle.js',
        publicPath: '/',
    },

    devtool: '#source-map',

    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000,
        historyApiFallback: true,
        hot: true
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};