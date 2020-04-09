import React from 'react';
import axios from 'axios';
import { Button, Box, Image } from 'grommet';

function SearchDogs() {
    const [typedBreed, setTypedBreed] = React.useState("")
    const [photoUrls, setPhotoUrls] = React.useState([])

    const getBreed = () => {
        const request = axios.get(`https://dog.ceo/api/breed/${typedBreed}/images`)

        request.then(response => {
            setPhotoUrls(response.data.message)
        })
    }
    // React.useEffect(() => {
    //     getBreed();
    // }, []);
    console.log(typedBreed)

    console.log('photoUrls:', photoUrls)

    if (!photoUrls.length) {
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
            </div>
        )
    } else {
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
                        setPhotoUrls([])
                    }}
                />
                </p>
                
                <Box height="medium" width="large" alignSelf="center">
                <Image
                    alignSelf="center"
                    fit="contain"
                    src={photoUrls[0]}
                />
            </Box>
                
            </div>
        )
    }




}

export default SearchDogs