module.exports = {
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
      },
    ],
  ],
  presets: [['@babel/preset-env', { modules: false }]],
  env: { test: { presets: [['@babel/preset-env']] } },
};
