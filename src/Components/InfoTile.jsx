/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputText from './InputText';

function InfoTile() {
    const InputTexts = [
        { label: 'First Name:', placeholder: 'Enter your first Name' },
        { label: 'Last Name:', placeholder: 'Enter your last Name' },
        { label: 'Phone Number:', placeholder: 'Enter your phone number' },
        { label: 'Email:', placeholder: 'Enter your email' },
    ];

    return (
        <div className="">
            {InputTexts.map((field, index) => (
                <div key={index} className="">
                    <InputText label={field.label} placeholder={field.placeholder} />
                </div>
            ))}
        </div>
    );
}

export default InfoTile;
