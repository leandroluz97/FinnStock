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
    plugins: ['react-refresh', 'prettier', 'import'],

    rules: {
        'react-refresh/only-export-components': 'warn',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-fragments': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'react/function-component-definition': 0,
        'arrow-body-style': 0,
        'import/extensions': 0,
        'no-param-reassign': 0,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'react/jsx-props-no-spreading': 0,
        'import/no-extraneous-dependencies': 0,
        'react/react-in-jsx-scope': 0,
        'typescript-eslint/no-unused-vars': 0,
    },
};
