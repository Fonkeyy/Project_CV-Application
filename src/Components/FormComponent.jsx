/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import SubmitBtn from './SubmitBtn';
import InputText from './InputText';
import EditBtn from './EditBtn';

import '../CSS/Components/FormComponent.css';

const FormComponent = ({ id, placeholder }) => {
    const [inputValue, setInputValue] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        inputValue && setSubmitted(true);
        !inputValue && alert('Please enter value before submitting');
    };

    const handleModify = () => {
        setSubmitted(false);
    };

    return (
        <div id="Form-component">
            {submitted ? (
                <>
                    <div className="text">{inputValue}</div>
                    <EditBtn onClick={handleModify} />
                </>
            ) : (
                <>
                    <InputText
                        value={inputValue}
                        onChange={handleInputChange}
                        id={id}
                        placeholder={placeholder}
                    />
                    <SubmitBtn onClick={handleSubmit} />
                </>
            )}
        </div>
    );
};

export default FormComponent;
