import { useEffect, useState, React } from 'react';
import './styles/App.css';
import fetchImages from './utils/fetchImages';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function prepareImages() {
      setImages(await fetchImages());
    }
    prepareImages();
  }, []);

  console.log(images);

  return <h1>This is a React + Vite template</h1>;
}

export default App;
