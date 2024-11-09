import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with correct label', () => {
  render(<Button label="Click Me" />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
