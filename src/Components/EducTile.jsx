/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputField from './InputField';
import Button from './Button';

function EducTile() {
    return (
        <div className="educ-tile">
            <InputField label="School name:" placeholder="Enter school name" />
            <InputField label="Title of study:" placeholder="Enter title of study" />
            <Button value="Submit" />
        </div>
    );
}

export default EducTile;
