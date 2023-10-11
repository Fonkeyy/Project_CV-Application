import { useState } from 'react';
import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import ProfilePicture from '../../ProfilePicture/ProfilePicture';

import styles from './HeaderSection.module.css';
import Button from '../../Button/Button';

const HeaderSection = () => {
    const [url, setUrl] = useState(
        'https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg'
    );
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isEditClick, setIsEditClick] = useState(false);

    const handleEdit = () => {
        setIsEditClick(!isEditClick);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setUrl(imageUrl);
        setIsEditClick(!isEditClick);
        setIsMouseOver(!isMouseOver);
    };

    const handleOnKeyDown = (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            setIsClicked(!isClicked);
        }
    };

    return (
        <header
            style={{ backgroundImage: `url(${url})` }}
            tabIndex={0}
            onMouseEnter={() => setIsMouseOver(!isMouseOver)}
            onMouseLeave={() => setIsMouseOver(!isMouseOver)}
            onClick={() => setIsClicked(!isClicked)}
            onKeyDown={handleOnKeyDown}>
            <div className={styles.header_content}>
                <HeaderComponent
                    id="full_name"
                    inputClassName={`${styles.input_text} ${styles.full_name}`}
                    placeholder="John Doe"
                />
                <HeaderComponent
                    id="title"
                    inputClassName={`${styles.input_text} ${styles.title}`}
                    placeholder="Web Developer"
                />
            </div>
            <ProfilePicture />
            {(isMouseOver || isClicked) && url && (
                <Button className={`${'edit_btn'} ${styles.add_profile_picture}`} onClick={handleEdit} />
            )}
            {isEditClick && <input type="file" onChange={handleFileChange} />}
        </header>
    );
};

export default HeaderSection;
