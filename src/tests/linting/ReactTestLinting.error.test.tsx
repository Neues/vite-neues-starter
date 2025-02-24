import { expect, it } from 'vitest';
import { render, act, waitFor } from '@testing-library/react';

const Component = () => <div className='test'>React Component</div>;

it('incorrect examples for RTL', async () => {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	await act(async () => waitFor(() => {}));
	const { getByText } = render(<Component />);
	expect(getByText('React Component')).toBeInTheDocument();
});

// test('incorrect example for eslint-plugin-vitest', () => {
//   expect(1).toBe(1)
// })
