import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import { ValidContext } from '../../contexts/validContext';
import styles from '../Tiles/SocialMediaTile/SocialMediaTile.module.css';

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
        <div className={styles.social_media_wrapper}>
            {!isValidated && !isSubmitted && (
                <>
                    <Button
                        className={socialData.className}
                        ariaLabel={socialData.id}
                        onClick={() => setIsSubmitted(!isSubmitted)}
                    />
                    <div className={styles.input_wrapper}>
                        <InputField
                            type="url"
                            id="url"
                            placeholder={socialData.url ? socialData.url : 'Enter the URL'}
                            onChange={handleChange}
                        />
                        <div className={styles.btn_wrapper}>
                            <Button
                                className="submit_btn"
                                ariaLabel={`submit ${socialData.id}`}
                                onClick={handleSubmit}
                            />
                            <Button
                                className="delete_btn"
                                ariaLabel={`delete ${socialData.id}`}
                                onClick={handleDelete}
                            />
                        </div>
                    </div>
                </>
            )}

            {!isValidated && isSubmitted && (
                <Button
                    className={socialData.className}
                    ariaLabel={socialData.id}
                    onClick={() => setIsSubmitted(!isSubmitted)}
                />
            )}

            {isValidated && socialData.url && (
                <a href={`http://${socialData.url}`} target="_blank" rel="noreferrer">
                    <Button className={socialData.className} ariaLabel={socialData.id} />
                </a>
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
