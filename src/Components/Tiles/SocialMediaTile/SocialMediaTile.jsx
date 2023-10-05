import { useState } from 'react';

import SocialButton from '../../SocialButton/SocialButton';
import { socialMediaList } from '../../../socialMediaList';
import SocialAddButton from '../../SocialAddBtn/SocialAddBtn';

const SocialMediaTile = () => {
    // * Initialize the useState of social buttons list with the 3 first social medias of socialMediaList
    const initialSocialButtons = socialMediaList.slice(0, 3);
    const [socialBtns, setSocialBtns] = useState(initialSocialButtons);

    const handleSubmit = (selectedElement) => {
        if (selectedElement) {
            // * Update the list with the selected element get from argument of prop {onSubmit}
            setSocialBtns((prevBtns) => [...prevBtns, selectedElement]);
        }
    };

    const handleDelete = (selectedElement) => {
        // * Delete selected element from the list
        setSocialBtns((prevBtns) => prevBtns.filter((btn) => btn !== selectedElement));
    };

    return (
        <div className="social_btns-wrapper">
            {socialBtns.map((item, index) => (
                <SocialButton
                    // * For each element in the list display a SocialButton
                    key={index}
                    socialData={item} // * Store element itself in a prop
                    className={item.className}
                    onSubmit={handleSubmit} // * Get the selectedElement as argument of the prop {onSubmit} passed to child
                    onDelete={handleDelete}
                />
            ))}
            <SocialAddButton key={socialBtns.length} className="add_btn" onSubmit={handleSubmit} />
        </div>
    );
};

export default SocialMediaTile;
