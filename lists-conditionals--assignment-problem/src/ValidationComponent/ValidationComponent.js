import React from 'react';
import CharComponent from '../CharComponent/CharComponent';
// import './ValidationComponent.css';

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
            <CharComponent />
        </div>

    )
};

export default validationComponent;