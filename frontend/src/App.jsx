import { useState } from 'react'
import React from 'react';
import LoginRegister from './assets/LoginRegister';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Game from './assets/Game';
// import { ConnectButton } from '@rainbow-me/rainbowkit'

function App() {
 

  return (
    <>
      <div>
          <Router>
            <Routes>
              <Route path="/" element={<LoginRegister />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
