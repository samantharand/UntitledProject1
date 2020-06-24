import React, { useState, useEffect } from 'react';
import About from './pages/About.js'
import Home from './pages/Home.js'
import Words from './pages/Words.js'
import './App.css';

export default function App() {
  let [mode, setMode] = useState(0)


  const switchMode = (event) => {
    console.log('switchMode');
    if(event.keyCode === 39 && mode < 2) {
      setMode(mode += 1)
    } else if (event.keyCode === 37 && mode > 0) {
      setMode(mode -= 1)
    } else {
      console.log("not left or right");
    }
  }

  document.addEventListener('keydown', switchMode)
  
  return (
    <div className="App">
      {
        mode === 0
        &&
        <Words />
      }
      {
        mode === 1
        &&
        <About />
      }
      {
        mode === 2
        &&
        <Home />
      }
    </div>
  );
}