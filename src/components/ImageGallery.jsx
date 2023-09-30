/* eslint-disable react/prop-types */
import { React, useState } from 'react';

export default function ImageGallery({
  allImages,
  setGameLost,
  increaseScore,
}) {
  const [clickedImages, setClickedImages] = useState(new Set());
  console.log(clickedImages);

  // TODO: if all images have been seen
  // show win screen

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
    if (clickedImages.has(id)) setGameLost(true);

    increaseScore();

    setClickedImages((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  const imagesToShow = pickImagesToShow();

  return (
    <div className="image-carousel">
      {imagesToShow.map((image) => (
        <div key={image.id} className="image-wrapper">
          <button type="button" onClick={() => handleImageClick(image.id)}>
            <img src={image.url} alt="semi-randomly chosen" />
            <figcaption>{`Credit: ${image.author}`}</figcaption>
          </button>
        </div>
      ))}
    </div>
  );
}
