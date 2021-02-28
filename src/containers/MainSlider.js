import React, { useState, useEffect } from 'react';
import SliderOneItem from 'components/SliderOneItem';
import Api from 'helpers/Axios';
import { API_GALLERYIMAGES_URL } from 'helpers/Constants';

const MainSlider = () => {
  const [galleryImages, setGalleryImages] = useState({
    images: Array(5).fill(),
    error: null,
  });

  const getGalleryImages = async () => {
    try {
      const resp = await Api.get(API_GALLERYIMAGES_URL);

      setGalleryImages((galleryImages) => ({
        ...galleryImages,
        images: resp.data,
      }));
    } catch (error) {
      setGalleryImages((galleryImages) => ({ ...galleryImages, error }));
    }
  };

  useEffect(() => {
    getGalleryImages();
  }, []);

  return <SliderOneItem {...galleryImages} />;
};

export default MainSlider;
