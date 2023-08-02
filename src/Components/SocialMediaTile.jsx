/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import SocialButton from './SocialMediaBtn';
import Button from './Button';

const initialSocialButtons = [
    { id: 'linkedin', className: 'linkedin social-btn' },
    { id: 'twitter', className: 'twitter social-btn' },
    { id: 'facebook', className: 'facebook social-btn' },
];

const SocialMediaTile = () => {
    const [socialBtns, setSocialBtns] = useState(initialSocialButtons);

    const handleAddClick = () => {
        setSocialBtns((prevBtns) => [...prevBtns, {}]);
    };

    return (
        <div className="social-btns-wrapper">
            {socialBtns.map((item) => {
                return <SocialButton key={uuidv4()} id={item.id} className={item.className} />;
            })}
            <Button className="add-btn" onClick={handleAddClick} />
        </div>
    );
};

export default SocialMediaTile;
