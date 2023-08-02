// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SocialModal from './SocialModal';

const SocialAddButton = ({ onSubmit }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSocial, setSelectedSocial] = useState(null);

    const handleAddClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOnSubmit = (selectedSocial) => {
        closeModal();
        setSelectedSocial(selectedSocial);
        onSubmit(selectedSocial);
    };

    return (
        <>
            {selectedSocial ? (
                <button
                    id={selectedSocial.id}
                    className={selectedSocial.className}
                    onClick={handleAddClick}></button>
            ) : (
                <button id="add-btn" className="add-btn" onClick={handleAddClick}></button>
            )}
            {isModalOpen && <SocialModal onSubmit={handleOnSubmit} />}
        </>
    );
};

SocialAddButton.propTypes = {
    onSubmit: PropTypes.func.isRequired, // Expecting a function
};
export default SocialAddButton;
