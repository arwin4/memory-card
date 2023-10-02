import { useState, React, useEffect } from 'react';
import './styles/App.css';
import ImageGallery from './components/ImageGallery';
import fetchImages from './utils/fetchImages';
import Score from './components/Score';
import GameExplanation from './components/GameExplanation';

function App() {
  const [allImages, setImages] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState({ currentScore: 0, highScore: 0 });

  useEffect(() => {
    async function prepareImages() {
      setImages(await fetchImages());
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
    setGameLost(false);
  }

  if (!gameStarted) return <GameExplanation setGameStarted={setGameStarted} />;

  if (gameLost)
    return (
      <>
        <Score score={score} />
        <h1>You lose.</h1>
        <button type="button" className="play-again" onClick={resetGame}>
          Play again
        </button>
      </>
    );

  if (gameWon)
    return (
      <>
        <Score score={score} />
        <h1>Wait what?! You actually did it! Amazing job!</h1>
        <button type="button" className="play-again" onClick={resetGame}>
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
          setGameWon={setGameWon}
          increaseScore={increaseScore}
        />
      </>
    );
  }
  return <h1>Loading images...</h1>;
}

export default App;
