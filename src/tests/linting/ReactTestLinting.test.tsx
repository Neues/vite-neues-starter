// @vitest-environment node

import { ESLint } from 'eslint';
import { expect, test } from 'vitest';

test('linting reports error when eslint-plugin-testing-library rules are broken', async () => {
	const eslint = new ESLint({
		ignore: false,
	});

	const results = await eslint.lintFiles([
		'src/tests/linting/ReactTestLinting.error.test.tsx',
	]);

	const filteredResults = ESLint.getErrorResults(results);

	expect(filteredResults[0].errorCount).toBe(3);
	expect(filteredResults[0].messages[0].ruleId).toBe(
		'testing-library/no-unnecessary-act'
	);
	expect(filteredResults[0].messages[1].ruleId).toBe(
		'testing-library/prefer-screen-queries'
	);
	expect(filteredResults[0].messages[2].ruleId).toBe(
		'vitest/no-commented-out-tests'
	);
});
