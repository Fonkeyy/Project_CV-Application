import { ValidContext } from '../contexts/validContext';
import { useContext } from 'react';

export default function ValidBtn() {
    const { isValidated, toggleValid } = useContext(ValidContext);

    return (
        <button className="valid_btn" onClick={toggleValid}>
            {isValidated ? 'Edit Resume' : 'Validate Resume'}
        </button>
    );
}
