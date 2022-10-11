// const path = require('path');

// module.exports = {
//   entry: './js/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   mode: 'development'
// };

function _path(p) {
    return path.join(__dirname, p);
}

const path = require('path'),
    	webpack = require('webpack'),
    	TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, 'js'),
    entry: {
        main: ['./main.js'],
        login: ['./Login.js'],
        registration: ['./Registration.js']
    },
    output: {
        path: path.resolve(__dirname, './js/dist/'),
        filename: '[name].bundle.js',
        library: 'Toast',
    },
    resolve: {
        alias: {
            'inputmask.dependencyLib': _path('./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib'),
            'inputmask': _path('./node_modules/inputmask/dist/inputmask')
        }
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],

    devtool: 'source-map',
    watch: true,
    module: {
        rules: [{
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            // {
            //     test: /\.css$/i,
            //     use: ["css-loader"],
            //     options: {
            //       url: true,
            //       import: true,
            //     }
            //   }
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                // More information here https://webpack.js.org/guides/asset-modules/
                type: "asset",
            },
        ]
    },
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin()],
    },
};