// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InfoComponent from '../../InfoComponent/InfoComponent';
import Button from '../../Button/Button';

const initialFields = [
    { id: 'tel', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone', value: '' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', value: '' },
    { id: 'github', label: 'Github', type: 'url', placeholder: 'Enter your Github', value: '' },
    { id: 'website', label: 'Website', type: 'url', placeholder: 'Enter your website', value: '' },
];

const InfoSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fields, setFields] = useState(initialFields);
    const [isMouseOver, setIsMouseOver] = useState(false);

    // * On input change set input value to the corresponding field
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFields((prevFields) => prevFields.map((field) => (field.id === id ? { ...field, value } : field)));
    };

    // * On delete delete the corresponding field
    const handleDelete = (id) => {
        setFields((prevFields) => prevFields.filter((field) => field.id !== id));
    };

    // * On submit set is submitted to true
    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    // * If is submitted, map through field list and display label + value
    // * When mouse is over display edit button
    // * If not submitted, map through field list and display each field with corresponding props + submit button
    return (
        <>
            {isSubmitted ? (
                <div
                    onMouseEnter={() => {
                        setIsMouseOver(true);
                    }}
                    onMouseLeave={() => {
                        setIsMouseOver(false);
                    }}>
                    {fields.map((field) => (
                        <div key={uuidv4()}>
                            <p>{field.label}</p>
                            <p>{field.value}</p>
                        </div>
                    ))}
                    {isMouseOver && <Button className="edit_btn" onClick={() => setIsSubmitted(false)} />}
                </div>
            ) : (
                <>
                    {fields.map((field) => (
                        <InfoComponent
                            key={field.id}
                            label={field.label}
                            id={field.id}
                            className="ToADD"
                            inputType={field.type}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={handleChange}
                            onDelete={handleDelete}
                        />
                    ))}
                    <Button className="submit_btn submit_m" onClick={handleSubmit} />
                </>
            )}
        </>
    );
};

export default InfoSection;
