/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  "!*": "prettier . --cache --write --ignore-unknown",
  "*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}": [
    "eslint --cache src --report-unused-disable-directives --no-warn-ignored",
  ],
};
