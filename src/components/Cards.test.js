import { render, screen } from '@testing-library/react';
import Cards from './Cards';

test('renders the Cards with no errors', () => {
  render(<Cards />);
});
