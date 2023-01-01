/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        quotes            : ['error', 'single'],
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': 0,
        '@typescript-eslint/indent': ['error', 4],
    },
};
