import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactCompiler from "eslint-plugin-react-compiler";
import eslintConfigPrettier from "eslint-config-prettier";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";


/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default tseslint.config(
  // https://typescript-eslint.io/packages/typescript-eslint/#config
  // default; eslint + ts related config with vite
  js.configs.recommended,
  // https://typescript-eslint.io/getting-started/typed-linting
  ...tseslint.configs.recommendedTypeChecked, // consider ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // eslint-plugin-react
  {
    name: "eslint-plugin-react",
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    ...reactRecommended,
    languageOptions: {
      ...reactRecommended.languageOptions,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  // eslint-plugin-react-refresh, eslint-plugin-react-hooks
  // https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#configuration-new-eslintconfigjs
  {
    name: "eslint-plugin-react-refresh, eslint-plugin-react-hooks",
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    plugins: {
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  // eslint-plugin-react-compiler
  {
    name: "eslint-plugin-react-compiler",
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    plugins: {
      "react-compiler": eslintPluginReactCompiler,
    },
  },
  // tests
  {
    name: "Tests",
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    ...jestDom.configs["flat/recommended"],
    ...testingLibrary.configs["flat/react"],
  },
  {
    name: "js - no type check",
    files: ["**/*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    name: "prettier",
    ...eslintConfigPrettier,
  },
);
