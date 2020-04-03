import React from 'react';
import axios from 'axios';
import { Button } from 'grommet';

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
        <div> <img src={dogPhoto} alt="Doggo" class="ui medium rounded image" />
            <p>
                <Button
                    label="More dogs"
                    onClick={getPhoto}
                />
            </p>
        </div>
    )
}

export default Dogs