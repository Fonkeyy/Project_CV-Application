// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import InputField from './InputField';

import '../CSS/Components/HeaderComponent.css';

const HeaderComponent = ({ id, className, inputClassName, placeholder }) => {
    const [inputValue, setInputValue] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);

    // * On input change set new state value
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // * On submit if there is an input value set submitted to true, else alert and ask for value
    const handleSubmit = () => {
        inputValue && setSubmitted(true);
        !inputValue && alert('Please enter value before submitting');
    };

    // * On edit set submitted to true
    const handleEdit = () => {
        setSubmitted(false);
    };

    // * If submitted show input value and show edit button on mouse over
    // * If not show input field with submit button
    return (
        <div
            className={className}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}>
            {submitted ? (
                <>
                    <div className="header-text">{inputValue}</div>
                    {isMouseOver && <Button className="edit-btn" onClick={handleEdit} />}
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

HeaderComponent.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string.isRequired,
    inputClassName: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default HeaderComponent;
