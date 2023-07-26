/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputText from './InputText';
import SubmitBtn from './SubmitBtn';

function EducTile() {
    return (
        <div className="educ-tile">
            <InputText label="School name:" placeholder="Enter school name" />
            <InputText label="Title of study:" placeholder="Enter title of study" />
            <SubmitBtn value="Submit" />
        </div>
    );
}

export default EducTile;
