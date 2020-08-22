import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeContext} from './ThemeContext.js.js';

function App() {
  const theme = "light";
  return (
    <ThemeContext.Provider value = {theme}>
      <div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;