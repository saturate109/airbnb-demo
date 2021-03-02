import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MainGallery from 'containers/MainGallery';
import Api from 'helpers/Axios';

jest.mock('helpers/Axios');
it('Five images found on component', async () => {
  // Mock the Api get response
  Api.get.mockResolvedValue({
    data: Array(5).fill({ src: 'image-url', alt: 'alt-text' }),
  });

  render(<MainGallery />);

  // First check for correct number of skeletons
  const skeletonLabel = /Image loading/i;
  const skeletons = screen.getAllByLabelText(skeletonLabel);
  expect(skeletons.length).toEqual(5);

  await waitFor(() => screen.getAllByRole('img'));

  // Then check for correct number of images
  const images = screen.getAllByRole('img');
  expect(images.length).toEqual(5);
});
