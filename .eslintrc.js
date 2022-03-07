module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'codex/ts',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  ignorePatterns: [ 'dist/**' ],
  globals: {
    'describe': true,
    'test': true,
    'expect': true,
    'beforeEach': true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-magic-numbers': 0,
    '@typescript-eslint/no-var-requires': 0,
    'space-before-function-paren': 0,
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true } ],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    } ],
  },
};