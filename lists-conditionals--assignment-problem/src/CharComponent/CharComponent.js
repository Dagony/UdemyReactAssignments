import React from 'react';

import './CharComponent.css';

const CharComponent = (props) => {

    const style = {
        "display" : "inline-block",
        "padding" : "16px",
        "textAlign" : "center",
        "margin" : "16px",
        "border" : "1px solid black"
    };


    return (
        <div onClick={props.click} style={style}>{props.character}</div>
    )
};

export default CharComponent;