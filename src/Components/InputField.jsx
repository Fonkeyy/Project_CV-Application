/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import '../CSS/Components/InputField.css';

// ! Check if its really usefull => <input
function InputField(props) {
    // const [value, setValue] = useState('');

    // const handleInputChange = (event) => {
    //     setValue(event.target.value);
    // };
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

export default InputField;
