/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InfoComponent from './InfoComponent';
import Button from './Button';

const InfoTile = () => {
    const [InfoComponent, setInfoComponent] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [phoneValue, setPhoneValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [githubValue, setGithubValue] = useState('');
    const [websiteValue, setWebsiteValue] = useState('');

    const handleOnChange = (event) => {
        const target = event.target;
        console.log(target);

        switch (target.placeholder) {
            case 'Enter your phone':
                setPhoneValue(target.value);
                break;
            case 'Enter your email':
                setEmailValue(target.value);
                break;
            case 'Enter your Github':
                setGithubValue(target.value);
                break;
            case 'Enter your website':
                setWebsiteValue(target.value);
                break;
        }
    };

    const handleDelete = (event) => {
        console.log(event);
        // setInputFields((prevFields) => prevFields.filter((field) => field.id !== id));
    };

    setInfoComponent(
        <>
            [
            <InfoComponent
                label="Phone Number"
                id={uuidv4()}
                type="tel"
                placeholder="Enter your phone"
                value={phoneValue}
                onChange={handleOnChange}
                onClick={handleDelete}
            />
            <InfoComponent
                label="Email"
                id={uuidv4()}
                type="email"
                placeholder="Enter your email"
                value={emailValue}
                onChange={handleOnChange}
                onClick={handleDelete}
            />
            <InfoComponent
                label="Github"
                id={uuidv4()}
                type="url"
                placeholder="Enter your Github"
                value={githubValue}
                onChange={handleOnChange}
                onClick={handleDelete}
            />
            <InfoComponent
                label="Website"
                id={uuidv4()}
                type="url"
                placeholder="Enter your website"
                value={websiteValue}
                onChange={handleOnChange}
                onClick={handleDelete}
            />
            ]
        </>
    );

    return (
        <>
            {isSubmitted ? (
                <></>
            ) : (
                <>
                    {InfoComponent.map((item) => {
                        return (
                            <div key={item.key} className="">
                                {item}
                            </div>
                        );
                    })}
                    <Button
                        className="submit-btn"
                        onClick={() => {
                            setIsSubmitted(true);
                        }}
                    />
                </>
            )}
        </>
    );
};

export default InfoTile;
