import _globals from 'globals'
import tseslint from 'typescript-eslint'
import stylisticPlugin from '@stylistic/eslint-plugin'
import svelte from 'eslint-plugin-svelte'
import * as _import from 'eslint-plugin-import'
import n from 'eslint-plugin-n'
import promise from 'eslint-plugin-promise'

/**
 * @param {import('eslint').ESLint.Environment['globals']} globals
 */
export default function (globals = {
  ..._globals.browser,
  ..._globals.worker,
  ..._globals.serviceworker
}) {
  return tseslint.config(
    ...tseslint.configs.recommended,
    ...svelte.configs['flat/recommended'],
    {
      files: ['**/*.svelte', '**/*.ts', '**/*.js', '**/*.tsx', '**/*.jsx', '**/*.mjs', '**/*.cjs', '**/*.cts', '**/*.mts'],
      languageOptions: {
        globals,
        parserOptions: {
          projectService: true,
          extraFileExtensions: ['.svelte'],
          parser: tseslint.parser
        }
      },
      plugins: {
        '@stylistic': stylisticPlugin,
        '@stylistic/ts': stylisticPlugin,
        '@stylistic/js': stylisticPlugin,
        svelte,
        import: _import,
        n,
        // @ts-expect-error bad type definition
        promise
      },
      rules: {
        'no-var': 'warn',
        'object-shorthand': [
          'warn',
          'properties'
        ],
        'accessor-pairs': [
          'error',
          {
            setWithoutGet: true,
            enforceForClassMembers: true
          }
        ],
        'array-bracket-spacing': [
          'error',
          'never'
        ],
        'array-callback-return': [
          'error',
          {
            allowImplicit: false,
            checkForEach: false
          }
        ],
        'arrow-spacing': [
          'error',
          {
            before: true,
            after: true
          }
        ],
        'block-spacing': [
          'error',
          'always'
        ],
        'brace-style': [
          'error',
          '1tbs',
          {
            allowSingleLine: true
          }
        ],
        camelcase: [
          'error',
          {
            allow: [
              '^UNSAFE_'
            ],
            properties: 'never',
            ignoreGlobals: true
          }
        ],
        'comma-dangle': [
          'error',
          {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never'
          }
        ],
        'comma-spacing': [
          'error',
          {
            before: false,
            after: true
          }
        ],
        'comma-style': [
          'error',
          'last'
        ],
        'computed-property-spacing': [
          'error',
          'never',
          {
            enforceForClassMembers: true
          }
        ],
        'constructor-super': 'error',
        curly: [
          'error',
          'multi-line'
        ],
        'default-case-last': 'error',
        'dot-location': [
          'error',
          'property'
        ],
        'dot-notation': 'off',
        'eol-last': 'error',
        eqeqeq: [
          'error',
          'always',
          {
            null: 'ignore'
          }
        ],
        'func-call-spacing': [
          'error',
          'never'
        ],
        'generator-star-spacing': [
          'error',
          {
            before: true,
            after: true
          }
        ],
        indent: [
          'error',
          2,
          {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
              parameters: 1,
              body: 1
            },
            FunctionExpression: {
              parameters: 1,
              body: 1
            },
            CallExpression: {
              arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: [
              'TemplateLiteral *',
              'JSXElement',
              'JSXElement > *',
              'JSXAttribute',
              'JSXIdentifier',
              'JSXNamespacedName',
              'JSXMemberExpression',
              'JSXSpreadAttribute',
              'JSXExpressionContainer',
              'JSXOpeningElement',
              'JSXClosingElement',
              'JSXFragment',
              'JSXOpeningFragment',
              'JSXClosingFragment',
              'JSXText',
              'JSXEmptyExpression',
              'JSXSpreadChild'
            ],
            offsetTernaryExpressions: true
          }
        ],
        'key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true
          }
        ],
        'keyword-spacing': [
          'error',
          {
            before: true,
            after: true
          }
        ],
        'lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: true
          }
        ],
        'multiline-ternary': [
          'error',
          'always-multiline'
        ],
        'new-cap': [
          'error',
          {
            newIsCap: true,
            capIsNew: false,
            properties: true
          }
        ],
        'new-parens': 'error',
        'no-array-constructor': 'off',
        'no-async-promise-executor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': [
          'error',
          {
            checkLoops: false
          }
        ],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-useless-backreference': 'error',
        'no-empty': [
          'error',
          {
            allowEmptyCatch: true
          }
        ],
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': [
          'error',
          'functions'
        ],
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implied-eval': 'off',
        'no-import-assign': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-labels': [
          'error',
          {
            allowLoop: false,
            allowSwitch: false
          }
        ],
        'no-lone-blocks': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-prototype-builtins': 'error',
        'no-useless-catch': 'error',
        'no-mixed-operators': [
          'error',
          {
            groups: [
              [
                '==',
                '!=',
                '===',
                '!==',
                '>',
                '>=',
                '<',
                '<='
              ],
              [
                '&&',
                '||'
              ],
              [
                'in',
                'instanceof'
              ]
            ],
            allowSamePrecedence: true
          }
        ],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': [
          'error',
          {
            max: 1,
            maxBOF: 0,
            maxEOF: 0
          }
        ],
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-redeclare': 'off',
        'no-regex-spaces': 'error',
        'no-return-assign': [
          'error',
          'except-parens'
        ],
        'no-self-assign': [
          'error',
          {
            props: true
          }
        ],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-undef-init': 'off',
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': [
          'error',
          {
            defaultAssignment: false
          }
        ],
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'off',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'object-curly-newline': [
          'error',
          {
            multiline: true,
            consistent: true
          }
        ],
        'object-curly-spacing': [
          'error',
          'always'
        ],
        'object-property-newline': [
          'error',
          {
            allowMultiplePropertiesPerLine: true
          }
        ],
        'one-var': [
          'error',
          {
            initialized: 'never'
          }
        ],
        'operator-linebreak': [
          'error',
          'after',
          {
            overrides: {
              '?': 'before',
              ':': 'before',
              '|>': 'before'
            }
          }
        ],
        'padded-blocks': [
          'error',
          {
            blocks: 'never',
            switches: 'never',
            classes: 'never'
          }
        ],
        'prefer-const': [
          'error',
          {
            destructuring: 'all'
          }
        ],
        'prefer-promise-reject-errors': 'off',
        'prefer-regex-literals': [
          'error',
          {
            disallowRedundantWrapping: true
          }
        ],
        'quote-props': [
          'error',
          'as-needed'
        ],
        quotes: [
          'error',
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: false
          }
        ],
        'rest-spread-spacing': [
          'error',
          'never'
        ],
        semi: [
          'error',
          'never'
        ],
        'semi-spacing': [
          'error',
          {
            before: false,
            after: true
          }
        ],
        'space-before-blocks': [
          'error',
          'always'
        ],
        'space-before-function-paren': [
          'error',
          'always'
        ],
        'space-in-parens': [
          'error',
          'never'
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': [
          'error',
          {
            words: true,
            nonwords: false
          }
        ],
        'spaced-comment': [
          'error',
          'always',
          {
            line: {
              markers: [
                '*package',
                '!',
                '/',
                ',',
                '='
              ]
            },
            block: {
              balanced: true,
              markers: [
                '*package',
                '!',
                ',',
                ':',
                '::',
                'flow-include'
              ],
              exceptions: [
                '*'
              ]
            }
          }
        ],
        'symbol-description': 'error',
        'template-curly-spacing': [
          'error',
          'never'
        ],
        'template-tag-spacing': [
          'error',
          'never'
        ],
        'unicode-bom': [
          'error',
          'never'
        ],
        'use-isnan': [
          'error',
          {
            enforceForSwitchCase: true,
            enforceForIndexOf: true
          }
        ],
        'valid-typeof': [
          'error',
          {
            requireStringLiterals: true
          }
        ],
        'wrap-iife': [
          'error',
          'any',
          {
            functionPrototypeMethods: true
          }
        ],
        'yield-star-spacing': [
          'error',
          'both'
        ],
        yoda: [
          'error',
          'never'
        ],
        'import/export': 'error',
        'import/first': 'error',
        'import/order': ['error', {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          alphabetize: { order: 'asc' }
        }],
        'import/no-absolute-path': [
          'error',
          {
            esmodule: true,
            commonjs: true,
            amd: false
          }
        ],
        'import/no-duplicates': 'error',
        'import/no-named-default': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'n/handle-callback-err': [
          'error',
          '^(err|error)$'
        ],
        'n/no-callback-literal': 'error',
        'n/no-deprecated-api': 'error',
        'n/no-exports-assign': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/process-exit-as-throw': 'error',
        'promise/param-names': 'error',
        'svelte/indent': ['error', { indent: 2, indentScript: true }],
        'svelte/require-each-key': 'error',
        'a11y-media-has-caption': 'off',
        'svelte/html-self-closing': ['error', 'all'],
        'svelte/no-reactive-reassign': 'off',
        'svelte/html-closing-bracket-spacing': ['error', {
          startTag: 'never',
          endTag: 'never',
          selfClosingTag: 'always'
        }],
        'svelte/html-quotes': ['error', {
          prefer: 'single',
          dynamic: {
            quoted: false,
            avoidInvalidUnquotedInHTML: false
          }
        }],
        'svelte/block-lang': [
          'error',
          {
            enforceScriptPresent: false,
            script: ['ts']
          }
        ],
        'svelte/shorthand-attribute': ['warn', { prefer: 'always' }],
        'svelte/spaced-html-comment': ['error', 'always'],
        '@stylistic/semi': ['error', 'never'],
        '@stylistic/ts/type-annotation-spacing': 'error',
        '@stylistic/js/no-extra-semi': 'error',
        '@stylistic/ts/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none',
            requireLast: true
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false
          },
          multilineDetection: 'brackets'
        }],
        'class-methods-use-this': [
          'off'
        ],
        'init-declarations': [
          'off'
        ],
        'max-params': [
          'off'
        ],
        'no-empty-function': [
          'off'
        ],
        'no-loop-func': [
          'off'
        ],
        'no-magic-numbers': [
          'off'
        ],
        'no-new-native-nonconstructor': [
          'error'
        ],
        '@typescript-eslint/adjacent-overload-signatures': [
          'error'
        ],
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array-simple'
          }
        ],
        '@typescript-eslint/await-thenable': [
          'error'
        ],
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
            minimumDescriptionLength: 3
          }
        ],
        '@typescript-eslint/ban-tslint-comment': [
          'error'
        ],
        '@typescript-eslint/class-literal-property-style': [
          'error',
          'fields'
        ],
        '@typescript-eslint/class-methods-use-this': [
          'off'
        ],
        '@typescript-eslint/consistent-generic-constructors': [
          'error',
          'constructor'
        ],
        '@typescript-eslint/consistent-indexed-object-style': [
          'error',
          'record'
        ],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never'
          }
        ],
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface'
        ],
        '@typescript-eslint/consistent-type-exports': [
          'error',
          {
            fixMixedExportsWithInlineTypeSpecifier: true
          }
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'inline-type-imports'
          }
        ],
        '@typescript-eslint/dot-notation': [
          'error',
          {
            allowIndexSignaturePropertyAccess: false,
            allowKeywords: true,
            allowPattern: '',
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false
          }
        ],
        '@typescript-eslint/max-params': 'off',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variableLike',
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
            format: [
              'camelCase',
              'PascalCase',
              'UPPER_CASE'
            ]
          }
        ],
        '@typescript-eslint/no-array-constructor': [
          'error'
        ],
        '@typescript-eslint/no-array-delete': [
          'error'
        ],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-deprecated': [ // VERY VERY slow
          'off'
        ],
        '@typescript-eslint/no-dupe-class-members': [
          'error'
        ],
        '@typescript-eslint/no-duplicate-enum-values': [
          'error'
        ],
        '@typescript-eslint/no-duplicate-type-constituents': [
          'error',
          {
            ignoreIntersections: false,
            ignoreUnions: false
          }
        ],
        '@typescript-eslint/no-dynamic-delete': [
          'error'
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-object-type': [
          'error',
          {
            allowInterfaces: 'with-single-extends',
            allowObjectTypes: 'never'
          }
        ],
        '@typescript-eslint/no-explicit-any': [
          'error',
          {
            fixToUnknown: false,
            ignoreRestArgs: true
          }
        ],
        '@typescript-eslint/no-extra-non-null-assertion': [
          'error'
        ],
        '@typescript-eslint/no-extraneous-class': [
          'error',
          {
            allowWithDecorator: true
          }
        ],
        '@typescript-eslint/no-for-in-array': [
          'error'
        ],
        '@typescript-eslint/no-implied-eval': [
          'error'
        ],
        '@typescript-eslint/no-import-type-side-effects': [
          'error'
        ],
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: false,
            ignoreProperties: false
          }
        ],
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-loop-func': [
          'error'
        ],
        '@typescript-eslint/no-meaningless-void-operator': [
          'error',
          {
            checkNever: true
          }
        ],
        '@typescript-eslint/no-misused-new': [
          'error'
        ],
        '@typescript-eslint/no-mixed-enums': [
          'error'
        ],
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': [
          'error'
        ],
        '@typescript-eslint/no-non-null-asserted-optional-chain': [
          'error'
        ],
        '@typescript-eslint/no-non-null-assertion': [
          'warn'
        ],
        '@typescript-eslint/no-redeclare': [
          'error',
          {
            builtinGlobals: false
          }
        ],
        '@typescript-eslint/no-redundant-type-constituents': [
          'error'
        ],
        '@typescript-eslint/no-require-imports': [
          'error',
          {
            allow: [],
            allowAsImport: false
          }
        ],
        '@typescript-eslint/no-this-alias': [
          'error',
          {
            allowDestructuring: true
          }
        ],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': [
          'warn',
          {
            allowConstantLoopConditions: true
          }
        ],
        '@typescript-eslint/no-unnecessary-parameter-property-assignment': [
          'error'
        ],
        '@typescript-eslint/no-unnecessary-qualifier': [
          'error'
        ],
        '@typescript-eslint/no-unnecessary-template-expression': [
          'error'
        ],
        '@typescript-eslint/no-unnecessary-type-arguments': [
          'error'
        ],
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': [
          'error'
        ],
        '@typescript-eslint/no-unnecessary-type-parameters': [
          'off'
        ],
        '@typescript-eslint/no-unsafe-argument': [ // VERY VERY slow
          'off'
        ],
        '@typescript-eslint/no-unsafe-assignment': [ // buggy with svelte, and kinda useless
          'off'
        ],
        '@typescript-eslint/no-unsafe-declaration-merging': [
          'error'
        ],
        '@typescript-eslint/no-unsafe-enum-comparison': [
          'error'
        ],
        '@typescript-eslint/no-unsafe-function-type': [
          'error'
        ],
        '@typescript-eslint/no-unsafe-member-access': [ // buggy with svelte, and kinda useless
          'off'
        ],
        '@typescript-eslint/no-unsafe-return': [ // VERY VERY slow
          'off'
        ],
        '@typescript-eslint/no-unsafe-unary-minus': [
          'error'
        ],
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
            enforceForJSX: false
          }
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
            caughtErrors: 'none',
            ignoreRestSiblings: true,
            vars: 'all'
          }
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            enums: false,
            variables: false,
            typedefs: false
          }
        ],
        '@typescript-eslint/no-useless-constructor': [
          'error'
        ],
        '@typescript-eslint/no-useless-empty-export': [
          'error'
        ],
        '@typescript-eslint/no-wrapper-object-types': [
          'error'
        ],
        '@typescript-eslint/non-nullable-type-assertion-style': [
          'error'
        ],
        '@typescript-eslint/only-throw-error': [
          'error',
          {
            allowThrowingAny: false,
            allowThrowingUnknown: false
          }
        ],
        '@typescript-eslint/prefer-function-type': [
          'error'
        ],
        '@typescript-eslint/prefer-includes': [
          'error'
        ],
        '@typescript-eslint/prefer-nullish-coalescing': [
          'error',
          {
            ignoreConditionalTests: false,
            ignoreMixedLogicalExpressions: false
          }
        ],
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-promise-reject-errors': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': [
          'error'
        ],
        '@typescript-eslint/prefer-return-this-type': [
          'error'
        ],
        '@typescript-eslint/require-array-sort-compare': [
          'error',
          {
            ignoreStringArrays: true
          }
        ],
        '@typescript-eslint/restrict-plus-operands': [
          'error',
          {
            skipCompoundAssignments: false
          }
        ],
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            allowNumber: true
          }
        ],
        '@typescript-eslint/return-await': [
          'error',
          'always'
        ],
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            lib: 'never',
            path: 'never',
            types: 'never'
          }
        ],
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: false
          }
        ]
      }
    },
    {
      files: ['**/*.svelte'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', {
          varsIgnorePattern: '.{2}(Events|Props)',
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all'
        }]
      }
    },
    {
      ignores: ['build/', '.svelte-kit/', 'dist/']
    }
  )
}
