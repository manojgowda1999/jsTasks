import React, { useState } from 'react';
import Slider from './Slider'; // Import child component

const images = [
  'https://cdn-icons-png.freepik.com/512/6055/6055946.png',
  'https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/number_2_green-512.png',
  'https://cdn.pixabay.com/photo/2015/04/04/19/13/three-706895_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/04/04/19/13/four-706894_1280.jpg'
,
  'https://example.com/image3.jpg',
];

const ImageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length); 
  };

  const handlePrev = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + images.length) % images.length); 
  };

  return (
    <div className="image-gallery">
      <Slider imageURL={images[currentSlide]} onNext={handleNext} onPrev={handlePrev} />
      <div className="navigation">
        <button onClick={handlePrev} disabled={currentSlide === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentSlide === images.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default ImageGallery;
