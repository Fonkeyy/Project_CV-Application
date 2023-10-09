import { useContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import InputField from '../../InputField/InputField';
import Button from '../../Button/Button';
import TileBtnWrapper from '../../TileBtnWrapper/TileBtnWrapper';

import { ValidContext } from '../../../contexts/validContext';
import { TileComponentInitialState, TileComponentReducer } from '../../../reducers/tileComponentReducer';

import '../Tiles.css';

const TileComponent = ({ onSubmit, onDelete, id, field1Name, field2Name }) => {
    const { isValidated } = useContext(ValidContext);
    const [isPracticeTile] = useState(field1Name === 'Company');
    const [state, dispatch] = useReducer(TileComponentReducer, TileComponentInitialState);

    // * On change identify which input has been changed, update the right state accordingly
    const handleChange = (event) => {
        const target = event.target;

        const payload = {};

        if (target.id === field1Name) payload.value1 = target.value;
        if (target.id === field2Name) payload.value2 = target.value;
        if (target.id === 'date-start') payload.value3 = target.value;
        if (target.id === 'date-end') payload.value4 = target.value;
        if (target.id === 'textarea') payload.textareaValue = target.value;

        dispatch({ type: 'UPDATE_VALUES', payload });
    };

    // * On submit if values are not empty set isSubmitted to true and pass the info to parent component
    // * If 1 is empty, alert
    const handleSubmit = () => {
        if (state.value1 !== '' && state.value2 !== '') {
            dispatch({ type: 'SUBMIT', payload: true });
            onSubmit(true);
        } else {
            alert('Please enter all required fields before submitting');
        }
    };

    // * On edit set isSubmitted to false and pass the info to parent component
    const handleEdit = () => {
        dispatch({ type: 'EDIT' });
        onSubmit(false);
    };

    return (
        <>
            {isValidated ? (
                <div className="tile_submitted_container">
                    <div className={`${'tile'} ${'tile_submitted'}`}>
                        <div className="date_wrapper">
                            <p>{state.value3}</p>
                            <span>-</span>
                            <p> {state.value4}</p>
                        </div>
                        <div className="value_wrapper">
                            <p>{state.value1}</p>
                            <p>{state.value2}</p>
                        </div>
                        {isPracticeTile && <p className="textareaValue">{state.textareaValue}</p>}
                    </div>
                </div>
            ) : (
                <>
                    {state.isSubmitted ? (
                        <div
                            className="tile_submitted_container"
                            onMouseEnter={() => {
                                dispatch({ type: 'MOUSE_OVER', payload: true });
                            }}
                            onMouseLeave={() => {
                                dispatch({ type: 'MOUSE_OVER', payload: false });
                            }}
                            onClick={() => {
                                dispatch({ type: 'CLICK', payload: true });
                            }}>
                            <div className={`${'tile'} ${'tile_submitted'}`}>
                                <div className="date_wrapper">
                                    <p>{state.value3}</p>
                                    <span>-</span>
                                    <p> {state.value4}</p>
                                </div>
                                <div className="value_wrapper">
                                    <p>{state.value1}</p>
                                    <p>{state.value2}</p>
                                </div>
                                {isPracticeTile && <p className="textareaValue">{state.textareaValue}</p>}
                            </div>
                            {(state.isMouseOver || state.isClicked) &&
                                TileBtnWrapper({ handleEdit, onDelete, id })}
                        </div>
                    ) : (
                        <div className="tile">
                            <InputField
                                id={field1Name}
                                type="text"
                                placeholder={field1Name}
                                value={state.value1}
                                onChange={handleChange}
                            />
                            <InputField
                                id={field2Name}
                                type="text"
                                placeholder={field2Name}
                                value={state.value2}
                                onChange={handleChange}
                            />
                            <input
                                id="date-start"
                                type="month"
                                value={state.value3}
                                onChange={handleChange}></input>
                            <input
                                id="date-end"
                                type="month"
                                value={state.value4}
                                onChange={handleChange}></input>
                            {isPracticeTile && (
                                <textarea
                                    id="textarea"
                                    className="textarea"
                                    onChange={handleChange}
                                    placeholder="Describe your experience, missions..."></textarea>
                            )}
                            <Button className="submit_btn " onClick={handleSubmit} />
                        </div>
                    )}
                </>
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
