import { React, useState } from 'react';
import PropTypes from 'prop-types';

export default function ImageGallery({
  allImages,
  setGameFinished,
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

  const imagesToShow = pickImagesToShow();

  function addClickedImageToClickedImages(id) {
    setClickedImages((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  function handleImageClick(id) {
    // Clicked before (lose the game)
    if (clickedImages.has(id)) {
      setGameFinished(true);
      setGameWon(false);
    }
    // Not clicked before
    else {
      increaseScore();
      // No more images left (win the game)
      if (clickedImages.size === allImages.length - 1) {
        setGameFinished(true);
        setGameWon(true);
      }
      // More images left (go to next round)
      else {
        addClickedImageToClickedImages(id);
      }
    }
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
  setGameFinished: PropTypes.func.isRequired,
  setGameWon: PropTypes.func.isRequired,
  increaseScore: PropTypes.func.isRequired,
};
