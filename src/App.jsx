import { useState, React, useEffect } from 'react';
import './styles/App.css';
import ImageGallery from './components/ImageGallery';
import fetchImages from './utils/fetchImages';

function App() {
  const [allImages, setImages] = useState([]);

  useEffect(() => {
    async function prepareImages() {
      setImages(await fetchImages());
    }
    prepareImages();
  }, []);

  return <ImageGallery allImages={allImages} setImages={setImages} />;
}

export default App;
