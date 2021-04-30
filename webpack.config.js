const path = require('path');
module.exports = {
    mode: process.env.NODE_ENV === 'production'
        ? 'production'
        : 'development',
    entry: './server/index.js',
    output: {
        path: path.resolve('server-build'),
        filename: 'index[hash].js'
    },

    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                resolve: {
                    extensions: ['.js', '.jsx', '.css']
                },
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localsConvention: 'camelCase',
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },

};
