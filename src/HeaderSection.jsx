// eslint-disable-next-line no-unused-vars
import React from 'react';

import '../src/CSS/Header-section.css';
import '../src/CSS/App.css';
import FormComponent from './Components/FormComponent';

function HeaderSection() {
    return (
        <div id="Header">
            <FormComponent
                id="full-name"
                className="header-form Form-component"
                inputClassName="Input-text"
                placeholder="Full Name"
            />

            <FormComponent
                id="title"
                className="header-form Form-component"
                inputClassName="Input-text"
                placeholder="Title"
            />

            <div id="profile-picture-container">
                <div id="profile-picture"></div>
            </div>
        </div>
    );
}

export default HeaderSection;
