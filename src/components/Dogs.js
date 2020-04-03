import React from 'react';
import axios from 'axios';
import { Button, Box, Image } from 'grommet';

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
        <div> <p>
            <Box height="medium" width="large" alignSelf="center">
                <Image
                    alignSelf="center"
                    fit="contain"
                    src={dogPhoto}
                />
            </Box>
            </p>
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