import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SearchBar from './components/SearchBar';

afterEach(() => {
  cleanup();
})
describe('SearchBar', () => {
  it('renders without errors', () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole("input")
    expect(inputElement).toBeInTheDocument();
  });
  // it('Enter a breed name', () => {
  //   console.log('testing 123')
  // })
  // it('handles input changes', () => {
  //   render(<SearchBar />);
  //   const inputElement = screen.getByRole("input");
  //   fireEvent.change(inputElement, { target: { value: "Hello, Jest!" } });
  //   expect(inputElement.value).toBe("Hello, Jest!");
  // });
});