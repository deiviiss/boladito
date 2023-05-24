module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': ['error', 2], // Indentación de 2 espacios para elementos JSX
    'react/jsx-indent-props': ['error', 4] // Indentación de 4 espacios para props en JSX
  }
}
