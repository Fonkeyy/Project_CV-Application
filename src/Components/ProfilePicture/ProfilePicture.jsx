// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import Button from '../Button/Button';

import './ProfilePicture.css';

const ProfilePicture = () => {
    const [url, setUrl] = useState(
        'https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg'
    );
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

    // * Add url to profile_picture style, manage button appearance depending on file already added or not
    return (
        <div
            id="profile_picture_container"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}>
            <div id="profile_picture" style={{ backgroundImage: `url(${url})` }}></div>
            {isMouseOver && url && <Button className="edit_btn add_profile_picture" onClick={handleEdit} />}
            {isMouseOver && !url && <Button className="add_btn add_profile_picture" onClick={handleEdit} />}
            {isEditClick && <input type="file" onChange={handleFileChange} />}
        </div>
    );
};

export default ProfilePicture;
