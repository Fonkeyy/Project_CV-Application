// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputText from './InputText';

function AddressTile() {
    const InputTexts = [
        { label: 'Street number:', placeholder: 'Enter your street number' },
        { label: 'Street name:', placeholder: 'Enter your street name' },
        { label: 'ZIP code:', placeholder: 'Enter your ZIP code' },
        { label: 'Country:', placeholder: 'Enter your Country' },
    ];

    return (
        <div className="px-10 py-6">
            {InputTexts.map((field, index) => (
                <div key={index} className="flex flex-col xl:flex-row mb-2">
                    <InputText label={field.label} placeholder={field.placeholder} />
                </div>
            ))}
            {/* <SubmitBtn value="Submit" /> */}
        </div>
    );
}

export default AddressTile;
