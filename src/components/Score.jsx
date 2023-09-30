/* eslint-disable react/prop-types */
import React from 'react';

export default function Score({ score }) {
  return (
    <>
      <h2>Current score: {score.currentScore}</h2>
      <h2>Highscore: {score.highScore}</h2>
    </>
  );
}
