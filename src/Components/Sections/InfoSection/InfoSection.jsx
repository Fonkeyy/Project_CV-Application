import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InfoComponent from '../../InfoComponent/InfoComponent';
import Button from '../../Button/Button';
import { ValidContext } from '../../../contexts/validContext';
import styles from './InfoSection.module.css';

const initialFields = [
    {
        id: 'tel',
        label: 'Phone Number',
        type: 'tel',
        placeholder: 'Enter your phone',
        className: 'tel',
        value: '',
    },
    {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        className: 'email',
        value: '',
    },
    {
        id: 'city',
        label: 'City',
        type: 'city',
        placeholder: 'Enter your city',
        className: 'location',
        value: '',
    },
    {
        id: 'website',
        label: 'Website',
        type: 'url',
        placeholder: 'Enter your website',
        className: 'website',
        value: '',
    },
];

const InfoSection = () => {
    const { isValidated } = useContext(ValidContext);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
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
            {!isValidated && !isSubmitted && (
                <div className={styles.info_section}>
                    {fields.map((field) => (
                        <InfoComponent
                            key={field.id}
                            label={field.label}
                            id={field.id}
                            inputType={field.type}
                            placeholder={field.placeholder}
                            className={field.className}
                            value={field.value}
                            onChange={handleChange}
                            onDelete={handleDelete}
                        />
                    ))}
                    {!isValidated && <Button className="submit_btn" onClick={handleSubmit} />}
                </div>
            )}
            {!isValidated && isSubmitted && (
                <>
                    <div
                        className={`${styles.info_section} ${styles.info_section_submitted}`}
                        onMouseEnter={() => {
                            setIsMouseOver(true);
                        }}
                        onMouseLeave={() => {
                            setIsMouseOver(false);
                        }}
                        onClick={() => {
                            setIsClicked(!isClicked);
                        }}>
                        {fields.map(
                            (field) =>
                                field.value && (
                                    <div key={uuidv4()}>
                                        <label>{field.label}</label>
                                        <span className={`${styles[field.className]}`}></span>

                                        {field.type === 'url' ? (
                                            <a
                                                href={`http://${field.value}`}
                                                target="_blank"
                                                rel="noreferrer">
                                                {field.value}
                                            </a>
                                        ) : (
                                            <p>{field.value}</p>
                                        )}
                                    </div>
                                )
                        )}
                        <div className={styles.delete_btn_container}>
                            {!isValidated && (isMouseOver || isClicked) && (
                                <Button className="edit_btn" onClick={() => setIsSubmitted(!isSubmitted)} />
                            )}
                        </div>
                    </div>
                </>
            )}
            {isValidated && (
                <div className={`${styles.info_section} ${styles.info_section_submitted}`}>
                    {fields.map(
                        (field) =>
                            field.value && (
                                <div key={uuidv4()}>
                                    <label>{field.label}</label>
                                    <span className={`${styles[field.className]}`}></span>

                                    {field.type === 'url' ? (
                                        <a href={`http://${field.value}`} target="_blank" rel="noreferrer">
                                            {field.value}
                                        </a>
                                    ) : (
                                        <p>{field.value}</p>
                                    )}
                                </div>
                            )
                    )}
                </div>
            )}
        </>
    );
};

export default InfoSection;
