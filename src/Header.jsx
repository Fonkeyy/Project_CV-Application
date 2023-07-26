// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputText from './Components/InputText';
import Address from './Components/Address';
import SubmitBtn from './Components/SubmitBtn';

function Header() {
    return (
        <div className="Header">
            <InputText label="First Name:" placeholder="Enter your first Name" />
            <InputText label="Last Name:" placeholder="Enter your last Name" />
            <InputText label="Phone Number:" placeholder="Enter your phone number" />
            <Address />
            <SubmitBtn value="Submit" />
        </div>
    );
}

export default Header;
