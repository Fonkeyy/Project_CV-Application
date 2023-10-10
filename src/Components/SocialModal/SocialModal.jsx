import { useState } from 'react';
import PropTypes from 'prop-types';
import { socialMediaList } from '../../socialMediaList';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import styles from './SocialModal.module.css';

const SocialModal = ({ onSubmit }) => {
    const [selectedElement, setSelectedElement] = useState(null);

    const handleSocialSelect = (event) => {
        // * Get the selected element id from the select list with event.target
        const selectedElementId = event.target.value;
        // * Find the corresponding element in socialMediaList
        const selectedElementMedia = socialMediaList.find((media) => media.id === selectedElementId);
        // * Set it to useState
        setSelectedElement(selectedElementMedia);
    };

    // * On input change set url of selected element to input value
    const handleUrlChange = (event) => {
        const url = event.target.value;
        setSelectedElement((prevSocial) => ({ ...prevSocial, url: url }));
    };

    // * If there is a selected element and an url send selected element to parent component through prop {on submit}
    const handleSubmit = () => {
        if (selectedElement?.url) {
            onSubmit(selectedElement);
        } else {
            alert('Please enter valid URL before submitting');
        }
    };

    // * Render list of social medias with mapping through socialMediaList
    // * When an element is selected render an input text for url
    return (
        <div className={styles.social_modal}>
            <select onChange={handleSocialSelect}>
                <option value="">Select a social media platform</option>
                {socialMediaList.map((item) => (
                    <option key={item.id} className={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            {selectedElement && (
                <div className={styles.url_container}>
                    <InputField
                        id={selectedElement.id}
                        type="url"
                        placeholder={'Enter the URL'}
                        value={selectedElement.url || ''}
                        onChange={handleUrlChange}
                    />
                    <Button className="submit_btn " onClick={handleSubmit} />
                </div>
            )}
        </div>
    );
};

SocialModal.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default SocialModal;
