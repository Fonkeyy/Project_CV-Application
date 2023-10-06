import { ValidContext } from '../contexts/validContext';
import { useContext } from 'react';

export default function ValidBtn() {
    const { toggleValid } = useContext(ValidContext);

    return (
        <button className="valid_btn" onClick={toggleValid}>
            Validate Resume
        </button>
    );
}
