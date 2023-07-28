/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import AddBtn from './AddBtn';
import EditBtn from './EditBtn';

import '../CSS/Components/PracticeTile.css';
import InputTextArea from './InputTextArea';

const PracticeTile = () => {
    const [submitted, setSubmitted] = useState(false);
    const [companyValue, setCompanyValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    const handleInputChange = (event) => {
        if (event.target.id === 'company-name') {
            setCompanyValue(event.target.value);
        }
        if (event.target.id === 'position-title') {
            setTitleValue(event.target.value);
        }
        if (event.target.id === 'description') {
            setDescriptionValue(event.target.value);
        }
    };

    const handleAddBtn = () => {
        setSubmitted(true);
    };

    const handleEdit = () => {
        setSubmitted(false);
    };

    return (
        <div id="Practice-tile" className={submitted ? 'submitted' : 'not-submitted'}>
            {submitted ? (
                <>
                    <p>{companyValue}</p>
                    <p>{titleValue}</p>
                    <p>{descriptionValue}</p>
                    <EditBtn onClick={handleEdit} />
                </>
            ) : (
                <>
                    <FormComponent
                        id="company-name"
                        className="Practice-form Form-component"
                        placeholder="Enter company name"
                        onValueChange={handleInputChange}
                    />
                    <FormComponent
                        id="position-title"
                        className="Practice-form Form-component"
                        placeholder="Enter position title"
                        onValueChange={handleInputChange}
                    />
                    <InputTextArea
                        id="description"
                        placeholder="Describe your experience"
                        onChange={handleInputChange}
                    />

                    <AddBtn onClick={handleAddBtn} />
                </>
            )}
        </div>
    );
};

export default PracticeTile;
