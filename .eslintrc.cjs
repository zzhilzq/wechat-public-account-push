module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  globals: {
    expect: 'readonly',
    test: 'readonly',
    describe: 'readonly'
  },
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'max-len': 0,
    'semi': [2, 'never'],
    'comma-dangle': [2, 'only-multiline'],
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'no-await-in-loop': 0
  },
};
