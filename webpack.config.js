const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const watchMode = argv.liveReload || false;
  const modeEnv = argv.mode || 'development';
  const isProd = modeEnv === 'production';

  const optimizations = {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [],
  };

  if (isProd) {
    optimizations.minimizer.push(new UglifyJsPlugin());
  }

  return {
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 4200,
      watchContentBase: true,
      progress: true,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.sass'],
    },
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(s?)css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
              },
            },

            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          type: 'asset',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/html/template.html',
      }),
    ],
    entry: {
      main: './src/index.js',
    },
    output: {
      filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
    performance: {
      hints: false,
    },
    optimization: optimizations,
  };
};
