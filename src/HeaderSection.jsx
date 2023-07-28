// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputText from './Components/InputText';

import '../src/CSS/Header-section.css';
import '../src/CSS/App.css';

function HeaderSection() {
    return (
        <div id="Header">
            <InputText id="header-name" placeholder="Full Name" />
            <InputText id="header-title" placeholder="Title" />
            <div id="profile-picture-container">
                <div id="profile-picture"></div>
            </div>
        </div>
    );
}

export default HeaderSection;
