/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from './Button';

function TileBtnWrapper(props) {
    return (
        <div className="tile-btn-wrapper">
            <Button className="edit-btn-30" onClick={props.handleEdit} />
            <Button
                className="delete-btn"
                onClick={() => {
                    props.onDelete(props.id);
                }}
            />
        </div>
    );
}

export default TileBtnWrapper;
