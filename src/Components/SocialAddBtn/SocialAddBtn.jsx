// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SocialModal from '../SocialModal/SocialModal';
import Button from '../Button/Button';

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

    const handleSubmit = (selectedElement) => {
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
                <Button
                    id={selectedElement.id}
                    className={selectedElement.className}
                    onClick={handleAddClick}
                />
            ) : (
                <Button id="add_btn" className="add_btn" onClick={handleAddClick} />
            )}
            {isModalOpen && <SocialModal onSubmit={handleSubmit} />}
        </>
    );
};

SocialAddButton.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default SocialAddButton;
