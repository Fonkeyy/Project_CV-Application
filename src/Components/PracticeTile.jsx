/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import EditBtn from './EditBtn';

import '../CSS/Components/PracticeTile.css';
import InputTextArea from './InputTextArea';
import InputText from './InputText';
import SubmitBtn from './SubmitBtn';

const PracticeTile = ({ data, onTileSubmit }) => {
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

    const handleSubmitBtn = () => {
        setSubmitted(true);
        onTileSubmit({ company: companyValue, title: titleValue, description: descriptionValue });
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
                    <InputText
                        id="company-name"
                        className="Input-text"
                        placeholder="Enter company name"
                        onChange={handleInputChange}
                        value={companyValue}
                    />
                    <InputText
                        id="position-title"
                        className="Input-text"
                        placeholder="Enter position title"
                        onChange={handleInputChange}
                        value={titleValue}
                    />
                    <InputTextArea
                        id="description"
                        placeholder="Describe your experience"
                        onChange={handleInputChange}
                        value={descriptionValue}
                    />

                    <SubmitBtn onClick={handleSubmitBtn} />
                </>
            )}
        </div>
    );
};

export default PracticeTile;
