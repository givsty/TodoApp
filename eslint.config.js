import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 4],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/no-trailing-spaces' : ['error'],
      '@stylistic/eol-last' : 'error',
      '@stylistic/max-len' : [2, 150, {
          ignoreUrls : true,
          ignoreTrailingComments : true,
          ignoreRegExpLiterals : true,
        },
      ],
    },
  },
];