const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { webpack } = require("@oeduardoal/microfrontend-config");

/** @type { import('webpack').Configuration } */
module.exports = {
  ...webpack,
  output: {
    publicPath: "auto",
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
