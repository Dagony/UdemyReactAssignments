import React from 'react';

import './UserInput.css';

const userInput = (props) => {
    return <input className={"UserInput"} onChange={props.changed} type={"text"} value={props.username}/>
};

export default userInput;