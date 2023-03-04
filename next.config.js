const withLess = require('next-with-less');

module.exports = withLess({
    reactStrictMode: true,
    lessLoaderOptions: {
        lessOptions: {
            javascriptEnabled: true,
        },
        sourceMap: true,
    },
});
