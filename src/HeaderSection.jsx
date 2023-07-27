// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputField from './Components/InputField';

import '../src/CSS/Header-section.css';
import '../src/CSS/App.css';

function HeaderSection() {
    return (
        <div id="Header">
            <InputField className="Input-field header-name " type="text" placeholder="Full Name" />
            <InputField className="Input-field header-title" type="text" placeholder="Title" />
            <div id="profile-picture-container">
                <div id="profile-picture"></div>
            </div>
        </div>
    );
}

export default HeaderSection;
