/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins([nextTranslate], nextConfig);
