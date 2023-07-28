/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../CSS/Components/InputText.css';

function InputTextArea({ value, onChange, id, placeholder }) {
    return (
        <input
            id={id}
            className="Input-text-area"
            type="textarea"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default InputTextArea;
