/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import AddBtn from './AddBtn';
import EditBtn from './EditBtn';

const PracticeTile = () => {
    const [submitted, setSubmitted] = useState(false);
    const [companyValue, setCompanyValue] = useState('');
    const [titleValue, setTitleValue] = useState('');

    const handleInputChange = (event) => {
        console.log(event.target);
        if (event.target.id === 'company-name') {
            setCompanyValue(event.target.value);
        }
        if (event.target.id === 'position-title') {
            setTitleValue(event.target.value);
        }
    };

    const handleAddBtn = () => {
        setSubmitted(true);
    };

    const handleEdit = () => {
        setSubmitted(false);
    };

    return (
        <div className={submitted ? 'submitted' : 'Practice-tile'}>
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
        </div>
    );
};

export default PracticeTile;
