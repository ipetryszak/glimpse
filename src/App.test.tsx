import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page as start point', () => {
  render(<App />);
  const textElement = screen.getByText(/Home/i);
  expect(textElement).toBeInTheDocument();
});
