module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'standard',
    'standard-jsx',
    'standard-react'
  ],
  rules: {
    // next 2 lines: React 17's new JSX transform doesn't require `React`
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
