/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function InputField({ className, type, placeholder }) {
    return (
        <>
            <input className={className} type={type} placeholder={placeholder} />
        </>
    );
}

export default InputField;
