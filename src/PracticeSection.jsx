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

    // * When click on addBtn set a new PracticeTile to the state array, give it an unique key and id
    // * Pass it {onSubmit} prop so PracticeSection know when it's submitted to display AddBtn.
    // * Pass it {onDelete}, which will be pass to the grandchild
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

    // * Initialize the first PracticeTile
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

    // * Create practice-section and map through array of PracticeTile to render them
    // * Display AddBtn when needed
    return (
        <div id="practice-section" className="section">
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
