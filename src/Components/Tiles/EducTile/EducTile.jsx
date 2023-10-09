import PropTypes from 'prop-types';
import TileComponent from '../TileComponent/TileComponent';

const EducTile = ({ onSubmit, onDelete, id }) => {
    return (
        <TileComponent
            onSubmit={onSubmit}
            onDelete={onDelete}
            id={id}
            field1Name="School"
            field2Name="Degree"
        />
    );
};

EducTile.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default EducTile;
