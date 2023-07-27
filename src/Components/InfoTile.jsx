/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import SubmitBtn from './SubmitBtn';
import InputField from './InputField';

function InfoTile() {
    const InputFields = [
        { label: 'First Name:', placeholder: 'Enter your first Name' },
        { label: 'Last Name:', placeholder: 'Enter your last Name' },
        { label: 'Phone Number:', placeholder: 'Enter your phone number' },
        { label: 'Email:', placeholder: 'Enter your email' },
    ];

    return (
        <div className="">
            {InputFields.map((field, index) => (
                <div key={index} className="">
                    <InputField label={field.label} placeholder={field.placeholder} />
                </div>
            ))}
            {/* <SubmitBtn value="Submit" /> */}
        </div>
    );
}

export default InfoTile;
