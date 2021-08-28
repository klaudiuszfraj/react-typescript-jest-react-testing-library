import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from "./App";

test('button initial render', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle({backgroundColor: 'MediumVioletRed'});
  expect(button).toHaveTextContent('Change to Midnight Blue');
});

test('button click', () => {
  render(<App/>);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  fireEvent.click(button)
  expect(button).toHaveStyle({ background: 'MidnightBlue'})
  expect(button).toHaveTextContent('Change to Medium Violet Red')
})

test('checkbox initial render', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(button).toBeEnabled();
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})
  expect(checkbox).not.toBeChecked();
})

test('checkbox disables button on first click and enable it on second', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()

})

test('button gray when disabled, when enabled back to color', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({backgroundColor: 'gray'})
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({backgroundColor: 'MediumVioletRed'})

})

test('button when disabled is gray', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})
  fireEvent.click(button)
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: 'gray'})
})

describe('spaces before camel-case capital letters', function () {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letter', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')

  })
});
