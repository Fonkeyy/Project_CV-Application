// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputField from './InputField';

function Address() {
    return (
        <div className="Address">
            <InputField label="Street number:" placeholder="Enter your street number" />
            <InputField label="Street name:" placeholder="Enter your street name" />
            <InputField label="ZIP code:" placeholder="Enter your ZIP code" />
            <InputField label="Country:" placeholder="Enter your country" />
        </div>
    );
}

export default Address;
