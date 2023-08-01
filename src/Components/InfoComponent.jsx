/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import InputField from './InputField';

import '../CSS/Components/InputField.css';
import Button from './Button';

function InfoComponent(props) {
    return (
        <>
            <label>{props.label} : </label>
            <InputField
                id={props.id}
                className={props.className}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <Button className="delete-btn" onClick={props.onClick} />
        </>
    );
}

export default InfoComponent;
