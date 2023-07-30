/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../CSS/Components/InputField.css';

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
// // function InputField({ id, className, value, onChange, placeholder }) {
// //     return (
// //         <input
// //             id={id}
// //             className={className}
// //             type="text"
// //             placeholder={placeholder}
// //             value={value}
// //             onChange={onChange}
// //         />
// //     );
// // }

export default InputField;
