import PropTypes from 'prop-types';

const InputField = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.id}</label>
            <input
                id={props.id}
                className={props.className}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </>
    );
};

InputField.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default InputField;
