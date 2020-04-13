import React from 'react';
import { Button } from 'grommet';

function NoDogs() {
    const [message, setMessage] = React.useState("");

    const handleClick = () => {
        if (message === '') {
            setMessage('In my opinion, dogs are cuter...')
        } else {
            setMessage('')
        }
    }

    return (
        <div>
            <p>
                <Button
                    label="For cats, click the gif"
                    onClick={handleClick}
                />
            </p>
            <p>{message}</p>
            <a href="https://www.pexels.com/search/cat/">
                <img
                    alt="Cats then"
                    src="https://66.media.tumblr.com/9365cfe6de0419afa5df89e019c73b5e/tumblr_mrdy178jeZ1rlfsw2o1_250.gif"></img>
            </a>
        </div>
    )
}


export default NoDogs