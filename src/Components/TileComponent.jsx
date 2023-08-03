// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputField from './InputField';
import Button from './Button';
import TileBtnWrapper from './TileBtnWrapper';

const TileComponent = ({ onSubmit, onDelete, id, field1Name, field2Name }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const [isMouseOver, setIsMouseOver] = useState(false);

    // * On submit if values are not empty set isSubmitted to true and pass the info to parent component
    // * If 1 is empty, alert
    const handleSubmit = () => {
        if (value1 !== '' && value2 !== '') {
            setIsSubmitted(true);
            onSubmit(true);
        } else {
            alert('Please enter all required fields before submitting');
        }
    };

    // * On change identify which input has been changed, update the right state accordingly
    const handleChange = (event) => {
        const target = event.target;

        target.id === 'input1' && setValue1(target.value);
        target.id === 'input2' && setValue2(target.value);
    };

    // * On edit set isSubmitted to false and pass the info to parent component
    const handleEdit = () => {
        setIsSubmitted(false);
        onSubmit(false);
    };

    return (
        <div
            onMouseEnter={() => {
                setIsMouseOver(true);
            }}
            onMouseLeave={() => {
                setIsMouseOver(false);
            }}>
            {isSubmitted ? (
                <>
                    <p className="value1-submitted">{value1}</p>
                    <p className="value2-submitted">{value2}</p>

                    {isMouseOver && TileBtnWrapper({ handleEdit, onDelete, id })}
                </>
            ) : (
                <>
                    <InputField
                        id="input1"
                        className="input-text"
                        type="text"
                        placeholder={field1Name}
                        value={value1}
                        onChange={handleChange}
                    />
                    <InputField
                        id="input2"
                        className="input-text"
                        type="text"
                        placeholder={field2Name}
                        value={value2}
                        onChange={handleChange}
                    />
                    <Button className="submit-btn-30" onClick={handleSubmit} />
                </>
            )}
        </div>
    );
};

TileComponent.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    field1Name: PropTypes.string.isRequired,
    field2Name: PropTypes.string.isRequired,
};

export default TileComponent;
