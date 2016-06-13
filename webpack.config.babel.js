import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const DEV_SERVER_PORT = 8080;

export default {
    devtool: 'eval',
    entry: [
        'babel-polyfill',
        'webpack/hot/dev-server',
        `webpack-dev-server/client?http://localhost:${DEV_SERVER_PORT}/`,
        './src/main.jsx',
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: [ 'react-hot', 'babel-loader' ],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.ejs.html',
        }),
        new HotModuleReplacementPlugin(),
    ],
}
