module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks'
  ],
  extends: [
    'standard',
    'standard-jsx',
    'standard-react'
  ],
  rules: {
    // next 2 lines: React 17's new JSX transform doesn't require `React`
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // HACK: must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {
      // HACK: functions will be hoisted
      functions: false
    }],
    // HACK: typescript has its own undef rule
    'no-undef': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  }
}
