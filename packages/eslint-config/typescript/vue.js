
module.exports = {
  extends: [
    './index.js',
    '../rules/vue',
  ].map(require.resolve),
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
    parser: '@typescript-eslint/parser',
  },
};
