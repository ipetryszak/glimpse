import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './search'

test('renders search component properly', () => {
    render(<Search />);
    const textElement = screen.getByText(/Search/i);
    expect(textElement).toBeInTheDocument();
});
