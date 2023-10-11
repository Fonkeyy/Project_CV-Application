import PropTypes from 'prop-types';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import styles from './InfoComponent.module.css';

const InfoComponent = (props) => {
    return (
        <div className={styles.info_component_container}>
            <div className={`${styles[props.className]}`}></div>
            <InputField
                id={props.id}
                className={props.className}
                type={props.inputType}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <Button
                className="delete_btn"
                onClick={() => {
                    props.onDelete(props.id);
                }}
            />
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
