const webpack = require('webpack');
const webpackConfig = require('./webpack-prod.conf.js');

webpack(webpackConfig, (err, stats) => {
    console.log(err);
    console.log(stats);
});
