import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPromo from 'components/MainPromo';

beforeEach(() => {
  const MainPromoImages = {
    images: Array(5).fill({ src: 'image-url', alt: 'alt-text' }),
  };
  render(<MainPromo {...MainPromoImages} />);
});

it('Five images found on component', () => {
  const images = screen.getAllByRole('img');
  expect(images.length).toEqual(5);
});
