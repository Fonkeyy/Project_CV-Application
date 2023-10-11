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
            tabIndex={0}
            className={styles.info_component_container}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            onClick={() => setIsClicked(!isClicked)}
            onKeyDown={() => handleOnKeyDown}>
            <div className={`${styles[props.className]}`}></div>
            <InputField
                id={props.id}
                className={props.className}
                type={props.inputType}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            {(isMouseOver || isClicked) && (
                <Button
                    className="delete_btn"
                    onClick={() => {
                        props.onDelete(props.id);
                    }}
                />
            )}
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
