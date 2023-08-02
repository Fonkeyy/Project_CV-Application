/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { socialMediaList } from '../socialMediaList';

const SocialButton = (props) => {
    const [selectedSocial, setSelectedSocial] = useState(null);
    const [url, setUrl] = useState('');

    const handleOnClick = (event) => {
        const target = event.target;
        const selectedSocial = socialMediaList.find((item) => item.id === target.id);

        setSelectedSocial(selectedSocial);
    };

    const handleOnDelete = () => {
        props.onDelete(selectedSocial);
    };

    const handleOnSubmit = () => {
        selectedSocial.url = url;
        setSelectedSocial(false);
    };

    const handleOnChange = (event) => {
        setUrl(event.target.value);
    };

    return (
        <>
            {selectedSocial ? (
                <>
                    <button id={props.id} className={props.className}></button>
                    <input onChange={handleOnChange} />
                    <button className="submit-btn" onClick={handleOnSubmit}></button>
                    <button className="delete-btn" onClick={handleOnDelete}></button>
                </>
            ) : (
                <button id={props.id} className={props.className} onClick={handleOnClick}></button>
            )}
        </>
    );
};

export default SocialButton;
