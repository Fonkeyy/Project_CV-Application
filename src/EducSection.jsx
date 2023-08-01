// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import EducTile from './Components/EducTile';
import Button from './Components/Button';

import '../src/CSS/EducSection.css';

const EducSection = () => {
    const [needAddBtn, setNeedAddBtn] = useState(false);
    const [educTiles, setEducTiles] = useState([]);

    const handleOnChildSubmit = (value) => {
        setNeedAddBtn(value);
    };

    const handleDelete = (id) => {
        setEducTiles((prevTiles) => prevTiles.filter((tile) => tile.props.id !== id));
    };

    const handleAddBtn = () => {
        setEducTiles((prevTiles) => [
            ...prevTiles,
            <EducTile key={uuidv4()} id={uuidv4()} onSubmit={handleOnChildSubmit} onDelete={handleDelete} />,
        ]);
        setNeedAddBtn(false);
    };

    if (educTiles.length === 0) {
        setEducTiles([
            <EducTile key={uuidv4()} id={uuidv4()} onSubmit={handleOnChildSubmit} onDelete={handleDelete} />,
        ]);
    }

    return (
        <div id="EducSection" className="section">
            {educTiles.map((tile) => {
                return (
                    <div key={tile.key} id="educ-tile" className="tile">
                        {tile}
                    </div>
                );
            })}
            {needAddBtn && <Button className="add-btn" onClick={handleAddBtn} />}
        </div>
    );
};

export default EducSection;
