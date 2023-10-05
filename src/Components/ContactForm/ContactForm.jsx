import { useState } from 'react';

import Button from '../Button/Button';
import InputField from '../InputField/InputField';

import styles from './ContactForm.module.css';

const initialFields = [
    { id: 'name', type: 'text', placeholder: 'Your name', value: '' },
    { id: 'phone', type: 'tel', placeholder: 'Your number ', value: '' },
    { id: 'email', type: 'mail', placeholder: 'Your Email', value: '' },
    { id: 'message', type: 'textarea', placeholder: 'Write your message here...', value: '' },
];

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fields, setFields] = useState(initialFields);

    // * On input change set input value to the corresponding field
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFields((prevFields) => prevFields.map((field) => (field.id === id ? { ...field, value } : field)));
    };

    // * On submit set is submitted to true
    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    // * If is submitted display confirmation message
    // * If not submitted, map through list and display each field with corresponding props + submit button
    return (
        <div className={styles.contact_form}>
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
                    <Button className="send_btn" onClick={handleSubmit} />
                </>
            )}
        </div>
    );
};

export default ContactForm;
