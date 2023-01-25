module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2020: true,
        commonjs: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'react-app',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],

            parserOptions: {
                //   project: ['./tsconfig.json'], // Specify it only for TypeScript files
            },
        },
    ],

    parserOptions: {
        // project: './tsconfig.json',
        tsconfigRootDir: './',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'import',
    ],
    extends: [],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'react/jsx-filename-extension': [0, { allow: 'as-needed' }],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'no-console': ['error'],
    },
};
