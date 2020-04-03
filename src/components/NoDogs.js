import React from 'react';
import { Button } from 'grommet';

function NoDogs() {
    const [message, setMessage] = React.useState("");

    const toggleNoDogs = () => {
        setMessage(!message);
    }
    return (
        <div>
            <p>
                <Button
                    label="I don't like dogs"
                    onClick={() => {
                        setMessage("You are horrible")
                    }
                    }
                />
            </p>
            <p>{message}</p>
        </div>
    )
}


export default NoDogs