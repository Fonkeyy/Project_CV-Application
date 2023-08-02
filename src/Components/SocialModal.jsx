// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { socialMediaList } from '../socialMediaList';

const SocialModal = ({ onSubmit }) => {
    const [selectedSocial, setSelectedSocial] = useState(null);

    const handleSocialSelect = (event) => {
        const selectedSocialId = event.target.value;
        const selectedSocialMedia = socialMediaList.find((media) => media.id === selectedSocialId);
        setSelectedSocial(selectedSocialMedia);
    };

    const handleUrlChange = (event) => {
        const url = event.target.value;
        setSelectedSocial((prevSocial) => ({ ...prevSocial, url: url }));
    };

    const handleSubmit = () => {
        if (selectedSocial?.url) {
            onSubmit(selectedSocial);
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
                {selectedSocial && (
                    <div>
                        <label>url: </label>
                        <input
                            id={selectedSocial.id}
                            type="url"
                            value={selectedSocial.url || ''}
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
