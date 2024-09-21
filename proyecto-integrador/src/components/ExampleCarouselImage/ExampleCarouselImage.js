import React from 'react';

function ExampleCarouselImage({ text }) {
  return (
    <div>
      <img src="https://via.placeholder.com/800x400" alt={text} />
      <p>{text}</p>
    </div>
  );
}

export default ExampleCarouselImage;
