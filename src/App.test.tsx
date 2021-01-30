import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add TODO List!!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add TODO List!!/i);
  expect(linkElement).toBeInTheDocument();
});
