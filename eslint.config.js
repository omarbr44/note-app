import antfu from '@antfu/eslint-config'
import eslintConfigPrettier from '@vue/eslint-config-prettier'
/** @type {import('eslint').Linter.Config[]} */
export default antfu(
  {
    rules: { 'node/prefer-global/process': 'off' }, // Suppress warning about process being undefined
    ignores: ['README.md', '.github/PULL_REQUEST_TEMPLATE.md'],
  },
  // TypeScript & JavaScript style
  {
    rules: {
      'no-console': ['error', { allow: ['debug', 'warn', 'error'] }],
      'func-style': [
        'error',
        'declaration',
        { overrides: { namedExports: 'ignore' } },
      ],
    },
  },
  // Vue
  {
    rules: {
      'vue/attributes-order': ['error'],
      'vue/v-bind-style': [
        'error',
        'shorthand',
        { sameNameShorthand: 'always' },
      ],
    },
  },
  // Prettier
  eslintConfigPrettier,
)
