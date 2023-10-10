import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ValidContext = createContext();

export const ValidProvider = ({ children }) => {
    const [isValidated, setIsValidated] = useState(false);

    const toggleValid = () => {
        setIsValidated(!isValidated);
    };

    const value = {
        isValidated,
        toggleValid,
    };

    return <ValidContext.Provider value={value}>{children}</ValidContext.Provider>;
};

ValidProvider.propTypes = {
    children: PropTypes.array,
};
