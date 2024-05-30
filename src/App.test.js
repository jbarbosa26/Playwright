import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const testElement = screen.getByText(/learn react/i);
  expect(testElement).toBeInTheDocument();
});

test('renders app for editing p tag', () => {
  render(<App />);
  const testElement = screen.getByText(/Edit/i);
  expect(testElement).toBeInTheDocument();
});

test('renders app for editing code section', () => {
  render(<App />);
  const testElement = screen.getByText(/src\/App.js/i);
  expect(testElement).toBeInTheDocument();
});

test('renders app for non-existent link', () => {
  render(<App />);
  const testElement = screen.queryByText('google');
  expect(testElement).not.toBeInTheDocument();
});