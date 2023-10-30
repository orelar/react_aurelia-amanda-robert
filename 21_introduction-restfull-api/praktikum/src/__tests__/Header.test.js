import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/common/Header';

// Mock the Article data
jest.mock('../Article', () => ({
  title: {
    en: 'English Title',
    id: 'Indonesian Title',
  },
  description: {
    en: 'English Description',
    id: 'Indonesian Description',
  },
}));

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<Header />);

    // Check if English title is displayed
    expect(getByText('English Title')).toBeInTheDocument();

    // Check if English description is displayed
    expect(getByText('English Description')).toBeInTheDocument();

    // Check if the Bootstrap logo is displayed
    expect(getByAltText('bootstrap-logo')).toBeInTheDocument();

    // Check if the "Number Generator" button is displayed
    expect(getByText('Number Generator')).toBeInTheDocument();

    // Check if the "Change Language" button is displayed
    expect(getByText('Change Language')).toBeInTheDocument();
  });

  it('changes language on button click', () => {
    const { getByText } = render(<Header />);

    // Check if English title is displayed initially
    expect(getByText('English Title')).toBeInTheDocument();

    // Click the "Change Language" button
    fireEvent.click(getByText('Change Language'));

    // Check if Indonesian title is displayed after clicking
    expect(getByText('Indonesian Title')).toBeInTheDocument();
  });

  it('logs a number on "Number Generator" button click', () => {
    const { getByText } = render(<Header />);
    const consoleSpy = jest.spyOn(console, 'log');

    // Click the "Number Generator" button
    fireEvent.click(getByText('Number Generator'));

    // Check if Math.random() is called and logged to the console
    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Number));

    // Clean up the spy
    consoleSpy.mockRestore();
  });
});