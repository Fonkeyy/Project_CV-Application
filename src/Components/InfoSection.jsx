// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InfoComponent from './InfoComponent';
import Button from './Button';

const InfoSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [phoneValue, setPhoneValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [githubValue, setGithubValue] = useState('');
    const [websiteValue, setWebsiteValue] = useState('');

    const handleOnChange = (event) => {
        const target = event.target;
        console.log(target);

        console.log(phoneValue);

        target.id == 'tel' && setPhoneValue(target.value);
        target.id == 'email' && setEmailValue(target.value);
        target.id == 'github' && setGithubValue(target.value);
        target.id == 'website' && setWebsiteValue(target.value);

        // // switch (target.placeholder) {
        // //     case 'Enter your phone':
        // //         setPhoneValue(target.value);
        // //         break;
        // //     case 'Enter your email':
        // //         setEmailValue(target.value);
        // //         break;
        // //     case 'Enter your Github':
        // //         setGithubValue(target.value);
        // //         break;
        // //     case 'Enter your website':
        // //         setWebsiteValue(target.value);
        // //         break;
        // //     default:
        // //         break;
        // // }
    };

    const handleDelete = (id) => {
        setInfoComponent((prevComponent) => prevComponent.filter((component) => component.props.id !== id));
    };

    const [infoComponent, setInfoComponent] = useState([
        <InfoComponent
            key={uuidv4()}
            label="Phone Number"
            id="tel"
            type="tel"
            placeholder="Enter your phone"
            value={phoneValue}
            onChange={handleOnChange}
            onDelete={handleDelete}
        />,
        <InfoComponent
            key={uuidv4()}
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={emailValue}
            onChange={handleOnChange}
            onDelete={handleDelete}
        />,
        <InfoComponent
            key={uuidv4()}
            label="Github"
            id="github"
            type="url"
            placeholder="Enter your Github"
            value={githubValue}
            onChange={handleOnChange}
            onDelete={handleDelete}
        />,
        <InfoComponent
            key={uuidv4()}
            label="Website"
            id="website"
            type="url"
            placeholder="Enter your website"
            value={websiteValue}
            onChange={handleOnChange}
            onDelete={handleDelete}
        />,
    ]);

    useEffect(() => {
        // Update the infoComponent array whenever any of the state variables change
        setInfoComponent([
            <InfoComponent
                key={uuidv4()}
                label="Phone Number"
                id="tel"
                type="tel"
                placeholder="Enter your phone"
                value={phoneValue}
                onChange={handleOnChange}
                onDelete={handleDelete}
            />,
            <InfoComponent
                key={uuidv4()}
                label="Email"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={emailValue}
                onChange={handleOnChange}
                onDelete={handleDelete}
            />,
            <InfoComponent
                key={uuidv4()}
                label="Github"
                id="github"
                type="url"
                placeholder="Enter your Github"
                value={githubValue}
                onChange={handleOnChange}
                onDelete={handleDelete}
            />,
            <InfoComponent
                key={uuidv4()}
                label="Website"
                id="website"
                type="url"
                placeholder="Enter your website"
                value={websiteValue}
                onChange={handleOnChange}
                onDelete={handleDelete}
            />,
        ]);
    }, [phoneValue, emailValue, githubValue, websiteValue]);

    return (
        <>
            {isSubmitted ? (
                <></>
            ) : (
                <>
                    {infoComponent.map((item) => {
                        return (
                            <div key={item.props.id} className="">
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

export default InfoSection;
