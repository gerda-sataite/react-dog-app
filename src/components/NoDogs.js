import React from 'react';
import { Button } from 'grommet';

function NoDogs() {
    const [message, setMessage] = React.useState("");

    const handleClick = () => {
        if (message === '') {
            setMessage('Okay, click the gif then...')
        } else {
            setMessage('')
        }
    }

    return (
        <div>
            <p>
                <Button
                    label="Would you like to see cats?"
                    onClick={handleClick}
                />
            </p>
            <p>{message}</p>
            <a 
            href="https://www.pexels.com/search/cat/"
            rel="noopener noreferrer"
            target="_blank">
                <img
                    alt="Cats then"
                    src="https://66.media.tumblr.com/9365cfe6de0419afa5df89e019c73b5e/tumblr_mrdy178jeZ1rlfsw2o1_250.gif"></img>
            </a>
        </div>
    )
}


export default NoDogs