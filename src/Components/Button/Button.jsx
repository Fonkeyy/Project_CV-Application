/* eslint-disable react/prop-types */

import './Button.css';

const Button = (props) => {
    return <button className={props.className} onClick={props.onClick}></button>;
};

export default Button;
