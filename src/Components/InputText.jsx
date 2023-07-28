/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SubmitBtn from './SubmitBtn';

function InputText({ id, placeholder }) {
    const [value, setValue] = useState('');
    const [status, setStatus] = useState('');

    return (
        <div className="Input-text-wrapper">
            <input id={id} className="Input-text" type="text" placeholder={placeholder} />

            <SubmitBtn />
        </div>
    );
}

export default InputText;
