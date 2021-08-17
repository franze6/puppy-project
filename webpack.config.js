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
      // Чанки для нашего приложения. Все наши npm-пакеты вынесем в отдельный файл с определенным хешем, чтобы клиент каждый раз при изменениях не выкачивал все по-новой
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
      historyApiFallback: true, // Не забудьте про этот параметр, ибо со значением false WDS будет «прямолинейно» обрабатывать ссылки для React Router'а. Т.е. он будет по путь->директория искать index.html, а он у нас один и в корне.
    },
    resolve: {
      extensions: ['.js', '.jsx', '.sass'],
    },
    module: {
      rules: [
        {
          test: /\.js(x?)$/, // сопоставляет файлы .js, .ts, и .tsx
          loader: 'babel-loader', // использует для указанных типов файлов загрузчик babel-loader (ts-loader не требуется).
          exclude: /node_modules/,
        },
        {
          test: /\.sass$/, // сопоставляет только файлы .css (т.е. не .scss и др.)
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
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          type: 'asset',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/html/template.html', // Скармливаем наш HTML-темплейт
      }),
    ],
    entry: {
      main: './src/index.js', // Энтрипоинт-файл, с которого и начнется наша сборка
    },
    output: {
      filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js', // небольшое условие, т.к. WDS не будет работать с chunkhash
      path: path.resolve(__dirname, 'build'), // Весь наш результат складываем в папку dist
      publicPath: '/',
    },
    performance: {
      hints: false,
    },
    optimization: optimizations,
  };
};
