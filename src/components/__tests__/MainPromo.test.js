import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPromo from 'components/MainPromo';
import MainPromoImages from 'assets/json/MainPromoImages';

beforeEach(() => {
  render(<MainPromo images={MainPromoImages} />);
});

it('Five images found on component', () => {
  const images = screen.getAllByRole('img');
  expect(images.length).toEqual(5);
});
