import React from 'react';
import axios from 'axios';
import { Button } from 'grommet';

function SearchDogs() {
    const [typedBreed, setTypedBreed] = React.useState("")

    const getBreed = () => {
        const request = axios.get(`https://dog.ceo/api/breed/${typedBreed}/images`)

        request.then(response => {
            console.log(response.data.message)

        })
    }

    React.useEffect(() => {
        getBreed();
    });
    console.log(typedBreed)

    return (
        <div>
            <p><input
                value={typedBreed}
                onChange={(event) => setTypedBreed(event.target.value)}
            ></input>
            </p>
            <p><Button
                label="Search"
                onClick={() => {
                    getBreed()
                    setTypedBreed('')
                }}
            />
            </p>
            <p>
                <image
                    alt="Doggo"
                    src={typedBreed.message}></image>
            </p>
        </div>
    )
}

export default SearchDogs