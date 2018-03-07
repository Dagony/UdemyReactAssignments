import React from 'react';

const validationComponent = (props) => {

    let message = null;

    if (props.fieldLength >= 5) {
        message = "Text long enough";
    } else {
        message = "Text too short";
    }

    return (
        <div className={"validationComponent"}>
            {message}
        </div>

    )
};

export default validationComponent;