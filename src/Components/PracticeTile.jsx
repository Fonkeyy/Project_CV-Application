/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const PracticeTile = ({ onSubmit }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [companyValue, setCompanyValue] = useState();
    const [titleValue, setTitleValue] = useState();

    const handleOnChange = (event) => {
        const target = event.target;

        target.id === 'company-name' && setCompanyValue(target.value);
        target.id === 'job-title' && setTitleValue(target.value);
    };

    const handleOnSubmit = () => {
        setIsSubmitted(true);
        onSubmit(true);
    };

    const handleEdit = () => {
        setIsSubmitted(false);
        onSubmit(false);
    };

    return (
        <div id="Practice-tile">
            {isSubmitted ? (
                <>
                    <p>{companyValue}</p>
                    <p>{titleValue}</p>
                    <Button className="edit-btn" onClick={handleEdit} />
                </>
            ) : (
                <>
                    <InputField
                        id="company-name"
                        className="Input-text"
                        type="text"
                        placeholder="Company name"
                        value={companyValue}
                        onChange={handleOnChange}
                    />
                    <InputField
                        id="job-title"
                        className="Input-text"
                        type="text"
                        placeholder="Job title"
                        value={titleValue}
                        onChange={handleOnChange}
                    />
                    <Button className="submit-btn" onClick={handleOnSubmit} />
                </>
            )}
        </div>
    );
};

export default PracticeTile;
