import { useState, React, useEffect } from 'react';
import './styles/App.css';
import ImageGallery from './components/ImageGallery';
import fetchImages from './utils/fetchImages';
import Score from './components/Score';
import GameExplanation from './components/GameExplanation';

function App() {
  const [allImages, setImages] = useState([]);

  const [error, setError] = useState(false);

  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState({ currentScore: 0, highScore: 0 });

  useEffect(() => {
    async function prepareImages() {
      try {
        setImages(await fetchImages());
      } catch (fetchError) {
        setError(true);
      }
    }
    prepareImages();
  }, []);

  const increaseScore = () => {
    setScore({ ...score, currentScore: (score.currentScore += 1) });

    if (score.currentScore > score.highScore)
      setScore({ ...score, highScore: score.currentScore });
  };

  function resetGame() {
    setScore({ ...score, currentScore: 0 });
    setGameWon(false);
    setGameFinished(false);
    setGameStarted(false);
  }

  // Start screen
  if (!gameStarted && !gameFinished && !gameWon)
    return <GameExplanation setGameStarted={() => setGameStarted(true)} />;

  // Play screen
  if (gameStarted && !gameFinished && !gameWon) {
    if (allImages.length === 0 && error) {
      return <h1>Unable to fetch images from API.</h1>;
    }
    if (allImages.length === 0) {
      return <h1>Loading images...</h1>;
    }
    // Display ImageGallery only after images have been fetched
    return (
      <>
        <Score score={score} />
        <ImageGallery
          allImages={allImages}
          setGameFinished={setGameFinished}
          setGameWon={setGameWon}
          increaseScore={increaseScore}
        />
      </>
    );
  }

  // Lose screen
  if (gameStarted && gameFinished && !gameWon)
    return (
      <>
        <Score score={score} />
        <h1>You lose.</h1>
        <button type="button" className="play-again" onClick={resetGame}>
          Play again
        </button>
      </>
    );

  // Win screen
  if (gameStarted && gameFinished && gameWon)
    return (
      <>
        <Score score={score} />
        <h1>Wait what?! You actually did it! Amazing job!</h1>
        <button type="button" className="play-again" onClick={resetGame}>
          Play again
        </button>
      </>
    );
}

export default App;
