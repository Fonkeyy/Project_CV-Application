// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import SocialButton from './SocialButton';
import { socialMediaList } from '../socialMediaList';
import SocialAddButton from './SocialAddBtn';

const SocialMediaTile = () => {
    // * Initialize the useState of social buttons list with the 3 first social medias of socialMediaList
    const initialSocialButtons = socialMediaList.slice(0, 3);
    const [socialBtns, setSocialBtns] = useState(initialSocialButtons);

    const handleOnSubmit = (selectedSocial) => {
        if (selectedSocial) {
            // * Update the list with the selected element
            setSocialBtns((prevBtns) => [...prevBtns, selectedSocial]);
        }
    };

    const handleDelete = (selectedSocial) => {
        // * Delete selected element from the list
        setSocialBtns((prevBtns) => prevBtns.filter((btn) => btn !== selectedSocial));
    };

    return (
        <div className="social-btns-wrapper">
            {socialBtns.map((item, index) => (
                <SocialButton
                    // * For each element in the list display a SocialButton
                    key={index}
                    socialData={item} // * Store element itself in a prop
                    className={item.className}
                    onSubmit={handleOnSubmit}
                    onDelete={handleDelete}
                />
            ))}
            <SocialAddButton key={socialBtns.length} className="add-btn" onSubmit={handleOnSubmit} />
        </div>
    );
};

export default SocialMediaTile;
