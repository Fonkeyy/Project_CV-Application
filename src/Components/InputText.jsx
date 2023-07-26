/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function InputText({ label, placeholder }) {
    return (
        <>
            <label>
                {label} <input placeholder={placeholder} />
            </label>
        </>
    );
}

export default InputText;
