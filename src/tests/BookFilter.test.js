import BookFilter from "../Components/BookFilter";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import debounce from "../debounce/Debounce"

test('render text search', () => {
    render(<BookFilter/>);
    const inputEl = screen.getByTestId("text-input");
    expect(inputEl).toHaveAttribute("type", "text");
  });

  

  test('render all data in first render', () => {
    render(<BookFilter/>);
    const items = screen.getAllByTestId('items-list')
    expect(items.length).toBe(12);
  });


  test('render only filtred list of items on text input if the item exists', () => {
    render(<BookFilter/>);
    const inputEl = screen.getByTestId("text-input");

    userEvent.type(inputEl,"Harry");
    const items = screen.getAllByTestId('items-list')
    setTimeout(()=>expect(items.length).toBe(1),1000);
  });


  test('render empty list of items when the book name does not exists', () => {
    render(<BookFilter/>);
    const inputEl = screen.getByTestId("text-input");

    userEvent.type(inputEl,"Nothing");
    const items = screen.getAllByTestId('items-list')
    setTimeout(()=>expect(items.length).toBe(0),1000);
  });
  
  