import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../views/App';

test('renders learn react link', async () => {
  render(<App />);
  const buttonElement = await screen.getByText('Change State');
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  const text = await screen.findByText('Hello, but this route was not found');
  expect(text).toBeInTheDocument();
});
