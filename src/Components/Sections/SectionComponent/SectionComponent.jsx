import { useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import TileComponent from '../../Tiles/TileComponent/TileComponent';

import { ValidContext } from '../../../contexts/validContext';

import '../../Tiles/Tiles.css';

const SectionComponent = ({ type }) => {
    const initialTile = {
        key: uuidv4(),
        id: uuidv4(),
        type: type,
    };

    const [tiles, setTiles] = useState([initialTile]);
    const [isAddBtnNeeded, setIsAddBtnNeeded] = useState(false);
    const { isValidated } = useContext(ValidContext);

    const tilesContainerRef = useRef();

    const handleOnChildSubmit = (value) => {
        setIsAddBtnNeeded(value);
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
            {
                key: uuidv4(),
                id: uuidv4(),
                type: type,
                tilesContainerRef: tilesContainerRef,
            },
        ]);
        setIsAddBtnNeeded(false);
    };

    // * Create Section and map through array of tiles to render them
    // * Display AddBtn when needed
    return (
        <>
            <div className="tiles_container" ref={tilesContainerRef}>
                {tiles.map((tile) => {
                    return (
                        <TileComponent
                            key={tile.key}
                            id={tile.id}
                            onSubmit={handleOnChildSubmit}
                            onDelete={handleDelete}
                            type={tile.type}
                            tilesContainerRef={tilesContainerRef}></TileComponent>
                    );
                })}
            </div>
            {isAddBtnNeeded && !isValidated && <Button className="add_btn" onClick={handleAddBtn} />}
        </>
    );
};

SectionComponent.propTypes = {
    type: PropTypes.string.isRequired,
};

export default SectionComponent;
