import { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import styles from './InfoComponent.module.css';

const InfoComponent = (props) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleOnKeyDown = (e) => {
        if (e.key === 'enter' || e.key === ' ') {
            setIsClicked(true);
        }
    };
    return (
        <div
            className={styles.info_component_container}
            tabIndex={0}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            onClick={() => setIsClicked(!isClicked)}
            onKeyDown={() => handleOnKeyDown}>
            <span className={`${styles[props.className]}`}></span>
            <InputField
                id={props.id}
                className={props.className}
                type={props.inputType}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <div className={styles.delete_btn_container}>
                {(isMouseOver || isClicked) && (
                    <Button
                        className="delete_btn"
                        onClick={() => {
                            props.onDelete(props.id);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

InfoComponent.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default InfoComponent;
