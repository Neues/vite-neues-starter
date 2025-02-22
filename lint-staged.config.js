/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*": "npm run prettier",
  "*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}": ["npm run lint"],
};
