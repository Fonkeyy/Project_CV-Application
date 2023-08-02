// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { socialMediaList } from '../socialMediaList';

const SocialModal = ({ onSubmit }) => {
    const [selectedElement, setSelectedElement] = useState(null);

    const handleSocialSelect = (event) => {
        const selectedElementId = event.target.value;
        const selectedElementMedia = socialMediaList.find((media) => media.id === selectedElementId);
        setSelectedElement(selectedElementMedia);
    };

    const handleUrlChange = (event) => {
        const url = event.target.value;
        setSelectedElement((prevSocial) => ({ ...prevSocial, url: url }));
    };

    const handleSubmit = () => {
        if (selectedElement?.url) {
            onSubmit(selectedElement);
        }
    };

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
                        <label>url: </label>
                        <input
                            id={selectedElement.id}
                            type="url"
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
    onSubmit: PropTypes.func.isRequired, // Expecting a function
};
export default SocialModal;
