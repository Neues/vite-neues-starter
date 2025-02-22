/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
	'!(*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx})': 'npm run prettier -- --cache',
	'*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}': [
		'npm run lint -- --cache',
		'npm run prettier -- --cache',
	],
};
