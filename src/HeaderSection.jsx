// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputField from './Components/InputField';

import '../src/CSS/Header.css';
import '../src/CSS/App.css';

function HeaderSection() {
    return (
        <div id="Header" className="">
            <InputField className="Input-field header-name " type="text" placeholder="Full Name" />
            <InputField className="Input-field header-title" type="text" placeholder="Title" />
        </div>
    );
}

export default HeaderSection;
