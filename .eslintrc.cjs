module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
 
  devServer: {
    client: {
      overlay: false,  // disable full screen overlay

      // You can configure more specifically:
      // overlay: {
      //  errors: true,
      //  warnings: false,
      //  runtimeErrors: true,
      //}
    }  
   },

  webpack: function (config, _) {
    config.devServer = {
        overlay: {
            warnings: true,
            errors: true
        }
    }
    return config
}
}
