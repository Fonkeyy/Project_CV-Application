// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputText from './Components/InputText';
import Address from './Components/Address';
import SubmitBtn from './Components/SubmitBtn';

function HeaderSection() {
    return (
        <div id="Header" className="relative grid place-content-center gap-8 h-[75vh] w-screen">
            <InputField
                className=" text-white font-bold text-2xl bg-transparent border-b-8 "
                type="text"
                placeholder="Full Name"
            />
            <InputField className="text-red-500 font-bold text-xl " type="text" placeholder="Title" />
        </div>
    );
}

export default HeaderSection;
