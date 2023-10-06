import { useState } from 'react';
import PropTypes from 'prop-types';

import InputField from '../../InputField/InputField';
import Button from '../../Button/Button';
import TileBtnWrapper from '../../TileBtnWrapper/TileBtnWrapper';

// import styles from '../InputField/InputField.module.css';
import '../Tiles.css';

const currentDate = new Date();
// *Get the year and month parts
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');

// *Format the value to set in the input field
const todayDate = `${year}-${month}`;

const TileComponent = ({ onSubmit, onDelete, id, field1Name, field2Name }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState(todayDate);
    const [value4, setValue4] = useState(todayDate);

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
        target.id === 'input3' && setValue3(target.value);
        target.id === 'input4' && setValue4(target.value);
    };

    // * On edit set isSubmitted to false and pass the info to parent component
    const handleEdit = () => {
        setIsSubmitted(false);
        onSubmit(false);
    };

    return (
        <>
            {isSubmitted ? (
                <div
                    className="tile_submitted_container"
                    onMouseEnter={() => {
                        setIsMouseOver(true);
                    }}
                    onMouseLeave={() => {
                        setIsMouseOver(false);
                    }}>
                    <div className="tile_submitted">
                        <div className="date_wrapper">
                            <p className="date-submitted">{value3}</p>
                            <span>-</span>
                            <p className="date-submitted"> {value4}</p>
                        </div>
                        <div className="value_wrapper">
                            <p className="value1-submitted">{value1}</p>
                            <p className="value2-submitted">{value2}</p>
                        </div>
                    </div>
                    {isMouseOver && TileBtnWrapper({ handleEdit, onDelete, id })}
                </div>
            ) : (
                <div className="tile">
                    <InputField
                        id="input1"
                        className="input_text"
                        type="text"
                        placeholder={field1Name}
                        value={value1}
                        onChange={handleChange}
                    />
                    <InputField
                        id="input2"
                        className="input_text"
                        type="text"
                        placeholder={field2Name}
                        value={value2}
                        onChange={handleChange}
                    />
                    <input
                        id="input3"
                        className="input_date"
                        type="month"
                        placeholder="Start date"
                        value={value3}
                        onChange={handleChange}></input>
                    <input
                        id="input4"
                        className="input_date"
                        type="month"
                        placeholder="End date"
                        value={value4}
                        onChange={handleChange}></input>
                    <Button className="submit_btn " onClick={handleSubmit} />
                </div>
            )}
        </>
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
