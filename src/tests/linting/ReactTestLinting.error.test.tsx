import { expect, test } from 'vitest';
import { render } from '@testing-library/react';

const Component = () => <div>React Component</div>;

test('incorrect code examples', () => {
	const { container } = render(<Component />);
	expect(container.textContent).toBe('React Component');
});
