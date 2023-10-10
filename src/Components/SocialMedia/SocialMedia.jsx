import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import '../Button/Button.css';
import styles from '../Tiles/SocialMediaTile/SocialMediaTile.module.css';

import { ValidContext } from '../../contexts/validContext';

const SocialButton = ({ socialData, onSubmit, onDelete, submitted }) => {
    const { isValidated } = useContext(ValidContext);
    const [url, setUrl] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(submitted);

    const handleChange = (event) => {
        // * Set url to input value
        setUrl(event.target.value);
    };

    const handleDelete = () => {
        // * Send element to parent component through prop {onDelete}
        onDelete(socialData);
    };

    const handleSubmit = () => {
        if (url) {
            socialData.url = url;
            setIsSubmitted(true);
            onSubmit(socialData);
        } else {
            alert('Please enter a valid url before submitting');
        }
    };

    return (
        <div className={styles.social_media_container}>
            {isValidated && socialData.url ? (
                <a href={`http://${socialData.url}`} target="_blank" rel="noreferrer">
                    <Button id={socialData.id} className={socialData.className} />
                </a>
            ) : (
                <>
                    {!isValidated && isSubmitted ? (
                        <Button
                            id={socialData.id}
                            className={socialData.className}
                            onClick={() => setIsSubmitted(!isSubmitted)}
                        />
                    ) : (
                        <>
                            {!isValidated && !isSubmitted && (
                                <>
                                    <Button id={socialData.id} className={socialData.className} />
                                    <div className={styles.input_wrapper}>
                                        <InputField
                                            type="url"
                                            placeholder={socialData.url ? socialData.url : 'Enter the URL'}
                                            onChange={handleChange}
                                        />
                                        <div className={styles.btn_wrapper}>
                                            <Button className="submit_btn" onClick={handleSubmit} />
                                            <Button className="delete_btn" onClick={handleDelete} />
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};
SocialButton.propTypes = {
    socialData: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    submitted: PropTypes.bool.isRequired,
};

export default SocialButton;
