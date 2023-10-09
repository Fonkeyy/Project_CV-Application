import PropTypes from 'prop-types';
import TileComponent from '../TileComponent/TileComponent';

import '../Tiles.css';

const PracticeTile = ({ onSubmit, onDelete, id }) => {
    return (
        <>
            <TileComponent
                onSubmit={onSubmit}
                onDelete={onDelete}
                id={id}
                field1Name="Company"
                field2Name="Title"
            />
        </>
    );
};

PracticeTile.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default PracticeTile;
