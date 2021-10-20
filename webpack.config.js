const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { webpack, urls } = require("@oeduardoal/microfrontend-config");

const env = process.env.ENV || "dev";

const { url: publicPath, port } = urls[env].account;

/** @type { import('webpack').Configuration } */
module.exports = {
  ...webpack,
  output: {
    publicPath,
  },
  devServer: {
    port,
  },
  plugins: [
    ...webpack.plugins,
    new ModuleFederationPlugin({
      name: "account",
      filename: "remoteEntry.js",
      exposes: {
        "./main": "./src/app",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};
