import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import '../../Tiles/Tiles.css';

const SectionComponent = ({ TileComponent }) => {
    const [tiles, setTiles] = useState([]);
    const [needAddBtn, setNeedAddBtn] = useState(false);

    const handleOnChildSubmit = (value) => {
        setNeedAddBtn(value);
    };

    const handleDelete = (tileId) => {
        setTiles((prevTiles) => prevTiles.filter((tile) => tile.props.id !== tileId));
    };

    // * When click on addBtn set a new tile to the state array, give it an unique key and id
    // * Pass it {onSubmit} prop so SectionComponent know when it's submitted to display AddBtn.
    // * Pass it {onDelete}, which will be pass to the grandchild
    const handleAddBtn = () => {
        setTiles((prevTiles) => [
            ...prevTiles,
            <TileComponent
                key={uuidv4()}
                id={uuidv4()}
                onSubmit={handleOnChildSubmit}
                onDelete={handleDelete}
            />,
        ]);
        setNeedAddBtn(false);
    };

    // * Initialize the first TileComponent
    if (tiles.length === 0) {
        setTiles([
            <TileComponent
                key={uuidv4()}
                id={uuidv4()}
                onSubmit={handleOnChildSubmit}
                onDelete={handleDelete}
            />,
        ]);
    }

    // * Create Section and map through array of tiles to render them
    // * Display AddBtn when needed
    return (
        <>
            {tiles.map((tile) => {
                return (
                    <div key={tile.key} className="tiles_container">
                        {tile}
                    </div>
                );
            })}
            {needAddBtn && <Button className="add_btn" onClick={handleAddBtn} />}
        </>
    );
};

SectionComponent.propTypes = {
    TileComponent: PropTypes.func.isRequired,
};

export default SectionComponent;
