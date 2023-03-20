const LodashWebpackPlugin = require('lodash-webpack-plugin');
const withLess = require('next-with-less');

module.exports = withLess({
    reactStrictMode: true,
    lessLoaderOptions: {
        lessOptions: {
            javascriptEnabled: true,
        },
        sourceMap: true,
    },
    webpack: config => {
        config.plugins.push(
            new LodashWebpackPlugin({
                shorthands: true,
                cloning: true,
                currying: true,
                collections: true,
                coercions: true,
                flattening: true,
                paths: true,
            }),
        );

        return config;
    },
});
