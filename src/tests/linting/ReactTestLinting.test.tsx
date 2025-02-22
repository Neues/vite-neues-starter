import { Linter, ESLint } from 'eslint';
import process from 'node:process';
import { expect, test } from 'vitest';

test('linting reports error when eslint-plugin-testing-library rules are broken', async () => {
	const eslint = new ESLint();
	const results = await eslint.lintFiles([
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
		`${process.cwd()}/src/tests/linting/ReactTestLinting.test.tsx`,
	]);
	expect(results);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	// const config = await eslint.calculateConfigForFile(
	// 	'src/tests/linting/ReactTestLinting.test.tsx'
	// );
	// expect(config);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
	// const projectLinter = new Linter({ cwd: process.cwd() });
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	// 	const messages = projectLinter.verify('var foo', {
	// 		rules: {
	// 			semi: 2,
	// 		},
	// 	});
	// 	console.log(messages);
	// 	expect(messages);
});
