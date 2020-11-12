import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//TODO: add more concrete tests
test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/SIZE/i);
  expect(linkElement).toBeInTheDocument();
});
