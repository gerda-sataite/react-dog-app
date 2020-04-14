import React from 'react';
import { Grommet, } from 'grommet';
import { Router } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dogs from './components/Dogs';
<<<<<<< HEAD
import NavBar from './components/NavBar';
=======
>>>>>>> add37775b880b53598c6882182adc7eb1e0307b9
import NoDogs from './components/NoDogs';
import Quotes from './components/Quotes';
import SearchDogs from './components/SearchDogs';
import Home from './components/About';
import './App.css';

<<<<<<< HEAD


=======
>>>>>>> add37775b880b53598c6882182adc7eb1e0307b9
function App() {
  const NotFound = () => <p>Sorry, nothing here</p>

  return (

    <Grommet plain>

      <div>
        <h1>Random Dog Photos! </h1>
        <p>A place for good vibes</p>
      </div>
<<<<<<< HEAD
      <NavBar />

      <br />
      <Router>
        <Home path="/" />
        <Quotes path="/inspiration" />
        <Dogs path="/dogs" />
        <NoDogs path="/no-dogs" />
        <SearchDogs path="/search-dogs" />
        <NotFound default />
      </Router>


    </Grommet>
  )
=======
    </Grommet>
  );
>>>>>>> add37775b880b53598c6882182adc7eb1e0307b9
}

export default App
