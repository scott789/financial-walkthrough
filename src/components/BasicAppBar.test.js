import { render, screen } from '@testing-library/react';
import BasicAppBar from './BasicAppBar';

test('renders the BasicAppBar with no errors', () => {
  render(<BasicAppBar />);
});
