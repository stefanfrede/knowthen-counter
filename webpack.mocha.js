const path = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

module.exports = merge([
  parts.devServer(),
  parts.page({
    title: 'Mocha Tests',
    entry: {
      tests: path.join(__dirname, 'tests'),
    },
  }),
]);
