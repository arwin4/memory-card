/* eslint-disable react/prop-types */
import { useEffect, React } from 'react';
import fetchImages from '../utils/fetchImages';

export default function ImageGallery({ allImages, setImages }) {
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

  const randomImages = pickRandomImages();
  console.log(pickRandomImages());

  return (
    <div className="image-carousel">
      {randomImages.map((image) => (
        <div key={image.id} className="image-wrapper">
          <img src={image.url} alt="semi-randomly chosen" />
          <figcaption>{`Credit: ${image.author}`}</figcaption>
        </div>
      ))}
    </div>
  );
}
