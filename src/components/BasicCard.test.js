import { render, screen } from '@testing-library/react';
import BasicCard from './BasicCard';

test('renders the BasicCard with no errors', () => {
  render(<BasicCard />);
});
