// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

// * Display an edit and a delete buttons with click handle by parent component
function TileBtnWrapper({ id, handleEdit, onDelete }) {
    return (
        <div className="tile-btn-wrapper">
            <Button className="edit_btn_sm" onClick={handleEdit} />
            <Button
                className="delete_btn"
                onClick={() => {
                    onDelete(id);
                }}
            />
        </div>
    );
}

TileBtnWrapper.propTypes = {
    id: PropTypes.string.isRequired,
    handleEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TileBtnWrapper;
