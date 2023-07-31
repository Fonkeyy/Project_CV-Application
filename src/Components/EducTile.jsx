/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const EducTile = ({ onSubmit, onDelete, id }) => {
    const [isSubmitted, setSubmitted] = useState(false);
    const [schoolValue, setSchoolValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleOnSubmit = () => {
        setSubmitted(true);
        onSubmit(true);
    };

    const handleOnChange = (event) => {
        const target = event.target;

        target.id === 'school-name' && setSchoolValue(target.value);
        target.id === 'title-name' && setTitleValue(target.value);
    };

    const handleOnEdit = () => {
        setSubmitted(false);
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
                    <p>{schoolValue}</p>
                    <p>{titleValue}</p>
                    {isMouseOver && (
                        <div className="tile-btn-wrapper">
                            <Button className="edit-btn-30" onClick={handleOnEdit} />
                            <Button
                                className="delete-btn"
                                onClick={() => {
                                    onDelete(id);
                                }}
                            />
                        </div>
                    )}
                </>
            ) : (
                <>
                    <InputField
                        id="school-name"
                        className="input-text"
                        placeholder="Enter school name"
                        value={schoolValue}
                        onChange={handleOnChange}
                    />
                    <InputField
                        id="title-name"
                        className="input-text"
                        placeholder="Enter title of study"
                        value={titleValue}
                        onChange={handleOnChange}
                    />
                    <Button className="submit-btn" onClick={handleOnSubmit} />
                </>
            )}
        </div>
    );
};

export default EducTile;
