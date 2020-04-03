import React from 'react';
import axios from 'axios';
import NoDogs from './components/NoDogs';
import Dogs from './components/Dogs';
import Quotes from './components/Quotes';
import './App.css';

function App() {



  return (
    <column>
      <div className="App">
        <h1>Random Dog Photos! </h1>
        <Quotes />
        <Dogs />
        <br />
        <NoDogs />
      </div>
    </column>
  );
}

export default App;
