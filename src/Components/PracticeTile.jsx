// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputField from './InputField';
import Button from './Button';
import TileBtnWrapper from './TileBtnWrapper';

import '../CSS/Components/PracticeTile.css';

const PracticeTile = ({ onSubmit, onDelete, id }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [companyValue, setCompanyValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [isMouseOver, setIsMouseOver] = useState(false);

    // * On submit if values are not empty set isSubmitted to true and pass the info to parent component
    // * If they are empty, alert
    const handleSubmit = () => {
        if (companyValue !== '' && titleValue !== '') {
            setIsSubmitted(true);
            onSubmit(true);
        }
        companyValue === '' && alert('Please enter company name before submitting') && setIsSubmitted(false);
        titleValue === '' && alert('Please enter job title before submitting') && setIsSubmitted(false);
    };

    // * On change identify which input has been changed, update the right state accordingly
    const handleChange = (event) => {
        const target = event.target;

        target.id === 'company-name' && setCompanyValue(target.value);
        target.id === 'job-title' && setTitleValue(target.value);
    };

    // * On edit set isSubmitted to false and pass the info to parent component
    const handleEdit = () => {
        setIsSubmitted(false);
        onSubmit(false);
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

                    {isMouseOver && TileBtnWrapper({ handleEdit, onDelete, id })}
                </>
            ) : (
                <>
                    <InputField
                        id="job-title"
                        className="input-text"
                        type="text"
                        placeholder="Job title"
                        value={titleValue}
                        onChange={handleChange}
                    />
                    <InputField
                        id="company-name"
                        className="input-text"
                        type="text"
                        placeholder="Company name"
                        value={companyValue}
                        onChange={handleChange}
                    />
                    <Button className="submit-btn-30" onClick={handleSubmit} />
                </>
            )}
        </div>
    );
};

PracticeTile.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default PracticeTile;
