import React from 'react';

const userOutput = (props) => {

    const myStyle = {
        color: 'green'
    };

    return (
        <div style={myStyle}>
            <p>{props.username}</p>
            <p>2</p>
        </div>
    )
};

export default userOutput;