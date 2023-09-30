import { useState, React } from 'react';
import './styles/App.css';
import ImageGallery from './components/ImageGallery';

function App() {
  const [allImages, setImages] = useState([]);

  return <ImageGallery allImages={allImages} setImages={setImages} />;
}

export default App;
