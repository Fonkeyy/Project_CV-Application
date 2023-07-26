// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputText from './InputText';

function Address() {
    return (
        <>
            <InputText label="Street number:" placeholder="Enter your street number" />
            <InputText label="Street name:" placeholder="Enter your street name" />
            <InputText label="ZIP code:" placeholder="Enter your ZIP code" />
            <InputText label="Country:" placeholder="Enter your country" />
        </>
    );
}

export default Address;
