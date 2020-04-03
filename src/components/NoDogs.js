import React from 'react';
import { Button } from 'grommet';

function NoDogs() {
    const [message, setMessage] = React.useState("");

    const [noShow, setNoShow] = React.useState("");

    const toggleNoDogs = () => {
        setMessage(!message);
    }

    const handleClick = () => {
        // two situations
        // situation 1: blank message
        if (message === '') {
            console.log('situation 1!')
            setMessage('You are horrible! Would you like to see a cat?')
        
        } else {
            console.log('situation 2!')
            setMessage('')
        }
    }

    return (
        <div>
            <p>
                <Button
                    label="I don't like dogs"
                   // onClick={() => {
                   //     setMessage('You are horrible!')
                   // }}
                    onClick={handleClick}
                    // onChange={toggleNoDogs}
                />
            </p>
            <p>{message}</p>
        </div>
    )
}


export default NoDogs