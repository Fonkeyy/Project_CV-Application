import { useState } from 'react';

import { socialMediaList } from '../../../socialMediaList';
import SocialButton from '../../SocialButton/SocialButton';
import SocialAddButton from '../../SocialAddBtn/SocialAddBtn';

import styles from './SocialMediaTile.module.css';

const SocialMediaTile = () => {
    // * Initialize the useState of social buttons list with the 3 first social medias of socialMediaList
    const initialSocialButtons = socialMediaList.slice(0, 4);
    const [socialBtns, setSocialBtns] = useState(initialSocialButtons);

    const handleSubmit = (selectedElement) => {
        if (selectedElement) {
            // * Update the list with the selected element got from prop argument {onSubmit}
            setSocialBtns((prevBtns) => [...prevBtns, selectedElement]);
        }
    };

    const handleDelete = (selectedElement) => {
        // * Delete selected element from the list
        setSocialBtns((prevBtns) => prevBtns.filter((btn) => btn !== selectedElement));
    };

    return (
        <>
            <div className={styles.btn_wrapper}>
                {socialBtns.map((item, index) => (
                    <SocialButton
                        // * For each element in the list display a SocialButton
                        key={index}
                        socialData={item} // * Store element itself in a prop
                        onSubmit={handleSubmit} // * Get the selectedElement as argument of the prop {onSubmit} passed to child
                        onDelete={handleDelete}
                    />
                ))}
                <SocialAddButton key={socialBtns.length} className="add_btn" onSubmit={handleSubmit} />
            </div>
            {/* <div className={styles.add_btn_container}>
            </div> */}
        </>
    );
};

export default SocialMediaTile;
