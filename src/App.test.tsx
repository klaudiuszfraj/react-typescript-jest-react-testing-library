import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button initial render', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' })
  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle({backgroundColor: 'red'});
  expect(button).toHaveTextContent('Change to blue');
});

test('button click', () => {
  render(<App/>);
  const button = screen.getByRole('button', { name: 'Change to blue' })
  fireEvent.click(button)
  expect(button).toHaveStyle({ background: 'blue'})
  expect(button).toHaveTextContent('Change to red')
})

test('checkbox initial render', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to blue'});
  expect(button).toBeEnabled();
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})
  expect(checkbox).not.toBeChecked();
})

test('checkbox disables button on first click and enable it on second', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()

})

test('button gray when disabled, when enabled back to color', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({backgroundColor: 'gray'})
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({backgroundColor: 'red'})

})

test('button when disabled is gray', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})
  fireEvent.click(button)
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: 'gray'})
})
