// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { socialMediaList } from '../socialMediaList';
import InputField from './InputField';

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
        }
    };

    // * Render list of social medias with mapping through socialMediaList
    // * When an element is selected render an input text for url
    return (
        <div className="social-modal">
            <div className="social-modal-content">
                <select className="social-list" onChange={handleSocialSelect}>
                    <option value="">Select a social media platform</option>
                    {socialMediaList.map((item) => (
                        <option key={item.id} className={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
                {selectedElement && (
                    <div>
                        <InputField
                            id={selectedElement.id}
                            type="url"
                            placeholder={'Enter the URL'}
                            value={selectedElement.url || ''}
                            onChange={handleUrlChange}
                        />

                        <button className="submit-btn" onClick={handleSubmit}></button>
                    </div>
                )}
            </div>
        </div>
    );
};

SocialModal.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default SocialModal;
