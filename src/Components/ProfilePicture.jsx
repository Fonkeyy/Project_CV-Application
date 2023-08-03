// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import Button from './Button';
import InputField from './InputField';

import '../CSS/Components/ProfilePicture.css';
import '../CSS/Components/InputField.css';

const ProfilePicture = () => {
    const [url, setUrl] = useState(
        'https://imgv3.fotor.com/images/slider-image/A-blurry-image-of-a-woman-wearing-red.jpg'
    );
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isEditClick, setIsEditClick] = useState(false);

    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = () => {
        setIsEditClick(false);
    };

    return (
        <div
            id="profile-picture-container"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}>
            <div id="profile-picture" style={{ backgroundImage: `url(${url})` }}></div>
            {isMouseOver && <Button className="edit-btn" onClick={() => setIsEditClick(true)} />}
            {isEditClick && (
                <>
                    <InputField
                        type="url"
                        className="input-text"
                        placeholder="Enter the URl"
                        value={url}
                        onChange={handleChange}
                    />
                    <Button className="submit-btn" onClick={handleSubmit} />
                </>
            )}
        </div>
    );
};

export default ProfilePicture;
