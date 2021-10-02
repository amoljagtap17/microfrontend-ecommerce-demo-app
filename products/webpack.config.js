const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        // './ProductsIndex': './src/index',
        './ProductsIndex': './src/bootstrap',
      },
      // shared: ['faker'],
      shared: {
        faker: {
          singleton: true, // load only one copy of faker no matter what. If there are difference in major versions different copies would be loaded.
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
