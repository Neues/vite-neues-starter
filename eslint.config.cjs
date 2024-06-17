
import reactRefresh from 'eslint-plugin-react-refresh';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRecommended from 'eslint-plugin-react/configs/recommended';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import { fixupPluginRules } from '@eslint/compat';

// waiting on official support for eslint-plugin-react-hooks
// https://github.com/facebook/react/issues/28313

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // ts related config with vite
  {
    ...tseslint.config(
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked, // consider ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      {
        languageOptions: {
          globals: {
            ...globals.browser
          },
          parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
            ecmaFeatures: { modules: true },
            ecmaVersion: 'latest',
            project: ['./tsconfig.json', './tsconfig.node.json'],
          },
        },
      }
    ),
    ignorePatterns: ['dist', '.eslintrc.cjs'],
  },
  // eslint-plugin-react, eslint-plugin-react-refresh, eslint-plugin-react-hooks
  // https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#configuration-new-eslintconfigjs
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactRecommended,
    plugins: {
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      'react-refresh': reactRefresh
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    languageOptions: {
      ...reactRecommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  }
]