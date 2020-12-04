import { render, screen } from '@testing-library/react';
import App from './App';
import Banner from '.components/Banner';

test('renders learn react link', () => {
  render(<App /><Banner />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
