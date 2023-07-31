// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../src/CSS/PracticeSection.css';
import PracticeTile from './Components/PracticeTile';
import Button from './Components/Button';

import { v4 as uuidv4 } from 'uuid';

const PracticeSection = () => {
    const [practiceTiles, setPracticeTiles] = useState([]);
    const [needAddBtn, setNeedAddBtn] = useState(false);

    const handleOnChildSubmit = (value) => {
        setNeedAddBtn(value);
    };

    const handleAddClick = () => {
        setPracticeTiles((prevTiles) => [
            ...prevTiles,
            <PracticeTile
                key={uuidv4()}
                id={uuidv4()}
                onSubmit={handleOnChildSubmit}
                onDelete={handleOnDelete}
            />,
        ]);
        setNeedAddBtn(false);
    };

    const handleOnDelete = (tileId) => {
        setPracticeTiles((prevTiles) => prevTiles.filter((tile) => tile.props.id !== tileId));
    };

    if (practiceTiles.length === 0) {
        setPracticeTiles([
            <PracticeTile
                key={uuidv4()}
                id={uuidv4()}
                onSubmit={handleOnChildSubmit}
                onDelete={handleOnDelete}
            />,
        ]);
    }

    return (
        <div id="Practice-section" className="section">
            {practiceTiles.map((practiceTile) => {
                return (
                    <div key={practiceTile.key} id="Practice-tile" className="tile">
                        {practiceTile}
                    </div>
                );
            })}
            {needAddBtn && <Button className="add-btn" onClick={handleAddClick} />}
        </div>
    );
};

export default PracticeSection;
