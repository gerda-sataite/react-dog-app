import React from 'react';
import { Button } from 'grommet';

function NoDogs() {
    const [message, setMessage] = React.useState("");

    const handleClick = () => {
        if (message === '') {
            setMessage('You are horrible! Would you like to see a cat?')
        } else {
            setMessage('')
        }
    }

    return (
        <div>
            <p>
                <Button
                    label="I don't like dogs"
                    onClick={handleClick}
                />
            </p>
            <p>{message}</p>

            <img 
            alt="Cats then"
            src="https://66.media.tumblr.com/9365cfe6de0419afa5df89e019c73b5e/tumblr_mrdy178jeZ1rlfsw2o1_250.gif"></img>
            
        </div>
    )
}


export default NoDogs