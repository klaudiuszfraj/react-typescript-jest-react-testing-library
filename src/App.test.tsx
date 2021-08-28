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

test('checkbox disables button on first click and enable it on second', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox')
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()

})
