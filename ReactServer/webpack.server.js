const path = require('path');


module.exports = {
    target: 'node',

    entry: path.resolve('./src/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve('./build')
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