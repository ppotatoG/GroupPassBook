/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config, {webpack}) {
        config.resolve = {
            alias: {
                '@components': path.resolve(__dirname, './components'),
                '@styles': path.resolve(__dirname, './styles'),
            },
            ...config.resolve
        };
        return config;
    }
}

module.exports = nextConfig