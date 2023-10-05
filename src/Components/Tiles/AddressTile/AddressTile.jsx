// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputField from '../InputField/InputField';

function AddressTile() {
    const InputFields = [
        { label: 'Street number:', placeholder: 'Enter your street number' },
        { label: 'Street name:', placeholder: 'Enter your street name' },
        { label: 'ZIP code:', placeholder: 'Enter your ZIP code' },
        { label: 'Country:', placeholder: 'Enter your Country' },
    ];

    return (
        <div className="px-10 py-6">
            {InputFields.map((field, index) => (
                <div key={index} className="">
                    <InputField label={field.label} placeholder={field.placeholder} />
                </div>
            ))}
            {/* <Button value="Submit" /> */}
        </div>
    );
}

export default AddressTile;
