// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import EducTile from './Components/EducTile';

import { v4 as uuidv4 } from 'uuid';

import '../src/CSS/EducSection.css';
import Button from './Components/Button';

const EducSection = () => {
    const [needAddBtn, setNeedAddBtn] = useState(false);
    const [educTiles, setEducTiles] = useState([]);

    const handleOnChildSubmit = (value) => {
        setNeedAddBtn(value);
    };

    if (educTiles.length === 0) {
        setEducTiles([<EducTile key={uuidv4()} onSubmit={handleOnChildSubmit} />]);
    }

    const handleAddBtn = () => {
        setEducTiles([...educTiles, <EducTile key={uuidv4()} onSubmit={handleOnChildSubmit} />]);
        setNeedAddBtn(false);
    };

    return (
        <div id="EducSection" className="section">
            {educTiles.map((tile) => {
                return <div key={tile.key}>{tile}</div>;
            })}
            {needAddBtn && <Button className="add-btn" onClick={handleAddBtn} />}
        </div>
    );
};

export default EducSection;
