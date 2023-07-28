/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputText from './InputText';
import SubmitBtn from './SubmitBtn';

function PracticeTile() {
    return (
        <div className="practice-tile">
            <InputText label="Company name:" placeholder="Enter company name" />
            <InputText label="Position title:" placeholder="Enter position title" />
            <SubmitBtn value="Submit" />
        </div>
    );
}

export default PracticeTile;
