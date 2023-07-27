const path = require('path');


module.exports = {

    entry: path.resolve('./src/client.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve('./public')
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { target: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}