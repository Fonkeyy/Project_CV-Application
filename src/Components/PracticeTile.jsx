/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import InputField from './InputField';
import Button from './Button';
import TileBtnWrapper from './TileBtnWrapper';

import '../CSS/Components/PracticeTile.css';

const PracticeTile = ({ onSubmit, onDelete, id }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [companyValue, setCompanyValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleOnSubmit = () => {
        if (companyValue !== '' && titleValue !== '') {
            setIsSubmitted(true);
            onSubmit(true);
        }
        companyValue === '' && alert('Please enter company name before submitting') && setIsSubmitted(false);
        titleValue === '' && alert('Please enter job title before submitting') && setIsSubmitted(false);
    };

    const handleOnChange = (event) => {
        const target = event.target;

        target.id === 'company-name' && setCompanyValue(target.value);
        target.id === 'job-title' && setTitleValue(target.value);
    };

    const handleOnEdit = () => {
        setIsSubmitted(false);
        onSubmit(false);
        // ! check the need of onSubmit
    };

    return (
        <div
            onMouseEnter={() => {
                setIsMouseOver(true);
            }}
            onMouseLeave={() => {
                setIsMouseOver(false);
            }}>
            {isSubmitted ? (
                <>
                    <p className="companyValue-submitted">{companyValue}</p>
                    <p className="titleValue-submitted">{titleValue}</p>

                    {isMouseOver && TileBtnWrapper({ handleOnEdit, onDelete, id })}
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
