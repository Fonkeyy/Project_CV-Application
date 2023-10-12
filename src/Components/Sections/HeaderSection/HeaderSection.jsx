import { useContext, useState } from 'react';
import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import ProfilePicture from '../../ProfilePicture/ProfilePicture';

import styles from './HeaderSection.module.css';
import Button from '../../Button/Button';
import { ValidContext } from '../../../contexts/validContext';

const HeaderSection = () => {
    const [url, setUrl] = useState(
        'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80'
    );
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
                    className={styles.edit_wrapper}
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}>
                    <p>Edit Background:</p>
                    <Button className={`${'edit_btn'} ${'edit_white'}`} onClick={handleEdit} />
                </div>
            )}
            {isEditClick && isMouseOver && <input type="file" onChange={handleFileChange} />}
            <ProfilePicture />
        </header>
    );
};

export default HeaderSection;
