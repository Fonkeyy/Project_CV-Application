/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const SocialButton = ({ socialData, onSubmit, onDelete }) => {
    const [selectedSocial, setSelectedSocial] = useState(null);
    const [url, setUrl] = useState('');

    const handleOnClick = () => {
        setSelectedSocial(socialData);
    };

    const handleOnDelete = () => {
        onDelete(socialData);
    };

    const handleOnSubmit = () => {
        socialData.url = url;
        setSelectedSocial(false);
        onSubmit(socialData);
    };

    const handleOnChange = (event) => {
        setUrl(event.target.value);
    };

    return (
        <>
            {selectedSocial ? (
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

export default SocialButton;
