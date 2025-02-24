import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import react from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactCompiler from 'eslint-plugin-react-compiler';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';
import vitest from '@vitest/eslint-plugin';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default tseslint.config(
	{
		ignores: ['.husky/install.mjs', 'dist', 'src/tests/**/*.error.*'],
	},
	{
		// https://typescript-eslint.io/packages/typescript-eslint/#config
		// default; eslint + ts related config with vite
		extends: [
			js.configs.recommended,
			// https://typescript-eslint.io/getting-started/typed-linting
			...tseslint.configs.recommendedTypeChecked, // consider ...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				// https://typescript-eslint.io/packages/parser/#projectservice
				projectService: true,
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		name: 'eslint-plugin-react - recommended',
		files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
		...react.configs.flat.recommended,
	},
	{
		name: 'eslint-plugin-react - jsx-runtime',
		files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
		...react.configs.flat['jsx-runtime'],
	},
	// this is a bit of a hack, they're not exporting their config correctly
	// https://github.com/facebook/react/issues/32431
	// additionally, this will be merged into the compiler's eslint plugin and will no longer be needed
	// https://react.dev/blog/2024/10/21/react-compiler-beta-release#roadmap-to-stable
	{
		name: 'eslint-plugin-react-hooks',
		files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
		plugins: { 'react-hooks': eslintPluginReactHooks },
		rules: {
			...eslintPluginReactHooks.configs.recommended.rules,
		},
	},
	{
		name: 'eslint-plugin-react-compiler',
		files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
		plugins: {
			'react-compiler': eslintPluginReactCompiler,
		},
		rules: {
			'react-compiler/react-compiler': 'error',
		},
	},
	{
		name: 'eslint-plugin-jsx-a11y',
		files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
		...eslintPluginJsxA11y.flatConfigs.recommended,
		languageOptions: {
			...eslintPluginJsxA11y.flatConfigs.recommended.languageOptions,
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
		},
	},
	// tests
	{
		name: 'eslint-plugin-testing-library',
		files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
		...eslintPluginTestingLibrary.configs['flat/react'],
	},
	{
		name: 'eslint-plugin-vitest',
		files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
		...vitest.configs.recommended,
	},
	{
		name: 'js - no type check',
		files: ['**/*.js'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	{
		name: 'prettier',
		...eslintConfigPrettier,
	}
);
