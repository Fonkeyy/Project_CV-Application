import { useContext, useState } from 'react';
import { socialMediaList } from '../../../socialMediaList';
import SocialButton from '../../SocialMedia/SocialMedia';
import SocialAddButton from '../../SocialAddBtn/SocialAddBtn';
import { ValidContext } from '../../../contexts/validContext';
import styles from './SocialMediaTile.module.css';

const SocialMediaTile = () => {
    // * Initialize the useState of social buttons list with the 4 first social medias of socialMediaList
    const [socialMediaListCopy] = useState(socialMediaList);
    const initialSocialButtons = socialMediaListCopy.slice(0, 1);
    const [socialBtns, setSocialBtns] = useState(initialSocialButtons);
    const { isValidated } = useContext(ValidContext);

    const handleSubmit = (selectedElement) => {
        const elementButton = socialBtns.find((el) => el.id === selectedElement.id);
        const elementItem = socialMediaListCopy.find((el) => el.id === selectedElement.id);

        if (elementButton) {
            handleDelete(elementButton);
            elementItem.submitted = true;
            setSocialBtns((prevBtns) => [...prevBtns, selectedElement]);
        } else {
            setSocialBtns((prevBtns) => [...prevBtns, selectedElement]);
        }
    };

    const handleDelete = (selectedElement) => {
        // * Delete selected element from the list
        setSocialBtns((prevBtns) => prevBtns.filter((btn) => btn !== selectedElement));

        const elementItem = socialMediaListCopy.find((el) => el.id === selectedElement.id);
        elementItem.submitted = false;
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
                    <SocialAddButton
                        key={socialBtns.length}
                        className="add_btn"
                        onSubmit={handleSubmit}
                        list={socialMediaListCopy}
                    />
                )}
            </div>
        </>
    );
};

export default SocialMediaTile;
