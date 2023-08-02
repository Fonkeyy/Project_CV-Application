// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SocialModal from './SocialModal';

const SocialAddButton = ({ onSubmit }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);

    const handleAddClick = () => {
        // * OnClick set isModalOpen to true => modal open up in rendering
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOnSubmit = (selectedElement) => {
        // * OnClick on submit button:
        // * Set isModalOpen to true => close modal
        // * Update selectedElement
        // * Pass selectedElement to parent component through prop {onSubmit}
        closeModal();
        setSelectedElement(selectedElement);
        onSubmit(selectedElement);
    };

    // * If an element is selected transform add btn with the appropriate logo
    // * Else render an add btn which open modal onClick
    return (
        <>
            {selectedElement ? (
                <button
                    id={selectedElement.id}
                    className={selectedElement.className}
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
