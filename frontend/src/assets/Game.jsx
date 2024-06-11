// src/Game.jsx
import React, { useState } from 'react';
import { ethers } from 'ethers';
import GameScores from '../artifacts/contracts/GameScores.sol/GameScores.json';

const gameScoresAddress = 'YOUR_SMART_CONTRACT_ADDRESS';

const Game = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [gameScoresContract, setGameScoresContract] = useState(null);
  const [score, setScore] = useState(0);

  const handleStartGame = async () => {
    const newProvider = new ethers.providers.Web3Provider(window.ethereum);
    const newSigner = newProvider.getSigner();
    const contract = new ethers.Contract(gameScoresAddress, GameScores.abi, newSigner);

    setProvider(newProvider);
    setSigner(newSigner);
    setGameScoresContract(contract);
  };

  const handleEndGame = async () => {
    const startTime = Math.floor(Date.now() / 1000) - 60; // example start time
    const endTime = Math.floor(Date.now() / 1000); // current time
    const tx = await gameScoresContract.addScore(startTime, endTime, score);
    await tx.wait();
    alert('Score saved!');
  };

  return (
    <div>
      <h1>Game</h1>
      <button onClick={handleStartGame}>Start Game</button>
      <button onClick={handleEndGame}>End Game</button>
      <input
        type="number"
        value={score}
        onChange={(e) => setScore(parseInt(e.target.value))}
      />
    </div>
  );
};

export default Game;
