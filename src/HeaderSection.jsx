// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputField from './Components/InputField';
import Address from './Components/Address';
import SubmitBtn from './Components/SubmitBtn';

function HeaderSection() {
    return (
        <div id="Header" className="">
            <InputField className="InputField " type="text" placeholder="Full Name" />
            <InputField className="InputField" type="text" placeholder="Title" />
        </div>
    );
}

export default HeaderSection;
