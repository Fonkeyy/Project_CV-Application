/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import InputField from './InputField';
import Button from './Button';
import TileBtnWrapper from './TileBtnWrapper';

import '../CSS/Components/EducTile.css';

const EducTile = ({ onSubmit, onDelete, id }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [schoolValue, setSchoolValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleSubmit = () => {
        if (schoolValue !== '' && titleValue !== '') {
            setIsSubmitted(true);
            onSubmit(true);
        }
        schoolValue === '' && alert('Please enter school name before submitting');
        titleValue === '' && alert('Please enter title name before submitting');
    };

    const handleOnChange = (event) => {
        const target = event.target;

        target.id === 'school-name' && setSchoolValue(target.value);
        target.id === 'title-name' && setTitleValue(target.value);
    };

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
                    <p className="schoolValue-submitted">{schoolValue}</p>
                    <p className="schoolTitle-submitted">{titleValue}</p>
                    {isMouseOver && TileBtnWrapper({ handleEdit, onDelete, id })}
                </>
            ) : (
                <>
                    <InputField
                        id="school-name"
                        className="input-text"
                        type="text"
                        placeholder="Enter school name"
                        value={schoolValue}
                        onChange={handleOnChange}
                    />
                    <InputField
                        id="title-name"
                        className="input-text"
                        type="text"
                        placeholder="Enter title of study"
                        value={titleValue}
                        onChange={handleOnChange}
                    />
                    <Button className="submit-btn-30" onClick={handleSubmit} />
                </>
            )}
        </div>
    );
};

export default EducTile;
