import reactRefresh from "eslint-plugin-react-refresh";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default tseslint.config(
  // https://typescript-eslint.io/packages/typescript-eslint/#config
  // default; eslint + ts related config with vite
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked, // consider ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // eslint-plugin-react
  {
    name: "eslint-plugin-react",
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
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
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": reactRefresh,
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
