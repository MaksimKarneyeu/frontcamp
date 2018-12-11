const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    //using object as entry value we can define many entry points, but in my case enough only one entry point 
    entry: {
        "app": "./src/app.js"
    },
    output: {
        filename: "[name].js",      
        publicPath: '/dist/' // prod '/news/dist/'
    },
    plugins: [
        new MinifyPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.json$/,
                use: [
                    {
                        loader: "./src/utils/json-num-rem-loader.js"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    }
};