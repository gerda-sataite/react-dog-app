import React from 'react';
import { Grommet } from 'grommet';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoDogs from './components/NoDogs';
import Dogs from './components/Dogs';
import Quotes from './components/Quotes';
import './App.css';
import SearchDogs from './components/SearchDogs';

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
