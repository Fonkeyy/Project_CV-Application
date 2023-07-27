/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import SubmitBtn from './SubmitBtn';

function InputField({ className, type, placeholder }) {
    return (
        <div className="Input-field-wrapper">
            <input className={className} type={type} placeholder={placeholder} />

            <SubmitBtn />
        </div>
    );
}

export default InputField;
