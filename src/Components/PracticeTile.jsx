/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

import '../CSS/Components/PracticeTile.css';

const PracticeTile = ({ onSubmit, onDelete, id }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [companyValue, setCompanyValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [onOver, setOnOver] = useState(false);

    const handleOnClickDelete = () => {
        onDelete(id);
    };

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
        <div onMouseLeave={() => setOnOver(false)} onMouseEnter={() => setOnOver(true)}>
            {isSubmitted ? (
                <>
                    <p className="companyValue-submitted">{companyValue}</p>
                    <p className="titleValue-submitted">{titleValue}</p>
                    <Button className="edit-btn-30" onClick={handleEdit} />
                    {onOver && <Button className="delete-btn" onClick={handleOnClickDelete} />}
                </>
            ) : (
                <>
                    <InputField
                        id="job-title"
                        className="input-text"
                        type="text"
                        placeholder="Job title"
                        value={titleValue}
                        onChange={handleOnChange}
                    />
                    <InputField
                        id="company-name"
                        className="input-text"
                        type="text"
                        placeholder="Company name"
                        value={companyValue}
                        onChange={handleOnChange}
                    />
                    <Button className="submit-btn-30" onClick={handleOnSubmit} />
                </>
            )}
        </div>
    );
};

export default PracticeTile;
