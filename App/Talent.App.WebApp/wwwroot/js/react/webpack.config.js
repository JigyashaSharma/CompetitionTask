const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
module.exports = (env) => {
    const currentEnv = env.NODE_ENV || 'development';
    const envFile = `.env.${currentEnv}`;

    dotenv.config({ path: envFile });
    return {
        context: __dirname,
        entry: {
            homePage: './ReactScripts/Home.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            sourceMapFilename: '[filename].map',  // Explicitly define the source map file name
        },
        devtool: 'source-map', // or 'source-map'
        //watch: true,
        mode: 'development',
        optimization: {
            minimize: false,  // Disable minification
            splitChunks: false,  // Disable chunk splitting (if not needed)
            runtimeChunk: false, // Disable runtime chunk creation
            concatenateModules: false, // Disable module concatenation
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'), // Serve static files from the 'dist' folder inside wwwroot
            },
            port: 8080, // Port for the React dev server
            hot: true, // Enable Hot Module Replacement (HMR)
            open: true, // Automatically open the browser
            historyApiFallback: true, // Support client-side routing
        },
        cache: false,
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules\/(?!react|react-dom)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            sourceMaps: true // Explicitly enable source maps for Babel
                        }
                    }
                },
                {
                    test: /\.module\.css$/,  // Target CSS files with .module.css extension
                    use: [
                        'style-loader',  // Inject styles into DOM
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,  // Enable CSS Modules
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,  // Regular CSS files
                    exclude: /\.module\.css$/,  // Exclude .module.css files
                    use: ['style-loader', 'css-loader'],  // Apply regular CSS without modules
                },
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                "process": "process/browser"
            },
            fallback: {
                "util": require.resolve("util/"),
                "process": require.resolve("process/browser")
            }
        },
        plugins: [
            new NodePolyfillPlugin(),
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
            new webpack.DefinePlugin({
                'process.env.REACT_APP_IDENTITY_API_URL': JSON.stringify(process.env.REACT_APP_IDENTITY_API_URL),
                'process.env.REACT_APP_LISTING_API_URL': JSON.stringify(process.env.REACT_APP_LISTING_API_URL),
                'process.env.REACT_APP_PROFILE_API_URL': JSON.stringify(process.env.REACT_APP_PROFILE_API_URL),
                'process.env.REACT_APP_ENV': JSON.stringify(process.env.REACT_APP_ENV),
            }),
        ]
    };
};
