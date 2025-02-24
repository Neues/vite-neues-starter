// @vitest-environment node

import { ESLint } from 'eslint';
import { expect, test, describe } from 'vitest';

describe('linting in react files', () => {
	test('linting reports error when rules are broken', async () => {
		const eslint = new ESLint({
			ignore: false,
		});

		const results = await eslint.lintFiles([
			'src/tests/linting/ReactLinting.error.test.tsx',
		]);

		const filteredResults = ESLint.getErrorResults(results);

		expect(filteredResults[0].errorCount).toBe(6);
		expect(filteredResults[0].messages[0].ruleId).toBe(
			'react/no-children-prop'
		);
		expect(filteredResults[0].messages[1].ruleId).toBe('jsx-a11y/aria-role');
		expect(filteredResults[0].messages[2].ruleId).toBe('no-constant-condition');
		expect(filteredResults[0].messages[3].ruleId).toBe(
			'react-hooks/rules-of-hooks'
		);
		expect(filteredResults[0].messages[4].ruleId).toBe(
			'@typescript-eslint/no-empty-function'
		);
		expect(filteredResults[0].messages[5].ruleId).toBe(
			'react-compiler/react-compiler'
		);
	});
});
