import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ className, ariaLabel, onClick }) => {
    return <button className={className} aria-label={ariaLabel} onClick={onClick}></button>;
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
