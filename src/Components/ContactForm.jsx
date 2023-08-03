/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import Button from './Button';
import InputField from './InputField';

import '../CSS/Components/ContactForm.css';

const initialFields = [
    { id: 'name', type: 'text', placeholder: 'Name', value: '' },
    { id: 'phone', type: 'tel', placeholder: 'Phone ', value: '' },
    { id: 'email', type: 'mail', placeholder: 'E-mail', value: '' },
    { id: 'message', type: 'textarea', placeholder: 'Write your message here...', value: '' },
];

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fields, setFields] = useState(initialFields);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFields((prevFields) => prevFields.map((field) => (field.id === id ? { ...field, value } : field)));
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <div>
            {isSubmitted ? (
                <p className="message-sent">Your message has been sent</p>
            ) : (
                <>
                    {fields.map((field) => (
                        <InputField
                            key={field.id}
                            id={field.id}
                            className="TOADD"
                            placeholder={field.placeholder}
                            type={field.type}
                            value={field.value}
                            onChange={handleChange}
                        />
                    ))}
                    <Button className="submit-btn" onClick={handleSubmit} />
                </>
            )}
        </div>
    );
};

export default ContactForm;
