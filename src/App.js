import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [dogPhoto, setDogPhoto] = React.useState();
  const getPhoto = () => {
    const request = axios.get(`https://dog.ceo/api/breeds/image/random`)

  request.then(response => {
      const randomPhoto = response.data.message;
      setDogPhoto(randomPhoto);
  })
}
  React.useEffect(() => {
    getPhoto();
  }, []);
  console.log(dogPhoto)
  const [ message, setMessage] = React.useState("");
  

  return (
    <div className="App">
      <h1>Random Dog Photos! </h1>
      
      <img src={dogPhoto} alt="Doggo" />
      <br />
      <p><button onClick={getPhoto}>More dogs</button></p>
      <button onClick={() => {
        setMessage("You are horrible")
      }} >
        I don't like dogs</button>
        <p>{message}</p>
    </div>
  );
}

export default App;
