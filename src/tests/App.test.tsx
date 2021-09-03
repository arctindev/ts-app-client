import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', async () => {
  render(<App />);
  const buttonElement = await screen.getByText('Change State');
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  const text = await screen.findByText('Error, not found');
  expect(text).toBeInTheDocument();
});
