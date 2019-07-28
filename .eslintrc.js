// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
  },
  env: {
    browser: true,
  },
  extends: [
    
  ],
  // required to lint *.vue files
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'semi': [2, 'always']
    // allow debugger during development
    //'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
