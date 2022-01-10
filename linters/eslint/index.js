module.exports = {
    plugins: ['rxjs', 'unused-imports', 'jsdoc'],
    env: {
        browser: true,
        es2020: true,
    },
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                "createDefaultProgram": true
            },
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@angular-eslint/all',
                'plugin:prettier/recommended'
            ],
            rules: {
                '@angular-eslint/no-host-metadata-property': 'off',
                '@angular-eslint/use-injectable-provided-in': 'off',
                '@angular-eslint/use-component-view-encapsulation': 'off',
                '@angular-eslint/no-forward-ref': 'off',
                '@angular-eslint/no-output-native': 'off',
                '@angular-eslint/template/cyclomatic-complexity': 'off',

                'no-var': 'error',
                'no-console': 'error',
                '@typescript-eslint/explicit-function-return-type': "error",
                '@typescript-eslint/no-unused-vars': 'off',
                'unused-imports/no-unused-imports': 'error',
                'unused-imports/no-unused-vars': ['error', {vars: 'all', args: 'none'}],

                '@typescript-eslint/array-type': [
                    'error',
                    {
                        default: 'array-simple',
                    },
                ],
                quotes: [
                    'error',
                    'single',
                    {
                        avoidEscape: true,
                    },
                ],
                'max-len': [
                    'error',
                    {
                        code: 160,
                        ignoreUrls: true,
                        ignoreComments: true,
                        ignorePattern: '^import |^export +(.*?)',
                        ignoreRegExpLiterals: true,
                    },
                ],

                'grouped-accessor-pairs': ['error', 'setBeforeGet'],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'typeLike',
                        format: ['PascalCase'],
                    },
                    {
                        selector: 'property',
                        modifiers: ['private'],
                        format: ['camelCase'],
                        leadingUnderscore: 'require',
                    },
                    {
                        selector: 'variable',
                        format: ['camelCase', 'UPPER_CASE'],
                        leadingUnderscore: 'allow',
                    },
                    {
                        selector: 'classMethod',
                        format: ['camelCase']
                    },
                    {
                        selector: 'classProperty',
                        format: ['camelCase'],
                        leadingUnderscore: 'allow'
                    }
                ],
                '@typescript-eslint/member-ordering': [
                    'error',
                    {
                        default: [
                            // Index signature
                            'signature',

                            // Fields
                            'private-static-field',
                            'protected-static-field',
                            'public-static-field',

                            'private-instance-field',
                            'protected-instance-field',
                            'public-instance-field',

                            'private-decorated-field',
                            'protected-decorated-field',
                            'public-decorated-field',

                            'private-abstract-field',
                            'protected-abstract-field',
                            'public-abstract-field',

                            'private-constructor',
                            'protected-constructor',
                            'public-constructor',

                            'public-decorated-method',
                            'protected-decorated-method',
                            'private-decorated-method',

                            'public-instance-method',
                            'protected-instance-method',
                            'private-instance-method',

                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',

                            'public-abstract-method',
                            'protected-abstract-method',
                            'private-abstract-method',
                        ],
                    },
                ],

                'jsdoc/require-jsdoc': [
                    'error', {
                        publicOnly: true,
                        checkConstructors: false,
                        checkGetters: true,
                        checkSetters: true,
                        contexts: [
                            'ClassDeclaration',
                            'ClassProperty:not([accessibility=\"private\"]):not([override=true]) > FunctionExpression',
                            'MethodDefinition:not([accessibility=\"private\"]):not([override=true]) > FunctionExpression',
                            'FunctionDeclaration',
                            'inlineCommentBlock',
                            'TSInterfaceDeclaration',
                            'TSEnumDeclaration',
                            'TSTypeAliasDeclaration'
                        ]
                    }
                ]
            },
        },
        {
            files: ['*.ts'],
            rules: {
                'rxjs/no-async-subscribe': 'error',
                'rxjs/no-ignored-observable': 'error',
                'rxjs/no-nested-subscribe': 'error',
                'rxjs/no-unbound-methods': 'error',
                'rxjs/throw-error': 'error',
                'rxjs/no-subject-value': 'error',
                'rxjs/suffix-subjects': ['error', {suffix: '\\$'}],
                'rxjs/prefer-observer': 'error',
            },
        },
        {
            files: [
                '*.html'
            ],
            extends: [
                'plugin:@angular-eslint/template/recommended'
            ],
            rules: {}
        }
    ]
}

