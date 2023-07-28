/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import SubmitBtn from './SubmitBtn';
import InputText from './InputText';
import EditBtn from './EditBtn';

import '../CSS/Components/FormComponent.css';

const FormComponent = ({ id, className, inputClassName, placeholder, onValueChange }) => {
    const [inputValue, setInputValue] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (onValueChange) {
            onValueChange(event);
        }
    };

    const handleSubmit = () => {
        inputValue && setSubmitted(true);
        !inputValue && alert('Please enter value before submitting');
    };

    const handleEdit = () => {
        setSubmitted(false);
    };

    return (
        <div className={className}>
            {submitted ? (
                <>
                    <div className="text">{inputValue}</div>
                    <EditBtn onClick={handleEdit} />
                </>
            ) : (
                <>
                    <InputText
                        value={inputValue}
                        onChange={handleInputChange}
                        id={id}
                        className={inputClassName}
                        placeholder={placeholder}
                    />
                    <SubmitBtn onClick={handleSubmit} />
                </>
            )}
        </div>
    );
};

export default FormComponent;
