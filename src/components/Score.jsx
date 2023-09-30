/* eslint-disable react/prop-types */
import React from 'react';

export default function Score({ score }) {
  return (
    <div className="score">
      <h2>Current score: {score.currentScore}</h2>
      <h2>High score: {score.highScore}</h2>
    </div>
  );
}
