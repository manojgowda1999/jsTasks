import React from 'react';

const Slider = ({ imageURL, onNext, onPrev }) => {
  return (
    <div className="slider">
      <img src={imageURL} alt="Gallery Image" />
    </div>
  );
};

export default Slider;
