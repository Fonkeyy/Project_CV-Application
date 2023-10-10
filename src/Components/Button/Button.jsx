import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ className, onClick }) => {
    return <button className={className} onClick={onClick}></button>;
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Button;
