import { useContext } from 'react';
import { ValidContext } from '../contexts/validContext';

const ValidateBtn = () => {
    const { isValidated, toggleValid } = useContext(ValidContext);

    return (
        <button className="validate_btn" onClick={toggleValid}>
            {isValidated ? 'Edit Resume' : 'Validate Resume'}
        </button>
    );
};

export default ValidateBtn;
