// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import InputField from './InputField';

import '../CSS/Components/FormComponent.css';

const FormComponent = ({ id, className, inputClassName, placeholder, onChange }) => {
    const [inputValue, setInputValue] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    // * On
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
                    <div className="header-text">{inputValue}</div>
                    <Button className="edit-btn" onClick={handleEdit} />
                </>
            ) : (
                <>
                    <InputField
                        type="text"
                        id={id}
                        className={className}
                        inputClassName={inputClassName}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <Button className="submit-btn" onClick={handleSubmit} />
                </>
            )}
        </div>
    );
};

FormComponent.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string.isRequired,
    inputClassName: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default FormComponent;
