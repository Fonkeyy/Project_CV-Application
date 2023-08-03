// eslint-disable-next-line no-unused-vars
import React from 'react';

import '../src/CSS/HeaderSection.css';
import '../src/CSS/App.css';
import HeaderComponent from './Components/HeaderComponent';

function HeaderSection() {
    return (
        <div id="Header">
            <HeaderComponent
                id="full-name"
                className="header-form Form-component"
                inputClassName="input-text"
                placeholder="Full Name"
            />

            <HeaderComponent
                id="title"
                className="header-form Form-component"
                inputClassName="input-text"
                placeholder="Title"
            />

            <div id="profile-picture-container">
                <div id="profile-picture"></div>
            </div>
        </div>
    );
}

export default HeaderSection;
