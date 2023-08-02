/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SocialModal from './SocialModal';

const SocialAddButton = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSocial, setSelectedSocial] = useState(null);

    const handleOnClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOnSelected = (selectedSocial) => {
        console.log(selectedSocial);
        setSelectedSocial(selectedSocial);
    };

    const handleOnSubmit = () => {
        closeModal();
        props.onSubmit(selectedSocial);
    };

    return (
        <>
            {selectedSocial ? (
                <button
                    id={selectedSocial.id}
                    className={selectedSocial.className}
                    onClick={handleOnClick}></button>
            ) : (
                <button id={props.id} className={props.className} onClick={handleOnClick}></button>
            )}
            {isModalOpen && <SocialModal onSubmit={handleOnSubmit} onSelected={handleOnSelected} />}
        </>
    );
};

export default SocialAddButton;
