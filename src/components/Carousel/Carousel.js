import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import images from './images';

const CarouselImplemented = () => {
  // const images = [9, 8, 7, 6, 5,1].map((number) => ({
  //   src: `https://placedog.net/${number}00/${number}00?id=${number}`
  // }));

    const imagesInUse = images.map(({ url, title }, index) => ({
      src: url, alt: title, key: index
      
    }))
  return (
    <Carousel images={imagesInUse} style={{ height: '100%'}} />
  );
};

export default CarouselImplemented;