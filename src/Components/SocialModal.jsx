/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
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
            onSubmit(true);

            socialMediaList.find((media) => media.id === selectedSocial.id).url = selectedSocial.url;
            console.log(socialMediaList);
        }
    };

    return (
        <div className="social-modal">
            <div className="social-modal-content">
                <select className="social-list" onChange={handleSocialSelect}>
                    <option value="">Select a social media platform</option>
                    {socialMediaList.map((social) => (
                        <option key={social.id} className={social.id} value={social.id}>
                            {social.name}
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

export default SocialModal;
