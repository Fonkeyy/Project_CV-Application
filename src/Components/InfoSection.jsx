import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InfoComponent from './InfoComponent';
import Button from './Button';

const initialFields = [
    { id: 'tel', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone', value: '' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', value: '' },
    { id: 'github', label: 'Github', type: 'url', placeholder: 'Enter your Github', value: '' },
    { id: 'website', label: 'Website', type: 'url', placeholder: 'Enter your website', value: '' },
];

const InfoSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fields, setFields] = useState(initialFields);
    const [isHovered, setIsHovered] = useState(false);

    const handleOnChange = (event) => {
        const { id, value } = event.target;
        setFields((prevFields) => prevFields.map((field) => (field.id === id ? { ...field, value } : field)));
    };

    const handleDelete = (id) => {
        setFields((prevFields) => prevFields.filter((field) => field.id !== id));
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <>
            {isSubmitted ? (
                <div
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}>
                    {fields.map((field) => (
                        <div key={uuidv4()}>
                            <p>{field.label}</p>
                            <p>{field.value}</p>
                        </div>
                    ))}
                    {isHovered && <Button className="edit-btn" onClick={() => setIsSubmitted(false)} />}
                </div>
            ) : (
                <>
                    {fields.map((field) => (
                        <InfoComponent
                            key={field.id}
                            label={field.label}
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={handleOnChange}
                            onDelete={handleDelete}
                        />
                    ))}
                    <Button className="submit-btn" onClick={handleSubmit} />
                </>
            )}
        </>
    );
};

export default InfoSection;
