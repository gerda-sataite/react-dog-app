import React from 'react';
import { Grommet, } from 'grommet';
import { Router, Link } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoDogs from './components/NoDogs';
import Dogs from './components/Dogs';
import Quotes from './components/Quotes';
import SearchDogs from './components/SearchDogs';
import './App.css';


function App() {
  let Home = () => <div></div>
  const NotFound = () => <p>Sorry, nothing here</p>

  return (

    <Grommet plain>

      <div>
        <h1>Random Dog Photos! </h1>
        
        <nav>
          <p><Link to="/">Home</Link>{" "}</p>
          <p><Link to="/inspiration">Inspiration</Link></p>
          <p><Link to="/dogs">Dogs</Link></p>
          <p><Link to="/search-dogs">Search Breeds</Link></p>
          <p><Link to="/no-dogs">I don't like dogs</Link></p>
        </nav>


        <Router>
          <Home path="/" />
          <Quotes path="/inspiration" />
          <Dogs path="/dogs" />
          <NoDogs path="/no-dogs" />
          <SearchDogs path="/search-dogs" />
          <NotFound default />
        </Router>
        
      </div>
    </Grommet>



  );
}

export default App;
