const webpack= require("webpack");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let config= require("./webpack.config");    

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }
    )
)
config.plugins.push(
    new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        }
    )
)

config.plugins.push( 
    new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }
    )
)

module.exports= config;