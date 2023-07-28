/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../CSS/Components/InputText.css';

function InputText({ id, className, value, onChange, placeholder }) {
    return (
        <input
            id={id}
            className={className}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default InputText;
