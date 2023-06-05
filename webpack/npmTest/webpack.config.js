const path = require('path'); // 운영체제별로 상이한 경로 문법을 해결해 절대 경로로 반환하는 역할을 합니다.
const webpack = require('webpack');
const childProcess = require('child_process');
const htmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

    entry: {
        main: path.resolve('./src/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    module: {
        // 여기서부터 로더를 추가할 수 있습니다.
        rules: [
            // {
            //     test: path.resolve('./src/app.js'),
            //     use: [
            //         path.resolve('./myLoader.js')
            //     ]
            // }
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `
            Commit Version : ${childProcess.execSync('git rev-parse --short HEAD')}
            Committer : ${childProcess.execSync('git config user.name')}
            Commit Date : 마지막 빌드 시간은 ${new Date().toLocaleString()} 입니다.
            `
        }),
        new webpack.DefinePlugin({
            dev: JSON.stringify(process.env.DEV_API),
            pro: JSON.stringify(process.env.PRO_API),
        }),
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}