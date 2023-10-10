import { useContext, useState } from 'react';

import { socialMediaList } from '../../../socialMediaList';
import SocialButton from '../../SocialMedia/SocialMedia';
import SocialAddButton from '../../SocialAddBtn/SocialAddBtn';

import styles from './SocialMediaTile.module.css';
import { ValidContext } from '../../../contexts/validContext';

const SocialMediaTile = () => {
    // * Initialize the useState of social buttons list with the 4 first social medias of socialMediaList
    const initialSocialButtons = socialMediaList.slice(0, 1);
    const [socialBtns, setSocialBtns] = useState(initialSocialButtons);
    const { isValidated } = useContext(ValidContext);

    const handleSubmit = (selectedElement) => {
        const element = socialBtns.find((el) => el.id === selectedElement.id);
        selectedElement.submitted = true;

        if (element) {
            handleDelete(element);
            setSocialBtns((prevBtns) => [...prevBtns, selectedElement]);
        } else {
            setSocialBtns((prevBtns) => [...prevBtns, selectedElement]);
        }
    };

    const handleDelete = (selectedElement) => {
        // * Delete selected element from the list
        setSocialBtns((prevBtns) => prevBtns.filter((btn) => btn !== selectedElement));
    };

    return (
        <>
            <div className={styles.social_media_tile}>
                {socialBtns.map((item) => (
                    <SocialButton
                        // * For each element in the list display a SocialButton
                        key={item.id}
                        socialData={item} // * Store element itself in a prop
                        onSubmit={handleSubmit} // * Get the selectedElement as argument of the prop {onSubmit} passed to child
                        onDelete={handleDelete}
                        submitted={item.submitted}
                    />
                ))}
                {!isValidated && (
                    <SocialAddButton key={socialBtns.length} className="add_btn" onSubmit={handleSubmit} />
                )}
            </div>
        </>
    );
};

export default SocialMediaTile;
