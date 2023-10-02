import { React, useState } from 'react';
import PropTypes from 'prop-types';

export default function ImageGallery({
  allImages,
  setGameLost,
  setGameWon,
  increaseScore,
}) {
  const [clickedImages, setClickedImages] = useState(new Set());

  // Preload all images to prevent unclicked images from flashing
  allImages.forEach((image) => {
    new Image().src = image.url;
  });

  /**
   * Display a random selection of images, making sure at least one image has
   * not been picked before.
   */
  function pickImagesToShow() {
    let images;

    const clickedBefore = (selectedImage) =>
      clickedImages.has(selectedImage.id);

    do {
      /**
       * Random selection from array source:
       * https://bobbyhadz.com/blog/javascript-get-multiple-random-elements-from-array
       * */
      const shuffled = [...allImages].sort(() => 0.5 - Math.random());
      images = shuffled.slice(0, 4);
    } while (images.every(clickedBefore));

    return images;
  }

  function handleImageClick(id) {
    if (clickedImages.has(id)) {
      setGameLost(true);
    } else increaseScore();

    setClickedImages((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  let imagesToShow;
  if (clickedImages.size === allImages.length) {
    setGameWon(true);
  } else {
    imagesToShow = pickImagesToShow();
  }

  return (
    <div className="image-carousel">
      {imagesToShow.map((image) => (
        <div key={image.id} className="image-wrapper">
          <button
            className="image"
            type="button"
            onClick={() => handleImageClick(image.id)}
          >
            <img src={image.url} alt="semi-randomly chosen" />
            <figcaption>{`Credit: ${image.author}`}</figcaption>
          </button>
        </div>
      ))}
    </div>
  );
}

ImageGallery.propTypes = {
  allImages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setGameLost: PropTypes.func.isRequired,
  setGameWon: PropTypes.func.isRequired,
  increaseScore: PropTypes.func.isRequired,
};
