import React from 'react';

import './CharComponent.css';

const charComponent = (props) => {

    const style = {
        "display" : "inline-block",
        "padding" : "16px",
        "text-align" : "center",
        "margin" : "16px",
        "border" : "1px solid black"
    };

    return (
        <div style={style}>blazz</div>
    )
};

export default charComponent;