import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { ValidContext } from '../../contexts/validContext';
import styles from '../Sections/HeaderSection/HeaderSection.module.css';

const HeaderComponent = ({ id, inputClassName, placeholder }) => {
    const [inputValue, setInputValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const { isValidated } = useContext(ValidContext);

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

    const handleOnKeyDown = (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            setIsClicked(!isClicked);
        }
    };

    // * If isSubmitted show input value and show edit button on mouse over
    // * If not show input field with submit button
    return (
        <div
            className={styles.header_component}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            onClick={() => setIsClicked(!isClicked)}
            onFocus={() => setIsMouseOver(true)}
            onKeyDown={handleOnKeyDown}>
            {isSubmitted ? (
                <>
                    <p tabIndex={0} className={inputClassName}>
                        {inputValue}
                    </p>
                    <div className={styles.edit_container}>
                        {(isMouseOver || isClicked) && !isValidated && (
                            <Button
                                className="edit_btn edit_white"
                                ariaLabel={`edit ${id}`}
                                onClick={handleEdit}
                            />
                        )}
                    </div>
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

                    {!isValidated && (
                        <Button
                            className="submit_btn submit_white "
                            ariaLabel={`submit ${id}`}
                            onClick={handleSubmit}
                        />
                    )}
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
