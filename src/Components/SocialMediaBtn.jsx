/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SocialModal from './SocialModal';

const SocialButton = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOnClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button id={props.id} className={props.className} onClick={handleOnClick}></button>

            {isModalOpen && <SocialModal onSubmit={closeModal} />}
        </>
    );

    // // return (
    // //     <>
    // //         {isSubmitted ? (
    // //             <>
    // //                 <button
    // //                     id={props.id}
    // //                     className={props.className}
    // //                     onClick={() => setIsSubmitted(false)}></button>
    // //                 ;
    // //             </>
    // //         ) : (
    // //             <>
    // //                 <button id={props.id} className={props.className} onClick={handleOnClick}></button>;
    // //             </>
    // //         )}
    // //     </>
    // // );
};

export default SocialButton;
