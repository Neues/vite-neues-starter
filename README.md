# Neues Vite Starter

`Vite 6` + `React 19` + `Typescript` + `Vitest 3` + `React Testing Library` + `Prettier` + `Husky` + `lint-staged` + `Eslint 9` + relevant ESLint plugins

This template is based on [create-vite's react-swc-ts template](https://github.com/vitejs/vite/tree/main/packages/create-vite) and provides a minimal React + Vite setup along with a correct Vitest + RTL setup and CI/CD with a robust set of ESLint plugins.

There are several dozen React + vite templates but I found many have not yet made it to React 19, had not moved to the eslint flat config, remain on ESLint version 8, and lacked CI/CD configuration. I could also not find any templates which provided RTL along with the relevant linting. This motivated me to make my own template.

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ESLint configuration

This template is using ESLint 9 and an [ESLint flat config file](https://eslint.org/docs/latest/use/configure/configuration-files) with the following ESLint plugins:

- [@eslint/js](https://github.com/eslint/eslint/tree/main/packages/js) with recommended rules
- [typescript-eslint](https://typescript-eslint.io/getting-started/typed-linting/) with [recommended-type-checked](https://typescript-eslint.io/users/configs/#recommended-type-checked) and [stylistic-type-checked](https://typescript-eslint.io/users/configs/#stylistic-type-checked) rules
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) with recommended rules

- [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

- [eslint-plugin-react-compiler](https://github.com/facebook/react/tree/main/compiler/packages/eslint-plugin-react-compiler)

- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)
- [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
