/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputField from './InputField';
import Button from './Button';

const InfoTile = () => {
    const initialInputFields = [
        { label: 'Phone Number:', placeholder: 'Enter your phone number', id: uuidv4() },
        { label: 'Email:', placeholder: 'Enter your email', id: uuidv4() },
        { label: 'Github:', placeholder: 'Enter your Github', id: uuidv4() },
        { label: 'Website:', placeholder: 'Enter your website', id: uuidv4() },
        { label: 'Address:', placeholder: 'Enter your address', id: uuidv4() },
    ];

    const [inputFields, setInputFields] = useState(initialInputFields);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [phoneValue, setPhoneValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [githubValue, setGithubValue] = useState('');
    const [websiteValue, setWebsiteValue] = useState('');
    const [addressValue, setAddressValue] = useState('');

    const updateValues = () => {};

    const handleOnChange = (event) => {
        const target = event.target;

        target.label === 'Phone Number' && setPhoneValue(target.value);
        target.label === 'Email' && setEmailValue(target.value);
        target.label === 'Github' && setGithubValue(target.value);
        target.label === 'Website' && setWebsiteValue(target.value);
        target.label === 'Address' && setAddressValue(target.value);
    };

    const handleDelete = (id) => {
        setInputFields((prevFields) => prevFields.filter((field) => field.id !== id));
    };

    return (
        <>
            {isSubmitted ? (
                <>
                    {inputFields.map((field) => {
                        return (
                            <p key={field.id}>
                                 {target.label === 'Phone Number' && return {field.label} : {phoneValue}}
                             
                            </p>
                        );
                    })}
                </>
            ) : (
                <>
                    {inputFields.map((field) => (
                        <div key={field.id} id={field.id} className="">
                            <InputField
                                label={field.label}
                                placeholder={field.placeholder}
                                onChange={handleOnChange}
                            />
                            <Button className="delete-btn" onClick={() => handleDelete(field.id)} />
                        </div>
                    ))}
                    <Button
                        className="submit-btn"
                        onClick={() => {
                            updateValues();
                            setIsSubmitted(true);
                        }}
                    />
                </>
            )}
        </>
    );
};

export default InfoTile;
