// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputField from '../InputField/InputField';
import Button from '../Button/Button';

const SocialButton = ({ socialData, onSubmit, onDelete }) => {
    const [element, setElement] = useState(null);
    const [url, setUrl] = useState('');

    const handleOnClick = () => {
        // * Set element to the object passed as prop
        setElement(socialData);
    };

    const handleChange = (event) => {
        // * Set url to input value
        setUrl(event.target.value);
    };

    const handleDelete = () => {
        // * Send element to parent component through prop {onDelete}
        onDelete(socialData);
        setElement(null);
    };

    const handleSubmit = () => {
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
                    <Button id={socialData.id} className={socialData.className} />
                    <InputField type="url" placeholder={'Enter the URL'} onChange={handleChange} />
                    <Button className="submit-btn" onClick={handleSubmit} />
                    <Button className="delete-btn" onClick={handleDelete} />
                </>
            ) : (
                <Button id={socialData.id} className={socialData.className} onClick={handleOnClick} />
            )}
        </>
    );
};

SocialButton.propTypes = {
    socialData: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default SocialButton;
