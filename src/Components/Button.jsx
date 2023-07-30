/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../CSS/Components/Button.css';

const Button = (props) => {
    return <button className={props.className} onClick={props.onClick}></button>;
};

export default Button;
