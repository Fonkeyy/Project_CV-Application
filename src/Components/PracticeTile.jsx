/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import AddBtn from './AddBtn';
import EditBtn from './EditBtn';

const PracticeTile = ({ onAddBtnClick }) => {
    const [submitted, setSubmitted] = useState(false);
    const [companyValue, setCompanyValue] = useState('');
    const [titleValue, setTitleValue] = useState('');

    const handleInputChange = (event) => {
        if (event.target.id === 'company-name') {
            setCompanyValue(event.target.value);
        }
        if (event.target.id === 'position-title') {
            setTitleValue(event.target.value);
        }
    };

    const handleAddBtn = () => {
        setSubmitted(true);
        onAddBtnClick(true);
    };

    const handleEdit = () => {
        setSubmitted(false);
    };

    return (
        <>
            {submitted ? (
                <div>
                    <div>{companyValue}</div>
                    <div>{titleValue}</div>
                    <EditBtn onClick={handleEdit} />
                </div>
            ) : (
                <div>
                    <FormComponent
                        id="company-name"
                        className="Practice-form FormComponent"
                        placeholder="Enter company name"
                        onValueChange={handleInputChange}
                    />
                    <FormComponent
                        id="position-title"
                        className="Practice-form FormComponent"
                        placeholder="Enter position title"
                        onValueChange={handleInputChange}
                    />
                    <AddBtn onClick={handleAddBtn} />
                </div>
            )}
        </>
    );
};

export default PracticeTile;
