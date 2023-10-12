import { useContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../InputField/InputField';
import Button from '../../Button/Button';
import TileBtnWrapper from '../../TileBtnWrapper/TileBtnWrapper';
import { ValidContext } from '../../../contexts/validContext';
import { TileComponentInitialState, TileComponentReducer } from '../../../reducers/tileComponentReducer';
import '../Tiles.css';

const TileComponent = ({ onSubmit, onDelete, id, type, tilesContainerRef }) => {
    const { isValidated } = useContext(ValidContext);
    const [isPracticeTile] = useState(type === 'practice');
    const [field1Name] = useState(isPracticeTile ? 'Company' : 'School');
    const [field2Name] = useState(isPracticeTile ? 'Title' : 'Degree');
    const [state, dispatch] = useReducer(TileComponentReducer, TileComponentInitialState);

    const isParentContainerEmpty =
        tilesContainerRef.current && tilesContainerRef.current.childElementCount === 1;

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
            {!isValidated && !state.isSubmitted && (
                <div className="tile_container">
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
                        <InputField
                            id={`date-start${type}`}
                            type="month"
                            value={state.value3}
                            onChange={handleChange}
                        />
                        <InputField
                            id={`date-end${type}`}
                            type="month"
                            value={state.value4}
                            onChange={handleChange}
                        />
                        {isPracticeTile && (
                            <textarea
                                id="textarea"
                                className="textarea"
                                placeholder="Describe your experience, missions..."
                                value={state.textareaValue}
                                onChange={handleChange}></textarea>
                        )}
                        <Button
                            className="submit_btn"
                            ariaLabel={`submit ${type} tile`}
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            )}
            {!isValidated && state.isSubmitted && (
                <div
                    className="tile_container"
                    onMouseEnter={() => dispatch({ type: 'MOUSE_OVER', payload: true })}
                    onMouseLeave={() => dispatch({ type: 'MOUSE_OVER', payload: false })}
                    onClick={() => dispatch({ type: 'CLICK', payload: true })}>
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
                        {isPracticeTile && state.textareaValue && (
                            <p className="textarea_value">{state.textareaValue}</p>
                        )}
                    </div>
                    <div className="tile_btns_wrapper">
                        {(state.isMouseOver || state.isClicked) &&
                            TileBtnWrapper({ handleEdit, onDelete, id })}
                    </div>
                </div>
            )}
            {isValidated && state.value1 && (
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
                    {isPracticeTile && state.textareaValue && (
                        <p className="textarea_value">{state.textareaValue}</p>
                    )}
                </div>
            )}
            {isValidated && !state.value1 && isParentContainerEmpty && <p>Oops it&apos;s empty...</p>}
        </>
    );
};

TileComponent.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    tilesContainerRef: PropTypes.object,
};

export default TileComponent;
