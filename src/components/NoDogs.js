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
        </div>
    )
}


export default NoDogs