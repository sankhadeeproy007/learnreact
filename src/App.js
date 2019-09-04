import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Person from './Person';

const App = () => {
  const [name, setName] = useState('Sankhadeep');

  const handleClick = name => {
    setName(name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{name} Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Person name={name} onClick={handleClick} />
    </div>
  );
};

export default App;
