# Neues Vite Starter

`Vite 6` + `React 19` + `Typescript` + `Vitest 3` + `React Testing Library` + `Prettier` + `Husky` + `lint-staged` + `Eslint 9` + relevant ESLint plugins

This template is based on [create-vite's react-swc-ts template](https://github.com/vitejs/vite/tree/main/packages/create-vite) and is intended for production applications. It provides a React + Vite setup along with useful configuration: a correct Vitest + RTL setup and CI/CD tooling with a robust set of ESLint plugins.

## Using This Template

[Degit](https://github.com/Rich-Harris/degit) can be used to copy this repository

```
npx degit Neues/vite-neues-starter my-app
```

## Features

There are several dozen React + vite community templates but I found many have not yet made it to React 19, had not moved to the eslint flat config, remain on ESLint version 8, and lacked CI/CD configuration. I could also not find any templates which provided RTL along with the relevant linting. This motivated me to make my own template.

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- [Typed Linting](https://typescript-eslint.io/blog/typed-linting/) via [typescript-eslint](https://typescript-eslint.io/getting-started/typed-linting/) which uses TypeScript APIs to provide ESLint rules with type information to provide more powerful linting and safer code.

- [Vitest](https://vitest.dev/guide/why.html) test runner along with user-centric testing via [React Testing Library](https://testing-library.com/docs/react-testing-library/intro), correctly set up with [eslint-plugin-testing-library](https://testing-library.com/docs/ecosystem-eslint-plugin-testing-library/)

### ESLint configuration

This template is using ESLint 9 and an [ESLint flat config file](https://eslint.org/docs/latest/use/configure/configuration-files) with the following ESLint plugins:

- [@eslint/js](https://github.com/eslint/eslint/tree/main/packages/js) with recommended rules
- [typescript-eslint](https://typescript-eslint.io/getting-started/typed-linting/) with [recommended-type-checked](https://typescript-eslint.io/users/configs/#recommended-type-checked) and [stylistic-type-checked](https://typescript-eslint.io/users/configs/#stylistic-type-checked) rules
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) with recommended rules

- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

- [eslint-plugin-react-compiler](https://react.dev/learn/react-compiler#installing-eslint-plugin-react-compiler)

- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)
- [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
