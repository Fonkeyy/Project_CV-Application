import PropTypes from 'prop-types';

import './InputField.css';

function InputField(props) {
    return (
        <input
            id={props.id}
            className={props.className}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

InputField.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default InputField;
