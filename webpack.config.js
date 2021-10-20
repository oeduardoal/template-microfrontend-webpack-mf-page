const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { webpack } = require("@oeduardoal/microfrontend-config");
const deps = require("./package.json").dependencies;

/** @type { import('webpack').Configuration } */
module.exports = {
  ...webpack,
  output: {
    publicPath: "auto",
    chunkFilename: "[id].[contenthash].js",
  },
  plugins: [
    ...webpack.plugins,
    new ModuleFederationPlugin({
      name: "account",
      filename: "remoteEntry.js",
      exposes: {
        "./Account": "./src/account",
      },
      shared: deps,
    }),
  ],
};
