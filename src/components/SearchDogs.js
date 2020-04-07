import React from 'react';
import axios from 'axios';
import { Button } from 'grommet';

function SearchDogs() {
    const [dogBreed, setDogBreed] = React.useState("")
    const getBreed = () => {
        const request = axios.get(`https://dog.ceo/api/breeds/list/all`)

        request.then(response => {
            const randomBreed = response.data.message;
            setDogBreed(randomBreed);
        })
    }
    React.useEffect(() => {
        getBreed();
    }, []);
    console.log(dogBreed)

    return (
        <div>
            <input name='Dog breed'></input>
            <Button 
            label="Search"
            onClick={getBreed} 
            />
        </div>
    )
}

export default SearchDogs