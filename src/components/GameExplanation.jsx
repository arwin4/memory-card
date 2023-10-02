import React from 'react';
import PropTypes from 'prop-types';

export default function GameExplanation({ setGameStarted }) {
  return (
    <>
      <p>
        Click on a picture you haven&apos;t clicked on before. How good is your
        memory?
      </p>
      <p>
        Images courtesy of{' '}
        <a target="blank" href="https://pexels.com">
          pexels.com
        </a>
      </p>
      <button
        type="button"
        className="start-game"
        onClick={() => setGameStarted(true)}
      >
        Start Game
      </button>
    </>
  );
}

GameExplanation.propTypes = {
  setGameStarted: PropTypes.func.isRequired,
};
