import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import styles from '../Sections/HeaderSection/HeaderSection.module.css';

const HeaderComponent = ({ id, inputClassName, placeholder }) => {
    const [inputValue, setInputValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);

    // * On input change set new state value
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // * On submit if there is an input value set isSubmitted to true, else alert and ask for value
    const handleSubmit = () => {
        inputValue && setIsSubmitted(true);
        !inputValue && alert('Please enter value before submitting');
    };

    // * On edit set isSubmitted to true
    const handleEdit = () => {
        setIsSubmitted(false);
    };

    // * If isSubmitted show input value and show edit button on mouse over
    // * If not show input field with submit button
    return (
        <div
            className={styles.header_component}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}>
            {isSubmitted ? (
                <>
                    <div className={styles.header_text}>{inputValue}</div>
                    {isMouseOver && <Button className={styles.edit_btn} onClick={handleEdit} />}
                </>
            ) : (
                <>
                    <label htmlFor={id}>{id}</label>
                    <input
                        type="text"
                        name={id}
                        id={id}
                        className={inputClassName}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleInputChange}></input>

                    <Button className="submit_btn submit_btn" onClick={handleSubmit} />
                </>
            )}
        </div>
    );
};

HeaderComponent.propTypes = {
    id: PropTypes.string,
    inputClassName: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default HeaderComponent;
