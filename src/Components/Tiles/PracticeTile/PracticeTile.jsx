import PropTypes from 'prop-types';
import TileComponent from '../TileComponent/TileComponent';

import '../EducTile/EducTile.css';

const PracticeTile = ({ onSubmit, onDelete, id }) => {
    return (
        <TileComponent
            onSubmit={onSubmit}
            onDelete={onDelete}
            id={id}
            field1Name="Company name"
            field2Name="Job title"
        />
    );
};

PracticeTile.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default PracticeTile;
