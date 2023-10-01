import React from 'react';
import PropTypes from 'prop-types';

export default function Score({ score }) {
  return (
    <div className="score">
      <h2>Current score: {score.currentScore}</h2>
      <h2>High score: {score.highScore}</h2>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.shape({
    currentScore: PropTypes.number,
    highScore: PropTypes.number,
  }).isRequired,
};
