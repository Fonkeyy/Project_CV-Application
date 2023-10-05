// eslint-disable-next-line no-unused-vars
import React from 'react';

import PropTypes from 'prop-types';
import TileComponent from '../TileComponent/TileComponent';

import './EducTile.css';

const EducTile = ({ onSubmit, onDelete, id }) => {
    return (
        <TileComponent
            onSubmit={onSubmit}
            onDelete={onDelete}
            id={id}
            field1Name="School name"
            field2Name="Degree title"
        />
    );
};

EducTile.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default EducTile;
