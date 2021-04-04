const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   module: {
      rules: [
        { test: /\.hbs$/, loader: "handlebars-loader" },
        { test: /\.css$/i, use: ["style-loader", "css-loader"] }
      ]
    },
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
   },
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
   },
   plugins: [
      new HtmlWebPackPlugin({
          title: 'App Boilerplate',
          template: './templates/index.hbs'
      })
   ]
};