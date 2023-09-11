import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react';

test('renders Hello world', () => {
    render(<Greeting />);
    const linkElement = screen.getByText(/Hello world!/i);
    expect(linkElement).toBeInTheDocument();
  });