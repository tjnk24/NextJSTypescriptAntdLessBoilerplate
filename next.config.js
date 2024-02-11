const EslintWebpackPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const withLess = require('next-with-less');

const development = process.env.NODE_ENV !== 'production';

module.exports = withLess({
    output: 'standalone',
    reactStrictMode: true,
    poweredByHeader: false,
    transpilePackages: ['antd'],
    productionBrowserSourceMaps: true,
    lessLoaderOptions: {
        lessOptions: {
            javascriptEnabled: true,
        },
        sourceMap: true,
    },
    devIndicators: {
        buildActivity: false,
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

        if (development) {
            config.plugins.push(
                new ForkTsCheckerWebpackPlugin({
                    async: true,
                    typescript: {
                        diagnosticOptions: {
                            semantic: true,
                            syntactic: true,
                        },
                    },
                }),
                new EslintWebpackPlugin({
                    files: ['src/**/*.{ts,tsx,js,jsx}'],
                    emitError: true,
                    failOnError: false,
                    emitWarning: true,
                    failOnWarning: false,
                    cache: true,
                }),
            );
        }

        return config;
    },
});
