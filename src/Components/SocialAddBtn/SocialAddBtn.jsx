// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SocialModal from '../SocialModal/SocialModal';
import Button from '../Button/Button';

const SocialAddButton = ({ onSubmit }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddClick = () => {
        // * OnClick set isModalOpen to true => modal open up in rendering
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (selectedElement) => {
        // * OnClick on submit button:
        // * Update selectedElement
        // * Pass selectedElement to parent component through prop {onSubmit}
        closeModal();
        onSubmit(selectedElement);
    };

    // * If an element is selected transform add btn with the appropriate logo
    // * Else render an add btn which open modal onClick
    return (
        <>
            {isModalOpen ? (
                <SocialModal onSubmit={handleSubmit} />
            ) : (
                <Button id="add_btn" className="add_btn" onClick={handleAddClick} />
            )}
        </>
    );
};

SocialAddButton.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default SocialAddButton;
