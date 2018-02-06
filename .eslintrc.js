module.exports = {
  extends: ['standard', 'prettier', 'prettier/standard'],
  env: {
    node: true
  },
  rules: {
    'prettier/prettier': 'error'
  },
  plugins: ['prettier', 'standard']
}
