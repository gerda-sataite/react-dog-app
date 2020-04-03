import React from 'react';

function NoDogs() {
    const [ message, setMessage] = React.useState("");
    
    return (
        <div>
            <button onClick={() => {
            setMessage("You are horrible")
          }} >
            I don't like dogs</button>
            <p>{message}</p>
        </div>
    )
}

export default NoDogs