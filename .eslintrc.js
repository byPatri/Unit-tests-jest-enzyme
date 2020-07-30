module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:jest/recommended',
        '@synergycodes/eslint-config'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react-hooks',
        'import'
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 7,
        ecmaFeatures: {
            modules: true
        }
    },

    settings: {
        react: {
            pragma: 'React',
            version: '16.13'
        }
    },
    env: {
        browser: true,
        node: true,
        amd: true,
        es6: true
    },
    rules: {
        eqeqeq: [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        'arrow-parens': 'warn',
        'object-shorthand': ['error'],
        quotes: [1, 'single'],
        'jsx-quotes': ['warn', 'prefer-single'],
        'linebreak-style': 0,
        'newline-per-chained-call': 'off',
        'react/prop-types': 0,
        'no-param-reassign': 'warn',
        'no-console': 'warn',
        'no-magic-numbers': 'off',
        'no-multiple-empty-lines': [1, { max: 1 }],
        'no-multi-spaces': 2,
        'one-var': ['error', 'never'],
        'no-constant-condition': 2,
        'space-in-parens': [1, 'never'],
        'operator-linebreak': [
            'error',
            'before'
        ],
        'max-len': [
            'error',
            {
                code: 120,
                ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
                ignoreUrls: true
            }
        ],
        'function-paren-newline': [
            'error',
            'multiline-arguments'
        ],

        'import/no-duplicates': 'warn',
        'import/default': 2,
        'import/order': ['warn',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal'
                ],
                'newlines-between': 'always'
            }
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.ts*',
                    '**/test/**'
                ]
            }
        ],

        '@typescript-eslint/interface-name-prefix': [
            'error',
            {
                prefixWithI: 'always',
                allowUnderscorePrefix: false
            }
        ],
        '@typescript-eslint/indent': [2,
            4,
            {
                SwitchCase: 0
            }
        ],
        '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],

        'react/self-closing-comp': 2,
        'react/jsx-tag-spacing': 1,
        'object-curly-spacing': [1, 'always'],
        curly: 'error',
        'brace-style': ['error', '1tbs', { allowSingleLine: false }],
        'space-before-blocks': [1, 'always'],
        'space-infix-ops': 1,
        'space-unary-ops': [1, { words: true, nonwords: false }],
        'keyword-spacing': [1, { before: true, after: true }]
    }
};
