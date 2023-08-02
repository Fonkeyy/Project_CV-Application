// eslint-disable-next-line no-unused-vars

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SocialButton = ({ socialData, onSubmit, onDelete }) => {
    const [element, setElement] = useState(null);
    const [url, setUrl] = useState('');

    const handleOnClick = () => {
        // * Set element to the object passed as prop
        setElement(socialData);
    };

    const handleOnChange = (event) => {
        // * Set url to input value
        setUrl(event.target.value);
    };

    const handleOnDelete = () => {
        // * Send element to parent component through prop {onDelete}
        onDelete(socialData);
        setElement(null);
    };

    const handleOnSubmit = () => {
        // * Set social object url to useState url
        socialData.url = url;
        setElement(null);
        // * Send element to parent component through prop {onSubmit}
        onSubmit(socialData);
    };

    // * If the social button is clicked render input for url + submit and delete buttons
    // * Else render the logo
    return (
        <>
            {element ? (
                <>
                    <button id={socialData.id} className={socialData.className}></button>
                    <input onChange={handleOnChange} />
                    <button className="submit-btn" onClick={handleOnSubmit}></button>
                    <button className="delete-btn" onClick={handleOnDelete}></button>
                </>
            ) : (
                <button id={socialData.id} className={socialData.className} onClick={handleOnClick}></button>
            )}
        </>
    );
};

SocialButton.propTypes = {
    socialData: PropTypes.object.isRequired, // For example, expecting an object
    className: PropTypes.string.isRequired, // Expecting a string
    onSubmit: PropTypes.func.isRequired, // Expecting a function
    onDelete: PropTypes.func.isRequired, // Expecting a function
};

export default SocialButton;
