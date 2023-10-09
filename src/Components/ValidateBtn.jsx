import { ValidContext } from '../contexts/validContext';
import { useContext } from 'react';

export const ValidateBtn = () => {
    const { isValidated, toggleValid } = useContext(ValidContext);

    return (
        <button className="validate_btn" onClick={toggleValid}>
            {isValidated ? 'Edit Resume' : 'Validate Resume'}
        </button>
    );
};
