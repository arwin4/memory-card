import { useState, React, useEffect } from 'react';
import './styles/App.css';
import ImageGallery from './components/ImageGallery';
import fetchImages from './utils/fetchImages';
import Score from './components/Score';

function App() {
  const [allImages, setImages] = useState([]);
  const [gameLost, setGameLost] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    async function prepareImages() {
      setImages(await fetchImages());
    }
    prepareImages();
  }, []);

  const increaseScore = () => {
    setScore(score + 1);
  };

  function resetGame() {
    setScore(0);
    setGameLost(false);
  }

  if (gameLost)
    return (
      <>
        <h1>You lose</h1>
        <button type="button" onClick={resetGame}>
          Play again
        </button>
      </>
    );

  // Display ImageGallery only after images have been fetched
  if (allImages.length !== 0) {
    return (
      <>
        <Score score={score} />
        <ImageGallery
          allImages={allImages}
          setGameLost={setGameLost}
          increaseScore={increaseScore}
        />
        ;
      </>
    );
  }
  return <h1>Loading...</h1>;
}

export default App;
