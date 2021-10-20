const { urls } = require("@oeduardoal/microfrontend-config");
const webpack = require("./webpack.config");

const env = process.env.ENV || "dev";

const { account } = urls[env];

/** @type { import('webpack').Configuration } */
module.exports = {
  ...webpack,
  output: {
    publicPath: account.url,
  },
  devServer: {
    port: account.port,
  },
};
