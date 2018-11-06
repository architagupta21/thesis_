const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const figlet = require('figlet');
const chalk = require('chalk');
const MinifyPlugin = require('babel-minify-webpack-plugin');

function showMessage(chalkMessage) {
    figlet('UQx  /  UQ2U', (err, data) => {
        if (err) {
            console.log('UQx  /  UQ2U');
            return;
        }
        console.log(data);
        console.log(
            chalk.blue(`${chalkMessage} - UQx/CDD Learning Tools Team`)
        );
    });
}

module.exports = (env, argv) => {
    let chalkMessage = 'Happy Coding! 😄';
    if (argv.mode === 'production')
        chalkMessage = '🎉  Woo! ready for production 🎉 ';

    showMessage(chalkMessage);

    return {
        mode: argv.mode,
        entry: {
            bundle: './src/index.js',
        },
        output: {
            filename: '[name].js',
            path: `${__dirname}/public/dist`,
        },
        plugins: [
            new ProgressBarPlugin(),

            // Automatically load modules instead of having to import or require them everywhere.
            new webpack.ProvidePlugin({
                // jQuery : 'jquery',
                // $ : 'jquery',
                // jquery : 'jquery',
                _: 'lodash',
            }),

            new MinifyPlugin(
                {},
                {
                    // exclude: /node_modules/
                }
            ),

            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:80/',
                files: ['./public/**/*'],
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                        },
                        { loader: 'sass-loader' },
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path][name].[ext]',
                                publicPath: 'assets/',
                            },
                        },
                    ],
                },
            ],
        },
    };
};
