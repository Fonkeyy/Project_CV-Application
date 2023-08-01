// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import PracticeTile from './Components/PracticeTile';
import Button from './Components/Button';

import '../src/CSS/PracticeSection.css';

const PracticeSection = () => {
    const [practiceTiles, setPracticeTiles] = useState([]);
    const [needAddBtn, setNeedAddBtn] = useState(false);

    const handleOnChildSubmit = (value) => {
        setNeedAddBtn(value);
    };

    const handleDelete = (tileId) => {
        setPracticeTiles((prevTiles) => prevTiles.filter((tile) => tile.props.id !== tileId));
    };

    const handleAddBtn = () => {
        setPracticeTiles((prevTiles) => [
            ...prevTiles,
            <PracticeTile
                key={uuidv4()}
                id={uuidv4()}
                onSubmit={handleOnChildSubmit}
                onDelete={handleDelete}
            />,
        ]);
        setNeedAddBtn(false);
    };

    if (practiceTiles.length === 0) {
        setPracticeTiles([
            <PracticeTile
                key={uuidv4()}
                id={uuidv4()}
                onSubmit={handleOnChildSubmit}
                onDelete={handleDelete}
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
            {needAddBtn && <Button className="add-btn" onClick={handleAddBtn} />}
        </div>
    );
};

export default PracticeSection;
