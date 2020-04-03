import React from 'react';
import axios from 'axios';

function Dogs() {
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

    return (
        <div> <img src={dogPhoto} alt="Doggo" />
            <p><button onClick={getPhoto}>More dogs</button></p>
        </div>
    )
}

export default Dogs