// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PracticeTile from './Components/PracticeTile';

import '../src/CSS/Practice-section.css';
import AddBtn from './Components/AddBtn';

function PracticeSection() {
    const [practiceTiles, setPracticeTiles] = useState([]);

    const handleTileSubmit = (tileData) => {
        setPracticeTiles([...practiceTiles, tileData]);
    };

    const handleAddBtnClick = () => {
        setPracticeTiles([...practiceTiles, null]);
    };

    return (
        <div id="Practice-section">
            {practiceTiles.map((tileData, index) => (
                <PracticeTile
                    key={index}
                    isSubmitted={tileData !== null}
                    data={tileData}
                    onTileSubmit={handleTileSubmit}
                />
            ))}
            {practiceTiles.length > 1 || practiceTiles[practiceTiles.length - 1] !== null ? (
                <AddBtn onClick={handleAddBtnClick} />
            ) : null}
        </div>
    );
}

export default PracticeSection;
