import { render, screen } from '@testing-library/react';
import App from '../views/App';

test('renders the app correctly', async () => {
  render(<App />);
  const navElement = await screen.getByText('History');
  expect(navElement).toBeInTheDocument();
});
