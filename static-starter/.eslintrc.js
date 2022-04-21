module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['unused-imports', 'simple-import-sort'],
  extends: ['plugin:import/recommended', 'plugin:prettier/recommended'],
  rules: {
    // Forbids the use of semicolons
    'semi': ['error', 'never'],
    // Allow import with no extensions for all package imports and tsx/ts/jsx/js files
    'import/extensions': ['error', 'ignorePackages', { tsx: 'never', ts: 'never', jsx: 'never', js: 'never' }],
    // Disallow force export default when only one export occur
    'import/prefer-default-export': 'off',
    // Allow not camelcasse in types (graphql)
    'camelcase': 'off',
    // Allow no return in arrow function
    'consistent-return': 'off',
    // Allow no assignment and expression call on properties
    'no-unused-expressions': 'off',
    // Allow using console
    'no-console': 'off',
    // Allow return await
    'no-return-await': 'off',

    // Allow await in loops
    'no-await-in-loop': 'off',

    'no-restricted-syntax': 'off',

    // Allow use before define
    'no-use-before-define': 'off',

    // allow empty pattern
    'no-empty-pattern': 'off',

    // allow no destructuring
    'prefer-destructuring': 'off',

    // Allow ++ and --
    'no-plusplus': 'off',

    // Only allow absolute imports
    'no-restricted-imports': ['error', { patterns: ['../../*'] }],
    'no-restricted-modules': ['error', { patterns: ['../../*'] }],

    // Force LF newlines
    'linebreak-style': ['error', 'unix'],

    // Import sorting
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],

          // NodeJS built-ins, automatically generated
          /* [
            // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
            `^(${import('module')?.builtinModules.join('|')})(/|$)`,
          ],*/

          // Packages. `react` related packages come first.
          ['^react', '^next', '^@?\\w'],

          // Internal packages.
          ['^(api-client|assets|auth|components|hooks|lang|pages|store|types|utils)(/.*|$)'],

          // All relative imports
          [
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    // doesnt allow unused import
    'unused-imports/no-unused-imports-ts': 'error',
    // allow object spread with Object.assign syntax
    'prefer-object-spread': 'off',
    // allow underscore in variable names
    'no-underscore-dangle': 'off',
    // Allow param reassign
    'no-param-reassign': 'off',
    // allow case declaration
    'no-case-declarations': 'off',
    // allow no non null assertion
    'no-non-null-assertion': 'off',
  },

  // Settings that allow ESlint to resolve aliases, see :
  // https://www.npmjs.com/package/eslint-import-resolver-alias
  settings: {
    'import/resolver': {
      alias: {
        // mapping all aliases
        map: [],
      },
    },
  },
}
