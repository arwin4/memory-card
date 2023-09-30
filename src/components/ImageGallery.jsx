/* eslint-disable react/prop-types */
import { useEffect, React, useState } from 'react';
import fetchImages from '../utils/fetchImages';

export default function ImageGallery({ allImages, setImages }) {
  const [clickedImages, setClickedImages] = useState([]);
  console.log(clickedImages);

  useEffect(() => {
    async function prepareImages() {
      setImages(await fetchImages());
    }
    prepareImages();
  }, []);

  // Source: https://bobbyhadz.com/blog/javascript-get-multiple-random-elements-from-array
  // Returns 5 random images
  function pickRandomImages() {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  }

  function handleImageClick(id) {
    setClickedImages([...clickedImages, id]);
  }

  const randomImages = pickRandomImages();

  return (
    <div className="image-carousel">
      {randomImages.map((image) => (
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
