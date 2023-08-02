/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import SocialButton from './SocialButton';
import { socialMediaList } from '../socialMediaList';
import SocialAddButton from './SocialAddBtn';

const SocialMediaTile = () => {
    const initialSocialButtons = socialMediaList.slice(0, 3);
    const [btnCount, setBtnCount] = useState(0);

    const [socialBtns, setSocialBtns] = useState(initialSocialButtons);

    const handleOnSubmit = (selectedSocial) => {
        if (selectedSocial) {
            setSocialBtns((prevBtns) => [...prevBtns, selectedSocial]);
            setBtnCount((prevCount) => prevCount + 1);
        }

        console.log(socialBtns);
    };

    const handleDelete = (selectedSocial) => {
        setSocialBtns((prevBtns) => prevBtns.filter((btn) => btn.id !== selectedSocial.id));
    };

    return (
        <div className="social-btns-wrapper">
            {socialBtns.map((item, index) => {
                return (
                    <SocialButton
                        key={uuidv4()}
                        id={item.id}
                        index={index}
                        className={item.className}
                        onSubmit={handleOnSubmit}
                        onDelete={handleDelete}
                    />
                );
            })}
            <SocialAddButton key={`add-btn-${btnCount}`} className="add-btn" onSubmit={handleOnSubmit} />
        </div>
    );
};

export default SocialMediaTile;
