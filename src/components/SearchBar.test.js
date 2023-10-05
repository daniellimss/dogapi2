import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SearchBar from './SearchBar';

afterEach(() => {
  cleanup();
})
describe('input field', () => {
  it('renders without errors', () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole("input")
    expect(inputElement).toBeInTheDocument();
    // const { getByPlaceholderText } = render(<SearchBar />)
    // expect(getByPlaceholderText('Enter a breed name')).toBeInTheDocument();
  });

  // it('handles input changes', () => {
  //   render(<SearchBar />);
  //   const inputElement = screen.getByRole("input");
  //   fireEvent.change(inputElement, { target: { value: "Hello, Jest!" } });
  //   expect(inputElement.value).toBe("Hello, Jest!");
  // });
});
