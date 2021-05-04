import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home'

test('renders home component properly', () => {
    render(<Home />);
    const textElement = screen.getByText(/Home/i);
    expect(textElement).toBeInTheDocument();
});
