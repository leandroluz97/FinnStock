// eslint-disable-next-line no-undef
module.exports = {
    env: { browser: true, es2021: true },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh', 'prettier'],

    rules: {
        'react-refresh/only-export-components': 'warn',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-fragments': 0,
        'import/no-unresolved': [2, { caseSensitive: false }],
    },
};
