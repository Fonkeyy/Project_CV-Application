/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputField from './InputField';
import SubmitBtn from './SubmitBtn';

function PracticeTile() {
    return (
        <div className="practice-tile">
            <InputField label="Company name:" placeholder="Enter company name" />
            <InputField label="Position title:" placeholder="Enter position title" />
            <SubmitBtn value="Submit" />
        </div>
    );
}

export default PracticeTile;
