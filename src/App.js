import React from 'react';
import { Grommet } from 'grommet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dogs from './components/Dogs';
import NoDogs from './components/NoDogs';
import Quotes from './components/Quotes';
import SearchDogs from './components/SearchDogs';
import './App.css';

function App() {
  return (
    <column>
      <Grommet plain>
        <div className="App">
          <h1>Random Dog Photos! </h1>
          <Quotes />
          <Dogs />
          <NoDogs />
          <br />
          <SearchDogs />
        </div>
      </Grommet>
    </column>
  );
}

export default App;
