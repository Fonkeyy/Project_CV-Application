import { useContext, useState } from 'react';
import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import ProfilePicture from '../../ProfilePicture/ProfilePicture';

import styles from './HeaderSection.module.css';
import Button from '../../Button/Button';
import { ValidContext } from '../../../contexts/validContext';

const HeaderSection = () => {
    const [url, setUrl] = useState('dist/assets/img/home.jpg');
    // const [url, setUrl] = useState('src/assets/img/laptop.avif');
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isEditClick, setIsEditClick] = useState(false);
    const { isValidated } = useContext(ValidContext);

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
        <header>
            <div
                className={styles.header_background}
                alt={url}
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    width: '100vw',
                    height: '70vh',
                }}
                tabIndex={0}
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
                onClick={() => setIsClicked(!isClicked)}
                onKeyDown={handleOnKeyDown}></div>
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
            {(isMouseOver || isClicked) && url && !isValidated && (
                <div
                    className={styles.edit_bg_img_wrapper}
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}>
                    <p>Edit Background:</p>
                    <Button
                        className={`${'edit_btn'} ${'edit_white'}`}
                        onClick={handleEdit}
                        ariaLabel={'edit background image'}
                    />
                </div>
            )}
            {isEditClick && isMouseOver && <input type="file" onChange={handleFileChange} />}
            <ProfilePicture />
        </header>
    );
};

export default HeaderSection;
