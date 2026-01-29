import stylistic from '@stylistic/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
    {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      '@stylistic': stylistic,
    },
    rules: {
      // Стилистические правила
      '@stylistic/indent': ['error', 4],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/no-trailing-spaces': ['error'],
      '@stylistic/eol-last': 'error',
      '@stylistic/max-len': ['error', 150, {
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quotes': ['error', 'double', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }],
      
      // TypeScript правила
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      
      // Импорты
      'import/extensions': ['error', 'ignorePackages', {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }],
      'import/prefer-default-export': 'off',
    },
  },
];