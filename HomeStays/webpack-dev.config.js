const webpack= require("webpack");
const {resolve}= require("path");
const merge= require("merge");
let config= require("./webpack.config");

config.devtool= 'source-map';

config.entry= merge(config.entry, ['webpack-hot-middleware/client?reload=true']);

config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports= config;