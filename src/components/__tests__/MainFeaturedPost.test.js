import React from 'react';
import { render, screen } from '@testing-library/react';
import MainFeaturedPost from '../MainFeaturedPost';

beforeEach(() => {
  render(<MainFeaturedPost />);
});

it('Five images found on component', () => {
  const images = screen.getAllByRole('img');
  expect(images.length).toEqual(5);
});
