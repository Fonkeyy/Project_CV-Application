import PropTypes from 'prop-types';

import InputField from '../InputField/InputField';
import Button from '../Button/Button';

import '../InputField/InputField.css';

function InfoComponent(props) {
    return (
        <>
            <label>{props.label} : </label>
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
        </>
    );
}

InfoComponent.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default InfoComponent;
