module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-unused-vars': 'warn',
    'react/jsx-uses-vars': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs'],
        moduleDirectory: [
          'node_modules',
          'src/',
          '../../node_modules',
          '../../'
        ],
        paths: [
          ['@mui/*', './node_modules/@mui/*/index.js'],
          ['@octokit/rest', './node_modules/@octokit/rest/dist-schema/index.js'],
          ['react', './node_modules/react/index.js']
        ]
      },
      alias: {
        map: [
          ['@mui', './node_modules/@mui'],
          ['@octokit', './node_modules/@octokit'],
          ['^react$', './node_modules/react']
        ],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  overrides: [
    {
      files: ['src/assets/**/*'],
      rules: {
        'import/no-unresolved': 'off'
      }
    },
    {
      files: ['src/components/OpenSource.js'],
      rules: {
        'import/no-unresolved': 'off',
        'import/extensions': 'off'
      }
    }
  ]
};
