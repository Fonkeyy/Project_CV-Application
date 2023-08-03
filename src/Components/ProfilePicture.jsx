// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import Button from './Button';

import '../CSS/Components/ProfilePicture.css';

const ProfilePicture = () => {
    const [url, setUrl] = useState('');
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isEditClick, setIsEditClick] = useState(false);

    const handleEdit = () => {
        setIsEditClick(true);
        setIsMouseOver(false);
    };

    // * Open file explorer and set the chosen file as url state
    // * On file change get the file, create object URL with the file and setUrl with this object
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setUrl(imageUrl);
        setIsEditClick(false);
        setIsMouseOver(false);
    };

    // * Add url to profile-picture style, manage button appearance depending on file already added or not
    return (
        <div
            id="profile-picture-container"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}>
            <div id="profile-picture" style={{ backgroundImage: `url(${url})` }}></div>
            {isMouseOver && url && <Button className="edit-btn add-profile-picture" onClick={handleEdit} />}
            {isMouseOver && !url && <Button className="add-btn add-profile-picture" onClick={handleEdit} />}
            {isEditClick && <input type="file" onChange={handleFileChange} />}
        </div>
    );
};

export default ProfilePicture;
